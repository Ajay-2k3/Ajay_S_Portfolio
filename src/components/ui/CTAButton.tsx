import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "lime" | "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
}

const variants: Record<Variant, string> = {
  lime: "bg-lime text-lime-foreground hover:shadow-glow hover:brightness-110",
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  ghost: "bg-transparent text-foreground hover:bg-elevated",
  outline: "border border-border text-foreground hover:bg-elevated hover:border-white/20",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export const CTAButton = forwardRef<HTMLButtonElement, Props>(function CTAButton(
  { variant = "primary", size = "md", className, children, as, href, ...rest },
  ref,
) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 will-change-transform active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );
  if (as === "a") {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref} className={cls} {...rest}>
      {children}
    </button>
  );
});
