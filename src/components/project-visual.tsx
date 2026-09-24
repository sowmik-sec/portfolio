import type { FC } from "react";

interface ProjectVisualProps {
  projectId: string;
  projectTitle: string;
}

/**
 * Product interface mockups representing production software.
 * Framed by the Artboard component in Selected Work — these render the
 * product's own interface only (no fake browser chrome).
 *
 * TODO: Replace with high-resolution production screenshots once exported:
 * - Pixoree: public/images/pixoree-hero.webp (from https://pixoree.app/)
 * - Children of the Ummah: public/images/children-of-the-ummah-hero.webp (from https://www.childrenoftheummah.org.uk/)
 */
export const ProjectVisual: FC<ProjectVisualProps> = ({ projectId, projectTitle }) => {
  if (projectId === "pixoree") {
    return <PixoreeVisual />;
  }

  if (projectId === "children-of-the-ummah") {
    return <ChildrenOfTheUmmahVisual />;
  }

  return (
    <div className="flex aspect-16/9 w-full items-center justify-center bg-surface-elevated text-text-muted">
      <span>{projectTitle} visual placeholder</span>
    </div>
  );
};

/**
 * Visual for Pixoree: Interactive Graphic Design Platform
 * Emphasizes Fabric.js canvas engine, layers, drag-and-drop, and vector transformations.
 */
