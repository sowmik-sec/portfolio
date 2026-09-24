import type { FC } from "react";
import Link from "next/link";
import { CURRENTLY_BUILDING_PROJECTS } from "@/data/projects";

export const CurrentlyBuilding: FC = () => {
  return (
    <section
      id="currently-building"
      aria-labelledby="currently-building-title"
      className="relative scroll-mt-24 py-20 sm:py-28 md:py-36"
    >
      {/* Section Header */}
      <h2
        id="currently-building-title"
        className="font-serif text-title text-text-primary"
      >
        Currently Building
      </h2>
      <p className="mt-5 max-w-2xl font-serif text-lead text-text-secondary">
        Work in progress — kept separate from the shipped products above.
      </p>

      {/* In-Progress Project Rows */}
      <div className="mt-14 sm:mt-20">
        {CURRENTLY_BUILDING_PROJECTS.map((project) => (
          <article
            key={project.id}
            id={`building-${project.id}`}
            aria-labelledby={`building-title-${project.id}`}
            className="border-t border-border py-12 last:border-b sm:py-16"
          >
            {/* Status */}
            <p className="text-[13px] font-medium text-text-muted">
              {project.status}
            </p>

            {/* Title & Category */}
            <h3
              id={`building-title-${project.id}`}
              className="mt-3 font-serif text-3xl tracking-[0.02em] text-text-primary sm:text-4xl"
            >
              {project.title}
            </h3>
            <p className="mt-2 font-serif text-lg italic text-text-secondary">
              {project.category}
            </p>

            {/* Concept Narrative */}
            <p className="mt-6 max-w-3xl font-serif text-lead text-text-secondary">
              {project.concept}
            </p>

            {/* Architecture & Modules */}
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
              <div>
                <h4 className="text-[13px] font-medium text-text-muted">
                  Architecture &amp; Systems
                </h4>
                <p className="mt-3 max-w-md font-serif text-sm leading-relaxed text-text-secondary">
                  {project.architectureHighlights.join(", ")}
                </p>
              </div>

              <div>
                <h4 className="text-[13px] font-medium text-text-muted">
                  {project.id === "skillbento"
                    ? "Core Platform Modules"
                    : "Confirmed Client Features"}
                </h4>
                <p className="mt-3 max-w-md font-serif text-sm leading-relaxed text-text-secondary">
                  {project.coreModules.join(", ")}
                </p>
              </div>
            </div>

            {/* Technologies, Scope Note, and Action Links */}
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="text-sm text-text-primary">
                  {project.technologies.join(", ")}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-text-muted">
                  {project.statusNote}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 sm:shrink-0">
                <Link
                  href={project.caseStudyUrl}
                  className="link-draw inline-flex min-h-[44px] items-center text-sm font-semibold text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span>
                    {project.id === "skillbento"
                      ? "Explore system architecture"
                      : "Read client case study"}
                  </span>
                </Link>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw inline-flex min-h-[44px] items-center text-sm font-medium text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                  >
                    <span>GitHub repository</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
