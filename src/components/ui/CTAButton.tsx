import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type Variant = "lime" | "primary" | "ghost" | "outline" | "chip" | "icon" | "panel";
type Size = "sm" | "md" | "lg" | "icon" | "panel";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
}

const variants: Record<Variant, string> = {
  lime: "bg-lime text-lime-foreground hover:shadow-glow hover:brightness-110",
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  ghost: "border border-border bg-background text-foreground hover:bg-elevated",
  outline:
    "border border-border bg-background text-foreground hover:bg-elevated hover:border-white/20",
  chip: "border border-border/60 bg-surface text-muted-foreground hover:border-lime/30 hover:text-foreground aria-pressed:border-lime aria-pressed:bg-lime aria-pressed:text-lime-foreground",
  icon: "border border-border bg-elevated text-muted-foreground hover:border-lime/40 hover:text-lime",
  panel:
    "rounded-2xl border border-border/60 bg-elevated text-left hover:border-lime/30 aria-pressed:border-lime/40 aria-pressed:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
  icon: "h-11 w-11 p-0 text-sm",
  panel: "h-auto w-full p-5 text-base",
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
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={cls} {...anchorProps}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref} type="button" className={cls} {...rest}>
      {children}
    </button>
  );
});
