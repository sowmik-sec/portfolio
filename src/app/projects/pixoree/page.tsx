import type { Metadata } from "next";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { ProjectVisual } from "@/components/project-visual";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahsanhabib.dev";

export const metadata: Metadata = {
  title: "Pixoree Case Study",
  description:
    "Engineering case study for Pixoree: an interactive browser-based graphic design tool with Fabric.js, Next.js, and TypeScript.",
  alternates: {
    canonical: "/projects/pixoree",
  },
  openGraph: {
    type: "article",
    url: "/projects/pixoree",
    title: "Pixoree Case Study — Md. Ahsan Habib",
    description:
      "Deep dive into building an interactive browser-based graphic design engine with Fabric.js, object transformations, layers, undo/redo state history, and client-side export.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pixoree Interactive Graphic Design Engine Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixoree Case Study — Md. Ahsan Habib",
    description:
      "Deep dive into building an interactive browser-based graphic design engine with Fabric.js, object transformations, layers, undo/redo state history, and client-side export.",
    images: ["/opengraph-image"],
  },
};

export default function PixoreeCaseStudyPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Pixoree Interactive Graphic Design Engine Case Study",
    description:
      "Deep dive into building an interactive browser-based graphic design engine with Fabric.js, object transformations, layers, undo/redo state history, and client-side export.",
    author: {
      "@type": "Person",
      name: "Md. Ahsan Habib",
      url: siteUrl,
    },
    url: `${siteUrl}/projects/pixoree`,
    about: [
      "Fabric.js",
      "Canvas 2D",
      "Next.js",
      "TypeScript",
      "Graphic Design Tool",
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
        title="Pixoree"
        tagline="A direct-manipulation graphic design platform for creating certificates, resumes, social media graphics, and marketing assets in the browser."
        category="Interactive Design Platform"
        status="Shipped"
        role="Developer &amp; Maintainer"
        timeline="Shipped &amp; Maintained"
        techStack={["Next.js", "TypeScript", "React", "Fabric.js", "MongoDB"]}
        externalLink={{
          label: "Launch pixoree.app",
          url: "https://pixoree.app/",
        }}
      />

      {/* Interactive Canvas Visual Preview */}
      <div className="mt-10 sm:mt-12">
        <ProjectVisual projectId="pixoree" projectTitle="Pixoree" />
      </div>

      {/* Main Case Study Sections */}
      <div className="mt-12 space-y-12 sm:space-y-16">
        {/* Section 1: Executive Overview & The Problem */}
        <CaseStudySection
          id="overview"
          badge="Product Thesis"
          title="Bridging the Gap in In-Browser Graphic Design"
          subtitle="Moving beyond rigid templates into an unconstrained, direct-manipulation canvas experience."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              Most online graphic design tools force users into rigid form-driven layouts or require heavyweight, resource-intensive desktop applications. The goal for <strong>Pixoree</strong> was to build a fast, lightweight, and fluid web-based design editor capable of generating high-resolution certificates, resumes, and marketing collateral without leaving the browser.
            </p>
            <p>
              Achieving this required solving complex front-end engineering challenges: keeping continuous 60fps canvas interactions smooth, coordinating stateful object manipulations with React&apos;s component tree, maintaining an immutable undo/redo history, and generating print-ready raster and vector exports client-side.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                Direct Manipulation
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                Sub-pixel coordinate manipulation, freeform rotation, and contextual resize handles directly on canvas elements.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                Layer Hierarchy
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                Arbitrary z-index ordering, grouping, locking, and visibility controls mirrored across UI panels and the canvas.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                Client-Side Export
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                Lossless rasterization to high-DPI PNG/JPEG and structured vector/PDF generation without backend bottlenecks.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 2: Fabric.js Canvas Engine Integration */}
        <CaseStudySection
          id="fabric-integration"
          badge="Core Architecture"
          title="Fabric.js Canvas Engine &amp; React Integration"
          subtitle="Marrying an imperative HTML5 Canvas rendering engine with React's declarative state model."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              At the heart of Pixoree is an integration with <strong>Fabric.js</strong>, an established HTML5 canvas library providing an object model on top of the native canvas 2D context. While Fabric.js excels at retaining canvas objects, transforming vector geometries, and handling mouse events, it is inherently imperative and stateful.
            </p>
            <p>
              Directly binding Fabric.js events to React&apos;s top-level state would cause excessive re-renders during high-frequency operations such as dragging or rotating. To eliminate stutter, the architecture employs a decoupled communication layer:
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-surface-elevated/40 p-5">
              <h3 className="text-base font-bold text-text-primary">
                1. Encapsulated Canvas Host
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                The canvas instance is scoped inside a dedicated container component that survives normal React render passes. The React tree communicates with Fabric via an event dispatcher and refs, ensuring high-frequency mousemove events (60fps) update Fabric objects in memory without triggering component re-renders.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface-elevated/40 p-5">
              <h3 className="text-base font-bold text-text-primary">
                2. Bidirectional State Synchronization
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                React state is only updated on discreet lifecycle boundaries: selection changes (`selection:created`, `selection:cleared`) and interaction termination (`object:modified`). When an object is deselected or modified, its serialized properties (position, rotation, scale, fill, stroke) sync to the central document state.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface-elevated/40 p-5">
              <h3 className="text-base font-bold text-text-primary">
                3. High-DPI &amp; Retina Display Calibration
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                To guarantee razor-sharp typography and crisp borders across displays, the canvas dynamically inspects `window.devicePixelRatio`. The physical backing store dimensions are scaled up while CSS viewport dimensions remain locked to the document layout coordinates, preventing blurriness on modern Apple and high-density screens.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 3: Drag-and-Drop & Transformations */}
        <CaseStudySection
          id="transformations"
          badge="Interaction Design"
          title="Drag-and-Drop, Scaling &amp; Object Transformations"
          subtitle="Precise geometric transformations with bounding boxes, aspect ratio locking, and rotation."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              Users interact with diverse design elements on Pixoree: editable rich text boxes, custom vector geometric shapes, imported client branding logos, and certificate verification seals. Every object requires consistent transformation mechanics:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-mono text-sm font-bold text-text-primary">
                Transform Handles &amp; Bounding Boxes
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                Custom-rendered corner and edge handles offer uniform scaling, vertical/horizontal stretching, and an offset rotation pin. Visual guidelines and coordinate badges display real-time pixel dimensions (`w: 320px · h: 36px`) during transformation.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-mono text-sm font-bold text-text-primary">
                Constrained Scaling &amp; Proportions
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                Vector logos and signatures automatically preserve aspect ratio during corner drags, preventing image distortion. Text objects dynamically calculate wrapping boundaries and font scale factors when adjusted.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-mono text-sm font-bold text-text-primary">
                Freeform Rotation with Center Snapping
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                Users can smoothly rotate any canvas object through 360 degrees. Angular velocity dampening and magnetic snaps at 0°, 45°, 90°, 180°, and 270° allow easy alignment back to horizontal and vertical baselines.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-mono text-sm font-bold text-text-primary">
                Direct-Manipulation Drag &amp; Drop
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                New shapes, badges, and user-uploaded imagery can be dragged directly from external file systems or internal asset libraries onto the canvas artboard, automatically placing them under the cursor with computed local offsets.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 4: Layers, Stacking & Hierarchy */}
        <CaseStudySection
          id="layers"
          badge="Document Model"
          title="Layer Management &amp; Z-Index Stacking"
          subtitle="Hierarchical object ordering, locking mechanisms, and group transformations."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              In complex multi-element compositions like academic certificates or promotional flyers, precise layer ordering is essential. Pixoree provides complete control over canvas depth:
            </p>
            <ul className="list-inside list-disc space-y-2 text-sm text-text-secondary sm:text-base">
              <li>
                <strong>Z-Index Elevation:</strong> Users can bring elements forward, send them backward, or jump them directly to the top or bottom of the stack (`canvas.bringForward`, `canvas.sendToBack`).
              </li>
              <li>
                <strong>Object Locking:</strong> Background frames and decorative certificate borders can be locked to prevent accidental selection and movement while fine-tuning small text fields.
              </li>
              <li>
                <strong>Compound Grouping:</strong> Multiple elements (e.g., a signature line, date label, and verification stamp) can be multi-selected and grouped into a single unified composite object for collective translation and scaling.
              </li>
              <li>
                <strong>Visibility Toggles:</strong> Layers can be hidden and unhidden during design iteration to test alternative visual variations without discarding elements.
              </li>
            </ul>
          </div>
        </CaseStudySection>

        {/* Section 5: Undo / Redo History Architecture */}
        <CaseStudySection
          id="history"
          badge="State Management"
          title="Undo / Redo History Architecture"
          subtitle="Timeline navigation with immutable state serialization."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              Designing in a browser requires an intuitive and reliable history stack. Users expect standard shortcuts (<kbd className="rounded border border-border bg-surface-elevated px-1 py-0.5 font-mono text-xs">Cmd+Z</kbd> / <kbd className="rounded border border-border bg-surface-elevated px-1 py-0.5 font-mono text-xs">Ctrl+Z</kbd>) to cleanly revert color modifications, text edits, deletions, and layout transformations.
            </p>
            <p>
              The state engine implements an <strong>in-memory snapshot ring buffer</strong>:
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <span className="font-mono text-xs font-bold text-accent">01. Snapshot Debouncing</span>
                <p className="mt-1 text-xs text-text-secondary">
                  High-frequency actions (like continuous slider color adjustments or dragging) debounce snapshot commits until the mouse release event, preventing the history stack from filling with micro-steps.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-accent">02. JSON Serialization</span>
                <p className="mt-1 text-xs text-text-secondary">
                  Each committed step serializes the active canvas objects into a lightweight JSON schema. Non-serializable runtime listeners are decoupled from the document payload.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-accent">03. Bounded Stack Window</span>
                <p className="mt-1 text-xs text-text-secondary">
                  History is capped at a sliding window of 50 actions to preserve browser memory and eliminate memory leaks during extended, multi-hour editing sessions.
                </p>
              </div>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 6: Responsive Canvas Toolbars & Inspector */}
        <CaseStudySection
          id="toolbars"
          badge="Interface Architecture"
          title="Responsive Canvas Toolbars &amp; Contextual Inspector"
          subtitle="Adaptive UI controls that surface relevant properties without crowding the workspace."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              The interface adapts dynamically based on what the user is doing. Selecting a text object surfaces typography controls (font family, weight, tracking, line height, text alignment, and color palette). Selecting a vector shape switches the inspector to border radius, stroke width, fill gradients, and shadow offsets.
            </p>
            <p>
              To maintain usability across varied screen widths:
            </p>
            <ul className="list-inside list-disc space-y-2 text-sm text-text-secondary sm:text-base">
              <li>
                <strong>Floating Contextual HUD:</strong> A compact action bar anchors to active selections on larger viewports, minimizing eye and mouse travel.
              </li>
              <li>
                <strong>Collapsible Panels:</strong> Sidebars and inspectors collapse into compact slide-overs on smaller displays, preserving precious screen real estate for the primary canvas artboard.
              </li>
              <li>
                <strong>Keyboard Shortcuts:</strong> Pro designers can navigate common operations (<kbd className="rounded border border-border bg-surface-elevated px-1 py-0.5 font-mono text-xs">Delete</kbd>, <kbd className="rounded border border-border bg-surface-elevated px-1 py-0.5 font-mono text-xs">Cmd+C</kbd>, <kbd className="rounded border border-border bg-surface-elevated px-1 py-0.5 font-mono text-xs">Cmd+V</kbd>, arrow key nudge) without interacting with on-screen buttons.
              </li>
            </ul>
          </div>
        </CaseStudySection>

        {/* Section 7: Export Workflow */}
        <CaseStudySection
          id="export"
          badge="Output Pipeline"
          title="Client-Side Export Workflow"
          subtitle="Rendering print-quality high-resolution documents directly on the client machine."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            <p>
              A major bottleneck of server-rendered design tools is the latency and server cost of spinning up headless browsers (e.g. Puppeteer) to render user documents. Pixoree executes its entire export pipeline <strong>directly in the client browser</strong>:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-mono text-sm font-bold text-text-primary">
                Multi-DPI PNG &amp; JPEG Rasterization
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                The canvas generates an offscreen rendering surface at the target print resolution (up to 300 DPI / 4K dimensions). It renders all vector paths and text with high sub-pixel precision before streaming the final PNG/JPEG blob via `HTMLCanvasElement.toBlob()`.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-mono text-sm font-bold text-text-primary">
                Print-Ready PDF Generation
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                For formal certificates and resumes, Pixoree composites vector geometries into standard PDF document containers with embedded web fonts and metadata, ensuring flawless reproduction when sent to professional commercial printers.
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Section 8: Tech Stack & Key Takeaways */}
        <CaseStudySection
          id="tech-stack"
          badge="Specifications"
          title="Technology Stack &amp; Key Takeaways"
          subtitle="Engineering stack and architectural invariants that make Pixoree fast and maintainable."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-surface p-4">
              <span className="font-mono text-xs font-semibold text-accent">Engine &amp; UI</span>
              <p className="mt-1 font-bold text-text-primary">Fabric.js 5.3 + React</p>
              <p className="mt-1 text-xs text-text-muted">Canvas rendering &amp; component state</p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-4">
              <span className="font-mono text-xs font-semibold text-accent">Framework</span>
              <p className="mt-1 font-bold text-text-primary">Next.js &amp; TypeScript</p>
              <p className="mt-1 text-xs text-text-muted">Type-safe routing &amp; optimization</p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-4">
              <span className="font-mono text-xs font-semibold text-accent">Storage</span>
              <p className="mt-1 font-bold text-text-primary">MongoDB</p>
              <p className="mt-1 text-xs text-text-muted">Template &amp; user asset catalog</p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-4">
              <span className="font-mono text-xs font-semibold text-accent">Styling</span>
              <p className="mt-1 font-bold text-text-primary">Tailwind CSS</p>
              <p className="mt-1 text-xs text-text-muted">Responsive toolbar &amp; inspector HUD</p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-border/70 bg-surface-elevated/40 p-5">
            <h3 className="text-sm font-bold text-text-primary">Engineering Takeaways</h3>
            <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
              Pixoree demonstrates that complex desktop-grade creative workflows can run entirely inside the modern web browser. By decoupling high-frequency canvas physics from declarative React state updates, Pixoree achieves native-feeling 60fps performance and zero server rendering overhead.
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
