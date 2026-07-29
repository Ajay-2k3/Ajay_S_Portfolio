import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogs } from "@/content/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Blogs() {
  return (
    <Section id="blog" className="bg-surface/40 py-16 lg:py-24">
      <SectionHeader
        eyebrow="Technical Writing & Insights"
        title="Notes from the engineering workbench."
        description="Articles on real-time systems, multi-tenant architecture, and backend performance engineering."
      />
      <div className="grid gap-4">
        {blogs.map((b, index) => (
          <motion.a
            key={b.title}
            href={b.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex items-start justify-between gap-6 border-b border-border/60 py-8 transition-all hover:border-lime/60"
          >
            <div className="flex-1">
              <div className="mb-3 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <span className="text-lime font-semibold">{b.date}</span>
                <span className="h-px w-6 bg-border" />
                <span>{b.readTime}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight transition-colors group-hover:text-lime">
                {b.title}
              </h3>
              <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed text-sm sm:text-base">
                {b.excerpt}
              </p>
            </div>
            <div className="p-3 rounded-full border border-border/60 group-hover:border-lime/40 group-hover:bg-lime/10 transition-colors shrink-0 mt-1">
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
