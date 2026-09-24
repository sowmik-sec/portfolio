import type { FC } from "react";
import Link from "next/link";
import { CURRENTLY_BUILDING_PROJECTS } from "@/data/projects";
import { LedgerRow } from "./ledger-row";

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
        className="text-title font-semibold text-text-primary"
      >
        Currently Building
      </h2>
      <p className="mt-5 max-w-2xl text-lead text-text-secondary">
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
            {/* Title row */}
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
              <h3
                id={`building-title-${project.id}`}
                className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
              >
                {project.title}
              </h3>
              <p className="text-[13px] text-text-muted">{project.status}</p>
            </div>
            <p className="mt-2 text-[15px] text-text-secondary">
              {project.category}
            </p>

            {/* Spec rows */}
            <div className="mt-8 space-y-6">
              <LedgerRow label="Concept">
                <p className="max-w-3xl text-lead text-text-secondary">
                  {project.concept}
                </p>
              </LedgerRow>

              <LedgerRow label="Architecture">
                <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
                  {project.architectureHighlights.join(", ")}
                </p>
              </LedgerRow>

              <LedgerRow
                label={
                  project.id === "skillbento"
                    ? "Modules"
                    : "Client features"
                }
              >
                <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
                  {project.coreModules.join(", ")}
                </p>
              </LedgerRow>

              <LedgerRow label="Stack">
                <p className="text-sm text-text-primary">
                  {project.technologies.join(", ")}
                </p>
              </LedgerRow>

              <LedgerRow label="Note">
                <p className="max-w-xl text-[13px] leading-relaxed text-text-muted">
                  {project.statusNote}
                </p>
              </LedgerRow>

              <LedgerRow label="Case study">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                  <Link
                    href={project.caseStudyUrl}
                    className="link-draw inline-flex min-h-[44px] items-center text-sm font-semibold text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
              </LedgerRow>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
