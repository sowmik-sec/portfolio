import type { FC } from "react";
import { CURRENT_ROLE, EDUCATION_HISTORY } from "@/data/experience";
import { SKILL_CATEGORIES } from "@/data/skills";

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
        className="font-serif text-title text-text-primary"
      >
        Experience &amp; Education
      </h2>

      <div className="mt-12 space-y-16 sm:mt-16 sm:space-y-20">
        {/* Work */}
        <div>
          <h3 className="text-[13px] font-medium text-text-muted">Work</h3>

          <div className="mt-5 flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
            <h4 className="font-serif text-2xl text-text-primary sm:text-3xl">
              {CURRENT_ROLE.role}
              <span className="text-text-muted">, </span>
              {CURRENT_ROLE.company}
            </h4>
            <p className="text-[13px] text-text-muted sm:shrink-0">
              {CURRENT_ROLE.timeline}
            </p>
          </div>

          <p className="mt-5 max-w-3xl font-serif text-lead text-text-secondary">
            {CURRENT_ROLE.focus}
          </p>

          <p className="mt-5 text-sm text-text-primary">
            {CURRENT_ROLE.technologies.join(", ")}
          </p>
        </div>

        {/* Toolkit */}
        <div>
          <h3 className="text-[13px] font-medium text-text-muted">Toolkit</h3>

          <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.id} id={`skill-${category.id}`}>
                <h4 className="text-[13px] font-medium text-text-muted">
                  {category.name}
                </h4>
                <p className="mt-2 text-base text-text-primary">
                  {category.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-[13px] font-medium text-text-muted">Education</h3>

          {EDUCATION_HISTORY.map((edu) => (
            <div key={edu.institution} className="mt-5">
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="max-w-3xl font-serif text-2xl text-text-primary sm:text-3xl">
                  {edu.degree}
                </h4>
                <p className="text-[13px] text-text-muted sm:shrink-0">
                  {edu.graduationYear}, CGPA: {edu.cgpa}
                </p>
              </div>

              <p className="mt-2 text-[15px] text-text-secondary">
                {edu.institution}, Sylhet, Bangladesh
              </p>

              {edu.details && (
                <p className="mt-4 max-w-3xl font-serif text-lead text-text-secondary">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
