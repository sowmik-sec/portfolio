import type { FC } from "react";

/**
 * Hero as an architectural title block: identity and availability are set into
 * the ruled edges of a framed sheet, the positioning statement hangs large in
 * the middle. Registration ticks mark the sheet's corners — the same framing
 * device the project artboards use below.
 */
export const Hero: FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      className="relative scroll-mt-24 py-8 sm:py-12 md:py-16"
    >
      <div className="relative border border-border bg-surface p-6 sm:p-10 md:p-14">
        {/* Corner registration ticks (decorative) */}
        <span aria-hidden="true" className="pointer-events-none absolute -left-2.5 -top-2.5 h-3.5 w-3.5 border-l border-t border-text-muted/70" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-2.5 -top-2.5 h-3.5 w-3.5 border-r border-t border-text-muted/70" />
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-2.5 -left-2.5 h-3.5 w-3.5 border-b border-l border-text-muted/70" />
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-2.5 -right-2.5 h-3.5 w-3.5 border-b border-r border-text-muted/70" />

        {/* Sheet header: identity row, ruled under */}
        <div className="flex flex-col gap-1.5 border-b border-border-subtle pb-4 text-[13px] font-medium text-text-muted sm:flex-row sm:items-baseline sm:justify-between">
          <p>Md. Ahsan Habib</p>
          <p>Full Stack Developer</p>
        </div>

        {/* Positioning statement */}
        <h1
          id="hero-headline"
          className="mt-10 max-w-4xl font-serif text-display text-text-primary sm:mt-14"
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
          {/* Primary CTA — ink at rest, the active-layer green when engaged */}
          <a
            href="#work"
            className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-text-primary px-6 py-3 text-sm font-semibold text-background transition-colors duration-200 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>View my work</span>
            <svg
              className="ml-2 h-4 w-4 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>

          {/* Secondary CTA */}
          <a
            href="/Md.%20Ahsan%20Habib%20Resume.pdf"
            download="Md_Ahsan_Habib_Resume.pdf"
            className="link-draw inline-flex min-h-[44px] items-center text-sm font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg
              className="mr-2 h-4 w-4 stroke-current text-text-muted"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download résumé</span>
          </a>
        </div>

        {/* Sheet footer: availability row, ruled over */}
        <div className="mt-12 flex flex-col gap-1.5 border-t border-border-subtle pt-4 text-[13px] text-text-muted sm:mt-16 sm:flex-row sm:items-baseline sm:justify-between">
          <p>Dhaka, Bangladesh — remote worldwide</p>
          <p>Open to full-time roles &amp; contracts</p>
        </div>
      </div>
    </section>
  );
};
