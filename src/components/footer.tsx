import type { FC } from "react";
import Link from "next/link";

const FOOTER_NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const FOOTER_EXTERNAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/sowmik-sec",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-ahsan-habib-18569b21a/",
  },
];

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/70 py-8 sm:py-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Copyright & Identity */}
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium text-text-primary sm:text-sm">
            © {currentYear} Md. Ahsan Habib. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-text-muted">
            Full Stack Developer · Built with Next.js &amp; TypeScript
          </p>
        </div>

        {/* Navigation & External Links */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-text-secondary sm:text-sm"
        >
          {FOOTER_NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors duration-200 hover:text-text-primary active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {link.label}
            </Link>
          ))}

          <span className="hidden h-3 w-px bg-border/80 sm:inline-block" aria-hidden="true" />

          {FOOTER_EXTERNAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-text-primary active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
