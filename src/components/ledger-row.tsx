import type { FC, ReactNode } from "react";

interface LedgerRowProps {
  label: string;
  children: ReactNode;
  className?: string;
}

/**
 * Spec-sheet row: a small label in the left column, content in the right,
 * baseline-aligned. Stacks label-above-content on mobile. The single
 * structural device of the Ledger direction — every section reads through it.
 */
export const LedgerRow: FC<LedgerRowProps> = ({ label, children, className = "" }) => {
  return (
    <div
      className={`grid grid-cols-1 gap-y-2 sm:grid-cols-[7rem_1fr] sm:gap-x-10 ${className}`}
    >
      <p className="text-[13px] font-medium leading-6 text-text-muted sm:pt-0.5">
        {label}
      </p>
      <div className="min-w-0">{children}</div>
    </div>
  );
};
