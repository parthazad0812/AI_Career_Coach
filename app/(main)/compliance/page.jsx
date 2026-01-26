"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  CheckCircle,
  Globe,
  Lock,
  FileCheck,
  Award,
  Server,
  Users,
  Mail,
} from "lucide-react";

const certifications = [
  {
    name: "SOC 2 Type II",
    description:
      "Our systems and controls have been independently audited and certified for security, availability, and confidentiality.",
    icon: <Award className="h-8 w-8" />,
    status: "Certified",
  },
  {
    name: "GDPR Compliant",
    description:
      "We comply with the EU General Data Protection Regulation for handling personal data of EU residents.",
    icon: <Globe className="h-8 w-8" />,
    status: "Compliant",
  },
  {
    name: "CCPA Compliant",
    description:
      "We adhere to the California Consumer Privacy Act requirements for California residents' data rights.",
    icon: <FileCheck className="h-8 w-8" />,
    status: "Compliant",
  },
  {
    name: "ISO 27001",
    description:
      "Our information security management system meets international standards for data protection.",
    icon: <Shield className="h-8 w-8" />,
    status: "Certified",
  },
];

const securityMeasures = [
  {
    title: "Data Encryption",
    description:
      "All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3.",
    icon: <Lock className="h-6 w-6" />,
  },
  {
    title: "Secure Infrastructure",
    description:
      "Our infrastructure is hosted on SOC 2 compliant cloud providers with 99.9% uptime SLA.",
    icon: <Server className="h-6 w-6" />,
  },
  {
    title: "Access Controls",
    description:
      "Role-based access controls and multi-factor authentication protect your data.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Regular Audits",
    description:
      "We conduct regular security audits, penetration testing, and vulnerability assessments.",
    icon: <FileCheck className="h-6 w-6" />,
  },
];

const dataRights = [
  {
    right: "Right to Access",
    description:
      "You can request a copy of all personal data we hold about you.",
  },
  {
    right: "Right to Rectification",
    description: "You can request correction of any inaccurate personal data.",
  },
  {
    right: "Right to Erasure",
    description:
      'You can request deletion of your personal data ("right to be forgotten").',
  },
  {
    right: "Right to Portability",
    description:
      "You can request your data in a machine-readable format to transfer to another service.",
  },
  {
    right: "Right to Restrict Processing",
    description: "You can request that we limit how we use your personal data.",
  },
  {
    right: "Right to Object",
    description:
      "You can object to certain types of processing, including direct marketing.",
  },
];

const complianceTimeline = [
  {
    year: "2023",
    milestone: "Initial SOC 2 Type I Certification",
  },
  {
    year: "2024",
    milestone: "GDPR Compliance Framework Implementation",
  },
  {
    year: "2024",
    milestone: "SOC 2 Type II Certification",
  },
  {
    year: "2025",
    milestone: "ISO 27001 Certification",
  },
  {
    year: "2025",
    milestone: "CCPA Compliance Verification",
  },
];

export default function CompliancePage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
          Security & Compliance
        </h1>
        <p className="text-xl text-muted-foreground">
          Your trust is our priority. Learn about our commitment to protecting
          your data and meeting the highest compliance standards.
        </p>
      </div>

      {/* Trust Banner */}
      <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">256-bit</h3>
            <p className="text-sm text-muted-foreground">SSL Encryption</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">99.9%</h3>
            <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
            <p className="text-sm text-muted-foreground">Security Monitoring</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Our Certifications & Compliance
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{cert.name}</h3>
                      <Badge className="bg-green-500/10 text-green-600 dark:text-green-400">
                        <CheckCircle className="h-3 w-3 mr-1" /> {cert.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Security Measures */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Security Measures
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {securityMeasures.map((measure, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center text-primary">
                  {measure.icon}
                </div>
                <h3 className="font-semibold mb-2">{measure.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {measure.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Data Rights */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Your Data Rights
        </h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-6">
              We respect your rights over your personal data. Under GDPR, CCPA,
              and other applicable privacy laws, you have the following rights:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {dataRights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">{item.right}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Compliance Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Compliance Journey
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            {complianceTimeline.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center mb-6 pl-12"
              >
                <div className="absolute left-4 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2" />
                <Card className="flex-1">
                  <CardContent className="py-4">
                    <span className="text-sm font-semibold text-primary">
                      {item.year}
                    </span>
                    <p className="text-muted-foreground">{item.milestone}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-processors */}
      <section className="mb-16">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">
              Third-Party Sub-processors
            </h2>
            <p className="text-muted-foreground mb-4">
              We use carefully selected third-party services to help us provide
              and improve our services. All sub-processors are bound by strict
              data processing agreements that comply with applicable privacy
              laws.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Service</th>
                    <th className="text-left py-3 font-semibold">Purpose</th>
                    <th className="text-left py-3 font-semibold">Location</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3">Amazon Web Services</td>
                    <td className="py-3">Cloud Infrastructure</td>
                    <td className="py-3">United States</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Stripe</td>
                    <td className="py-3">Payment Processing</td>
                    <td className="py-3">United States</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">OpenAI</td>
                    <td className="py-3">AI Services</td>
                    <td className="py-3">United States</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Google Analytics</td>
                    <td className="py-3">Analytics</td>
                    <td className="py-3">United States</td>
                  </tr>
                  <tr>
                    <td className="py-3">Clerk</td>
                    <td className="py-3">Authentication</td>
                    <td className="py-3">United States</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section className="text-center bg-muted/50 rounded-2xl p-12 max-w-3xl mx-auto">
        <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Security Questions?</h2>
        <p className="text-muted-foreground mb-4">
          If you have any questions about our security practices or compliance
          certifications, please reach out to our security team.
        </p>
        <p className="text-muted-foreground">
          <strong>Email:</strong> security@careerpilot.com
        </p>
      </section>
    </div>
  );
}
