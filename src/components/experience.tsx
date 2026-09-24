import type { FC } from "react";
import { CURRENT_ROLE, EDUCATION_HISTORY } from "@/data/experience";
import { SKILL_CATEGORIES } from "@/data/skills";
import { LedgerRow } from "./ledger-row";

export const Experience: FC = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative scroll-mt-24 py-20 sm:py-28 md:py-36"
    >
      {/* Section Header */}
      <h2
        id="experience-title"
        className="text-title font-semibold text-text-primary"
      >
        Experience &amp; Education
      </h2>

      {/* Ledger */}
      <div className="mt-12 space-y-10 border-t border-border pt-8 sm:mt-16">
        {/* Work */}
        <LedgerRow label="Work">
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              {CURRENT_ROLE.role}
              <span className="text-text-muted">, </span>
              {CURRENT_ROLE.company}
            </h3>
            <p className="text-[13px] tabular-nums text-text-muted sm:shrink-0">
              {CURRENT_ROLE.timeline}
            </p>
          </div>

          <p className="mt-4 max-w-3xl text-lead text-text-secondary">
            {CURRENT_ROLE.focus}
          </p>

          <p className="mt-4 text-sm text-text-primary">
            {CURRENT_ROLE.technologies.join(", ")}
          </p>
        </LedgerRow>

        {/* Toolkit */}
        <LedgerRow label="Toolkit">
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.id} id={`skill-${category.id}`}>
                <p className="text-[13px] font-medium text-text-muted">
                  {category.name}
                </p>
                <p className="mt-1.5 text-base text-text-primary">
                  {category.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </LedgerRow>

        {/* Education */}
        <LedgerRow label="Education">
          {EDUCATION_HISTORY.map((edu) => (
            <div key={edu.institution}>
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="max-w-3xl text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                  {edu.degree}
                </h3>
                <p className="text-[13px] tabular-nums text-text-muted sm:shrink-0">
                  {edu.graduationYear}, CGPA: {edu.cgpa}
                </p>
              </div>

              <p className="mt-2 text-[15px] text-text-secondary">
                {edu.institution}, Sylhet, Bangladesh
              </p>

              {edu.details && (
                <p className="mt-4 max-w-3xl text-lead text-text-secondary">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </LedgerRow>
      </div>
    </section>
  );
};
