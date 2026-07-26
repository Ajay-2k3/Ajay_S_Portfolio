import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { architectureLayers } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Architecture() {
  const [active, setActive] = useState<string>(architectureLayers[0].id);
  const layer =
    architectureLayers.find((l) => l.id === active) ?? architectureLayers[0];

  return (
    <Section id="architecture" className="bg-surface/40">
      <SectionHeader
        eyebrow="Architecture"
        title="Systems, drawn out loud."
        description="Every project I own carries a layered mental model. Here's the one behind most of my products."
      />

      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
        {/* Diagram */}
        <div className="glass rounded-3xl p-6 md:p-10">
          <div className="space-y-3">
            {architectureLayers.map((l) => (
              <button
                key={l.id}
                onClick={() => setActive(l.id)}
                className={cn(
                  "relative w-full rounded-2xl border p-5 text-left transition-all",
                  active === l.id
                    ? "border-lime/40 bg-lime/5"
                    : "border-border bg-elevated/40 hover:border-white/15",
                )}
                aria-pressed={active === l.id}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg">{l.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    layer 0{architectureLayers.indexOf(l) + 1}
                  </span>
                </div>
                {active === l.id && (
                  <motion.span
                    layoutId="arch-indicator"
                    className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-lime"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-lime">
                {layer.label} layer
              </div>
              <h3 className="mt-4 font-display text-3xl md:text-4xl tracking-tight leading-tight">
                {layer.detail}
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {layer.items.map((i) => (
                  <Chip key={i} tone="lime">
                    {i}
                  </Chip>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
