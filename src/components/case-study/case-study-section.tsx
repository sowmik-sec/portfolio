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
      className={`border-t border-border pt-10 sm:pt-14 ${className}`}
    >
      <div className="flex flex-col gap-1">
        {badge && (
          <span className="text-[13px] font-medium text-text-muted">
            {badge}
          </span>
        )}
        <h2
          id={`${id}-heading`}
          className="font-serif text-2xl tracking-[0.01em] text-text-primary sm:text-3xl"
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
