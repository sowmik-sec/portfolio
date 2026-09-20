export interface SelectedProject {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  capabilities: string[];
  technologies: string[];
  liveUrl: string;
  caseStudyUrl: string;
}

export const SELECTED_PROJECTS: SelectedProject[] = [
  {
    id: "pixoree",
    number: "01",
    title: "PIXOREE",
    category: "Interactive design platform",
    description:
      "A browser-based graphic design application engineered for creating certificates, resumes, social media graphics, and marketing assets. Features a direct-manipulation canvas engine with custom object transformations, layer management, undo/redo history, and client-side raster/vector export.",
    capabilities: [
      "Fabric.js canvas engine",
      "Drag-and-drop editing",
      "Layer hierarchy & ordering",
      "Object rotation & scaling",
      "Text & image manipulation",
      "Undo/redo state stack",
      "Client-side image export",
      "Modular responsive toolbars",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Fabric.js", "MongoDB"],
    liveUrl: "https://pixoree.app/",
    caseStudyUrl: "/projects/pixoree",
  },
  {
    id: "children-of-the-ummah",
    number: "02",
    title: "CHILDREN OF THE UMMAH",
    category: "International charity platform",
    description:
      "A production humanitarian donation platform serving donors worldwide with emergency relief, education, and healthcare campaigns. Architected with custom localized multi-currency checkout flows, automated recurring monthly contributions via Stripe, and verified donor reporting.",
    // NOTE: £43,000 / ~7.3M BDT processed metric is pending final user verification for Phase 4.
    // Do NOT display the metric until confirmed as current.
    capabilities: [
      "Multi-currency processing (GBP, USD, EUR)",
      "Custom multi-step donation flows",
      "Recurring subscription donations",
      "Stripe payment integration",
      "Production cloud deployment",
      "Instant receipt generation",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Stripe", "Tailwind CSS"],
    liveUrl: "https://www.childrenoftheummah.org.uk/",
    caseStudyUrl: "/projects/children-of-the-ummah",
  },
];
