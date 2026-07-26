import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  size = "lg",
}: {
  children: ReactNode;
  className?: string;
  size?: "md" | "lg" | "xl";
}) {
  const w = size === "md" ? "max-w-4xl" : size === "xl" ? "max-w-7xl" : "max-w-6xl";
  return (
    <div className={cn("mx-auto w-full px-6 md:px-10", w, className)}>
      {children}
    </div>
  );
}
