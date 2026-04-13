"use server";

import { db } from "@/lib/prisma";
import { getNextUpdateInDays } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing from .env");
}

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateAIInsights = async (industry) => {
  const prompt = `Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
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

  try {
    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text;
    const match = text.match(/\{[\s\S]*\}/); // extract first {...}
    if (!match) throw new Error("Gemini did not return JSON");

    return JSON.parse(match[0]);
  } catch (error) {
    console.error("Error generating AI insights:", error);
    throw error;
  }
};

export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: {
      industryInsight: true,
    },
  });

  if (!user) throw new Error("User not found");

  // If no insights exist, generate them
  if (!user.industryInsight) {
    const insights = await generateAIInsights(user.industry);

    const industryInsight = await db.industryInsight.create({
      data: {
        industry: user.industry,
        ...insights,
        nextUpdate: getNextUpdateInDays(),
      },
    });

    return industryInsight;
  }

  // Safety net: refresh stale insights on read if scheduled jobs missed.
  const now = new Date();
  if (user.industryInsight.nextUpdate <= now) {
    const insights = await generateAIInsights(user.industry);

    const refreshedInsight = await db.industryInsight.update({
      where: { industry: user.industry },
      data: {
        ...insights,
        lastUpdated: now,
        nextUpdate: getNextUpdateInDays(now),
      },
    });

    return refreshedInsight;
  }

  return user.industryInsight;
}
