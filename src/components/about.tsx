import type { FC } from "react";
import Image from "next/image";
import { LedgerRow } from "./ledger-row";

export const About: FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative scroll-mt-24 py-20 sm:py-28 md:py-36"
    >
      {/* Section Header */}
      <h2
        id="about-title"
        className="text-title font-semibold text-text-primary"
      >
        About Ahsan
      </h2>

      {/* Ledger */}
      <div className="mt-12 space-y-8 border-t border-border pt-8 sm:mt-16">
        <LedgerRow label="Portrait">
          <figure className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">
            <div className="w-40 shrink-0 overflow-hidden border border-border bg-surface-muted">
              {/* Note: Can be replaced with actual photo in public/images/headshot.jpg */}
              <Image
                src="/images/headshot.svg"
                alt="Md. Ahsan Habib — Full Stack Developer"
                width={240}
                height={240}
                sizes="160px"
                loading="lazy"
                className="aspect-square h-auto w-full object-cover"
                priority={false}
              />
            </div>
            <figcaption>
              <span className="block text-sm font-semibold text-text-primary">
                Md. Ahsan Habib
              </span>
              <span className="mt-0.5 block text-[13px] text-text-muted">
                Dhaka, Bangladesh — remote worldwide
              </span>
            </figcaption>
          </figure>
        </LedgerRow>

        <LedgerRow label="Profile">
          <div className="max-w-2xl space-y-4 text-lead text-text-secondary">
            <p>
              I&apos;m a <strong className="font-semibold text-text-primary">Full Stack Developer</strong> who turns product ideas into working web applications and SaaS platforms — software that is fast, maintainable, and built to last.
            </p>
            <p>
              Shipping <strong className="text-text-primary">Pixoree</strong> (a browser-based design canvas built on Fabric.js) and <strong className="text-text-primary">Children of the Ummah</strong> (an international donation platform with multi-currency Stripe checkouts) taught me the whole product lifecycle: data modeling, backend services, and responsive, accessible interfaces.
            </p>
            <p>
              Currently at <strong className="font-semibold text-text-primary">Deadlock Soft</strong>, I build production web applications with Next.js, TypeScript, Go, Tailwind, and MongoDB.
            </p>
          </div>
        </LedgerRow>

        <LedgerRow label="Elsewhere">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <a
              href="https://github.com/sowmik-sec"
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Visit Ahsan's GitHub profile (opens in new tab)"
            >
              <span>GitHub</span>
              <span className="text-[13px] text-text-muted">sowmik-sec</span>
            </a>

            <a
              href="https://www.linkedin.com/in/md-ahsan-habib-18569b21a/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Connect with Ahsan on LinkedIn (opens in new tab)"
            >
              <span>LinkedIn</span>
              <span className="text-[13px] text-text-muted">md-ahsan-habib</span>
            </a>
          </div>
        </LedgerRow>
      </div>
    </section>
  );
};
