"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenAI } from "@google/genai";
import { revalidatePath } from "next/cache";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing from .env");
}

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/**
 * Convert current UTC time to IST and return as ISO string
 * IST is UTC+5:30
 */
function getCurrentTimeInIST() {
  const now = new Date();
  // Add 5 hours and 30 minutes to get IST
  const istTime = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
  return istTime;
}

export async function saveResume(content) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const istTime = getCurrentTimeInIST();
    const resume = await db.resume.upsert({
      where: {
        userId: user.id,
      },
      update: {
        content,
        updatedAt: istTime,
      },
      create: {
        userId: user.id,
        content,
        createdAt: istTime,
        updatedAt: istTime,
      },
    });

    revalidatePath("/resume");
    return resume;
  } catch (error) {
    console.error("Error saving resume:", error);
    throw new Error("Failed to save resume");
  }
}

export async function getResume() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  return await db.resume.findUnique({
    where: {
      userId: user.id,
    },
  });
}

export async function improveWithAI({ current, type }) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: {
      industryInsight: true,
    },
  });

  if (!user) throw new Error("User not found");

  const prompt = `
    As an expert resume writer, improve the following ${type} description for a ${user.industry} professional.
    Make it more impactful, quantifiable, and aligned with industry standards.
    Current content: "${current}"

    Requirements:
    1. Use action verbs
    2. Include metrics and results where possible
    3. Highlight relevant technical skills
    4. Keep it concise but detailed
    5. Focus on achievements over responsibilities
    6. Use industry-specific keywords
    
    Format the response as a single paragraph without any additional text, explanations, or markdown formatting (no ** or __ or # symbols).
  `;

  try {
    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    let improvedContent = response.text.trim();

    // Remove markdown formatting
    improvedContent = improvedContent
      .replace(/\*\*/g, "") // Remove bold **text**
      .replace(/__/g, "") // Remove bold __text__
      .replace(/\*/g, "") // Remove italic *text*
      .replace(/_/g, "") // Remove italic _text_
      .replace(/`/g, ""); // Remove code `text`

    return improvedContent;
  } catch (error) {
    console.error("Error improving content:", error);
    throw new Error("Failed to improve content");
  }
}
