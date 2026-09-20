import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Children of the Ummah Case Study — Md. Ahsan Habib",
  description:
    "Engineering case study for Children of the Ummah: an international humanitarian donation platform.",
};

export default function ChildrenOfTheUmmahCaseStudyStubPage() {
  return (
    <div className="py-12 sm:py-16 md:py-24">
      {/* Back Link */}
      <Link
        href="/#children-of-the-ummah"
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
          Children of the Ummah
        </h1>
        <p className="mt-2 text-base text-text-secondary sm:text-lg">
          International charity platform with multi-currency donations and Stripe integration.
        </p>
      </div>

      <div className="mt-8 max-w-2xl space-y-6 text-text-secondary">
        <p className="leading-relaxed">
          The comprehensive case study for Children of the Ummah will be published in <strong>Phase 4</strong>. It will detail multi-currency donation architecture (GBP, USD, EUR), automated recurring Stripe subscriptions, Gift Aid reporting, and high-reliability production operations.
        </p>

        <div className="rounded-lg border border-border/80 bg-surface-elevated/50 p-5">
          <h2 className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Live Application
          </h2>
          <p className="mt-2 text-sm text-text-primary">
            You can visit the live charity platform:
          </p>
          <div className="mt-4">
            <a
              href="https://www.childrenoftheummah.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-text-primary px-4 py-2.5 text-xs font-semibold text-background transition-opacity hover:opacity-90"
            >
              <span>Launch childrenoftheummah.org.uk</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
