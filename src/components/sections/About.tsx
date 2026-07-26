import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReveal } from "@/lib/motion/useReveal";
import { about, brand } from "@/content/portfolio";

export function About() {
  const ref = useReveal<HTMLDivElement>({ selector: "[data-reveal]", stagger: 0.12 });

  return (
    <Section id="about">
      <SectionHeader eyebrow="About" title={about.heading} />
      <div ref={ref} className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
        <div className="space-y-6">
          {about.body.map((p, i) => (
            <p
              key={i}
              data-reveal
              className="text-lg leading-relaxed text-foreground/85"
            >
              {p}
            </p>
          ))}
          <div data-reveal className="grid grid-cols-2 gap-4 pt-6 max-w-md">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Based in
              </div>
              <div className="mt-1 text-foreground">{brand.location}</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Focus
              </div>
              <div className="mt-1 text-foreground">Product & Perf</div>
            </div>
          </div>
        </div>
        <div data-reveal className="relative">
          <div className="glass aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <div className="relative h-full w-full bg-gradient-to-br from-elevated via-surface to-background">
              <div className="absolute inset-0 grid-noise opacity-40" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-lime">
                    Signature
                  </div>
                  <div className="mt-2 font-display text-3xl">{brand.fullName}</div>
                </div>
              </div>
              <div
                className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-lime/20 blur-3xl"
                aria-hidden
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-background px-4 py-3 font-mono text-xs">
            <span className="text-muted-foreground">status:</span>{" "}
            <span className="text-lime">shipping</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
