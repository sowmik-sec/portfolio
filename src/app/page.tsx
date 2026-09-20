import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      {/* Target anchor for "View my work" CTA and navigation link */}
      <div id="work" className="sr-only" aria-hidden="true" />
    </div>
  );
}
