import type { Metadata } from "next";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { ProjectVisual } from "@/components/project-visual";
import { StatCallout } from "@/components/stat-callout";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahsanhabib.dev";

export const metadata: Metadata = {
  title: "Children of the Ummah Case Study",
  description:
    "Engineering case study for Children of the Ummah: an international humanitarian charity donation platform with multi-currency checkout, custom Stripe integration, and recurring subscriptions.",
  alternates: {
    canonical: "/projects/children-of-the-ummah",
  },
  openGraph: {
    type: "article",
    url: "/projects/children-of-the-ummah",
    title: "Children of the Ummah Case Study — Md. Ahsan Habib",
    description:
      "Deep dive into architecting resilient international donation infrastructure: multi-currency processing (GBP, USD, EUR), Stripe custom payment elements, recurring subscriptions, and production reliability.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Children of the Ummah Engineering Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Children of the Ummah Case Study — Md. Ahsan Habib",
    description:
      "Deep dive into architecting resilient international donation infrastructure: multi-currency processing (GBP, USD, EUR), Stripe custom payment elements, and recurring subscriptions.",
    images: ["/opengraph-image"],
  },
};

export default function ChildrenOfTheUmmahCaseStudyPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Children of the Ummah Engineering Case Study",
    description:
      "Deep dive into architecting resilient international donation infrastructure: multi-currency processing (GBP, USD, EUR), Stripe custom payment elements, recurring subscriptions, and production reliability.",
    author: {
      "@type": "Person",
      name: "Md. Ahsan Habib",
      url: siteUrl,
    },
    url: `${siteUrl}/projects/children-of-the-ummah`,
    about: [
      "Stripe Payments",
      "Multi-Currency Checkout",
      "Next.js",
      "TypeScript",
      "Humanitarian Charity Platform",
    ],
  };

  return (
    <article className="py-8 sm:py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdArticle).replace(/</g, "\\u003c"),
        }}
      />
      {/* Back Link / Breadcrumb */}
      <CaseStudyNav backHref="/#work" backLabel="Back to Selected Work" />

      {/* Case Study Header */}
      <CaseStudyHeader
        title="Children of the Ummah"
        tagline="A humanitarian giving platform with localized multi-currency checkouts, automated recurring monthly contributions, and a carefully built Stripe payment flow."
        category="Humanitarian Platform"
        status="Shipped"
        role="Full Stack Developer"
        timeline="Shipped &amp; Maintained"
        techStack={["Next.js", "TypeScript", "Stripe", "MongoDB", "React", "Tailwind CSS"]}
        externalLink={{
          label: "Visit childrenoftheummah.org.uk",
          url: "https://www.childrenoftheummah.org.uk/",
        }}
      />

      {/* Platform Interface Visual Preview */}
      <div className="mt-10 sm:mt-12">
        <ProjectVisual
          projectId="children-of-the-ummah"
          projectTitle="Children of the Ummah"
        />
      </div>

      {/* Verified Project Metric (PRD §12: project metric, if verified) */}
      <div className="mt-12 sm:mt-16">
        <StatCallout
          value="£43,000+"
          caption="processed in donations"
          detail="≈ 7.3M BDT · GBP / USD / EUR"
        />
      </div>

      {/* Main Case Study Sections */}
      <div className="mt-12 space-y-12 sm:space-y-16">
        {/* Section 1: Executive Overview & The Problem */}
        <CaseStudySection
          id="mission-context"
          badge="Product Overview"
          title="Reliable Giving for Emergency Relief &amp; Orphan Support"
          subtitle="Architecting a modern digital donation platform to support urgent international humanitarian appeals."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              <strong>Children of the Ummah</strong> is a registered non-profit organization providing critical humanitarian aid across multiple countries, including emergency disaster response, orphan sponsorship, nutrition packages, and clean water wells.
            </p>
            <p>
              When emergency appeals launch during natural crises or regional conflicts, donation traffic can surge rapidly. The digital platform needed to guarantee friction-free, high-trust checkout experiences for international donors giving from the UK, North America, and Europe, while providing complete transparency, automated Gift Aid compliance, and zero payment loss.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                Multi-Currency
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                Native processing in British Pounds (GBP), US Dollars (USD), and Euros (EUR) to eliminate foreign transaction surprises.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                Custom Checkout Forms
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                Headless payment flows built on Stripe Elements, eliminating offsite redirect drops and reinforcing donor trust.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                Automated Retries &amp; Webhooks
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                Idempotent event consumers handling edge-case network dropouts, subscription renewals, and instant receipt dispatch.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 2: Multi-Currency Architecture */}
        <CaseStudySection
          id="multi-currency"
          badge="Global Payments"
          title="Multi-Currency Processing (GBP, USD, EUR)"
          subtitle="Eliminating friction and currency conversion surprises for international supporters."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              A major source of abandoned donation carts for international charities is forcing global donors to pay in a single foreign currency. When a US or European donor encounters British Pounds without clear conversion, banks often charge unexpected foreign exchange fees and flagging algorithms decline the transaction.
            </p>
            <p>
              To solve this, Children of the Ummah runs a multi-currency presentation and checkout engine:
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-surface-elevated/40 p-5">
              <h3 className="text-base font-bold text-text-primary">
                1. Localized Currency Detection &amp; Selection
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                The platform intelligently presets currency based on donor locale headers (GBP £ for UK visitors, USD $ for the US and international regions, EUR € for mainland Europe), while providing an explicit, prominent currency toggle in the donation module.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface-elevated/40 p-5">
              <h3 className="text-base font-bold text-text-primary">
                2. Explicit Currency Denominations &amp; Impact Matching
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Preset donation tiers are intentionally denominated in round numbers for each currency (e.g. £25 / £50 / £100 vs $30 / $65 / $125) with dynamic narrative descriptions showing the tangible relief impact of each tier in that regional denomination.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface-elevated/40 p-5">
              <h3 className="text-base font-bold text-text-primary">
                3. Zero-Decimal &amp; Cent Precision Accounting
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                All monetary figures are stored and processed in smallest currency units (pence/cents) to prevent floating-point rounding errors. Stripe Payment Intents pass exact ISO-4217 currency identifiers directly, ensuring bank statements accurately reflect the exact sum selected by the donor.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 3: Stripe Custom Forms & Payment Pipeline */}
        <CaseStudySection
          id="stripe-integration"
          badge="Security &amp; Checkout"
          title="Stripe Custom Forms &amp; Headless Payment Pipeline"
          subtitle="Secure tokenized payments and frictionless one-page donation flows."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              Redirecting donors away from the charity website to hosted external checkout portals causes substantial drop-offs in donor conversion. Children of the Ummah employs custom, in-line Stripe Elements embedded directly into the campaign experience:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-mono text-sm font-bold text-text-primary">
                PCI DSS Level 1 Compliance
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                Card numbers, expiration dates, and CVCs are tokenized directly within isolated Stripe iframes. The application server never sees, transmits, or stores raw card data, eliminating PCI scope and keeping the infrastructure secure.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-mono text-sm font-bold text-text-primary">
                Dynamic 3D Secure 2 (SCA)
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                Strong Customer Authentication (SCA) triggers modal bank challenges only when required by regional fraud rules, preventing unnecessary verification barriers on low-risk transactions while ensuring complete regulatory compliance.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-mono text-sm font-bold text-text-primary">
                Custom Donation Amount Inputs
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                In addition to pre-configured tiers, a sanitized custom input allows donors to contribute exact sums. Client and server validation guarantees minimum threshold enforcement to prevent card testing bot attacks.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-mono text-sm font-bold text-text-primary">
                Digital Wallet Support
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                Integrated payment request buttons enable one-tap donations via Apple Pay and Google Pay on supported mobile devices, reducing donation checkout times to under 10 seconds.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 4: One-Off vs Recurring Donations */}
        <CaseStudySection
          id="donations-flow"
          badge="Recurring Sustenance"
          title="One-Off Gifts vs. Automated Recurring Donations"
          subtitle="Maximizing donor lifetime impact through recurring Stripe subscription schedules."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              Long-term humanitarian programs like monthly orphan stipends and school sponsorships require predictable recurring revenue. The checkout engine supports both gift types with equal simplicity:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <h3 className="text-base font-bold text-text-primary">
                  One-Off Emergency Contributions
                </h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                Executes via instantaneous <strong>Stripe Payment Intents</strong>. Ideal for immediate disaster response appeals, Ramadan giving, and ad-hoc emergency medical interventions. The transaction completes in a single synchronous cycle.
              </p>
              <ul className="mt-4 space-y-1.5 font-mono text-xs text-text-muted">
                <li>• Single-phase confirmation</li>
                <li>• Immediate PDF tax invoice receipt</li>
                <li>• Specific campaign earmarking</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent/50" />
                <h3 className="text-base font-bold text-text-primary">
                  Recurring Monthly Sponsorships
                </h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                Built on <strong>Stripe Subscriptions &amp; Customers API</strong>. Creates a persistent customer record with automated monthly renewal schedules, recurring gift aid tagging, and proactive card expiration reminders.
              </p>
              <ul className="mt-4 space-y-1.5 font-mono text-xs text-text-muted">
                <li>• Automated monthly billing runs</li>
                <li>• Smart retries for failed card attempts</li>
                <li>• Self-service donor management link</li>
              </ul>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 5: Production Stability & Operations */}
        <CaseStudySection
          id="production-stability"
          badge="Operational Reliability"
          title="Production Stability, Webhook Idempotency &amp; Gift Aid"
          subtitle="Ensuring zero dropped contributions and strict regulatory record-keeping."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              Payment systems in charity environments carry high stakes: a dropped donation during a television or social media telethon is lost humanitarian support. The production infrastructure has fail-safes at each step:
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-surface-elevated/40 p-5">
              <h3 className="text-base font-bold text-text-primary">
                Idempotent Webhook Processing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Stripe webhooks (`payment_intent.succeeded`, `invoice.payment_succeeded`) verify cryptographically signed payload signatures. Incoming events are logged against unique transaction IDs in MongoDB to guarantee that re-transmitted webhooks never process twice or trigger duplicate receipts.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface-elevated/40 p-5">
              <h3 className="text-base font-bold text-text-primary">
                UK Gift Aid Declarations
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Eligible UK taxpayers can confirm their Gift Aid status with a single checkbox. The system records full donor address records, tax declarations, and timestamps in accordance with HMRC reporting guidelines, allowing the charity to reclaim an additional 25% from the UK government.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface-elevated/40 p-5">
              <h3 className="text-base font-bold text-text-primary">
                Automated Transactional Receipts
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Upon successful confirmation, transactional email receipts with donor reference numbers, donation breakdown, and charity registration details are dispatched immediately via transactional mail infrastructure.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 6: Tech Stack Summary */}
        <CaseStudySection
          id="tech-stack"
          badge="Specifications"
          title="Technology Stack &amp; Infrastructure"
          subtitle="Reliable technologies powering Children of the Ummah."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-surface p-4">
              <span className="font-mono text-xs font-semibold text-accent">Payment Gateway</span>
              <p className="mt-1 font-bold text-text-primary">Stripe API</p>
              <p className="mt-1 text-xs text-text-muted">Elements, Payment Intents &amp; Subscriptions</p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-4">
              <span className="font-mono text-xs font-semibold text-accent">Framework</span>
              <p className="mt-1 font-bold text-text-primary">Next.js &amp; TypeScript</p>
              <p className="mt-1 text-xs text-text-muted">Type-safe full-stack routes &amp; SSR</p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-4">
              <span className="font-mono text-xs font-semibold text-accent">Database</span>
              <p className="mt-1 font-bold text-text-primary">MongoDB</p>
              <p className="mt-1 text-xs text-text-muted">Donor records, audit logs &amp; campaigns</p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-4">
              <span className="font-mono text-xs font-semibold text-accent">Styling</span>
              <p className="mt-1 font-bold text-text-primary">Tailwind CSS</p>
              <p className="mt-1 text-xs text-text-muted">Responsive mobile checkout UI</p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-border/70 bg-surface-elevated/40 p-5">
            <h3 className="text-sm font-bold text-text-primary">Engineering Takeaways</h3>
            <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
              Building international charity donation infrastructure demands close attention to trust, multi-currency clarity, and reliable payment error handling. By eliminating friction and holding steady under traffic spikes, Children of the Ummah provides a secure lifeline for vulnerable children and communities worldwide.
            </p>
          </div>
        </CaseStudySection>
      </div>

      {/* Footer Navigation Back to Work */}
      <div className="mt-16 border-t border-border/70 pt-8 sm:mt-24">
        <CaseStudyNav backHref="/#work" backLabel="Return to Selected Work" />
      </div>
    </article>
  );
}
