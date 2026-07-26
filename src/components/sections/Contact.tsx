import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/CTAButton";
import { brand, socials } from "@/content/portfolio";
import { useTextReveal } from "@/lib/motion/useTextReveal";
import { Github, Linkedin, Code2, Twitter, ArrowUpRight, Mail, Copy, Check } from "lucide-react";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { toast } from "sonner";

export function Contact() {
  const ref = useTextReveal<HTMLHeadingElement>();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(brand.email);
    setCopied(true);
    toast.success("Email copied to clipboard", {
      description: brand.email,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="!py-16 md:!py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-lime" />
          Contact
        </div>
        <h2
          ref={ref}
          className="text-balance font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight"
        >
          Have a project worth building? Let's talk.
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <CTAButton as="a" href={`mailto:${brand.email}`} variant="lime" size="lg">
            <Mail className="h-4 w-4" />
            {brand.email}
            <ArrowUpRight className="h-4 w-4" />
          </CTAButton>
          <CTAButton onClick={handleCopyEmail} variant="outline" size="lg">
            {copied ? <Check className="h-4 w-4 text-lime" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy Email"}
          </CTAButton>
          <CTAButton as="a" href={brand.resumeUrl} variant="ghost" size="lg">
            Download Resume
          </CTAButton>
        </div>

        <div className="mt-14 flex items-center justify-center gap-6 text-muted-foreground">
          <MagneticLink href={socials.github} external ariaLabel="GitHub">
            <Github className="h-5 w-5 hover:text-lime transition-colors" />
          </MagneticLink>
          <MagneticLink href={socials.linkedin} external ariaLabel="LinkedIn">
            <Linkedin className="h-5 w-5 hover:text-lime transition-colors" />
          </MagneticLink>
          <MagneticLink href={socials.leetcode} external ariaLabel="LeetCode">
            <Code2 className="h-5 w-5 hover:text-lime transition-colors" />
          </MagneticLink>
          <MagneticLink href={socials.x} external ariaLabel="X">
            <Twitter className="h-5 w-5 hover:text-lime transition-colors" />
          </MagneticLink>
        </div>
      </div>
    </Section>
  );
}
