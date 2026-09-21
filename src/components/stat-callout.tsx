import type { FC } from "react";

interface StatCalloutProps {
  value: string;
  caption: string;
  detail?: string;
}

/**
 * Editorial stat callout: one oversized number, a plain caption, no card.
 * A single accent hairline carries the visual weight.
 */
export const StatCallout: FC<StatCalloutProps> = ({ value, caption, detail }) => {
  return (
    <div className="border-l-2 border-accent py-1 pl-5 sm:pl-7">
      <p className="text-stat font-semibold text-text-primary">{value}</p>
      <p className="mt-1 text-lead text-text-secondary">{caption}</p>
      {detail ? (
        <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-text-muted">
          {detail}
        </p>
      ) : null}
    </div>
  );
};
