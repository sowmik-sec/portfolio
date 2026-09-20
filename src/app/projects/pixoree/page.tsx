import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pixoree Case Study — Md. Ahsan Habib",
  description:
    "Engineering case study for Pixoree: an interactive browser-based graphic design tool with Fabric.js.",
};

export default function PixoreeCaseStudyStubPage() {
  return (
    <div className="py-12 sm:py-16 md:py-24">
      {/* Back Link */}
      <Link
        href="/#pixoree"
        className="group inline-flex items-center gap-1.5 font-mono text-xs text-text-muted transition-colors hover:text-text-primary"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        <span>Back to Selected Work</span>
      </Link>

      <div className="mt-8 border-b border-border/60 pb-6">
        <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
          Case Study Stub · Phase 4
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
          Pixoree
        </h1>
        <p className="mt-2 text-base text-text-secondary sm:text-lg">
          Interactive design platform engineered with Fabric.js, Next.js, and TypeScript.
        </p>
      </div>

      <div className="mt-8 max-w-2xl space-y-6 text-text-secondary">
        <p className="leading-relaxed">
          The deep-dive technical case study for Pixoree will be published in <strong>Phase 4</strong>. It will cover canvas engine architecture, transform algorithms, multi-layer rendering, undo/redo state trees, and client-side asset export.
        </p>

        <div className="rounded-lg border border-border/80 bg-surface-elevated/50 p-5">
          <h2 className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Live Application
          </h2>
          <p className="mt-2 text-sm text-text-primary">
            You can explore the live production platform right now:
          </p>
          <div className="mt-4">
            <a
              href="https://pixoree.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-text-primary px-4 py-2.5 text-xs font-semibold text-background transition-opacity hover:opacity-90"
            >
              <span>Launch pixoree.app</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
