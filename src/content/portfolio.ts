/**
 * AJ.DEV — Portfolio Content
 * Single source of truth for Ajay S's portfolio.
 * Authentically compiled from resume & detailed portfolio specifications.
 */

export const brand = {
  name: "AJAY.DEV",
  fullName: "Ajay S",
  role: "Full-Stack Developer",
  tagline: "Building scalable, real-time web applications & high-performance APIs.",
  location: "Chennai, Tamil Nadu, India",
  email: "ajaysettu1@gmail.com",
  resumeUrl: "#",
  status: "Available for Freelance & Full-Time",
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "SRM Easwari Engineering College, Chennai",
      period: "2024 — 2026 (Graduated)",
      score: "CGPA: 8.37 / 10",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Adhiparasakthi College of Arts and Science, Ranipet",
      period: "2021 — 2024",
      score: "CGPA: 6.9 / 10",
    },
  ],
} as const;

export const socials = {
  github: "https://github.com/Ajay-2k3",
  linkedin: "https://linkedin.com/in/ajay-s-4b3383267",
  leetcode: "https://leetcode.com/u/Ajay-2k3/",
  x: "https://x.com/",
  email: "mailto:ajaysettu1@gmail.com",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const certifications = [
  {
    id: "jpmorgan-chase",
    title: "JPMorgan Chase Software Engineering Virtual Experience",
    issuer: "Forage",
    date: "Apr 2026",
    summary:
      "Engineered a Java / Apache Kafka microservice with layered REST API endpoints and 15+ passing JUnit integration tests to simulate high-throughput enterprise streaming data.",
    badge: "Enterprise Microservices",
    tags: ["Java", "Apache Kafka", "REST APIs", "JUnit", "Microservices"],
  },
  {
    id: "java-diploma",
    title: "Diploma in Java Programming (Grade A)",
    issuer: "Certified Body",
    date: "Nov 2023",
    summary:
      "Earned Grade A distinction for Object-Oriented Programming (OOP), Enterprise Java application architecture, multi-threading, and core software design patterns.",
    badge: "Grade A Distinction",
    tags: ["Java", "OOP", "Data Structures", "Design Patterns"],
  },
  {
    id: "shaastra-iit-madras",
    title: "Fullstack Development Workshop Certificate",
    issuer: "Shaastra 2024 · IIT Madras",
    date: "2024",
    summary:
      "Successfully completed the intensive Fullstack Development workshop at Shaastra 2024, IIT Madras, gaining hands-on training in modern web engineering & architecture.",
    badge: "IIT Madras Workshop",
    tags: ["Fullstack Development", "IIT Madras", "Shaastra 2024", "Web Engineering"],
  },
] as const;

export const metrics = [
  { label: "LeetCode Solved", value: 180, suffix: "+" },
  { label: "API Speedup", value: 35, suffix: "%" },
  { label: "DB Query Cut", value: 40, suffix: "%" },
  { label: "Pages Shipped", value: 35, suffix: "+" },
] as const;

export const about = {
  heading: "Full-stack precision. Measured performance.",
  body: [
    "I'm an MCA graduate from SRM Easwari Engineering College specializing in full-stack web development. I build scalable, real-time applications using modern technologies like React, Next.js, Node.js, and PostgreSQL.",
    "During my backend developer internship at Bluewhiz Infotech, I optimized API response times by 35% (750ms → 490ms) across 12+ REST endpoints and reduced database query latency by 40% under concurrent load for 500+ IoT telemetry nodes.",
    "Backed by 180+ algorithm problems solved on LeetCode and enterprise software virtual experience at JPMorgan Chase (Java/Kafka), I focus on writing clean, efficient code and delivering measurable system improvements.",
  ],
} as const;

export const experience = [
  {
    company: "Bluewhiz Infotech Pvt. Ltd.",
    role: "Backend Developer Intern",
    period: "Apr 2025 — Aug 2025",
    location: "Dindigul, India",
    bullets: [
      "Delivered coding, testing, and deployment for IoT telemetry dashboards monitoring 500+ nodes across 5 zones.",
      "Cut average API response time from ~750ms to ~490ms (about 35%) by analyzing and optimizing 12+ RESTful JSON endpoints.",
      "Cut query latency by roughly 40% under concurrent load through quantitative analysis of database query patterns.",
      "Reviewed and tested 6 pull requests against coding standards, identifying and resolving 8 production defects via log analysis.",
      "Participated in 3 Agile/Scrum sprints, adhering to SDLC processes and communicating progress with stakeholders.",
    ],
    stack: ["Node.js", "PostgreSQL", "React Native", "REST APIs", "JWT", "RBAC"],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineering Virtual Experience",
    period: "Apr 2026",
    location: "Forage",
    bullets: [
      "Built a Java/Apache Kafka microservice with layered REST APIs for financial data stream processing.",
      "Wrote 15+ passing JUnit integration tests to validate high-throughput streaming endpoints.",
    ],
    stack: ["Java", "Apache Kafka", "REST APIs", "JUnit", "Microservices"],
  },
] as const;

export const projects = [
  {
    slug: "ai-stock-platform",
    title: "AI Stock Prediction & Monitoring Platform",
    summary:
      "A real-time stock prediction and monitoring platform processing live JSON WebSocket data streams (1000+ points/sec) with a Python FastAPI ML inference microservice.",
    tags: ["React", "Node.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "Socket.IO"],
    metric: "15% UI Latency Cut",
    year: "2026",
    details: {
      problem:
        "Traders need real-time prediction insights, but existing platforms lag in data delivery or have slow inference processing under high-frequency market feeds.",
      solution:
        "Built a decoupled real-time system: React for UI rendering, Node.js/TypeScript for WebSocket orchestration, and a Python FastAPI microservice for ML model inference.",
      features: [
        "Live JSON WebSocket streaming with automatic exponential backoff reconnection",
        "React frontend optimized for sub-second UI responsiveness under continuous data load",
        "FastAPI Python service delivering ~30% faster ML prediction response times",
        "PostgreSQL for historical data storage and Redis for caching & rate limiting",
      ],
      results: [
        "15% reduction in UI update latency during continuous data feeds",
        "~30% faster ML prediction response times",
        "Successfully processes 1000+ data points per second with 99.2% uptime",
      ],
    },
  },
  {
    slug: "flowerly-ecommerce",
    title: "Flowerly — Multi-Tenant Floral E-Commerce",
    summary:
      "A modern, scalable multi-tenant e-commerce platform featuring 35+ pages, 4 user roles (Customer, Vendor, Admin, Delivery), Razorpay payment processing, and Socket.IO live order tracking.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "Razorpay", "Socket.IO"],
    metric: "35+ Pages · 4 Roles",
    year: "2025",
    details: {
      problem:
        "Small floral businesses needed an affordable e-commerce platform supporting 4 distinct user personas (Customer, Vendor, Admin, Delivery) without building separate applications.",
      solution:
        "Designed a single-codebase multi-tenant Next.js application using Role-Based Access Control (RBAC), JWT authentication, Razorpay payments, and Socket.IO real-time delivery tracking.",
      features: [
        "4 distinct role workflows: Customer catalog & checkout, Vendor CRUD dashboard, Delivery map tracking, Admin financial reports",
        "Razorpay payment gateway integration supporting Cards, UPI, and Digital Wallets with 99.5% processing success",
        "Live order status updates and delivery tracking via Socket.IO with <500ms latency",
        "25+ reusable UI components reducing code duplication by 30%",
      ],
      results: [
        "35+ responsive pages deployed on Vercel",
        "30% reduction in duplicated code through DRY component architecture",
        "99.5% payment processing success rate with real-time verification",
      ],
    },
  },
  {
    slug: "ajay-dev-portfolio",
    title: "AJAY.DEV — Production Developer Portfolio",
    summary:
      "An award-grade, production-ready engineering showcase built with TanStack Start, React 19, Tailwind CSS v4, and GSAP/Framer Motion physics.",
    tags: ["React 19", "TanStack Start", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    metric: "98/100 Perf & A11y",
    year: "2026",
    details: {
      problem:
        "Generic portfolio templates lack performance discipline, kinetic interactive feedback, accessibility standards, and deep technical showcase features.",
      solution:
        "Designed an Obsidian-themed architecture featuring interactive 3D perspective tilt cards, real-time IST clock, live WebSocket command profiler, tag filtering, and accessibility skip links.",
      features: [
        "Kinetic role rotator with smooth blur transitions and live spotlight cursor tracking",
        "3D perspective mouse tilt container with spring physics",
        "Interactive case study detail drawers with full problem-solution breakdowns",
        "WCAG 2.1 AA accessible focus states and prefers-reduced-motion fallbacks",
      ],
      results: [
        "98/100 Lighthouse performance & accessibility scores",
        "Zero layout shifts with sub-100ms INP response budget",
        "Fully responsive across 320px to 1536px breakpoints",
      ],
    },
  },
] as const;

export const architectureLayers = [
  {
    id: "client",
    label: "Client",
    detail:
      "React 19 & Next.js with optimized state re-rendering, responsive Tailwind layouts, and sub-second UI updates.",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "realtime",
    label: "Real-Time & Edge",
    detail:
      "WebSocket and Socket.IO connections for continuous data streams and live event broadcasting with <500ms latency.",
    items: ["WebSocket", "Socket.IO", "Vercel Edge", "Redis"],
  },
  {
    id: "services",
    label: "Services",
    detail:
      "Node.js/Express REST APIs with JWT authentication, RBAC authorization, and Python FastAPI ML inference microservices.",
    items: ["Node.js", "Express.js", "Python FastAPI", "JWT/RBAC"],
  },
  {
    id: "data",
    label: "Data",
    detail:
      "PostgreSQL and Supabase with Prisma ORM, quantitative query indexing, and Redis caching for high-concurrency workloads.",
    items: ["PostgreSQL", "Supabase", "Prisma", "Redis", "MongoDB"],
  },
] as const;

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "C++", "Python", "Java", "SQL", "HTML5", "CSS3"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "Redux", "React Native", "FastAPI", "Tailwind CSS", "Prisma"],
  },
  {
    group: "Databases & APIs",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "RESTful APIs", "WebSocket", "Socket.IO", "JWT / RBAC"],
  },
  {
    group: "Tools & Cloud",
    items: ["Docker", "Git", "GitHub Actions", "AWS (EC2, S3)", "Vercel", "Kafka", "Postman", "Linux"],
  },
] as const;

