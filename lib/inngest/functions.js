import { db } from "@/lib/prisma";
import { getNextUpdateInDays } from "@/lib/utils";
import { inngest } from "./client";
import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing from .env");
}

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateInsightsWithRetry(prompt, retries = 3) {
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

export const generateIndustryInsights = inngest.createFunction(
  { name: "Generate Industry Insights" },
  { cron: "0 * * * *" }, // Run hourly and refresh only overdue industries
  async ({ step }) => {
    const industries = await step.run("Fetch industries", async () => {
      return await db.industryInsight.findMany({
        where: {
          nextUpdate: {
            lte: new Date(),
          },
        },
        select: { industry: true },
      });
    });

    for (const { industry } of industries) {
      try {
        const safeIndustryId = industry
          .toLowerCase()
          .replace(/[^a-z0-9_-]/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "");

        const prompt = `
          Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
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
          Include at least 5 skills and trends.
        `;

        const res = await step.ai.wrap(
          `generate-${safeIndustryId}-insights`,
          async (p) => {
            return await generateInsightsWithRetry(p, 4);
          },
          prompt,
        );

        const text = res.text || "";
        const match = text.match(/\{[\s\S]*\}/);

        if (!match) {
          console.error("Gemini did not return JSON for:", industry, text);
          continue; // don't crash the whole job
        }

        let insights;
        try {
          insights = JSON.parse(match[0]);
        } catch (parseError) {
          console.error(
            `Failed to parse insights JSON for ${industry}:`,
            parseError,
          );
          continue;
        }

        const now = new Date();
        await step.run(`update-${safeIndustryId}-insights`, async () => {
          await db.industryInsight.update({
            where: { industry },
            data: {
              ...insights,
              lastUpdated: now,
              nextUpdate: getNextUpdateInDays(now),
            },
          });
        });
      } catch (industryError) {
        console.error(
          `Failed to refresh insights for ${industry}:`,
          industryError,
        );
      }
    }
  },
);
