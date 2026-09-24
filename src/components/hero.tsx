import type { FC } from "react";
import { LedgerRow } from "./ledger-row";

/**
 * Hero as an open ledger entry: a role line, the positioning statement set
 * bold and tight in the grotesk, plain CTAs, and the availability facts
 * filed as spec rows under a rule.
 */
export const Hero: FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      className="relative scroll-mt-24 py-16 sm:py-24 md:py-32"
    >
      {/* Role line */}
      <p className="text-[13px] font-medium text-text-muted">
        Full Stack Developer
      </p>

      {/* Positioning statement */}
      <h1
        id="hero-headline"
        className="mt-6 max-w-4xl text-display font-semibold text-text-primary sm:mt-8"
      >
        I build fast, scalable web products from idea to production.
      </h1>

      {/* Supporting copy */}
      <p className="mt-8 max-w-2xl text-lead text-text-secondary">
        Full-stack developer at Deadlock Soft. I take products from data
        model to deployed app — SaaS platforms, canvas tools, payment
        systems.
      </p>

      {/* Primary & Secondary Call to Actions */}
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 sm:mt-12">
        {/* Primary CTA — ink at rest, ledger green when engaged */}
        <a
          href="#work"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xs bg-text-primary px-6 py-3 text-sm font-semibold text-background transition-colors duration-150 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span>View my work</span>
        </a>

        {/* Secondary CTA */}
        <a
          href="/Md.%20Ahsan%20Habib%20Resume.pdf"
          download="Md_Ahsan_Habib_Resume.pdf"
          className="link-draw inline-flex min-h-[44px] items-center text-sm font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span>Download résumé</span>
        </a>
      </div>

      {/* Availability spec rows */}
      <div className="mt-12 space-y-2 border-t border-border pt-6 sm:mt-16">
        <LedgerRow label="Based in">
          <p className="text-[15px] text-text-secondary">
            Dhaka, Bangladesh — remote worldwide
          </p>
        </LedgerRow>
        <LedgerRow label="Open to">
          <p className="text-[15px] text-text-secondary">
            Full-time roles &amp; contracts
          </p>
        </LedgerRow>
      </div>
    </section>
  );
};
