import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { experience } from "@/content/portfolio";
import { useReveal } from "@/lib/motion/useReveal";

export function Experience() {
  const ref = useReveal<HTMLOListElement>({ selector: "[data-item]", stagger: 0.12 });

  return (
    <Section id="experience" className="bg-surface/40">
      <SectionHeader
        eyebrow="Experience"
        title="A timeline of shipping."
        description="Selected work across internships, freelance engagements, and open source."
      />

      <ol ref={ref} className="relative border-l border-border pl-8 md:pl-12">
        {experience.map((e) => (
          <li
            key={e.company + e.period}
            data-item
            className="relative mb-14 last:mb-0"
          >
            <span className="absolute -left-[41px] md:-left-[49px] top-2 grid h-4 w-4 place-items-center rounded-full border border-lime/40 bg-background">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <div className="font-display text-2xl md:text-3xl tracking-tight">
                  {e.role}
                </div>
                <div className="mt-1 text-muted-foreground">
                  {e.company} · {e.location}
                </div>
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {e.period}
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-foreground/85">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1 w-3 shrink-0 bg-lime" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {e.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