export const philosophy = {
  quote:
    "System performance isn't a guess — it's measured. Write clean, type-safe code that stays fast under load.",
} as const;

export const achievements = [
  { title: "180+ LeetCode", detail: "DP, Graphs, Trees & Sliding Window discipline" },
  { title: "35% API Speedup", detail: "750ms → 490ms response time at Bluewhiz" },
  { title: "40% Query Latency Cut", detail: "Database optimization under concurrent load" },
  { title: "JPMorgan Chase", detail: "Software Engineering Virtual Experience (Kafka/Java)" },
] as const;

export const services = [
  {
    title: "Full-Stack Web Development",
    detail:
      "End-to-end production web applications using React, Next.js, Node.js, and PostgreSQL with measured performance.",
    tag: "Freelance / Full-Time",
  },
  {
    title: "Backend & API Optimization",
    detail:
      "Audit and remediate slow REST APIs and database queries — delivering proven 35%+ latency reductions.",
    tag: "Contract / Consulting",
  },
  {
    title: "Real-Time & E-Commerce Systems",
    detail:
      "Multi-tenant systems with role-based access control (RBAC), live WebSocket streams, and Razorpay/Stripe payments.",
    tag: "Project Scope",
  },
] as const;

export const blogs = [
  {
    title: "Optimizing API Response Time by 35%: Lessons from Production",
    excerpt:
      "How quantitative query indexing, response caching, and connection pooling cut latency from 750ms to 490ms.",
    href: "#",
    date: "Aug 2025",
    readTime: "7 min",
  },
  {
    title: "Building Multi-Tenant Architecture with Next.js & RBAC",
    excerpt:
      "Architecting a single-codebase e-commerce platform serving Customers, Vendors, Admins, and Delivery partners.",
    href: "#",
    date: "Mar 2026",
    readTime: "9 min",
  },
  {
    title: "Real-Time WebSockets & FastAPI ML Inference",
    excerpt:
      "Handling 1000+ data points per second with Node.js, Socket.IO, and Python microservices under a sub-second UI budget.",
    href: "#",
    date: "Jun 2026",
    readTime: "8 min",
  },
] as const;
