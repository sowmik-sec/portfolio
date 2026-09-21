"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { label: "Work", href: "/#work", sectionId: "work" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionIds = ["work", "about", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let current: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Name / Logo Link */}
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center text-base font-semibold tracking-tight text-text-primary transition-all duration-200 hover:text-accent active:scale-95 focus-visible:outline-2 focus-visible:outline-accent"
          aria-label="Ahsan — Home"
        >
          Ahsan
        </Link>

        {/* Navigation Links + Theme Toggle */}
        <nav
          className="flex items-center gap-1.5 sm:gap-3"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === "/" && activeSection === item.sectionId;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative inline-flex min-h-[44px] items-center rounded-md px-2.5 py-1 text-sm font-medium transition-all duration-200 hover:bg-surface-elevated hover:text-text-primary active:scale-95 focus-visible:outline-2 focus-visible:outline-accent ${
                  isActive
                    ? "bg-surface-elevated/70 text-text-primary font-semibold"
                    : "text-text-secondary"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-accent transition-all duration-300 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
          <div className="mx-1 h-4 w-px bg-border/80" aria-hidden="true" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
