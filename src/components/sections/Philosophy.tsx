import { Section } from "@/components/ui/Section";
import { useTextReveal } from "@/lib/motion/useTextReveal";
import { philosophy } from "@/content/portfolio";

export function Philosophy() {
  const ref = useTextReveal<HTMLParagraphElement>();
  return (
    <Section className="!py-12 md:!py-16">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-lime" />
          Philosophy
        </div>
        <p
          ref={ref}
          className="text-balance font-display text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight"
        >
          {philosophy.quote}
        </p>
      </div>
    </Section>
  );
}
