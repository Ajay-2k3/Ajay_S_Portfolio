import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/CTAButton";
import { brand, socials } from "@/content/portfolio";
import { KineticHeading } from "@/components/ui/KineticText";
import {
  Github,
  Linkedin,
  Code2,
  ArrowUpRight,
  Mail,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { toast } from "sonner";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(brand.email);
    setCopied(true);
    toast.success("Email address copied!", {
      description: brand.email,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="h-px w-8 bg-lime" />
          <span className="text-lime font-semibold">Get In Touch</span>
        </motion.div>

        <KineticHeading
          as="h2"
          className="text-balance font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight justify-center text-foreground"
        >
          Have a project or opportunity? Let's build together.
        </KineticHeading>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Currently open to full-time Software Engineering roles, backend architecture engagements,
          and select full-stack freelance projects.
        </motion.p>

        {/* CTA Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <CTAButton
            as="a"
            href={`mailto:${brand.email}`}
            variant="lime"
            size="lg"
            className="shadow-glow group"
          >
            <Mail className="h-4 w-4" />
            <span>{brand.email}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </CTAButton>

          <CTAButton onClick={handleCopyEmail} variant="outline" size="lg">
            {copied ? <Check className="h-4 w-4 text-lime" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? "Copied to Clipboard" : "Copy Email"}</span>
          </CTAButton>

          <CTAButton
            as="a"
            href={brand.livePortfolio}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="lg"
          >
            <span>Live Portfolio</span>
            <ExternalLink className="h-4 w-4" />
          </CTAButton>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-14 flex items-center justify-center gap-6 text-muted-foreground"
        >
          <MagneticLink href={socials.github} external ariaLabel="GitHub">
            <div className="rounded-full border border-border/60 bg-elevated p-3 shadow-sm transition-all duration-300 hover:border-lime/40 hover:text-lime">
              <Github className="h-5 w-5" />
            </div>
          </MagneticLink>
          <MagneticLink href={socials.linkedin} external ariaLabel="LinkedIn">
            <div className="rounded-full border border-border/60 bg-elevated p-3 shadow-sm transition-all duration-300 hover:border-lime/40 hover:text-lime">
              <Linkedin className="h-5 w-5" />
            </div>
          </MagneticLink>
          <MagneticLink href={socials.leetcode} external ariaLabel="LeetCode">
            <div className="rounded-full border border-border/60 bg-elevated p-3 shadow-sm transition-all duration-300 hover:border-lime/40 hover:text-lime">
              <Code2 className="h-5 w-5" />
            </div>
          </MagneticLink>
        </motion.div>
      </div>
    </Section>
  );
}
