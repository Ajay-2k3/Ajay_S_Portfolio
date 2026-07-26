import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { services } from "@/content/portfolio";
import { useReveal } from "@/lib/motion/useReveal";

export function Services() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-s]", stagger: 0.1 });
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title="How we can work together."
        description="Available for select engagements — retainer, project, and audit-style scopes."
      />
      <div ref={ref} className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.title}
            data-s
            className="glass relative overflow-hidden rounded-3xl p-8 transition-all hover:border-lime/30"
          >
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-lime">
              0{i + 1}
            </div>
            <h3 className="mt-6 font-display text-2xl tracking-tight">
              {s.title}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {s.detail}
            </p>
            <div className="mt-6">
              <Chip>{s.tag}</Chip>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
