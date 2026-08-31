import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { experience } from "@/content/portfolio";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" className="bg-surface/40 relative overflow-hidden py-16 lg:py-24">
      {/* Background Ambient Aura */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-lime/[0.04] blur-[120px]"
        aria-hidden
      />

      <SectionHeader
        eyebrow="Experience & Impact"
        title="A timeline of engineering & shipping."
        description="Selected work across internships, freelance engagements, and enterprise virtual experiences."
      />

      <div className="mt-12 max-w-4xl mx-auto">
        <ol className="relative border-l-2 border-border/80 pl-6 sm:pl-10 md:pl-12 space-y-12 sm:space-y-16">
          {experience.map((e, index) => (
            <motion.li
              key={e.company + e.period}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Timeline Node Marker */}
              <span className="absolute -left-[31px] sm:-left-[47px] md:-left-[53px] top-1.5 grid h-6 w-6 sm:h-7 sm:w-7 place-items-center rounded-full border-2 border-lime/60 bg-background shadow-glow-sm group-hover:border-lime group-hover:scale-110 transition-all duration-300">
                <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
              </span>

              {/* Experience Card */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="glass relative rounded-3xl border border-border/60 p-6 sm:p-8 shadow-card hover:border-lime/40 transition-colors bg-surface/80 backdrop-blur-md"
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border/40 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-lime uppercase tracking-wider mb-1">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{e.company}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-lime transition-colors">
                      {e.role}
                    </h3>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1 font-mono text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-semibold text-lime">
                      <Calendar className="h-3 w-3" />
                      {e.period}
                    </span>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin aria-hidden="true" className="h-3 w-3 text-lime/70" />
                      {e.location}
                    </span>
                  </div>
                </div>

                {/* Animated Bullet Points */}
                <ul className="mt-6 space-y-3">
                  {e.bullets.map((bullet, bIndex) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + bIndex * 0.05 }}
                      className="flex items-start gap-3 text-sm sm:text-base text-foreground/85 leading-relaxed group/bullet"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-lime shrink-0 group-hover/bullet:scale-150 transition-transform duration-200" />
                      <span className="group-hover/bullet:text-foreground transition-colors">
                        {bullet}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack Chips */}
                <div className="mt-6 pt-4 border-t border-border/40 flex flex-wrap gap-2">
                  {e.stack.map((tech) => (
                    <Chip key={tech} tone="lime">
                      {tech}
                    </Chip>
                  ))}
                </div>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
