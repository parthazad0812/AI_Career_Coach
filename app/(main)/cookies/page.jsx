"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Cookie,
  Settings,
  Shield,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  Mail,
} from "lucide-react";

export default function CookiesPage() {
  const lastUpdated = "January 1, 2026";

  const cookieTypes = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Essential Cookies",
      required: true,
      description:
        "These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services.",
      examples: [
        {
          name: "session_id",
          purpose: "Maintains your login session",
          duration: "Session",
        },
        {
          name: "csrf_token",
          purpose: "Protects against cross-site request forgery",
          duration: "Session",
        },
        {
          name: "cookie_consent",
          purpose: "Stores your cookie preferences",
          duration: "1 year",
        },
      ],
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Analytics Cookies",
      required: false,
      description:
        "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: [
        {
          name: "_ga",
          purpose: "Google Analytics - Distinguishes users",
          duration: "2 years",
        },
        {
          name: "_gid",
          purpose: "Google Analytics - Distinguishes users",
          duration: "24 hours",
        },
        {
          name: "_gat",
          purpose: "Google Analytics - Throttles request rate",
          duration: "1 minute",
        },
      ],
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Functional Cookies",
      required: false,
      description:
        "These cookies enable the website to provide enhanced functionality and personalization based on your preferences.",
      examples: [
        {
          name: "theme_preference",
          purpose: "Remembers your light/dark mode choice",
          duration: "1 year",
        },
        {
          name: "language",
          purpose: "Stores your language preference",
          duration: "1 year",
        },
        {
          name: "recently_viewed",
          purpose: "Tracks recently viewed content",
          duration: "30 days",
        },
      ],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Marketing Cookies",
      required: false,
      description:
        "These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts.",
      examples: [
        {
          name: "_fbp",
          purpose: "Facebook - Delivers advertisements",
          duration: "3 months",
        },
        {
          name: "li_sugr",
          purpose: "LinkedIn - User matching",
          duration: "3 months",
        },
        {
          name: "IDE",
          purpose: "Google DoubleClick - Ad targeting",
          duration: "1 year",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Cookie className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
          Cookie Policy
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          Learn how we use cookies to improve your experience on CareerPilot.
        </p>
        <p className="text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto mb-12">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile) when you visit a website. They help
              the website remember your preferences and how you use the site,
              making your next visit easier and more useful.
            </p>
            <p className="text-muted-foreground">
              CareerPilot uses cookies and similar technologies to provide,
              protect, and improve our services. This policy explains what
              cookies we use, why we use them, and how you can control them.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Cookie Types */}
      <div className="max-w-4xl mx-auto space-y-6 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          Types of Cookies We Use
        </h2>

        {cookieTypes.map((type, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{type.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      {type.required ? (
                        <span className="text-xs flex items-center gap-1 text-amber-600 dark:text-amber-400">
                          <CheckCircle className="h-3 w-3" /> Required
                        </span>
                      ) : (
                        <span className="text-xs flex items-center gap-1 text-muted-foreground">
                          <XCircle className="h-3 w-3" /> Optional
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{type.description}</p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-semibold">
                        Cookie Name
                      </th>
                      <th className="text-left py-2 font-semibold">Purpose</th>
                      <th className="text-left py-2 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {type.examples.map((cookie, cookieIndex) => (
                      <tr key={cookieIndex} className="border-b last:border-0">
                        <td className="py-2 font-mono text-xs">
                          {cookie.name}
                        </td>
                        <td className="py-2 text-muted-foreground">
                          {cookie.purpose}
                        </td>
                        <td className="py-2 text-muted-foreground">
                          {cookie.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Managing Cookies */}
      <div className="max-w-4xl mx-auto mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Settings className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold">
                Managing Your Cookie Preferences
              </h2>
            </div>

            <p className="text-muted-foreground mb-4">
              You have several options for managing cookies:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Browser Settings</h3>
                <p className="text-muted-foreground text-sm">
                  Most web browsers allow you to control cookies through their
                  settings. You can usually find these in the "Options" or
                  "Preferences" menu of your browser. You can set your browser
                  to block or alert you about cookies.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Our Cookie Banner</h3>
                <p className="text-muted-foreground text-sm">
                  When you first visit CareerPilot, you'll see a cookie consent
                  banner that allows you to accept or customize your cookie
                  preferences. You can change these preferences at any time.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Opt-Out Links</h3>
                <p className="text-muted-foreground text-sm">
                  For third-party analytics and advertising cookies, you can use
                  opt-out mechanisms provided by those services:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  <li>
                    Google Analytics:{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://tools.google.com/dlpage/gaoptout
                    </a>
                  </li>
                  <li>
                    Facebook:{" "}
                    <a
                      href="https://www.facebook.com/policies/cookies/"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.facebook.com/policies/cookies/
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Disabling certain cookies may affect the
                functionality of CareerPilot. Essential cookies are required for
                the site to work properly and cannot be disabled.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Updates */}
      <div className="max-w-4xl mx-auto mb-12">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">
              Updates to This Policy
            </h2>
            <p className="text-muted-foreground">
              We may update this Cookie Policy from time to time to reflect
              changes in technology, legislation, or our data practices. When we
              make significant changes, we will notify you by updating the date
              at the top of this policy and, where appropriate, through our
              website or by email.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Contact */}
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold">Questions?</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              If you have any questions about our use of cookies or this policy,
              please contact us:
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
