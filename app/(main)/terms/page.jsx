"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Ban,
  Scale,
  RefreshCw,
  Mail,
} from "lucide-react";

export default function TermsPage() {
  const lastUpdated = "January 1, 2026";

  const sections = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "1. Acceptance of Terms",
      content: `By accessing or using CareerPilot's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.

These Terms of Service apply to all visitors, users, and others who access or use our services. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the service following any changes constitutes acceptance of those changes.`,
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "2. Description of Services",
      content: `CareerPilot provides an AI-powered career coaching platform that includes:

• Resume Builder: Tools to create, edit, and optimize professional resumes
• Cover Letter Generator: AI-assisted cover letter creation
• Interview Preparation: Mock interviews and practice questions
• Industry Insights: Analytics and trends for various industries
• Career Dashboard: Personalized career tracking and recommendations

Our services are provided "as is" and we make no warranties regarding the accuracy of AI-generated content or job placement outcomes. Users are responsible for reviewing and customizing all generated content before use.`,
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "3. User Accounts",
      content: `To access certain features of CareerPilot, you must create an account. When creating an account, you agree to:

• Provide accurate, current, and complete information
• Maintain and promptly update your account information
• Maintain the security of your password and account
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized access

We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent or harmful activities. You may delete your account at any time through your account settings.`,
    },
    {
      icon: <Ban className="h-6 w-6" />,
      title: "4. Prohibited Uses",
      content: `You agree not to use CareerPilot for any unlawful purpose or in any way that could damage, disable, or impair our services. Prohibited activities include:

• Violating any applicable laws or regulations
• Impersonating another person or entity
• Submitting false, misleading, or fraudulent information
• Attempting to gain unauthorized access to our systems
• Interfering with or disrupting our services or servers
• Using automated systems to scrape or collect data
• Transmitting malware, viruses, or malicious code
• Harassing, threatening, or intimidating other users
• Using our services to send spam or unsolicited communications
• Reselling or commercializing our services without permission

Violation of these terms may result in immediate termination of your account and may subject you to legal liability.`,
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "5. Intellectual Property",
      content: `All content, features, and functionality of CareerPilot—including but not limited to text, graphics, logos, icons, images, audio clips, software, and compilation—are the exclusive property of CareerPilot and are protected by copyright, trademark, and other intellectual property laws.

You retain ownership of the personal content you submit (such as your resume information and work history). By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, process, and display your content solely to provide our services.

You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any part of our services without our express written consent.`,
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "6. Disclaimer of Warranties",
      content: `CareerPilot is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that:

• Our services will be uninterrupted, secure, or error-free
• Results obtained from using our services will be accurate or reliable
• Any defects in our services will be corrected
• AI-generated content will be suitable for your specific needs

We specifically disclaim any implied warranties of merchantability, fitness for a particular purpose, and non-infringement. You use our services at your own risk.

CareerPilot does not guarantee employment outcomes. Our tools are designed to assist your job search, but success depends on many factors beyond our control.`,
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "7. Limitation of Liability",
      content: `To the maximum extent permitted by law, CareerPilot and its directors, employees, partners, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:

• Loss of profits, data, or goodwill
• Service interruption or computer damage
• The cost of substitute services
• Any damages resulting from your use of our services

In no event shall our total liability exceed the amount you paid to CareerPilot in the twelve (12) months preceding the claim or $100, whichever is greater.

Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities, so some of the above limitations may not apply to you.`,
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "8. Subscription and Billing",
      content: `Certain features of CareerPilot require a paid subscription. By subscribing, you agree to:

• Pay all fees associated with your subscription plan
• Provide accurate and complete billing information
• Authorize us to charge your payment method

Subscriptions automatically renew unless canceled before the renewal date. You can cancel your subscription at any time through your account settings. Refunds are available within 14 days of initial purchase for new subscribers.

We reserve the right to modify pricing with 30 days' notice. Price changes will not affect your current billing period.`,
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "9. Termination",
      content: `We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including:

• Breach of these Terms of Service
• Request by law enforcement or government agencies
• Unexpected technical or security issues
• Extended periods of inactivity
• Engagement in fraudulent or illegal activities

Upon termination, your right to use our services will immediately cease. If you wish to terminate your account, you may do so by following the instructions in your account settings.

All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.`,
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "10. Governing Law",
      content: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.

Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in San Francisco, California, in accordance with the American Arbitration Association rules.

You agree to waive any right to a jury trial or to participate in a class action lawsuit against CareerPilot.`,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
          Terms of Service
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          Please read these terms carefully before using CareerPilot.
        </p>
        <p className="text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto space-y-6">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {section.icon}
                </div>
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <div className="text-muted-foreground whitespace-pre-line">
                {section.content}
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
              <h2 className="text-xl font-semibold">
                Questions About These Terms?
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <strong>Email:</strong> legal@careerpilot.com
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
