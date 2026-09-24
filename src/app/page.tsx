import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { CurrentlyBuilding } from "@/components/currently-building";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Md. Ahsan Habib — Full Stack Developer",
  description:
    "Full Stack Developer building fast, scalable web products and SaaS platforms from idea to production.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Md. Ahsan Habib — Full Stack Developer",
    description:
      "Full Stack Developer building fast, scalable web products and SaaS platforms from idea to production.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <SelectedWork />
      <CurrentlyBuilding />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
