import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Chip } from "@/components/ui/Chip";
import { projects } from "@/content/portfolio";
import { ArrowUpRight, X, ExternalLink, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

type Project = (typeof projects)[number];

export function Projects() {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Extract all unique tags
  const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => (p.tags as readonly string[]).includes(selectedTag));

  return (
    <Section id="projects" className="relative py-16 lg:py-24">
      <SectionHeader
        eyebrow="Selected Engineering Work"
        title="Featured projects & architecture."
        description="Real-world case studies demonstrating full-stack engineering, microservices, real-time WebSocket streaming, and multi-tenant platforms."
      />

      {/* Interactive Tag Filter Bar */}
      <div className="mb-10 flex flex-wrap items-center gap-2">
        <span className="mr-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">
          Filter Stack:
        </span>
        {allTags.map((tag) => (
          <CTAButton
            key={tag}
            type="button"
            variant="chip"
            size="sm"
            aria-pressed={selectedTag === tag}
            onClick={() => setSelectedTag(tag)}
            className="font-mono"
          >
            {tag}
          </CTAButton>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveProject(p)}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group cursor-pointer"
            >
              <GlassCard interactive className="h-full flex flex-col justify-between p-6 sm:p-8">
                <div>
                  {/* Browser-frame mockup with Project Image */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl border border-border bg-background aspect-[16/10] group-hover:border-lime/40 transition-colors shadow-md">
                    <div className="relative z-20 flex items-center justify-between border-b border-border/80 bg-elevated px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 min-w-0 truncate font-mono text-xs text-muted-foreground">
                          ajay.dev/{p.slug}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-lime font-semibold">{p.year}</span>
                    </div>

                    <div className="relative h-full w-full overflow-hidden group">
                      <div className="relative h-full w-full">
                        {"image" in p && p.image ? (
                          <img
                            src={p.image}
                            alt={p.title}
                            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : null}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 z-10">
                          <div className="inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-background px-3 py-1 font-mono text-xs font-semibold text-lime shadow-glow-sm">
                            <Sparkles className="h-3 w-3" /> {p.metric}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-tight group-hover:text-lime transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed text-sm line-clamp-2">
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
              className="relative z-10 flex max-h-[calc(100dvh-2rem)] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-lime/30 bg-surface p-6 shadow-card sm:max-h-[calc(100dvh-3rem)] sm:p-8 md:max-h-[calc(100dvh-5rem)]"
            >
              {/* Close Button */}
              <CTAButton
                type="button"
                variant="icon"
                size="icon"
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6"
                aria-label="Close modal"
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </CTAButton>

              <div
                data-lenis-prevent
                className="min-h-0 flex-1 space-y-6 overflow-y-auto overscroll-contain pr-2"
              >
                <div>
                  <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
                    <Sparkles className="h-3.5 w-3.5" /> Case Study · {activeProject.year}
                  </div>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {activeProject.title}
                  </h2>
                </div>

                {"image" in activeProject && activeProject.image && (
                  <div className="relative overflow-hidden rounded-2xl border border-border/80 aspect-[16/9] shadow-md">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between rounded-2xl border border-lime/20 bg-background p-4">
                  <span className="font-mono text-xs text-muted-foreground">Highlight Metric</span>
                  <span className="font-mono text-sm font-bold text-lime">
                    {activeProject.metric}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {activeProject.summary}
                </p>

                {"details" in activeProject && activeProject.details && (
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="rounded-xl border border-border/60 bg-elevated p-4">
                      <div className="font-mono text-xs font-semibold text-lime uppercase tracking-wider mb-1">
                        Problem
                      </div>
                      <p className="text-foreground/90">{activeProject.details.problem}</p>
                    </div>

                    <div className="rounded-xl border border-border/60 bg-elevated p-4">
                      <div className="font-mono text-xs font-semibold text-lime uppercase tracking-wider mb-1">
                        Solution
                      </div>
                      <p className="text-foreground/90">{activeProject.details.solution}</p>
                    </div>

                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Key Features
                      </div>
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
                      <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Measurable Results
                      </div>
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
                  <CTAButton
                    as="a"
                    href="#contact"
                    variant="lime"
                    size="sm"
                    onClick={() => setActiveProject(null)}
                  >
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
