"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Book,
  FileText,
  Video,
  Download,
  Clock,
  ArrowRight,
  Briefcase,
  GraduationCap,
  PenTool,
  Target,
} from "lucide-react";
import Link from "next/link";

const guideCategories = [
  {
    title: "Resume & CV Guides",
    icon: <FileText className="h-6 w-6" />,
    guides: [
      {
        title: "The Ultimate Resume Writing Guide",
        description:
          "Everything you need to know about crafting a professional resume that gets noticed.",
        readTime: "15 min read",
        level: "Beginner",
        type: "Article",
      },
      {
        title: "ATS-Friendly Resume Formatting",
        description:
          "Learn how to format your resume to pass Applicant Tracking Systems.",
        readTime: "10 min read",
        level: "Intermediate",
        type: "Article",
      },
      {
        title: "Resume Keywords by Industry",
        description:
          "Industry-specific keywords to boost your resume's visibility.",
        readTime: "8 min read",
        level: "Intermediate",
        type: "Checklist",
      },
      {
        title: "Resume Templates & Examples",
        description:
          "Download professional resume templates for various industries.",
        readTime: "5 min read",
        level: "Beginner",
        type: "Download",
      },
    ],
  },
  {
    title: "Interview Preparation",
    icon: <GraduationCap className="h-6 w-6" />,
    guides: [
      {
        title: "Master the STAR Method",
        description:
          "How to structure your answers for behavioral interview questions.",
        readTime: "12 min read",
        level: "Beginner",
        type: "Article",
      },
      {
        title: "100 Common Interview Questions",
        description:
          "Prepare for the most frequently asked interview questions with sample answers.",
        readTime: "25 min read",
        level: "Intermediate",
        type: "Article",
      },
      {
        title: "Virtual Interview Best Practices",
        description:
          "Tips for acing your video interviews from technical setup to body language.",
        readTime: "10 min read",
        level: "Beginner",
        type: "Video",
      },
      {
        title: "Technical Interview Prep Guide",
        description:
          "Strategies and resources for technical and coding interviews.",
        readTime: "20 min read",
        level: "Advanced",
        type: "Article",
      },
    ],
  },
  {
    title: "Cover Letters",
    icon: <PenTool className="h-6 w-6" />,
    guides: [
      {
        title: "Cover Letter Writing 101",
        description:
          "The fundamentals of writing compelling cover letters that stand out.",
        readTime: "10 min read",
        level: "Beginner",
        type: "Article",
      },
      {
        title: "Cover Letter Templates by Role",
        description:
          "Ready-to-use cover letter templates for various job positions.",
        readTime: "5 min read",
        level: "Beginner",
        type: "Download",
      },
      {
        title: "Personalization Strategies",
        description:
          "How to customize your cover letter for each application effectively.",
        readTime: "8 min read",
        level: "Intermediate",
        type: "Article",
      },
    ],
  },
  {
    title: "Job Search Strategy",
    icon: <Target className="h-6 w-6" />,
    guides: [
      {
        title: "Job Search Playbook",
        description:
          "A comprehensive guide to organizing and optimizing your job search.",
        readTime: "18 min read",
        level: "Beginner",
        type: "Article",
      },
      {
        title: "LinkedIn Optimization Guide",
        description:
          "Maximize your LinkedIn profile for recruiters and opportunities.",
        readTime: "12 min read",
        level: "Intermediate",
        type: "Article",
      },
      {
        title: "Networking Masterclass",
        description:
          "Build meaningful professional connections that lead to opportunities.",
        readTime: "15 min read",
        level: "Intermediate",
        type: "Video",
      },
      {
        title: "Salary Negotiation Handbook",
        description:
          "Scripts and strategies for negotiating your best compensation package.",
        readTime: "14 min read",
        level: "Advanced",
        type: "Article",
      },
    ],
  },
  {
    title: "Career Development",
    icon: <Briefcase className="h-6 w-6" />,
    guides: [
      {
        title: "Career Planning Framework",
        description:
          "Set meaningful career goals and create an actionable development plan.",
        readTime: "15 min read",
        level: "Beginner",
        type: "Article",
      },
      {
        title: "Skills Gap Analysis",
        description:
          "Identify and address the skills you need for your target role.",
        readTime: "10 min read",
        level: "Intermediate",
        type: "Checklist",
      },
      {
        title: "Personal Branding Guide",
        description: "Build a professional brand that attracts opportunities.",
        readTime: "12 min read",
        level: "Intermediate",
        type: "Article",
      },
    ],
  },
];

const getLevelColor = (level) => {
  switch (level) {
    case "Beginner":
      return "bg-green-500/10 text-green-600 dark:text-green-400";
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400";
    case "Advanced":
      return "bg-red-500/10 text-red-600 dark:text-red-400";
    default:
      return "";
  }
};

const getTypeIcon = (type) => {
  switch (type) {
    case "Video":
      return <Video className="h-4 w-4" />;
    case "Download":
      return <Download className="h-4 w-4" />;
    case "Checklist":
      return <FileText className="h-4 w-4" />;
    default:
      return <Book className="h-4 w-4" />;
  }
};

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Book className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
          Career Guides & Resources
        </h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive guides, templates, and resources to help you succeed at
          every stage of your career journey.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
        <div className="text-center p-6 bg-muted/50 rounded-xl">
          <h3 className="text-3xl font-bold text-primary">25+</h3>
          <p className="text-sm text-muted-foreground">In-Depth Guides</p>
        </div>
        <div className="text-center p-6 bg-muted/50 rounded-xl">
          <h3 className="text-3xl font-bold text-primary">15+</h3>
          <p className="text-sm text-muted-foreground">Templates</p>
        </div>
        <div className="text-center p-6 bg-muted/50 rounded-xl">
          <h3 className="text-3xl font-bold text-primary">10+</h3>
          <p className="text-sm text-muted-foreground">Video Tutorials</p>
        </div>
        <div className="text-center p-6 bg-muted/50 rounded-xl">
          <h3 className="text-3xl font-bold text-primary">Free</h3>
          <p className="text-sm text-muted-foreground">Access Forever</p>
        </div>
      </div>

      {/* Guide Categories */}
      <div className="space-y-12">
        {guideCategories.map((category, index) => (
          <section key={index}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold">{category.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {category.guides.map((guide, guideIndex) => (
                <Card
                  key={guideIndex}
                  className="hover:border-primary transition-colors cursor-pointer group"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-muted-foreground">
                            {getTypeIcon(guide.type)}
                          </span>
                          <Badge
                            variant="secondary"
                            className={getLevelColor(guide.level)}
                          >
                            {guide.level}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {guide.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{guide.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="mt-16 text-center bg-muted/50 rounded-2xl p-12">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Apply What You've Learned?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Put your knowledge into action with our AI-powered career tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/resume">
            <Button size="lg">Build Your Resume</Button>
          </Link>
          <Link href="/interview">
            <Button size="lg" variant="outline">
              Practice Interviews
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
