import type { FC } from "react";
import Link from "next/link";
import { CURRENTLY_BUILDING_PROJECTS } from "@/data/projects";
import { ScrollReveal } from "./scroll-reveal";

export const CurrentlyBuilding: FC = () => {
  return (
    <section
      id="currently-building"
      aria-labelledby="currently-building-title"
      className="relative border-t border-border/70 py-16 sm:py-24 md:py-32"
    >
      {/* Section Header */}
      <ScrollReveal>
        <h2
          id="currently-building-title"
          className="text-title font-semibold text-text-primary"
        >
          Currently Building
        </h2>
        <p className="mt-4 max-w-2xl text-lead text-text-secondary">
          Work in progress — kept separate from the shipped products above.
        </p>
      </ScrollReveal>

      {/* In-Progress Project Rows */}
      <div className="mt-12 sm:mt-16">
        {CURRENTLY_BUILDING_PROJECTS.map((project, index) => (
          <ScrollReveal
            as="article"
            key={project.id}
            id={`building-${project.id}`}
            delay={index * 60}
            aria-labelledby={`building-title-${project.id}`}
            className="border-t border-border py-10 first:border-t-0 first:pt-0 sm:py-14"
          >
            {/* Meta row: index + plain-text status */}
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-mono text-xs font-semibold text-accent">
                {project.number}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                {project.status}
              </span>
            </div>

            {/* Title & Category */}
            <h3
              id={`building-title-${project.id}`}
              className="mt-3 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl"
            >
              {project.title}
            </h3>
            <p className="mt-1.5 text-base text-text-secondary sm:text-lg">
              {project.category}
            </p>

            {/* Concept Narrative */}
            <p className="mt-5 max-w-3xl text-lead text-text-secondary">
              {project.concept}
            </p>

            {/* Architecture & Modules */}
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  Architecture &amp; Systems
                </h4>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
                  {project.architectureHighlights.join(" · ")}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  {project.id === "skillbento"
                    ? "Core Platform Modules"
                    : "Confirmed Client Features"}
                </h4>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
                  {project.coreModules.join(" · ")}
                </p>
              </div>
            </div>

            {/* Technologies, Scope Note, and Action Links */}
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h4 className="sr-only">Technologies</h4>
                <p className="font-mono text-sm text-text-primary">
                  {project.technologies.join(" · ")}
                </p>
                <p className="mt-3 max-w-xl font-mono text-[11px] leading-relaxed text-text-muted">
                  {project.statusNote}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 sm:shrink-0">
                <Link
                  href={project.caseStudyUrl}
                  className="group/link inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-text-primary transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span>
                    {project.id === "skillbento"
                      ? "Explore system architecture"
                      : "Read client case study"}
                  </span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover/link:translate-x-1.5 motion-reduce:transform-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/gh inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-text-muted transition-colors duration-200 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                  >
                    <span>GitHub repository</span>
                    <svg
                      className="h-3 w-3 transition-transform duration-200 ease-out group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5 motion-reduce:transform-none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
