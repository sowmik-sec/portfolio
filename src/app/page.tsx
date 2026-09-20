import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <SelectedWork />
    </div>
  );
}
