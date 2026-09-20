import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { CurrentlyBuilding } from "@/components/currently-building";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <SelectedWork />
      <CurrentlyBuilding />
    </div>
  );
}
