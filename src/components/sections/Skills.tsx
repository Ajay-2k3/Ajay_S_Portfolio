import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { useReveal } from "@/lib/motion/useReveal";
import { skills } from "@/content/portfolio";

export function Skills() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-group]", stagger: 0.1 });

  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Toolbelt"
        title="Tools I reach for."
        description="Grouped by where they live in the stack. Sharpened by real projects, not bootcamp checklists."
      />
      <div ref={ref} className="grid gap-6 md:grid-cols-2">
        {skills.map((g) => (
          <div
            key={g.group}
            data-group
            className="glass rounded-3xl p-6 md:p-8"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-xl">{g.group}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {g.items.length} tools
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
