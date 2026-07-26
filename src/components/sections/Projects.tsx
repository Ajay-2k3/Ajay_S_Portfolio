import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Chip } from "@/components/ui/Chip";
import { useReveal } from "@/lib/motion/useReveal";
import { projects } from "@/content/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-card]", stagger: 0.1 });

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects, not deliverables."
        description="Case studies where architecture, motion, and performance decisions mattered."
      />

      <div ref={ref} className="grid gap-6 md:grid-cols-2 md:gap-8">
        {projects.map((p, i) => (
          <a
            key={p.slug}
            data-card
            href="#"
            className="group block"
          >
            <GlassCard interactive className="h-full">
              {/* Browser-frame mockup */}
              <div className="relative mb-6 overflow-hidden rounded-2xl border border-border bg-background aspect-[16/10]">
                <div className="flex items-center gap-1.5 border-b border-border bg-elevated/60 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="ml-3 font-mono text-[10px] text-muted-foreground">
                    aj.dev/{p.slug}
                  </span>
                </div>
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 grid-noise opacity-40" />
                  <div
                    className={
                      "absolute inset-x-8 top-8 h-32 rounded-xl bg-gradient-to-br " +
                      (i % 2
                        ? "from-lime/20 to-transparent"
                        : "from-white/10 to-transparent")
                    }
                  />
                  <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-lime">
                        {p.year}
                      </div>
                      <div className="mt-1 font-display text-xl">{p.title}</div>
                    </div>
                    <div className="font-mono text-xs text-lime">
                      {p.metric}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {p.summary}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime" />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </GlassCard>
          </a>
        ))}
      </div>
    </Section>
  );
}
