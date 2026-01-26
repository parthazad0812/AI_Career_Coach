"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  MessageCircle,
  Calendar,
  Trophy,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Heart,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";

const communityStats = [
  {
    label: "Community Members",
    value: "50,000+",
    icon: <Users className="h-5 w-5" />,
  },
  {
    label: "Success Stories",
    value: "10,000+",
    icon: <Trophy className="h-5 w-5" />,
  },
  {
    label: "Daily Discussions",
    value: "500+",
    icon: <MessageCircle className="h-5 w-5" />,
  },
  {
    label: "Monthly Events",
    value: "12+",
    icon: <Calendar className="h-5 w-5" />,
  },
];

const communityChannels = [
  {
    name: "Discord Server",
    description:
      "Join our active Discord community for real-time discussions, job leads, and networking opportunities.",
    members: "25,000+ members",
    icon: <MessageCircle className="h-8 w-8" />,
    link: "#",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
  {
    name: "LinkedIn Group",
    description:
      "Connect with professionals, share insights, and discover career opportunities in our LinkedIn community.",
    members: "15,000+ members",
    icon: <Linkedin className="h-8 w-8" />,
    link: "#",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    name: "Twitter/X Community",
    description:
      "Follow us for daily career tips, industry news, and inspirational success stories.",
    members: "30,000+ followers",
    icon: <Twitter className="h-8 w-8" />,
    link: "#",
    color: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  },
  {
    name: "GitHub Discussions",
    description:
      "For developers: share career resources, collaborate on projects, and discuss tech careers.",
    members: "5,000+ members",
    icon: <Github className="h-8 w-8" />,
    link: "#",
    color: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
  },
];

const upcomingEvents = [
  {
    title: "Resume Review Workshop",
    date: "February 5, 2026",
    time: "2:00 PM EST",
    type: "Workshop",
    description:
      "Get your resume reviewed by hiring managers and career coaches.",
  },
  {
    title: "Tech Interview Prep Session",
    date: "February 12, 2026",
    time: "3:00 PM EST",
    type: "Live Session",
    description:
      "Practice coding interviews with peers and receive feedback from senior engineers.",
  },
  {
    title: "Career Networking Mixer",
    date: "February 20, 2026",
    time: "6:00 PM EST",
    type: "Networking",
    description:
      "Virtual networking event with professionals from top companies.",
  },
  {
    title: "AMA: Career Transitions",
    date: "February 28, 2026",
    time: "1:00 PM EST",
    type: "AMA",
    description:
      "Ask Me Anything session with professionals who successfully changed careers.",
  },
];

const successStories = [
  {
    name: "Jennifer M.",
    role: "Software Engineer at Google",
    story:
      "The interview prep tools and community support helped me land my dream job after 6 months of preparation.",
    avatar: "JM",
  },
  {
    name: "David K.",
    role: "Product Manager at Microsoft",
    story:
      "The resume builder and career guides were game-changers. I received 3x more callbacks after optimizing my resume.",
    avatar: "DK",
  },
  {
    name: "Sarah L.",
    role: "Data Scientist at Netflix",
    story:
      "The community's mock interview sessions gave me the confidence I needed to ace my technical interviews.",
    avatar: "SL",
  },
];

const contributionWays = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Share Your Story",
    description:
      "Inspire others by sharing your career journey and success stories.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Answer Questions",
    description:
      "Help fellow job seekers by answering questions in our community forums.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Host a Session",
    description: "Share your expertise by hosting a workshop or AMA session.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Mentor Others",
    description:
      "Become a mentor and guide someone through their career journey.",
  },
];

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Users className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
          Join Our Community
        </h1>
        <p className="text-xl text-muted-foreground">
          Connect with thousands of professionals, share experiences, and grow
          together in your career journey.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
        {communityStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-2 text-primary">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Community Channels */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Where to Find Us
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {communityChannels.map((channel, index) => (
            <Card
              key={index}
              className="hover:border-primary transition-colors"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${channel.color}`}>
                    {channel.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{channel.name}</h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground my-2">
                      {channel.description}
                    </p>
                    <Badge variant="secondary">{channel.members}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <Card
              key={index}
              className="hover:border-primary transition-colors"
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {event.type}
                    </Badge>
                    <h3 className="font-semibold mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {event.date}
                      </span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button variant="outline">
            View All Events <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mb-16 bg-muted/50 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-center mb-8">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {story.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {story.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "{story.story}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Ways to Contribute
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributionWays.map((way, index) => (
            <Card
              key={index}
              className="text-center hover:border-primary transition-colors"
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center text-primary">
                  {way.icon}
                </div>
                <h3 className="font-semibold mb-2">{way.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {way.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-primary/5 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Become part of a supportive community that's dedicated to helping you
          succeed in your career.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8">
            Join Discord <MessageCircle className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            Follow on LinkedIn <Linkedin className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
