import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { CurrentlyBuilding } from "@/components/currently-building";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <SelectedWork />
      <CurrentlyBuilding />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

