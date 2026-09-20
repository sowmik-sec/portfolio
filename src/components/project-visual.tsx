import type { FC } from "react";

interface ProjectVisualProps {
  projectId: string;
  projectTitle: string;
}

/**
 * High-impact product visual mockups representing production software.
 * Built with responsive SVG and Tailwind styling to communicate production scale.
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
    <div className="flex aspect-16/9 w-full items-center justify-center rounded-xl border border-border bg-surface-elevated text-text-muted">
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
      className="group relative w-full overflow-hidden rounded-xl border border-border/80 bg-surface shadow-md transition-all duration-300 hover:border-border hover:shadow-lg dark:bg-[#111317]"
      aria-label="Pixoree Interactive Canvas Editor Interface Preview"
    >
      {/* TODO: Replace with high-resolution production screenshot from https://pixoree.app/ in public/images/pixoree-hero.webp */}

      {/* Editor Window Chrome / Header */}
      <div className="flex h-11 items-center justify-between border-b border-border/70 bg-surface-elevated/70 px-4 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EC6A5E]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F5BF4F]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#62C554]/80" />
          </div>
          <span className="ml-2 hidden font-mono text-[11px] text-text-muted sm:inline-block">
            pixoree.app / studio
          </span>
        </div>

        {/* Project Title & Status */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold text-text-primary">
            Certificate_Achievement.pxr
          </span>
          <span className="hidden rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent sm:inline-block">
            Auto-saved
          </span>
        </div>

        {/* Engine Badge & Export Action */}
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 font-mono text-[11px] text-text-muted md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Fabric.js 5.3
          </span>
          <div className="rounded border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-text-primary shadow-2xs">
            Export PNG / PDF
          </div>
        </div>
      </div>

      {/* Editor Main Canvas Body */}
      <div className="relative flex aspect-16/10 w-full min-h-[340px] sm:min-h-[440px] md:min-h-[480px]">
        {/* Left Toolbar (Canvas tools) */}
        <div className="hidden w-16 flex-col items-center gap-5 border-r border-border/60 bg-surface/50 py-4 sm:flex">
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
              className={`flex flex-col items-center gap-1 rounded-md p-1.5 transition-colors ${
                tool.active
                  ? "bg-accent/10 text-accent font-semibold"
                  : "text-text-muted hover:text-text-primary"
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
              >
                <path d={tool.icon} />
              </svg>
              <span className="text-[9px] tracking-tight">{tool.label}</span>
            </div>
          ))}
        </div>

        {/* Center Workspace (Canvas Viewport) */}
        <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-surface-elevated/40 p-4 sm:p-8">
          {/* Top secondary toolbar: History / Zoom / Dimensions */}
          <div className="absolute top-3 left-4 right-4 z-10 flex items-center justify-between text-[11px] text-text-muted">
            <div className="flex items-center gap-2">
              <span className="rounded bg-surface px-2 py-0.5 font-mono shadow-2xs">
                Undo ⎌
              </span>
              <span className="rounded bg-surface px-2 py-0.5 font-mono shadow-2xs">
                Redo ⎂
              </span>
              <span className="hidden font-mono text-[10px] md:inline-block">
                Zoom 100% · 1920 × 1080px
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px]">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              <span>Canvas Active</span>
            </div>
          </div>

          {/* Interactive Document Artboard */}
          <div className="relative aspect-4/3 w-full max-w-sm rounded-lg border border-border bg-surface p-5 shadow-lg transition-transform duration-300 ease-out group-hover:scale-[1.01] motion-reduce:transform-none sm:max-w-md md:max-w-lg">
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
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted sm:text-[10px]">
                  Certificate of Excellence
                </p>
                <h4 className="mt-1 font-serif text-sm font-bold text-text-primary sm:text-base md:text-lg">
                  Advanced Full-Stack Engineering
                </h4>
              </div>

              {/* Active Selection on Recipient Element (Fabric.js Transformer demo) */}
              <div className="relative my-2 rounded border border-accent bg-accent/5 p-2 text-center">
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
                  Candidate Name Placeholder
                </p>
                {/* Dimension HUD tooltip */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded bg-text-primary px-1.5 py-0.5 font-mono text-[9px] text-background shadow-xs">
                  w: 320px · h: 36px
                </div>
              </div>

              {/* Footer signatures & stamp */}
              <div className="flex items-end justify-between pt-3">
                <div className="space-y-1">
                  <div className="h-0.5 w-16 bg-text-muted/40" />
                  <p className="font-mono text-[8px] text-text-muted">Instructor Signature</p>
                </div>
                {/* Verification Seal */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/5">
                  <span className="font-mono text-[8px] font-bold text-accent">VERIFIED</span>
                </div>
                <div className="space-y-1 text-right">
                  <div className="ml-auto h-0.5 w-16 bg-text-muted/40" />
                  <p className="font-mono text-[8px] text-text-muted">Date &amp; ID</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Feature Pills */}
          <div className="absolute bottom-3 left-4 hidden gap-2 sm:flex">
            <span className="rounded-full border border-border/80 bg-surface/90 px-2.5 py-1 font-mono text-[10px] text-text-secondary backdrop-blur-xs">
              Direct-Manipulation Canvas
            </span>
            <span className="rounded-full border border-border/80 bg-surface/90 px-2.5 py-1 font-mono text-[10px] text-text-secondary backdrop-blur-xs">
              Layer Hierarchy
            </span>
          </div>
        </div>

        {/* Right Properties Inspector */}
        <div className="hidden w-48 flex-col gap-3 border-l border-border/60 bg-surface/50 p-3 lg:flex">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-text-muted">
            Object Inspector
          </span>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <span className="text-text-secondary text-[11px]">Type</span>
              <span className="font-mono text-[11px] font-medium text-text-primary">
                i-text (Editable)
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <span className="text-text-secondary text-[11px]">Font</span>
              <span className="font-mono text-[11px] font-medium text-text-primary">
                Geist Sans
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <span className="text-text-secondary text-[11px]">Size</span>
              <span className="font-mono text-[11px] font-medium text-text-primary">
                24px
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <span className="text-text-secondary text-[11px]">Layer</span>
              <span className="font-mono text-[11px] font-medium text-accent">
                Z-Index: 3
              </span>
            </div>
          </div>

          <div className="mt-auto space-y-1.5 pt-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
              Stack Order
            </span>
            <div className="flex gap-1 text-[10px]">
              <span className="flex-1 rounded border border-border bg-surface py-1 text-center font-mono">
                Forward
              </span>
              <span className="flex-1 rounded border border-border bg-surface py-1 text-center font-mono">
                Backward
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
      className="group relative w-full overflow-hidden rounded-xl border border-border/80 bg-surface shadow-md transition-all duration-300 hover:border-border hover:shadow-lg dark:bg-[#111317]"
      aria-label="Children of the Ummah Charity Platform Interface Preview"
    >
      {/* TODO: Replace with high-resolution production screenshot from https://www.childrenoftheummah.org.uk/ in public/images/children-of-the-ummah-hero.webp */}

      {/* Top Browser / App Navigation Bar */}
      <div className="flex h-11 items-center justify-between border-b border-border/70 bg-surface-elevated/70 px-4 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EC6A5E]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F5BF4F]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#62C554]/80" />
          </div>
          <span className="ml-2 hidden font-mono text-[11px] text-text-muted sm:inline-block">
            childrenoftheummah.org.uk
          </span>
        </div>

        {/* Brand identity */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold tracking-tight text-text-primary">
            CHILDREN OF THE UMMAH
          </span>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
            Registered Charity
          </span>
        </div>

        {/* Currency Switcher Demo */}
        <div className="flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 font-mono text-[11px]">
          <span className="rounded bg-accent px-1.5 py-0.5 font-bold text-accent-foreground">
            GBP £
          </span>
          <span className="px-1.5 py-0.5 text-text-muted hover:text-text-primary">
            USD $
          </span>
          <span className="px-1.5 py-0.5 text-text-muted hover:text-text-primary">
            EUR €
          </span>
        </div>
      </div>

      {/* Main Campaign & Checkout Interface */}
      <div className="relative aspect-16/10 w-full min-h-[340px] sm:min-h-[440px] md:min-h-[480px] bg-surface-elevated/30 p-4 sm:p-6 md:p-8">
        <div className="mx-auto grid h-full max-w-4xl grid-cols-1 items-center gap-6 lg:grid-cols-12">
          {/* Left Column: Campaign Appeal Narrative */}
          <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-700 dark:text-amber-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                Emergency Relief Appeal
              </div>

              <h4 className="mt-3 text-lg font-bold text-text-primary sm:text-xl">
                Global Orphan Care &amp; Clean Water Projects
              </h4>

              <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                Providing urgent nutrition, education support, and clean water infrastructure to vulnerable children and displaced families across multiple international territories.
              </p>
            </div>

            {/* Platform Credibility Badges */}
            <div className="space-y-2 border-t border-border/60 pt-3">
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <svg className="h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>100% Secure Checkout via Stripe</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <svg className="h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Automated UK Gift Aid &amp; Instant Tax Receipts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Multi-Currency Donation Module */}
          <div className="rounded-xl border border-border bg-surface p-5 shadow-lg transition-transform duration-300 ease-out group-hover:scale-[1.01] motion-reduce:transform-none lg:col-span-7">
            {/* Frequency Tabs */}
            <div className="flex rounded-lg border border-border bg-surface-elevated p-1 text-xs font-medium">
              <button
                type="button"
                className="flex-1 rounded-md bg-surface py-2 text-center font-semibold text-text-primary shadow-2xs"
              >
                One-Time Gift
              </button>
              <button
                type="button"
                className="flex-1 rounded-md py-2 text-center text-text-muted hover:text-text-primary"
              >
                Monthly Recurring
              </button>
            </div>

            {/* Amount Selection Grid */}
            <div className="mt-4">
              <label className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                Select Donation Amount (GBP)
              </label>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {["£25", "£50", "£100", "£250"].map((amt, idx) => (
                  <div
                    key={amt}
                    className={`flex flex-col items-center justify-center rounded-lg border py-2.5 text-center font-mono text-sm transition-all ${
                      idx === 2
                        ? "border-accent bg-accent/10 font-bold text-accent shadow-xs"
                        : "border-border bg-surface text-text-primary hover:border-border/80"
                    }`}
                  >
                    <span>{amt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Amount Field */}
            <div className="mt-3">
              <div className="flex items-center rounded-lg border border-border bg-surface-elevated/40 px-3 py-2 text-xs text-text-muted">
                <span className="font-mono font-medium text-text-primary mr-2">£</span>
                <span className="text-text-muted">Or enter a custom amount</span>
              </div>
            </div>

            {/* Impact Statement */}
            <div className="mt-3 rounded-md bg-accent/5 p-2.5 text-xs text-accent">
              <span className="font-semibold">Selected Impact:</span> £100 delivers medical care kits and clean water filtration for 2 families for an entire month.
            </div>

            {/* Checkout Action Button */}
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/60 pt-3">
              <div className="flex items-center gap-1.5 text-[11px] text-text-muted">
                <svg className="h-3.5 w-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Powered by Stripe</span>
              </div>

              <div className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground shadow-xs">
                <span>Donate £100 Now</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
