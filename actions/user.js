"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");

  try {
    // Call AI insights BEFORE transaction
    const insights = await generateAIInsights(data.industry);

    const result = await db.$transaction(
      async (tx) => {
        // finding if industry exists

        let industryInsight = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });

        // if industry doesn't exist, create it with ai insights

        if (!industryInsight) {
          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              ...insights,
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        }

        // Now update the user

        const updatedUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: parseInt(data.experience, 10),
            bio: data.bio,
            skills: Array.isArray(data.skills)
              ? data.skills
              : data.skills
                  .split(",")
                  .map((skill) => skill.trim())
                  .filter((skill) => skill !== ""),
          },
        });

        return { updatedUser, industryInsight };
      },
      {
        timeout: 10000, //default 5000
      }
    );

    return { success: true, ...result };
  } catch (error) {
    console.error("Error updating user and industry", error);
    // throw new Error("failed to update profile");
    throw error;
  }
}


// fetching user onboarding statu

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}
