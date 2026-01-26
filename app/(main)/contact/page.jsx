"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    details: "support@careerpilot.com",
    subtext: "We'll respond within 24 hours",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    subtext: "Mon-Fri 9am-6pm EST",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    details: "123 Career Street, Suite 456",
    subtext: "San Francisco, CA 94102",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Business Hours",
    details: "Monday - Friday",
    subtext: "9:00 AM - 6:00 PM EST",
  },
];

const supportTopics = [
  "General Inquiry",
  "Technical Support",
  "Billing & Subscriptions",
  "Feature Request",
  "Partnership Opportunity",
  "Press & Media",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");

    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: "", email: "", topic: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground">
          Have a question or feedback? We'd love to hear from you. Our team is
          here to help you succeed in your career journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Contact Info Cards */}
        <div className="lg:col-span-1 space-y-6">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="hover:border-primary transition-colors"
            >
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{info.title}</h3>
                  <p className="text-foreground">{info.details}</p>
                  <p className="text-sm text-muted-foreground">
                    {info.subtext}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic *</Label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a topic</option>
                      {supportTopics.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ CTA */}
      <div className="text-center mt-16 p-8 bg-muted/50 rounded-2xl max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-2">
          Looking for quick answers?
        </h3>
        <p className="text-muted-foreground mb-4">
          Check out our frequently asked questions for instant help.
        </p>
        <Button variant="outline" asChild>
          <a href="/faqs">Visit FAQ Page</a>
        </Button>
      </div>
    </div>
  );
}
