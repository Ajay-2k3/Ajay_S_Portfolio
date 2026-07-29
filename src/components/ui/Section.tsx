import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerSize?: "md" | "lg" | "xl";
  bare?: boolean;
}

export function Section({
  children,
  className,
  id,
  bare,
  containerSize = "lg",
  ...rest
}: Props) {
  return (
    <section
      id={id}
      className={cn("relative py-14 md:py-18 lg:py-20 overflow-hidden max-w-full w-full", className)}
      {...rest}
    >
      {bare ? children : <Container size={containerSize}>{children}</Container>}
    </section>
  );
}
