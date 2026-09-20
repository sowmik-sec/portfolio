export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    description: "Interactive canvas engines, typed component architectures, and responsive systems.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Fabric.js"],
  },
  {
    id: "backend",
    name: "Backend",
    description: "High-performance services, REST endpoints, and secure server-side workflows.",
    skills: ["Go", "Node.js", "REST APIs", "Server Actions"],
  },
  {
    id: "data-payments",
    name: "Data & Payments",
    description: "Document databases and mission-critical multi-currency payment pipelines.",
    skills: ["MongoDB", "Stripe"],
  },
  {
    id: "tools-deployment",
    name: "Tools & Deployment",
    description: "Version control, automated delivery pipelines, and containerization.",
    skills: ["Git", "GitHub", "Docker", "Vercel"],
  },
];
