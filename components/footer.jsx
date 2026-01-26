import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Resume Builder", href: "/resume" },
      { label: "Cover Letter Generator", href: "/ai-cover-letter" },
      { label: "Interview Prep", href: "/interview" },
      { label: "Dashboard", href: "/dashboard" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    Resources: [
      { label: "FAQs", href: "/faqs" },
      { label: "Guides", href: "/guides" },
      { label: "Community", href: "/community" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Compliance", href: "/compliance" },
    ],
  };

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/careerpilot",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/company/careerpilot",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/careerpilot",
      label: "GitHub",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:contact@careerpilot.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative border-t bg-card text-card-foreground overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="CareerPilot Logo"
                width={150}
                height={45}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Your AI-powered career coach, helping you succeed in every step of
              your professional journey.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-foreground">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>
              © {currentYear}{" "}
              <span className="font-semibold text-foreground">CareerPilot</span>
              . All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <span>•</span>
            <Link
              href="/cookies"
              className="hover:text-primary transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}
