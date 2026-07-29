import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Terminal,
  Sparkles,
  Copy,
  Check,
  Play,
  Pause,
} from "lucide-react";
import { brand, metrics } from "@/content/portfolio";
import { StatusPill } from "@/components/ui/StatusPill";
import { CTAButton } from "@/components/ui/CTAButton";
import { Container } from "@/components/ui/Container";
import { useMagnetic } from "@/lib/motion/useMagnetic";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const roles = [
  {
    title: "Software Engineer",
    subtitle: "Building scalable full-stack & backend apps using React, Next.js, Node.js, FastAPI, PostgreSQL & Redis.",
    badge: "Full-Stack & Backend",
    skills: ["React.js", "Next.js", "Node.js", "FastAPI", "PostgreSQL", "Redis"],
    command: "npx ajay-dev inspect --software-engineer",
    snippet: `const engineer = {\n  name: "Ajay S",\n  education: "MCA (SRM Easwari Engineering College)",\n  leetCodeSolved: "100+ DSA Problems",\n  status: "Available for Hire"\n};`,
  },
  {
    title: "Backend Developer",
    subtitle: "Experienced in Node.js, Express.js, PostgreSQL, Supabase, JWT authentication, RBAC & React Native integration.",
    badge: "Backend & Databases",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "JWT/RBAC", "React Native"],
    command: "npx ajay-dev inspect --backend",
    snippet: `export async function verifyAndAuthorize(req: Request) {\n  const user = await verifyJWT(req.headers.authorization);\n  return enforceRBAC(user.role, ["Admin", "Vendor", "Customer", "Delivery"]);\n}`,
  },
  {
    title: "Real-Time AI Engineer",
    subtitle: "Processed real-time WebSocket market data streams exceeding 1,000 data points/sec with Python FastAPI ML inference.",
    badge: "Real-Time & AI",
    skills: ["Python", "FastAPI", "Socket.IO", "Redis", "TensorFlow", "PyTorch"],
    command: "npx ajay-dev stream --stock-ai",
    snippet: `@app.websocket("/ws/stock-stream")\nasync function stockInferenceStream(websocket: WebSocket):\n    data = await websocket.receive_json()\n    prediction = await ml_model.predict(data)\n    await redis_cache.set(data.symbol, prediction)`,
  },
  {
    title: "E-Commerce Architect",
    subtitle: "Built Flowerly platform with 35+ responsive pages across 4 user roles (Customer, Vendor, Admin, Delivery) & Razorpay.",
    badge: "Multi-Tenant E-Commerce",
    skills: ["Next.js", "Prisma", "Supabase", "Razorpay", "Socket.IO", "Tailwind CSS"],
    command: "npx ajay-dev inspect --flowerly",
    snippet: `const order = await prisma.order.create({\n  data: { tenantId, customerRole, vendorId, razorpayPaymentId, liveTrackingId }\n});`,
  },
] as const;

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const hireBtnRef = useMagnetic<HTMLDivElement>(0.35);
  const workBtnRef = useMagnetic<HTMLDivElement>(0.35);
  const currentRole = roles[roleIndex];

  // Auto-switch roles with comfortable 7.5s interval
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 7500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Mouse tracking spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(currentRole.command);
    setCopied(true);
    toast.success("Command copied to clipboard", {
      description: currentRole.command,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative flex flex-col justify-center overflow-hidden pt-20 sm:pt-28 pb-10 lg:pt-32 lg:pb-14"
    >
      {/* Dynamic Cursor Spotlight Grid */}
      <div
        className="pointer-events-none absolute inset-0 grid-noise opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 hidden sm:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(203, 255, 1, 0.07), transparent 80%)`,
        }}
        aria-hidden
      />
      {/* Ambient background blur */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] sm:h-[550px] w-[600px] sm:w-[850px] rounded-full bg-lime/[0.05] blur-[120px]"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Kinetic Typography Content */}
          <div className="lg:col-span-7">
            {/* Availability Pill & Location */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-4 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <StatusPill label={brand.status} />
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-muted-foreground border border-border/40 rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 bg-elevated/40">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span className="truncate max-w-[200px] sm:max-w-none">{brand.location}</span>
              </span>
            </motion.div>

            {/* Greeting & Stable Kinetic Role Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="space-y-1 sm:space-y-2"
            >
              <span className="font-mono text-xs sm:text-sm tracking-wide text-lime uppercase font-semibold flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" /> Hi, I'm {brand.fullName}
              </span>

              {/* Fixed Height Kinetic Role Rotator Header */}
              <div className="relative h-[4.5rem] xs:h-[5rem] sm:h-[5.5rem] lg:h-[6.5rem] flex items-center overflow-hidden py-1">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentRole.title}
                    initial={{ y: 30, opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -30, opacity: 0, filter: "blur(6px)" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-display text-2.5xl xs:text-3.5xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15] sm:leading-[1.08] w-full"
                  >
                    <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                      {currentRole.title}
                    </span>
                  </motion.h1>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Stable Subtitle Container */}
            <div className="mt-2 sm:mt-3 min-h-[4rem] sm:min-h-[4.5rem] flex items-start">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRole.subtitle}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-xs sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl"
                >
                  {currentRole.subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Responsive Role Switcher Controls */}
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[11px] sm:text-xs font-mono text-muted-foreground mr-1 shrink-0">
                Switch Role:
              </span>
              {roles.map((r, idx) => (
                <button
                  key={r.title}
                  onClick={() => {
                    setRoleIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={cn(
                    "shrink-0 px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-full border transition-all duration-300",
                    idx === roleIndex
                      ? "bg-lime text-lime-foreground border-lime font-bold shadow-glow-sm scale-105"
                      : "bg-surface/60 border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                  )}
                >
                  {r.title.split(" ")[0]}
                </button>
              ))}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? "Pause auto-switch" : "Play auto-switch"}
                className="shrink-0 p-1 sm:p-1.5 rounded-full border border-border/60 text-muted-foreground hover:text-lime transition-colors"
              >
                {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              </button>
            </div>

            {/* Stable Skill Chips Container */}
            <div className="mt-4 sm:mt-6 min-h-[2.5rem] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole.badge}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-1.5 sm:gap-2 items-center"
                >
                  {currentRole.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-mono rounded-md bg-elevated/70 border border-lime/20 text-foreground/90 flex items-center gap-1 sm:gap-1.5 shadow-sm"
                    >
                      <span className="h-1 w-1 rounded-full bg-lime shrink-0" />
                      {skill}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4"
            >
              <div ref={hireBtnRef} className="w-full xs:w-auto">
                <CTAButton as="a" href="#contact" variant="lime" size="lg" className="w-full xs:w-auto justify-center group shadow-glow">
                  Hire Me <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </CTAButton>
              </div>
              <div ref={workBtnRef} className="w-full xs:w-auto">
                <CTAButton as="a" href="#projects" variant="outline" size="lg" className="w-full xs:w-auto justify-center">
                  View Work
                </CTAButton>
              </div>
            </motion.div>
          </div>

          {/* Interactive Developer Terminal Widget */}
          <div className="lg:col-span-5 mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="rounded-2xl border border-border/80 bg-surface/90 shadow-card backdrop-blur-xl overflow-hidden group hover:border-lime/40 transition-colors"
            >
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 bg-elevated/80 border-b border-border/60">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs text-muted-foreground">
                  <Terminal className="h-3.5 w-3.5 text-lime" />
                  <span>ajay.config.ts</span>
                </div>
                <span className="px-1.5 py-0.5 sm:px-2 text-[9px] sm:text-[10px] font-mono rounded bg-lime/10 text-lime border border-lime/20 truncate max-w-[110px] sm:max-w-none">
                  {currentRole.badge}
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-4 sm:p-5 font-mono text-xs space-y-3 sm:space-y-4">
                {/* Interactive CLI Command Copy Row */}
                <div className="flex items-center justify-between rounded-lg bg-background/80 px-2.5 py-1.5 sm:px-3 sm:py-2 border border-border/50">
                  <div className="flex items-center gap-2 text-foreground/90 overflow-x-auto no-scrollbar text-[11px] sm:text-xs">
                    <span className="text-lime">$</span>
                    <span>{currentRole.command}</span>
                  </div>
                  <button
                    onClick={handleCopyCommand}
                    className="p-1 sm:p-1.5 rounded hover:bg-elevated text-muted-foreground hover:text-lime transition-colors shrink-0 ml-1.5"
                    title="Copy command"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-lime" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>

                {/* Animated Code Snippet Box */}
                <div className="rounded-lg bg-background/50 p-3 sm:p-4 border border-border/30 relative">
                  <AnimatePresence mode="wait">
                    <motion.pre
                      key={currentRole.title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="text-muted-foreground overflow-x-auto text-[10px] sm:text-[11px] leading-relaxed no-scrollbar"
                    >
                      <code className="text-emerald-400 font-mono">
                        {currentRole.snippet}
                      </code>
                    </motion.pre>
                  </AnimatePresence>
                </div>

                {/* Terminal Quick Metrics */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-2 border-t border-border/30 text-center">
                  <div className="p-1.5 sm:p-2 rounded bg-elevated/40">
                    <div className="text-lime font-bold text-xs sm:text-sm">100+</div>
                    <div className="text-[9px] sm:text-[10px] text-muted-foreground">LeetCode Solved</div>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded bg-elevated/40">
                    <div className="text-lime font-bold text-xs sm:text-sm">1,000+</div>
                    <div className="text-[9px] sm:text-[10px] text-muted-foreground">Data Pts / sec</div>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded bg-elevated/40">
                    <div className="text-lime font-bold text-xs sm:text-sm">35+</div>
                    <div className="text-[9px] sm:text-[10px] text-muted-foreground">Pages Shipped</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 sm:mt-16 hidden items-center gap-3 font-mono text-xs text-muted-foreground md:flex"
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-lime" />
          <span>Scroll to explore engineering portfolio</span>
        </motion.div>
      </Container>
    </section>
  );
}
