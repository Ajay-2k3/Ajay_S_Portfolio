import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { certifications } from "@/content/portfolio";
import { ShieldCheck, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function Achievements() {
  return (
    <Section id="certifications" className="bg-surface/40 relative py-16 lg:py-24">
      <SectionHeader
        eyebrow="Credentials & Certifications"
        title="Verified certifications & engineering credentials."
        description="Formal certifications, virtual enterprise software engineering experiences, and workshops."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-border/60 hover:border-lime/40 transition-colors group bg-surface/80 backdrop-blur-md shadow-card"
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-lime/10 blur-2xl group-hover:bg-lime/20 transition-all duration-300" />

            <div>
              {/* Header Badge & Date */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-xs font-semibold text-lime shadow-glow-sm">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>{cert.badge}</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {cert.date}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-lime transition-colors">
                {cert.title}
              </h3>
              <div className="mt-1 font-mono text-xs text-muted-foreground">
                Issued by <span className="text-foreground/90 font-medium">{cert.issuer}</span>
              </div>

              {/* Summary */}
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{cert.summary}</p>
            </div>

            {/* Tech Tags */}
            <div className="mt-6 pt-4 border-t border-border/40 flex flex-wrap gap-1.5">
              {cert.tags.map((t) => (
                <Chip key={t} tone="lime">
                  {t}
                </Chip>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
