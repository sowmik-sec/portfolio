import type { FC } from "react";

interface StatCalloutProps {
  value: string;
  caption: string;
  detail?: string;
}

/**
 * Verified-figure callout: one oversized serif number in the live green —
 * the accent is spent here because the number is real. No card, no border;
 * the color carries the weight.
 */
export const StatCallout: FC<StatCalloutProps> = ({ value, caption, detail }) => {
  return (
    <figure className="max-w-xl">
      <p className="font-serif text-stat text-accent">{value}</p>
      <figcaption className="mt-3 text-lead text-text-secondary">
        {caption}
        {detail ? (
          <span className="mt-1 block text-[13px] text-text-muted">
            {detail}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
};
