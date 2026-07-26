import { Section } from "@/components/ui/Section";
import { useCounter } from "@/lib/motion/useCounter";
import { metrics } from "@/content/portfolio";

function Metric({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, value: n } = useCounter(value);
  return (
    <div className="flex flex-col gap-2 border-t border-border pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0 first:border-l-0 first:pl-0">
      <span
        ref={ref}
        className="font-display text-5xl md:text-6xl font-medium tracking-tight leading-none"
      >
        {n}
        <span className="text-lime">{suffix}</span>
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function Metrics() {
  return (
    <Section className="!py-10 md:!py-12">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
        {metrics.map((m) => (
          <Metric key={m.label} {...m} />
        ))}
      </div>
    </Section>
  );
}
