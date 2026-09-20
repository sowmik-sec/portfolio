import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Name / Logo Link */}
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-text-primary transition-colors hover:text-accent"
          aria-label="Ahsan — Home"
        >
          Ahsan
        </Link>

        {/* Navigation Links + Theme Toggle */}
        <nav
          className="flex items-center gap-4 text-sm font-medium text-text-secondary sm:gap-6"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
          <div className="h-4 w-px bg-border/80" aria-hidden="true" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
