import type { ReactNode } from "react";
import { ScrollReveal } from "../scroll-reveal";

interface CaseStudySectionProps {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  children: ReactNode;
  className?: string;
}

export function CaseStudySection({
  id,
  title,
  subtitle,
  badge,
  children,
  className = "",
}: CaseStudySectionProps) {
  return (
    <ScrollReveal
      as="section"
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`border-t border-border/60 pt-10 sm:pt-14 ${className}`}
    >
      <div className="flex flex-col gap-1">
        {badge && (
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            {badge}
          </span>
        )}
        <h2
          id={`${id}-heading`}
          className="text-2xl font-semibold tracking-tight text-text-primary sm:text-4xl"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-base text-text-secondary sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>

      <div className="mt-6 space-y-6 sm:mt-8">{children}</div>
    </ScrollReveal>
  );
}
