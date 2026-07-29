import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { architectureLayers } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Layers } from "lucide-react";

export function Architecture() {
  const [active, setActive] = useState<string>(architectureLayers[0].id);
  const layer =
    architectureLayers.find((l) => l.id === active) ?? architectureLayers[0];

  return (
    <Section id="architecture" className="bg-surface/40 relative py-16 lg:py-24">
      <SectionHeader
        eyebrow="System Architecture & Blueprint"
        title="Full-stack system architecture."
        description="Layered mental model powering my applications — from responsive frontends to microservices, WebSockets, and database persistence."
      />

      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16 items-center">
        {/* Layer Selector Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-6 sm:p-8 border border-border/60 shadow-card bg-surface/80 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-lime uppercase tracking-wider mb-6 pb-3 border-b border-border/40 font-semibold">
            <Layers className="h-4 w-4" /> Stack Layers Overview
          </div>
          <div className="space-y-3">
            {architectureLayers.map((l) => (
              <button
                key={l.id}
                onClick={() => setActive(l.id)}
                className={cn(
                  "relative w-full rounded-2xl border p-5 text-left transition-all duration-300 group",
                  active === l.id
                    ? "border-lime/40 bg-lime/10 shadow-glow-sm"
                    : "border-border/60 bg-elevated/40 hover:border-lime/30 hover:bg-elevated/80"
                )}
                aria-pressed={active === l.id}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-foreground group-hover:text-lime transition-colors">
                    {l.label}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    Layer 0{architectureLayers.indexOf(l) + 1}
                  </span>
                </div>
                {active === l.id && (
                  <motion.span
                    layoutId="arch-indicator"
                    className="absolute left-0 top-0 h-full w-1 rounded-full bg-lime shadow-glow"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Selected Layer Details Column */}
        <div className="min-h-[320px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl p-8 border border-border/60 shadow-card bg-surface/90 backdrop-blur-md"
            >
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded-full border border-lime/20 mb-4">
                <Cpu className="h-3.5 w-3.5" />
                <span>{layer.label} Layer</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-snug">
                {layer.detail}
              </h3>

              <div className="mt-8 pt-6 border-t border-border/40">
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                  Technologies & Frameworks
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <Chip key={item} tone="lime">
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
