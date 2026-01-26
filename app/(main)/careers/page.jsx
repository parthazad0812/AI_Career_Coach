"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  Coffee,
  Laptop,
  Plane,
  GraduationCap,
  Users,
  ArrowRight,
  Building,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Health & Wellness",
    description:
      "Comprehensive health, dental, and vision insurance for you and your family",
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Remote-First",
    description: "Work from anywhere in the world with flexible hours",
  },
  {
    icon: <Plane className="h-6 w-6" />,
    title: "Unlimited PTO",
    description: "Take the time you need to recharge and stay productive",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Learning Budget",
    description: "$2,000 annual stipend for courses, books, and conferences",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Home Office Setup",
    description: "$1,500 to set up your perfect remote workspace",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Retreats",
    description: "Annual company-wide retreats to connect in person",
  },
];

const openPositions = [
  {
    id: 1,
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$150k - $200k",
    description:
      "Build and scale our AI-powered career coaching platform using Next.js, Node.js, and modern cloud technologies.",
  },
  {
    id: 2,
    title: "Machine Learning Engineer",
    department: "AI/ML",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$160k - $220k",
    description:
      "Develop and improve our AI models for resume analysis, interview preparation, and career recommendations.",
  },
  {
    id: 3,
    title: "Product Designer",
    department: "Design",
    location: "Remote (US/EU)",
    type: "Full-time",
    salary: "$120k - $160k",
    description:
      "Design intuitive and beautiful user experiences that help job seekers succeed in their career journey.",
  },
  {
    id: 4,
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$90k - $120k",
    description:
      "Create compelling content that educates and inspires our community of career-driven professionals.",
  },
  {
    id: 5,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$70k - $100k",
    description:
      "Help our users get the most out of CareerPilot and achieve their career goals.",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    salary: "$130k - $170k",
    description:
      "Build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems.",
  },
];

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <Badge className="mb-4" variant="secondary">
          We're Hiring!
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
          Join Our Mission to Transform Careers
        </h1>
        <p className="text-xl text-muted-foreground">
          Help us build the future of career development. We're looking for
          passionate people who want to make a real difference in how people
          navigate their professional lives.
        </p>
      </div>

      {/* Culture Section */}
      <section className="mb-20">
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Why Work at CareerPilot?
              </h2>
              <p className="text-muted-foreground mb-4">
                We're a remote-first team of passionate individuals united by a
                common goal: to democratize career success for everyone. We
                believe in building products that truly help people, and we
                foster a culture of innovation, empathy, and growth.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Work on meaningful
                  problems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Collaborate with
                  talented teammates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Grow your career while
                  helping others grow theirs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Enjoy flexibility and
                  work-life balance
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-xl p-6 text-center">
                <h3 className="text-4xl font-bold text-primary">30+</h3>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center">
                <h3 className="text-4xl font-bold text-primary">12</h3>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center">
                <h3 className="text-4xl font-bold text-primary">100%</h3>
                <p className="text-sm text-muted-foreground">Remote</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center">
                <h3 className="text-4xl font-bold text-primary">4.9</h3>
                <p className="text-sm text-muted-foreground">
                  Glassdoor Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits & Perks
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="hover:border-primary transition-colors"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-4">Open Positions</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We're always looking for talented people to join our team. Check out
          our current openings below.
        </p>
        <div className="space-y-4 max-w-4xl mx-auto">
          {openPositions.map((job) => (
            <Card
              key={job.id}
              className="hover:border-primary transition-colors"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <Badge variant="secondary">{job.department}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" /> {job.salary}
                      </span>
                    </div>
                  </div>
                  <Button className="shrink-0">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-muted/50 rounded-2xl p-12">
        <Building className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          We're always interested in meeting talented people. Send us your
          resume and tell us how you'd like to contribute to our mission.
        </p>
        <Link href="/contact">
          <Button size="lg" variant="outline" className="px-8">
            Get in Touch
          </Button>
        </Link>
      </section>
    </div>
  );
}
