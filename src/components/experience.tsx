import type { FC } from "react";
import { CURRENT_ROLE, EDUCATION_HISTORY } from "@/data/experience";
import { ScrollReveal } from "./scroll-reveal";

export const Experience: FC = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative border-t border-border/70 py-16 sm:py-24 md:py-32"
    >
      {/* Section Header */}
      <ScrollReveal className="flex flex-col gap-2 border-b border-border/70 pb-6 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            Trajectory
          </span>
          <h2
            id="experience-title"
            className="mt-1 text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl md:text-4xl"
          >
            Experience &amp; Education
          </h2>
        </div>
        <p className="font-mono text-xs text-text-muted">
          Professional Context &amp; Academic Foundation
        </p>
      </ScrollReveal>

      {/* Balanced Two-Column Restrained Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Column 1: Experience */}
        <ScrollReveal
          delay={0}
          className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-2xs transition-all duration-200 hover:border-border/90 hover:shadow-xs sm:p-8"
        >
          <div>
            <div className="flex items-center justify-between border-b border-border/50 pb-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                Current Position
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Active
              </span>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-bold tracking-tight text-text-primary">
                {CURRENT_ROLE.role}
              </h3>
              <p className="mt-1 font-mono text-sm font-medium text-text-secondary">
                {CURRENT_ROLE.company}
              </p>
              <p className="mt-0.5 font-mono text-xs text-text-muted">
                {CURRENT_ROLE.timeline}
              </p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {CURRENT_ROLE.focus}
            </p>
          </div>

          <div className="mt-6 border-t border-border/50 pt-5">
            <h4 className="sr-only">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {CURRENT_ROLE.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded bg-surface-elevated px-2.5 py-1 font-mono text-xs font-medium text-text-primary transition-colors duration-150 hover:bg-surface-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Column 2: Education */}
        <ScrollReveal
          delay={80}
          className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-2xs transition-all duration-200 hover:border-border/90 hover:shadow-xs sm:p-8"
        >
          <div>
            <div className="flex items-center justify-between border-b border-border/50 pb-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                Academic Background
              </span>
              <span className="font-mono text-xs text-text-muted">
                Completed
              </span>
            </div>

            {EDUCATION_HISTORY.map((edu) => (
              <div key={edu.institution} className="mt-5">
                <h3 className="text-xl font-bold tracking-tight text-text-primary">
                  {edu.degree}
                </h3>
                <p className="mt-1 font-mono text-sm font-medium text-text-secondary">
                  {edu.institution}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-text-muted">
                  <span>{edu.graduationYear}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-text-primary">
                    CGPA: {edu.cgpa}
                  </span>
                </div>

                {edu.details && (
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-border/50 pt-5">
            <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
              <svg
                className="h-4 w-4 text-accent shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
              <span>Sylhet, Bangladesh</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
