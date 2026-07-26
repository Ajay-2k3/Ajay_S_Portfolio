import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogs } from "@/content/portfolio";
import { useReveal } from "@/lib/motion/useReveal";
import { ArrowUpRight } from "lucide-react";

export function Blogs() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-b]", stagger: 0.08 });
  return (
    <Section id="blog" className="bg-surface/40">
      <SectionHeader
        eyebrow="Writing"
        title="Notes from the workbench."
        description="Occasional posts on motion, performance, and the boring parts of shipping."
      />
      <div ref={ref} className="grid gap-4">
        {blogs.map((b) => (
          <a
            key={b.title}
            href={b.href}
            data-b
            className="group flex items-start justify-between gap-6 border-b border-border py-8 transition-all hover:border-lime/40"
          >
            <div className="flex-1">
              <div className="mb-3 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span>{b.date}</span>
                <span className="h-px w-6 bg-border" />
                <span>{b.readTime}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl tracking-tight transition-colors group-hover:text-lime">
                {b.title}
              </h3>
              <p className="mt-3 max-w-2xl text-muted-foreground">{b.excerpt}</p>
            </div>
            <ArrowUpRight className="mt-2 h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime" />
          </a>
        ))}
      </div>
    </Section>
  );
}
