import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { skills } from "@/content/portfolio";
import { Wrench, Terminal, Cpu, Database, Cloud, Code, Layers } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code className="h-4 w-4 text-lime" />,
  "Frontend Development": <Terminal className="h-4 w-4 text-lime" />,
  "Backend Development": <Cpu className="h-4 w-4 text-lime" />,
  "AI / Machine Learning": <Wrench className="h-4 w-4 text-lime" />,
  "Databases & ORM": <Database className="h-4 w-4 text-lime" />,
  "Cloud & DevOps": <Cloud className="h-4 w-4 text-lime" />,
  "Tools & Version Control": <Wrench className="h-4 w-4 text-lime" />,
  "Computer Science Fundamentals": <Layers className="h-4 w-4 text-lime" />,
};

export function Skills() {
  return (
    <Section id="skills" className="relative py-16 lg:py-24">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/3 right-0 h-[450px] w-[450px] translate-x-1/2 rounded-full bg-lime/[0.04] blur-[120px]"
        aria-hidden
      />

      <SectionHeader
        eyebrow="Toolbelt & Skills"
        title="Tools I reach for every day."
        description="Grouped by stack layer. Sharpened by real production microservices, full-stack projects, and continuous learning."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, groupIdx) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: groupIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass relative rounded-3xl p-6 md:p-8 border border-border/60 hover:border-lime/40 transition-all duration-300 shadow-card group"
          >
            <div className="mb-5 flex items-center justify-between border-b border-border/40 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-lime/10 border border-lime/20 group-hover:scale-110 transition-transform">
                  {icons[group.group] ?? <Code className="h-4 w-4 text-lime" />}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-lime transition-colors">
                  {group.group}
                </h3>
              </div>
              <span className="font-mono text-xs text-muted-foreground bg-elevated px-2.5 py-1 rounded-full border border-border/60">
                {group.items.length} skills
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, skillIdx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: groupIdx * 0.05 + skillIdx * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <Chip tone="lime">{skill}</Chip>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
