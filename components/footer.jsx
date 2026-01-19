import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Resume Builder", href: "/resume" },
      { label: "Cover Letter Generator", href: "/ai-cover-letter" },
      { label: "Interview Prep", href: "/interview/mock" },
      { label: "Dashboard", href: "/dashboard" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
    Resources: [
      { label: "Documentation", href: "#docs" },
      { label: "FAQs", href: "#faqs" },
      { label: "Guides", href: "#guides" },
      { label: "Community", href: "#community" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Compliance", href: "#compliance" },
    ],
  };

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "#twitter",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "#linkedin",
      label: "LinkedIn",
    },
    { icon: <Github className="w-5 h-5" />, href: "#github", label: "GitHub" },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:contact@careerpilot.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t bg-card text-card-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 md:py-13">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="CareerPilot Logo"
                width={150}
                height={45}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Your AI-powered career coach, helping you succeed in every step of
              your professional journey.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>
              © {currentYear}{" "}
              <span className="font-semibold text-foreground">CareerPilot</span>
              . All rights reserved.
            </p>
            <p className="mt-2">
              Made with <span className="text-red-500">❤️</span> to empower your
              career growth.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              Subscribe for updates
            </label>
            <div className="flex gap-2">
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="px-3 py-2 rounded-lg bg-muted border border-input text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              />
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Background Element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}
