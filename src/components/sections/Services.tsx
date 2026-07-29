import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { services } from "@/content/portfolio";
import { Sparkles } from "lucide-react";

export function Services() {
  return (
    <Section id="services" className="relative py-16 lg:py-24">
      <SectionHeader
        eyebrow="Services & Collaboration"
        title="Engineering services & engagement scopes."
        description="Available for full-time opportunities, high-performance backend architecture consulting, and select full-stack project development."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="glass relative overflow-hidden rounded-3xl p-8 border border-border/60 hover:border-lime/40 transition-colors bg-surface/80 backdrop-blur-md flex flex-col justify-between group shadow-card"
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-lime/10 blur-2xl group-hover:bg-lime/20 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
                  0{i + 1}
                </span>
                <Sparkles className="h-4 w-4 text-lime/50 group-hover:text-lime transition-colors" />
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-foreground group-hover:text-lime transition-colors">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {s.detail}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-border/40">
              <Chip tone="lime">{s.tag}</Chip>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
