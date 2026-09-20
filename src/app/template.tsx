import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <div className="animate-page-enter flex flex-1 flex-col">{children}</div>;
}
