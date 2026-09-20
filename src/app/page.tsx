export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-20 text-center sm:py-32">
      <div className="max-w-md space-y-4">
        <p className="text-xs font-mono uppercase tracking-widest text-text-muted">
          Phase 1 · Foundation Ready
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
          Md. Ahsan Habib
        </h1>
        <p className="text-sm leading-relaxed text-text-secondary">
          Design tokens, intentional light &amp; dark themes, responsive layout,
          and minimal navigation are established. Ready for Phase 2.
        </p>
      </div>
    </div>
  );
}
