import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { achievements } from "@/content/portfolio";
import { useReveal } from "@/lib/motion/useReveal";
import { Award } from "lucide-react";

export function Achievements() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-a]", stagger: 0.08 });
  return (
    <Section className="bg-surface/40">
      <SectionHeader eyebrow="Signals" title="Proof, not promises." />
      <div ref={ref} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a) => (
          <div
            key={a.title}
            data-a
            className="glass rounded-2xl p-6 transition-all hover:border-lime/30"
          >
            <Award className="h-5 w-5 text-lime" />
            <div className="mt-6 font-display text-2xl tracking-tight">
              {a.title}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{a.detail}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
