import type { FC } from "react";

/**
 * Hero as an open editorial statement: a small sans role line, the
 * positioning statement in Newsreader rising softly once on load, serif lead
 * prose, and quiet CTAs. After the entrance, the page is completely still.
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

      {/* Positioning statement — the one motion moment */}
      <h1
        id="hero-headline"
        className="hero-rise mt-6 max-w-4xl font-serif text-display text-text-primary sm:mt-8"
      >
        I build fast, scalable web products from idea to production.
      </h1>

      {/* Supporting copy */}
      <p className="mt-8 max-w-2xl font-serif text-lead text-text-secondary">
        Full-stack developer at Deadlock Soft. I take products from data
        model to deployed app — SaaS platforms, canvas tools, payment
        systems.
      </p>

      {/* Primary & Secondary Call to Actions */}
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 sm:mt-12">
        {/* Primary CTA — ink at rest, green when engaged */}
        <a
          href="#work"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xs bg-text-primary px-6 py-3 text-sm font-semibold text-background transition-colors duration-200 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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

      {/* Availability line */}
      <p className="mt-10 text-[13px] text-text-muted sm:mt-12">
        Dhaka, Bangladesh — remote worldwide. Open to full-time roles &amp;
        contracts.
      </p>
    </section>
  );
};
