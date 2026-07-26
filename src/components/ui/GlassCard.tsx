import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  interactive,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass rounded-3xl p-6 md:p-8 transition-all duration-500",
        interactive &&
          "hover:border-white/20 hover:-translate-y-1 hover:shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
}
