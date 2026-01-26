"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Users,
  Award,
  Heart,
  Rocket,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/team/sarah.jpg",
    bio: "Former HR Director with 15+ years of experience in career development.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/team/michael.jpg",
    bio: "AI/ML expert with background in building scalable career tech solutions.",
  },
  {
    name: "Emily Williams",
    role: "Head of Product",
    image: "/team/emily.jpg",
    bio: "Product strategist passionate about creating tools that empower job seekers.",
  },
  {
    name: "David Kumar",
    role: "Lead AI Engineer",
    image: "/team/david.jpg",
    bio: "Specialist in NLP and machine learning for career coaching applications.",
  },
];

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Mission-Driven",
    description:
      "We're committed to democratizing career success for everyone, regardless of background.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "User-Centric",
    description:
      "Every feature we build starts with understanding our users' real career challenges.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Trust & Privacy",
    description:
      "Your career data is sacred. We maintain the highest standards of data protection.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description:
      "We leverage cutting-edge AI to provide personalized, actionable career guidance.",
  },
];

const milestones = [
  {
    year: "2023",
    event: "CareerPilot founded with a vision to transform career coaching",
  },
  {
    year: "2024",
    event: "Launched AI-powered resume builder and interview prep tools",
  },
  { year: "2024", event: "Reached 100,000+ users across 50+ industries" },
  {
    year: "2025",
    event: "Introduced advanced cover letter generator and industry insights",
  },
  { year: "2026", event: "Expanded to serve job seekers in 100+ countries" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
          About CareerPilot
        </h1>
        <p className="text-xl text-muted-foreground">
          We're on a mission to empower every professional with AI-driven tools
          and insights to navigate their career journey with confidence.
        </p>
      </div>

      {/* Our Story Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              CareerPilot was born from a simple observation: navigating the
              modern job market is overwhelming. With rapidly changing
              industries, evolving skill requirements, and fierce competition,
              job seekers need more than just job boards—they need a personal
              career coach.
            </p>
            <p className="text-muted-foreground mb-4">
              Founded in 2023, we set out to democratize access to professional
              career guidance using the power of artificial intelligence. What
              started as a simple resume builder has grown into a comprehensive
              career development platform trusted by thousands of professionals
              worldwide.
            </p>
            <p className="text-muted-foreground">
              Today, CareerPilot helps job seekers craft compelling resumes,
              prepare for interviews, write persuasive cover letters, and gain
              industry-specific insights—all powered by advanced AI that
              understands the nuances of modern hiring.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <Rocket className="h-24 w-24 text-primary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-colors"
            >
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Milestones Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}
                >
                  <span className="text-sm font-semibold text-primary">
                    {milestone.year}
                  </span>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Users className="h-16 w-16 text-primary/40" />
              </div>
              <CardContent className="pt-4 text-center">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-muted/50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Career?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who've accelerated their careers with
          CareerPilot.
        </p>
        <Link href="/dashboard">
          <Button size="lg" className="px-8">
            Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
