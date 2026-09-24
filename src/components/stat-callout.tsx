import type { FC } from "react";

interface StatCalloutProps {
  value: string;
  caption: string;
  detail?: string;
}

/**
 * Verified-figure callout: one oversized tabular numeral in ledger green —
 * the accent is spent here because the number is real. No card, no border.
 */
export const StatCallout: FC<StatCalloutProps> = ({ value, caption, detail }) => {
  return (
    <figure className="max-w-xl">
      <p className="text-stat font-semibold tabular-nums text-accent">{value}</p>
      <figcaption className="mt-3 text-lead text-text-secondary">
        {caption}
        {detail ? (
          <span className="mt-1 block text-[13px] tabular-nums text-text-muted">
            {detail}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
};
