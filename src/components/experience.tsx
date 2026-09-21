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
      <ScrollReveal>
        <h2
          id="experience-title"
          className="text-title font-semibold text-text-primary"
        >
          Experience &amp; Education
        </h2>
      </ScrollReveal>

      <div className="mt-10 space-y-12 sm:mt-12 sm:space-y-14">
        {/* Work */}
        <ScrollReveal>
          <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Work
          </h3>

          <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h4 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              {CURRENT_ROLE.role}
              <span className="text-text-muted"> · </span>
              {CURRENT_ROLE.company}
            </h4>
            <p className="font-mono text-sm text-text-muted sm:shrink-0">
              {CURRENT_ROLE.timeline}
            </p>
          </div>

          <p className="mt-4 max-w-3xl text-lead text-text-secondary">
            {CURRENT_ROLE.focus}
          </p>

          <p className="mt-5 font-mono text-sm text-text-primary">
            {CURRENT_ROLE.technologies.join(" · ")}
          </p>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal delay={60}>
          <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Education
          </h3>

          {EDUCATION_HISTORY.map((edu) => (
            <div key={edu.institution} className="mt-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                  {edu.degree}
                </h4>
                <p className="font-mono text-sm text-text-muted sm:shrink-0">
                  {edu.graduationYear} · CGPA: {edu.cgpa}
                </p>
              </div>

              <p className="mt-1.5 text-base text-text-secondary sm:text-lg">
                {edu.institution} · Sylhet, Bangladesh
              </p>

              {edu.details && (
                <p className="mt-4 max-w-3xl text-lead text-text-secondary">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};
