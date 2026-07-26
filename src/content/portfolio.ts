/**
 * AJ.DEV — Portfolio content
 * Single source of truth for all homepage content.
 * Placeholders derived from PRD hints; swap for real copy.
 */

export const brand = {
  name: "AJ.DEV",
  fullName: "Ajay S",
  role: "Software Engineer",
  tagline: "I build scalable software that performs.",
  location: "India",
  email: "hello@aj.dev",
  resumeUrl: "#",
  status: "Available for opportunities",
} as const;

export const socials = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  leetcode: "https://leetcode.com/",
  x: "https://x.com/",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const metrics = [
  { label: "Projects Shipped", value: 24, suffix: "+" },
  { label: "LeetCode Solved", value: 180, suffix: "+" },
  { label: "Perf Gains", value: 40, suffix: "%" },
  { label: "Years Building", value: 3, suffix: "+" },
] as const;

export const about = {
  heading: "Engineering, not decorating.",
  body: [
    "I'm a software engineer focused on the intersection of product craft and systems thinking. I ship React and TypeScript frontends that stay fast at scale, and I own the backend and infra to make it happen.",
    "My work sits at the boundary of design and engineering — pixel-precise interfaces, measured performance budgets, and clean architectures that outlast the sprint.",
  ],
} as const;

export const experience = [
  {
    company: "Product Startup",
    role: "Software Engineering Intern",
    period: "2024 — 2025",
    location: "Remote",
    bullets: [
      "Owned a multi-role e-commerce feature end-to-end (React, Next.js, PostgreSQL)",
      "Reduced database query latency by 40% through indexing and denormalization",
      "Introduced a component library that cut ticket cycle time by ~30%",
    ],
    stack: ["React", "Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2023 — Present",
    location: "Remote",
    bullets: [
      "Delivered production dashboards and marketing sites for early-stage teams",
      "Set up CI, previews, and monitoring so shipping stays boring",
    ],
    stack: ["React", "Node", "Tailwind", "Supabase"],
  },
  {
    company: "Open Source",
    role: "Contributor",
    period: "2022 — Present",
    location: "Global",
    bullets: [
      "Contributions across React tooling and DX packages",
      "180+ LeetCode problems solved — DS&A discipline",
    ],
    stack: ["TypeScript", "Vite", "Vitest"],
  },
] as const;

export const projects = [
  {
    slug: "commerce-platform",
    title: "Multi-Role Commerce Platform",
    summary:
      "A production e-commerce system with admin, vendor, and buyer surfaces sharing one design system.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "RBAC"],
    metric: "40% faster queries",
    year: "2025",
  },
  {
    slug: "perf-lab",
    title: "Perf Lab — Runtime Profiler",
    summary:
      "A developer tool that captures INP/LCP/CLS traces per commit and diff-reports regressions in PRs.",
    tags: ["React", "Web Vitals", "Vite", "GitHub App"],
    metric: "sub-100ms INP budget",
    year: "2024",
  },
  {
    slug: "architecture-explorer",
    title: "Architecture Explorer",
    summary:
      "An interactive system-design visualizer that renders service graphs from a declarative schema.",
    tags: ["TypeScript", "D3", "SVG", "GSAP"],
    metric: "60fps on 500 nodes",
    year: "2024",
  },
  {
    slug: "portfolio",
    title: "AJ.DEV Portfolio",
    summary:
      "This site — built as a case study in motion, performance, and engineering craft.",
    tags: ["TanStack Start", "GSAP", "Tailwind v4"],
    metric: "95+ Lighthouse",
    year: "2026",
  },
] as const;

export const architectureLayers = [
  {
    id: "client",
    label: "Client",
    detail:
      "React 19 + TanStack Router with route-level code splitting, prefetch on intent, and streaming SSR.",
    items: ["React 19", "TanStack Router", "Tailwind v4", "GSAP"],
  },
  {
    id: "edge",
    label: "Edge",
    detail:
      "Server functions and route handlers running on Cloudflare Workers — cold-start-free, close to the user.",
    items: ["Workers", "Server Functions", "KV Cache"],
  },
  {
    id: "services",
    label: "Services",
    detail:
      "Typed RPC boundaries with Zod validation. Idempotent handlers, structured logs, tracing spans.",
    items: ["tRPC-style", "Zod", "OpenTelemetry"],
  },
  {
    id: "data",
    label: "Data",
    detail:
      "PostgreSQL with row-level security, migrations under version control, read replicas for hot paths.",
    items: ["Postgres", "Prisma", "Redis"],
  },
] as const;

export const skills = [
  {
    group: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "TanStack",
      "Tailwind",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    group: "Backend",
    items: ["Node.js", "PostgreSQL", "Prisma", "Redis", "REST", "GraphQL"],
  },
  {
    group: "Infra",
    items: ["Vercel", "Cloudflare", "Docker", "GitHub Actions", "OpenTelemetry"],
  },
  {
    group: "Craft",
    items: ["Design Systems", "Perf Budgets", "A11y", "Testing", "DX"],
  },
] as const;

export const philosophy = {
  quote:
    "Software is a durable good. Ship what you would still be proud to read a year from now.",
} as const;

export const achievements = [
  { title: "180+ LeetCode", detail: "DS&A discipline" },
  { title: "40% Latency", detail: "reduction in production DB" },
  { title: "95+ Lighthouse", detail: "across production sites" },
  { title: "Open Source", detail: "React & DX contributions" },
] as const;

export const services = [
  {
    title: "Product Engineering",
    detail:
      "End-to-end feature delivery — from Figma to shipped, with performance and a11y built in.",
    tag: "Retainer / Project",
  },
  {
    title: "Frontend Systems",
    detail:
      "Design systems, component libraries, and migration paths that outlive the roadmap.",
    tag: "Consulting",
  },
  {
    title: "Perf & DX",
    detail:
      "Audit and remediate slow apps — Core Web Vitals, bundle budgets, and developer tooling.",
    tag: "Fixed-scope",
  },
] as const;

export const blogs = [
  {
    title: "Motion as documentation",
    excerpt:
      "Why the best animations explain state changes instead of decorating them.",
    href: "#",
    date: "Jul 2026",
    readTime: "6 min",
  },
  {
    title: "Shipping under a perf budget",
    excerpt:
      "A pragmatic checklist for keeping INP under 100ms without sacrificing DX.",
    href: "#",
    date: "May 2026",
    readTime: "9 min",
  },
  {
    title: "TanStack Start in production",
    excerpt:
      "Notes from moving a real product from Next.js to TanStack Start on the edge.",
    href: "#",
    date: "Mar 2026",
    readTime: "12 min",
  },
] as const;
