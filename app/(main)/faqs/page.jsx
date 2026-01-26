"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  HelpCircle,
  FileText,
  CreditCard,
  Shield,
  Zap,
  Users,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqCategories = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Getting Started",
    faqs: [
      {
        question: "What is CareerPilot?",
        answer:
          "CareerPilot is an AI-powered career coaching platform that helps professionals navigate their career journey. We offer tools for building resumes, preparing for interviews, generating cover letters, and gaining industry-specific insights—all powered by advanced AI technology.",
      },
      {
        question: "How do I create an account?",
        answer:
          "Creating an account is simple! Click the 'Sign Up' button on our homepage, enter your email address, create a password, and you're ready to start. You can also sign up using your Google or LinkedIn account for faster onboarding.",
      },
      {
        question: "Is CareerPilot free to use?",
        answer:
          "Yes! CareerPilot offers a free tier that includes basic access to our resume builder, limited interview prep questions, and one cover letter generation per month. For unlimited access to all features, check out our premium plans.",
      },
      {
        question: "What industries does CareerPilot support?",
        answer:
          "CareerPilot supports 50+ industries including Technology, Healthcare, Finance, Marketing, Education, Manufacturing, and many more. Our AI is trained on industry-specific data to provide tailored guidance for your field.",
      },
    ],
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Resume Builder",
    faqs: [
      {
        question: "How does the AI resume builder work?",
        answer:
          "Our AI resume builder analyzes your experience, skills, and target job to generate optimized content. Simply input your information, and our AI suggests improvements, formats your resume professionally, and ensures it's ATS-friendly.",
      },
      {
        question: "Can I download my resume in different formats?",
        answer:
          "Yes! You can download your resume as a PDF, DOCX, or plain text file. We recommend PDF for most applications as it preserves formatting across all devices.",
      },
      {
        question: "Will my resume pass ATS (Applicant Tracking Systems)?",
        answer:
          "Absolutely. Our resume builder is specifically designed to be ATS-compatible. We use clean formatting, appropriate keywords, and standard section headers to ensure your resume gets past automated screening systems.",
      },
      {
        question: "Can I have multiple versions of my resume?",
        answer:
          "Yes! You can create and save multiple resume versions tailored for different job applications or industries. This makes it easy to customize your application for each opportunity.",
      },
    ],
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Interview Prep",
    faqs: [
      {
        question: "How does the mock interview feature work?",
        answer:
          "Our mock interview feature presents you with industry-specific questions and evaluates your responses using AI. You'll receive instant feedback on your answers, including suggestions for improvement and sample responses.",
      },
      {
        question: "What types of interview questions are included?",
        answer:
          "We cover behavioral questions, technical questions, situational scenarios, and industry-specific questions. Our database includes 1000+ questions across all supported industries, regularly updated based on current hiring trends.",
      },
      {
        question: "Can I track my interview prep progress?",
        answer:
          "Yes! Your dashboard shows your quiz history, scores, improvement trends, and areas that need more practice. You can see detailed analytics to focus your preparation effectively.",
      },
      {
        question: "Are the questions based on real interviews?",
        answer:
          "Our questions are curated from real interview experiences, industry research, and hiring manager insights. We continuously update our question bank to reflect current interview practices.",
      },
    ],
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Billing & Pricing",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual plans. All payments are securely processed through our payment partners.",
      },
      {
        question: "Can I cancel my subscription anytime?",
        answer:
          "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access to premium features until the end of your current billing period.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "We offer a 14-day money-back guarantee for all new premium subscriptions. If you're not satisfied, contact our support team within 14 days for a full refund.",
      },
      {
        question: "Are there discounts for students or job seekers?",
        answer:
          "Yes! We offer a 50% discount for verified students and a 30% discount for those actively seeking employment. Contact our support team with proof of status to receive your discount code.",
      },
    ],
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Privacy & Security",
    faqs: [
      {
        question: "How is my data protected?",
        answer:
          "We use bank-level encryption (256-bit SSL) to protect your data. All personal information is stored securely and we never share your data with third parties without your explicit consent.",
      },
      {
        question: "Who can see my resume and profile?",
        answer:
          "Your resume and profile are private by default. Only you can access your information unless you choose to share it. We never share your data with employers without your permission.",
      },
      {
        question: "Can I delete my account and data?",
        answer:
          "Yes, you can delete your account and all associated data at any time from your account settings. Upon deletion, all your personal information, resumes, and history are permanently removed from our servers.",
      },
      {
        question: "Do you use my data to train AI models?",
        answer:
          "We do not use your personal resume content or interview responses to train our AI models. Our AI is trained on anonymized, aggregated data to ensure your privacy is protected.",
      },
    ],
  },
  {
    icon: <HelpCircle className="h-5 w-5" />,
    title: "Technical Support",
    faqs: [
      {
        question: "What browsers are supported?",
        answer:
          "CareerPilot works best on modern browsers including Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated to the latest version for the best experience.",
      },
      {
        question: "Is there a mobile app?",
        answer:
          "Our website is fully responsive and works great on mobile devices. A dedicated mobile app is currently in development and will be available soon on iOS and Android.",
      },
      {
        question: "Who do I contact for technical issues?",
        answer:
          "For technical support, you can email us at support@careerpilot.com or use the contact form on our website. Our support team typically responds within 24 hours.",
      },
      {
        question: "Can I export my data?",
        answer:
          "Yes, you can export all your data including resumes, cover letters, and interview history from your account settings. We provide exports in standard formats for your convenience.",
      },
    ],
  },
];

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0);

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground">
          Find answers to common questions about CareerPilot. Can't find what
          you're looking for? Contact our support team.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search FAQs..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="max-w-4xl mx-auto space-y-8">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              No FAQs found matching your search.
            </p>
          </div>
        ) : (
          filteredCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${index}-${faqIndex}`}
                    >
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Contact CTA */}
      <section className="mt-16 text-center bg-muted/50 rounded-2xl p-12 max-w-3xl mx-auto">
        <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-muted-foreground mb-6">
          Our support team is here to help you with any questions you might
          have.
        </p>
        <Link href="/contact">
          <Button size="lg">Contact Support</Button>
        </Link>
      </section>
    </div>
  );
}
