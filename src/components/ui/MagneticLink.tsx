import { useMagnetic } from "@/lib/motion/useMagnetic";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MagneticLink({
  href,
  children,
  className,
  external,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}) {
  const ref = useMagnetic<HTMLAnchorElement>(0.3);
  return (
    <a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={cn(
        "inline-flex items-center justify-center transition-colors",
        className,
      )}
    >
      {children}
    </a>
  );
}
