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
      <ScrollReveal>
        <h2
          id="skills-title"
          className="text-title font-semibold text-text-primary"
        >
          Technical Skills
        </h2>
      </ScrollReveal>

      {/* Grouped, text-based presentation (no bars, meters, or logo walls) */}
      <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 sm:mt-12 sm:grid-cols-2">
        {SKILL_CATEGORIES.map((category, index) => (
          <ScrollReveal
            as="article"
            key={category.id}
            id={`skill-${category.id}`}
            delay={index * 50}
            aria-labelledby={`skill-category-${category.id}`}
          >
            <h3
              id={`skill-category-${category.id}`}
              className="font-mono text-xs uppercase tracking-wider text-text-muted"
            >
              {category.name}
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-text-primary sm:text-xl">
              {category.skills.join(" · ")}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
