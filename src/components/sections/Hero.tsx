import { useTextReveal } from "@/lib/motion/useTextReveal";
import { StatusPill } from "@/components/ui/StatusPill";
import { CTAButton } from "@/components/ui/CTAButton";
import { Container } from "@/components/ui/Container";
import { brand } from "@/content/portfolio";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const titleRef = useTextReveal<HTMLHeadingElement>();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-16"
    >
      {/* Ambient grid */}
      <div
        className="pointer-events-none absolute inset-0 grid-noise opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
        aria-hidden
      />
      {/* Ambient lime glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-lime/[0.06] blur-3xl"
        aria-hidden
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <StatusPill label={brand.status} />
          <span className="font-mono text-xs text-muted-foreground">
            {brand.location}
          </span>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-balance max-w-5xl font-display text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.03em]"
        >
          {brand.tagline}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          I'm <span className="text-foreground">{brand.fullName}</span> — a{" "}
          {brand.role.toLowerCase()} focused on React, TypeScript, and the
          performance work that keeps products fast at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <CTAButton as="a" href="#contact" variant="lime" size="lg">
            Hire Me <ArrowUpRight className="h-4 w-4" />
          </CTAButton>
          <CTAButton as="a" href="#projects" variant="outline" size="lg">
            View Work
          </CTAButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-24 hidden items-center gap-3 font-mono text-xs text-muted-foreground md:flex"
        >
          <ArrowDown className="h-3 w-3 animate-bounce" />
          Scroll to explore
        </motion.div>
      </Container>
    </section>
  );
}