function PixoreeVisual() {
  return (
    <div
      className="w-full bg-surface"
      aria-label="Pixoree Interactive Canvas Editor Interface Preview"
    >
      {/* TODO: Replace with high-resolution production screenshot from https://pixoree.app/ in public/images/pixoree-hero.webp */}

      {/* Editor App Header */}
      <div className="flex h-11 items-center justify-between border-b border-border/70 bg-surface-elevated/60 px-4">
        <span className="font-mono text-[11px] text-text-muted">
          pixoree.app / studio
        </span>

        {/* Project Title & Export Action */}
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-xs font-medium text-text-primary sm:inline-block">
            Certificate_Achievement.pxr
          </span>
          <div className="hidden rounded-xs border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-text-primary sm:block">
            Export PNG / PDF
          </div>
        </div>
      </div>

      {/* Editor Main Canvas Body */}
      <div className="relative flex aspect-16/10 w-full min-h-[340px] sm:min-h-[440px] md:min-h-[480px]">
        {/* Left Toolbar (Canvas tools) */}
        <div className="hidden w-14 flex-col items-center gap-4 border-r border-border/60 bg-surface/50 py-5 sm:flex">
          {[
            { label: "Select", active: false, icon: "M3 3l7 18 3-7 7-3L3 3z" },
            {
              label: "Templates",
              active: false,
              icon: "M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
            },
            {
              label: "Text",
              active: true,
              icon: "M4 6h16M12 6v14",
            },
            {
              label: "Shapes",
              active: false,
              icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
            },
            {
              label: "Layers",
              active: false,
              icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
            },
          ].map((tool) => (
            <div
              key={tool.label}
              className={`rounded-md p-2 ${
                tool.active
                  ? "bg-accent/10 text-accent"
                  : "text-text-muted"
              }`}
              title={tool.label}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={tool.icon} />
              </svg>
            </div>
          ))}
        </div>

        {/* Center Workspace (Canvas Viewport) */}
        <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-surface-elevated/40 p-4 sm:p-8">
          {/* Interactive Document Artboard */}
          <div className="relative aspect-4/3 w-full max-w-sm border border-border bg-surface p-5 shadow-md sm:max-w-md md:max-w-lg">
            {/* Certificate Decorative Border */}
            <div className="relative flex h-full flex-col justify-between border-2 border-dashed border-accent/30 p-4 sm:p-6">
              {/* Artboard Header */}
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
                  Certificate of Excellence
                </p>
                <h4 className="mt-1 font-serif text-sm font-bold text-text-primary sm:text-base md:text-lg">
                  Advanced Full-Stack Engineering
                </h4>
              </div>

              {/* Active Selection on Recipient Element (Fabric.js Transformer demo) */}
              <div className="relative my-2 rounded-xs border border-accent p-2 text-center">
                {/* Transform Corner Handles */}
                <span className="absolute -top-1.5 -left-1.5 h-3 w-3 rounded-xs border border-accent bg-surface" />
                <span className="absolute -top-1.5 -right-1.5 h-3 w-3 rounded-xs border border-accent bg-surface" />
                <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 rounded-xs border border-accent bg-surface" />
                <span className="absolute -bottom-1.5 -right-1.5 h-3 w-3 rounded-xs border border-accent bg-surface" />
                {/* Rotation Handle Pin */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <span className="h-2 w-2 rounded-full border border-accent bg-accent" />
                  <span className="h-3 w-px bg-accent" />
                </div>

                <p className="text-xs font-semibold text-text-primary sm:text-sm">
                  Md. Ahsan Habib
                </p>
              </div>

              {/* Footer signature lines */}
              <div className="flex items-end justify-between pt-3">
                <div className="h-0.5 w-16 bg-text-muted/40" />
                <div className="h-0.5 w-16 bg-text-muted/40" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Properties Inspector */}
        <div className="hidden w-44 flex-col gap-3 border-l border-border/60 bg-surface/50 p-3 lg:flex">
          <span className="font-mono text-[11px] font-semibold text-text-muted">
            Object Inspector
          </span>

          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <span className="text-[11px] text-text-secondary">Type</span>
              <span className="font-mono text-[11px] font-medium text-text-primary">
                i-text (Editable)
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <span className="text-[11px] text-text-secondary">Font</span>
              <span className="font-mono text-[11px] font-medium text-text-primary">
                Instrument Sans
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-text-secondary">Layer</span>
              <span className="font-mono text-[11px] font-medium text-accent">
                Z-Index: 3
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Visual for Children of the Ummah: International Charity Platform
 * Emphasizes multi-currency donation flows, Stripe integration, and recurring contributions.
 */
function ChildrenOfTheUmmahVisual() {
  return (
    <div
      className="w-full bg-surface"
      aria-label="Children of the Ummah Charity Platform Interface Preview"
    >
      {/* TODO: Replace with high-resolution production screenshot from https://www.childrenoftheummah.org.uk/ in public/images/children-of-the-ummah-hero.webp */}

      {/* App Header: address & currency switcher */}
      <div className="flex h-11 items-center justify-between border-b border-border/70 bg-surface-elevated/60 px-4">
        <span className="font-mono text-[11px] text-text-muted">
          childrenoftheummah.org.uk
        </span>

        {/* Currency Switcher Demo */}
        <div className="flex items-center gap-1 rounded-xs border border-border bg-surface p-0.5 font-mono text-[11px]">
          <span className="rounded-xs bg-accent px-1.5 py-0.5 font-bold text-accent-foreground">
            GBP £
          </span>
          <span className="px-1.5 py-0.5 text-text-muted">
            USD $
          </span>
          <span className="px-1.5 py-0.5 text-text-muted">
            EUR €
          </span>
        </div>
      </div>

      {/* Main Campaign & Checkout Interface */}
      <div className="relative aspect-16/10 w-full min-h-[340px] bg-surface-elevated/30 p-4 sm:min-h-[440px] sm:p-6 md:p-8">
        <div className="mx-auto grid h-full max-w-4xl grid-cols-1 items-center gap-6 lg:grid-cols-12">
          {/* Left Column: Campaign Appeal Narrative */}
          <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-text-muted">
                Emergency Relief Appeal
              </p>

              <h4 className="mt-3 font-serif text-lg font-bold text-text-primary sm:text-xl">
                Global Orphan Care &amp; Clean Water Projects
              </h4>

              <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                Providing urgent nutrition, education support, and clean water infrastructure to vulnerable children and displaced families across multiple international territories.
              </p>
            </div>

            {/* Platform trust notes */}
            <div className="space-y-1.5 border-t border-border/60 pt-3">
              <p className="text-[11px] leading-relaxed text-text-secondary sm:text-xs">
                100% secure checkout via Stripe · UK Gift Aid · Instant tax receipts
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Multi-Currency Donation Module */}
          <div className="rounded-lg border border-border bg-surface p-5 shadow-md lg:col-span-7">
            {/* Frequency Tabs */}
            <div className="flex rounded-md border border-border bg-surface-elevated p-1 text-xs font-medium" aria-hidden="true">
              <span className="flex-1 rounded-xs bg-surface py-2 text-center font-semibold text-text-primary shadow-2xs">
                One-Time Gift
              </span>
              <span className="flex-1 rounded-xs py-2 text-center text-text-muted">
                Monthly Recurring
              </span>
            </div>

            {/* Amount Selection Grid */}
            <div className="mt-4">
              <span className="block text-[11px] font-medium text-text-muted">
                Select Donation Amount (GBP)
              </span>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {["£25", "£50", "£100", "£250"].map((amt, idx) => (
                  <div
                    key={amt}
                    className={`flex flex-col items-center justify-center rounded-md border py-2.5 text-center font-mono text-sm ${
                      idx === 2
                        ? "border-accent bg-accent/10 font-bold text-accent"
                        : "border-border bg-surface text-text-primary"
                    }`}
                  >
                    <span>{amt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Amount Field */}
            <div className="mt-3">
              <div className="flex items-center rounded-md border border-border bg-surface-elevated/40 px-3 py-2 text-xs text-text-muted">
                <span className="mr-2 font-mono font-medium text-text-primary">£</span>
                <span>Or enter a custom amount</span>
              </div>
            </div>

            {/* Impact Statement */}
            <p className="mt-3 text-[11px] leading-relaxed text-text-muted">
              £100 delivers medical care kits and clean water filtration for 2 families for an entire month.
            </p>

            {/* Checkout Action Button */}
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/60 pt-3">
              <div className="flex items-center gap-1.5 text-[11px] text-text-muted">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Powered by Stripe</span>
              </div>

              <div className="inline-flex items-center rounded-sm bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground">
                <span>Donate £100 Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
