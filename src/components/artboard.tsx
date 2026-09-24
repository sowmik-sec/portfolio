import type { FC, ReactNode } from "react";

interface ArtboardProps {
  /** Accessible description of the framed visual, announced to screen readers */
  label: string;
  children: ReactNode;
  /** Spec-plate caption rendered beneath the frame (e.g. technology list) */
  caption?: ReactNode;
  className?: string;
}

/**
 * Artboard: the studio's framing device for project visuals.
 * A hairline frame with corner registration ticks that extend outward on
 * hover, and an optional spec-plate caption strip beneath. The only
 * decorative motif on the page — use it for framed work, nothing else.
 */
export const Artboard: FC<ArtboardProps> = ({
  label,
  children,
  caption,
  className = "",
}) => {
  return (
    <figure className={`group ${className}`} role="group" aria-label={label}>
      <div className="relative border border-border bg-surface transition-[border-color,transform] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-text-muted/60 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
        {/* Corner registration ticks (decorative) */}
        <span aria-hidden="true" className="pointer-events-none absolute -left-2 -top-2 h-3 w-3 border-l border-t border-text-muted/70 transition-all duration-300 ease-out group-hover:-left-3.5 group-hover:-top-3.5 group-hover:h-4 group-hover:w-4 motion-reduce:transition-none" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-2 h-3 w-3 border-r border-t border-text-muted/70 transition-all duration-300 ease-out group-hover:-right-3.5 group-hover:-top-3.5 group-hover:h-4 group-hover:w-4 motion-reduce:transition-none" />
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-2 -left-2 h-3 w-3 border-b border-l border-text-muted/70 transition-all duration-300 ease-out group-hover:-bottom-3.5 group-hover:-left-3.5 group-hover:h-4 group-hover:w-4 motion-reduce:transition-none" />
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-2 -right-2 h-3 w-3 border-b border-r border-text-muted/70 transition-all duration-300 ease-out group-hover:-bottom-3.5 group-hover:-right-3.5 group-hover:h-4 group-hover:w-4 motion-reduce:transition-none" />

        {children}
      </div>

      {caption ? (
        <figcaption className="mt-3 text-[13px] leading-relaxed text-text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
};
