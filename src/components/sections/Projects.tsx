import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Chip } from "@/components/ui/Chip";
import { useReveal } from "@/lib/motion/useReveal";
import { projects } from "@/content/portfolio";
import { ArrowUpRight, X, ExternalLink, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

type Project = (typeof projects)[number];

export function Projects() {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const ref = useReveal<HTMLDivElement>({ selector: "[data-card]", stagger: 0.1 });

  // Extract all unique tags
  const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => (p.tags as readonly string[]).includes(selectedTag));

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects, not deliverables."
        description="Case studies where architecture, motion, and performance decisions mattered."
      />

      {/* Interactive Tag Filter Bar */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="mr-2 font-mono text-xs text-muted-foreground">Filter:</span>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-all duration-200 ${
              selectedTag === tag
                ? "bg-lime text-lime-foreground font-bold shadow-glow-sm scale-105"
                : "bg-surface border border-border/60 text-muted-foreground hover:text-foreground hover:border-lime/30"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div ref={ref} className="grid gap-6 md:grid-cols-2 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              data-card
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveProject(p)}
              className="group cursor-pointer"
            >
              <GlassCard interactive className="h-full flex flex-col justify-between">
                <div>
                  {/* Browser-frame mockup */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl border border-border bg-background aspect-[16/10] group-hover:border-lime/40 transition-colors">
                    <div className="flex items-center justify-between border-b border-border bg-elevated/60 px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                        <span className="ml-2 font-mono text-[10px] text-muted-foreground">
                          aj.dev/{p.slug}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-lime font-medium">
                        {p.year}
                      </span>
                    </div>

                    <div className="relative h-full w-full p-6 flex flex-col justify-between">
                      <div className="absolute inset-0 grid-noise opacity-40" />
                      <div
                        className={
                          "absolute inset-x-6 top-6 h-32 rounded-xl bg-gradient-to-br transition-opacity duration-300 " +
                          (i % 2 === 0
                            ? "from-lime/20 via-lime/5 to-transparent"
                            : "from-emerald-500/20 via-emerald-500/5 to-transparent")
                        }
                      />
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-[11px] font-semibold text-lime">
                          <Sparkles className="h-3 w-3" /> {p.metric}
                        </div>
                      </div>
                      <div className="relative z-10 mt-auto">
                        <div className="font-display text-2xl font-bold tracking-tight text-foreground">
                          {p.title}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl tracking-tight group-hover:text-lime transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed text-sm">
                        {p.summary}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime" />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/40">
                  {p.tags.map((t) => (
                    <Chip key={t} tone={t === selectedTag ? "lime" : "default"}>
                      {t}
                    </Chip>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Case Study Detail Modal Drawer */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-lime/30 bg-surface p-6 sm:p-8 shadow-card"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-elevated hover:border-lime/40 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-2">
                <div>
                  <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
                    <Sparkles className="h-3.5 w-3.5" /> Case Study · {activeProject.year}
                  </div>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {activeProject.title}
                  </h2>
                </div>

                <div className="rounded-2xl border border-lime/20 bg-lime/5 p-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">Highlight Metric</span>
                  <span className="font-mono text-sm font-bold text-lime">{activeProject.metric}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {activeProject.summary}
                </p>

                {"details" in activeProject && activeProject.details && (
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="rounded-xl bg-elevated/60 p-4 border border-border/60">
                      <div className="font-mono text-xs font-semibold text-lime uppercase tracking-wider mb-1">Problem</div>
                      <p className="text-foreground/90">{activeProject.details.problem}</p>
                    </div>

                    <div className="rounded-xl bg-elevated/60 p-4 border border-border/60">
                      <div className="font-mono text-xs font-semibold text-lime uppercase tracking-wider mb-1">Solution</div>
                      <p className="text-foreground/90">{activeProject.details.solution}</p>
                    </div>

                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Key Features</div>
                      <ul className="space-y-1.5 text-foreground/85">
                        {activeProject.details.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Measurable Results</div>
                      <ul className="space-y-1.5 text-foreground/85">
                        {activeProject.details.results.map((res, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                            <span className="font-medium">{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                    Technologies & Architecture
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((t) => (
                      <Chip key={t} tone="lime">
                        {t}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40 flex flex-wrap gap-3 justify-end">
                  <CTAButton onClick={() => setActiveProject(null)} variant="outline" size="sm">
                    Close Preview
                  </CTAButton>
                  <CTAButton as="a" href="#contact" variant="lime" size="sm" onClick={() => setActiveProject(null)}>
                    Discuss Project Scope <ExternalLink className="h-3.5 w-3.5" />
                  </CTAButton>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
