import type { FC } from "react";
import { SKILL_CATEGORIES } from "@/data/skills";
import { ScrollReveal } from "./scroll-reveal";

export const Skills: FC = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative border-t border-border/70 py-16 sm:py-24 md:py-32"
    >
      {/* Section Header */}
      <ScrollReveal className="flex flex-col gap-2 border-b border-border/70 pb-6 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            Core Competencies
          </span>
          <h2
            id="skills-title"
            className="mt-1 text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl md:text-4xl"
          >
            Technical Skills
          </h2>
        </div>
        <p className="font-mono text-xs text-text-muted">
          Production Stack &amp; Verified Tooling
        </p>
      </ScrollReveal>

      {/* Skills Grid: Clean, Grouped, Text-based Minimalist Presentation */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
        {SKILL_CATEGORIES.map((category, index) => (
          <ScrollReveal
            as="article"
            key={category.id}
            id={`skill-${category.id}`}
            delay={index * 60}
            aria-labelledby={`skill-category-${category.id}`}
            className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-2xs transition-all duration-200 hover:border-border/90 hover:shadow-xs sm:p-7"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <h3
                  id={`skill-category-${category.id}`}
                  className="font-mono text-xs font-semibold uppercase tracking-wider text-accent"
                >
                  {category.name}
                </h3>
                <span className="font-mono text-[11px] text-text-muted">
                  {category.skills.length} technologies
                </span>
              </div>

              {/* Context Line */}
              <p className="mt-3 text-xs leading-relaxed text-text-secondary sm:text-sm">
                {category.description}
              </p>
            </div>

            {/* Approved Stack List: Minimalist Text Pills with Middle-Dot Notation */}
            <div className="mt-6 border-t border-border/40 pt-4">
              <ul
                className="flex flex-wrap items-center gap-2"
                aria-label={`${category.name} skills`}
              >
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-flex items-center rounded-md border border-border/60 bg-surface-elevated/70 px-3 py-1 font-mono text-xs font-medium text-text-primary transition-all duration-150 hover:border-text-primary/30 hover:bg-surface-elevated hover:text-accent">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
