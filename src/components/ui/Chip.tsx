import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Chip({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "lime";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-tight",
        tone === "lime"
          ? "border-lime/40 bg-lime/10 text-lime"
          : "border-border bg-elevated text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
