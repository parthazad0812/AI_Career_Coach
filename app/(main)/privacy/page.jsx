"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  Globe,
  Mail,
  AlertCircle,
} from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "January 1, 2026";

  const sections = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you create an account, we collect your name, email address, and password. If you use social login (Google, LinkedIn), we receive basic profile information from those services.",
        },
        {
          subtitle: "Career Information",
          text: "To provide our services, we collect resume content, work history, education, skills, and career preferences that you input into our platform.",
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect information about how you interact with our services, including pages visited, features used, and time spent on the platform.",
        },
        {
          subtitle: "Device Information",
          text: "We collect device type, browser type, IP address, and operating system to optimize your experience and ensure security.",
        },
      ],
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Providing Services",
          text: "We use your information to deliver our AI-powered career coaching features, including resume building, interview preparation, and personalized recommendations.",
        },
        {
          subtitle: "Improving Our Platform",
          text: "We analyze aggregated, anonymized usage patterns to improve our features, fix bugs, and develop new services that better serve your needs.",
        },
        {
          subtitle: "Communication",
          text: "We may send you service-related emails, product updates, and marketing communications (which you can opt out of at any time).",
        },
        {
          subtitle: "Security",
          text: "We use your information to detect and prevent fraud, abuse, and security threats to protect you and our platform.",
        },
      ],
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Information Sharing",
      content: [
        {
          subtitle: "No Selling of Personal Data",
          text: "We do not sell your personal information to third parties. Your career data remains yours.",
        },
        {
          subtitle: "Service Providers",
          text: "We share limited information with trusted service providers who help us operate our platform (e.g., cloud hosting, payment processing). These providers are bound by strict confidentiality agreements.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law, such as in response to a court order or government request.",
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale, your information may be transferred as part of the transaction, with prior notice to you.",
        },
      ],
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Security",
      content: [
        {
          subtitle: "Encryption",
          text: "All data transmitted between your device and our servers is encrypted using 256-bit SSL/TLS encryption—the same standard used by banks.",
        },
        {
          subtitle: "Secure Storage",
          text: "Your data is stored in secure, SOC 2 compliant data centers with multiple layers of physical and digital security.",
        },
        {
          subtitle: "Access Controls",
          text: "We implement strict access controls ensuring only authorized personnel can access your information, and only when necessary.",
        },
        {
          subtitle: "Regular Audits",
          text: "We conduct regular security audits and penetration testing to identify and address potential vulnerabilities.",
        },
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Your Rights & Choices",
      content: [
        {
          subtitle: "Access & Portability",
          text: "You can access, download, and export your personal data at any time from your account settings.",
        },
        {
          subtitle: "Correction",
          text: "You can update or correct your personal information through your account dashboard.",
        },
        {
          subtitle: "Deletion",
          text: "You can delete your account and all associated data at any time. Once deleted, your information cannot be recovered.",
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or updating your notification preferences.",
        },
      ],
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Cookies & Tracking",
      content: [
        {
          subtitle: "Essential Cookies",
          text: "We use essential cookies to enable core functionality like authentication and security. These cannot be disabled.",
        },
        {
          subtitle: "Analytics Cookies",
          text: "We use analytics cookies to understand how you use our platform. You can opt out of these through your browser settings.",
        },
        {
          subtitle: "Third-Party Cookies",
          text: "Some third-party services we integrate may set their own cookies. Please refer to their respective privacy policies.",
        },
        {
          subtitle: "Cookie Preferences",
          text: "You can manage your cookie preferences through your browser settings or our cookie consent banner.",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your personal information.
        </p>
        <p className="text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto mb-12">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">
              CareerPilot ("we", "our", or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our website
              and services. Please read this policy carefully. By using
              CareerPilot, you agree to the collection and use of information in
              accordance with this policy.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto space-y-8">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h3 className="font-semibold mb-1">{item.subtitle}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-semibold">Contact Us</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <strong>Email:</strong> privacy@careerpilot.com
              </li>
              <li>
                <strong>Address:</strong> 123 Career Street, Suite 456, San
                Francisco, CA 94102
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
