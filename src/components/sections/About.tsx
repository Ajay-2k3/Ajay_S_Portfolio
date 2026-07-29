import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReveal } from "@/lib/motion/useReveal";
import { useCounter } from "@/lib/motion/useCounter";
import { about, brand, philosophy, metrics } from "@/content/portfolio";
import {
  Sparkles,
  Quote,
  CheckCircle2,
  MapPin,
  Target,
  Terminal,
  Zap,
  GraduationCap,
  Award,
} from "lucide-react";

/** Interactive Achievement Counter Card */
function AchievementCard({
  value,
  suffix = "",
  label,
  detail,
  index,
}: {
  value: number;
  suffix?: string;
  label: string;
  detail: string;
  index: number;
}) {
  const { ref, value: currentCount } = useCounter(value, 1.8);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl border border-border/60 bg-surface/80 p-5 shadow-card backdrop-blur-md hover:border-lime/40 transition-colors"
    >
      <div className="flex items-baseline gap-1 font-display text-3xl font-bold tracking-tight text-foreground group-hover:text-lime transition-colors">
        <span ref={ref}>{currentCount}</span>
        <span className="text-lime">{suffix}</span>
      </div>
      <div className="mt-1 font-mono text-xs font-semibold text-foreground/90">{label}</div>
      <div className="mt-0.5 text-[11px] text-muted-foreground">{detail}</div>
    </motion.div>
  );
}

/** 3D Mouse Tilt Container */
function TiltCard({ children }: { children: React.ReactNode }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: y * -12, y: x * 12 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: hovered ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
}

export function About() {
  const revealRef = useReveal<HTMLDivElement>({ selector: "[data-reveal]", stagger: 0.12 });

  return (
    <Section id="about" className="relative py-12 lg:py-16">
      {/* Background Lighting Effects */}
      <div
        className="pointer-events-none absolute top-1/3 left-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-lime/[0.04] blur-[100px]"
        aria-hidden
      />

      <SectionHeader eyebrow="About & Background" title={about.heading} />

      <div ref={revealRef} className="mt-12 space-y-16">
        {/* Main Grid: Narrative vs 3D Profile Card */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Narrative Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div data-reveal className="space-y-4 text-base sm:text-lg leading-relaxed text-foreground/85">
              {about.body.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "border-l-2 border-lime/60 pl-4 py-1 bg-lime/[0.02] rounded-r-lg font-medium text-foreground"
                      : ""
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Specs */}
            <div data-reveal className="grid grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-border/60 bg-surface/60 p-4 backdrop-blur-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-lime/10 text-lime mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                  <div className="mt-0.5 font-medium text-foreground text-sm">{brand.location}</div>
                </div>
              </div>
              <div className="rounded-xl border border-border/60 bg-surface/60 p-4 backdrop-blur-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-lime/10 text-lime mt-0.5">
                  <Target className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Status</div>
                  <div className="mt-0.5 font-medium text-lime text-sm">{brand.status}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Glass Interactive Profile Card Column */}
          <div data-reveal className="lg:col-span-5">
            <TiltCard>
              <div className="glass relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-lime/20 shadow-card p-8 flex flex-col justify-between group">
                {/* Ambient Radial Gradient Aura */}
                <div className="absolute inset-0 bg-gradient-to-br from-elevated via-surface to-background opacity-90" />
                <div className="absolute inset-0 grid-noise opacity-30" />
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-lime/25 blur-3xl transition-transform duration-500 group-hover:scale-125" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-xs text-lime backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Full-Stack Engineer</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">AJAY.DEV</span>
                </div>

                {/* Center Graphic Visualizer */}
                <div className="relative z-10 my-auto py-8 space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <Terminal className="h-4 w-4 text-lime" />
                    <span>ajay_profile_spec.ts</span>
                  </div>
                  <div className="rounded-xl bg-background/80 border border-border/60 p-4 font-mono text-xs space-y-2 shadow-inner">
                    <div className="flex justify-between text-muted-foreground">
                      <span>education</span>
                      <span className="text-lime">MCA Student (SRM Easwari)</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>internship</span>
                      <span className="text-emerald-400">Bluewhiz Infotech</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>leetCode</span>
                      <span className="text-lime">100+ DSA Solved</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Signature & Live Status */}
                <div className="relative z-10 flex items-end justify-between pt-4 border-t border-border/40">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-lime">Signature</div>
                    <div className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground">{brand.fullName}</div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-xl border border-lime/30 bg-background/90 px-3 py-1.5 font-mono text-xs">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                    </span>
                    <span className="text-lime font-semibold">status: available</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Education Breakdown Cards */}
        <div data-reveal className="space-y-4">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-lime" /> Academic Qualifications & Education
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {brand.education.map((edu, i) => (
              <div
                key={edu.degree}
                className="glass rounded-2xl p-6 border border-border/60 hover:border-lime/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-lime uppercase tracking-wider font-semibold">
                      Education 0{i + 1}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{edu.period}</span>
                  </div>
                  <h4 className="mt-3 font-display text-xl font-bold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">Academic Merit</span>
                  <span className="font-mono text-xs font-bold text-lime bg-lime/10 px-2.5 py-1 rounded-full border border-lime/20">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophy Quote Banner */}
        <div data-reveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-lime/30 bg-gradient-to-r from-surface via-elevated to-surface p-8 shadow-card"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 text-lime pointer-events-none">
              <Quote className="h-24 w-24" />
            </div>
            <div className="relative z-10 max-w-3xl space-y-3">
              <div className="font-mono text-xs font-semibold uppercase tracking-widest text-lime flex items-center gap-2">
                <Zap className="h-3.5 w-3.5" /> Engineering Principle
              </div>
              <blockquote className="font-display text-xl sm:text-2xl font-medium text-foreground italic leading-relaxed">
                "{philosophy.quote}"
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Achievement Counters Grid */}
        <div data-reveal className="space-y-4">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-lime" /> Proven Metrics & Impact
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <AchievementCard
              value={metrics[0].value}
              suffix={metrics[0].suffix}
              label={metrics[0].label}
              detail={metrics[0].detail}
              index={0}
            />
            <AchievementCard
              value={metrics[1].value}
              suffix={metrics[1].suffix}
              label={metrics[1].label}
              detail={metrics[1].detail}
              index={1}
            />
            <AchievementCard
              value={metrics[2].value}
              suffix={metrics[2].suffix}
              label={metrics[2].label}
              detail={metrics[2].detail}
              index={2}
            />
            <AchievementCard
              value={metrics[3].value}
              suffix={metrics[3].suffix}
              label={metrics[3].label}
              detail={metrics[3].detail}
              index={3}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
