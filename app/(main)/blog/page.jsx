"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  User,
  Search,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  "All",
  "Career Tips",
  "Resume Writing",
  "Interview Prep",
  "Industry Insights",
  "Job Search",
  "Work-Life Balance",
];

const featuredPost = {
  id: 1,
  title: "10 AI-Powered Strategies to Land Your Dream Job in 2026",
  excerpt:
    "Discover how artificial intelligence is revolutionizing the job search process and learn actionable strategies to leverage AI tools for your career success.",
  category: "Career Tips",
  author: "Sarah Johnson",
  date: "January 20, 2026",
  readTime: "8 min read",
  image: "/blog/featured.jpg",
};

const blogPosts = [
  {
    id: 2,
    title: "How to Write a Resume That Gets Past ATS Systems",
    excerpt:
      "Learn the secrets to crafting an ATS-friendly resume that lands more interviews.",
    category: "Resume Writing",
    author: "Michael Chen",
    date: "January 18, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Top 20 Behavioral Interview Questions (With Sample Answers)",
    excerpt:
      "Master the STAR method and ace your next behavioral interview with these proven responses.",
    category: "Interview Prep",
    author: "Emily Williams",
    date: "January 15, 2026",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "The Future of Remote Work: Trends for 2026 and Beyond",
    excerpt:
      "Explore the evolving landscape of remote work and how to position yourself for success.",
    category: "Industry Insights",
    author: "David Kumar",
    date: "January 12, 2026",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Networking in the Digital Age: Building Meaningful Connections",
    excerpt:
      "Effective strategies for growing your professional network both online and offline.",
    category: "Career Tips",
    author: "Sarah Johnson",
    date: "January 10, 2026",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Salary Negotiation: How to Get What You Deserve",
    excerpt:
      "Expert tips on negotiating your salary and benefits package with confidence.",
    category: "Job Search",
    author: "Michael Chen",
    date: "January 8, 2026",
    readTime: "6 min read",
  },
  {
    id: 7,
    title: "Avoiding Burnout: Sustainable Career Growth Strategies",
    excerpt:
      "Learn how to maintain work-life balance while advancing in your career.",
    category: "Work-Life Balance",
    author: "Emily Williams",
    date: "January 5, 2026",
    readTime: "5 min read",
  },
  {
    id: 8,
    title: "Tech Industry Hiring Trends: What Employers Really Want",
    excerpt:
      "Inside look at what tech companies are looking for in candidates this year.",
    category: "Industry Insights",
    author: "David Kumar",
    date: "January 3, 2026",
    readTime: "8 min read",
  },
  {
    id: 9,
    title: "Cover Letters That Convert: Templates and Examples",
    excerpt:
      "Create compelling cover letters that capture hiring managers' attention.",
    category: "Resume Writing",
    author: "Sarah Johnson",
    date: "January 1, 2026",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
          Career Insights Blog
        </h1>
        <p className="text-xl text-muted-foreground">
          Expert advice, industry trends, and actionable tips to accelerate your
          career growth.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Post */}
      <section className="mb-16">
        <Card className="overflow-hidden hover:border-primary transition-colors">
          <div className="grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <TrendingUp className="h-24 w-24 text-primary/40" />
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" /> {featuredPost.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {featuredPost.readTime}
                </span>
              </div>
              <Button className="w-fit">
                Read Article <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* Blog Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No articles found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="hover:border-primary transition-colors group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <TrendingUp className="h-12 w-12 text-primary/30 group-hover:text-primary/50 transition-colors" />
                </div>
                <CardContent className="pt-4">
                  <Badge variant="secondary" className="mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="mt-16 text-center bg-muted/50 rounded-2xl p-12">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Subscribe to our newsletter and get the latest career tips delivered
          to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button>Subscribe</Button>
        </div>
      </section>
    </div>
  );
}
