import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { KineticHeading, KineticParagraph } from "./KineticText";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="h-px w-8 bg-lime" />
          <span className="text-lime font-semibold">{eyebrow}</span>
        </motion.div>
      )}

      <div>
        <KineticHeading
          as="h2"
          className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-foreground"
        >
          {title}
        </KineticHeading>
      </div>

      {description && (
        <KineticParagraph
          delay={0.15}
          className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
        >
          {description}
        </KineticParagraph>
      )}
    </header>
  );
}
