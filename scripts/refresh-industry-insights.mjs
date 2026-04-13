import nextEnv from "@next/env";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { GoogleGenAI } from "@google/genai";
import { getNextUpdateInDays } from "../lib/utils.js";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing.");
}

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing.");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const db = new PrismaClient({ adapter });
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateContentWithRetry(prompt, retries = 5) {
  let lastError;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        await sleep(1500 * attempt);
      }
    }
  }

  throw lastError;
}

function buildPrompt(industry) {
  return `Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
{
  "salaryRanges": [
    { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
  ],
  "growthRate": number,
  "demandLevel": "HIGH" | "MEDIUM" | "LOW",
  "topSkills": ["skill1", "skill2"],
  "marketOutlook": "POSITIVE" | "NEUTRAL" | "NEGATIVE",
  "keyTrends": ["trend1", "trend2"],
  "recommendedSkills": ["skill1", "skill2"]
}

IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
Include at least 5 common roles for salary ranges.
Growth rate should be a percentage.
Include at least 5 skills and trends.`;
}

async function main() {
  const targetIndustry = process.argv[2];
  const industries = await db.industryInsight.findMany({
    where: targetIndustry ? { industry: targetIndustry } : undefined,
    select: { industry: true },
  });

  if (!industries.length) {
    if (targetIndustry) {
      console.log(`Industry not found: ${targetIndustry}`);
    } else {
      console.log("No industries found to refresh.");
    }
    return;
  }

  let successCount = 0;
  let failureCount = 0;

  for (const { industry } of industries) {
    try {
      const response = await generateContentWithRetry(buildPrompt(industry), 5);

      const text = response.text || "";
      const match = text.match(/\{[\s\S]*\}/);

      if (!match) {
        failureCount += 1;
        console.error(`Skipped ${industry}: model did not return valid JSON.`);
        continue;
      }

      let insights;
      try {
        insights = JSON.parse(match[0]);
      } catch (parseError) {
        failureCount += 1;
        console.error(`Skipped ${industry}: failed to parse JSON.`, parseError);
        continue;
      }

      const now = new Date();
      await db.industryInsight.update({
        where: { industry },
        data: {
          ...insights,
          lastUpdated: now,
          nextUpdate: getNextUpdateInDays(now),
        },
      });

      successCount += 1;
      console.log(`Updated: ${industry}`);
    } catch (error) {
      failureCount += 1;
      console.error(`Failed: ${industry}`, error);
    }
  }

  console.log(
    `Refresh complete. Success: ${successCount}, Failed: ${failureCount}`,
  );
}

try {
  await main();
} finally {
  await db.$disconnect();
  await pool.end();
}
