/**
 * AJAY.DEV — Portfolio Content
 * Single source of truth for Ajay S's portfolio.
 * Authentically compiled from resume & detailed portfolio specifications.
 */

export const brand = {
  name: "AJAY.DEV",
  fullName: "Ajay S",
  role: "Software Engineer",
  tagline:
    "Building scalable full-stack, backend, and real-time applications using React, Next.js, Node.js, FastAPI, PostgreSQL & Redis.",
  location: "Chennai, Tamil Nadu, India",
  email: "ajaysettu1@gmail.com",
  livePortfolio: "https://ajay-s-portfolio-5leb.vercel.app/",
  resumeUrl: "#",
  status: "Available for Full-Time & Freelance",
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "SRM Easwari Engineering College, Chennai",
      period: "Jun 2024 – May 2026 (Expected)",
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
  linkedin: "https://www.linkedin.com/in/ajay-s-4b3383267/",
  portfolio: "https://ajay-s-portfolio-5leb.vercel.app/",
  leetcode: "https://leetcode.com/u/Ajay-2k3/",
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
    date: "2026",
    summary:
      "Developed a Java-based microservice using Apache Kafka. Built RESTful APIs following enterprise software architecture and implemented over 15 passing JUnit integration tests to ensure distributed system stability.",
    badge: "Enterprise Microservices",
    tags: ["Java", "Apache Kafka", "REST APIs", "JUnit", "Microservices"],
  },
  {
    id: "java-diploma",
    title: "Diploma in Java Programming (Grade A)",
    issuer: "Professional Certification",
    date: "2023",
    summary:
      "Mastered Object-Oriented Programming (OOP), Core Java, Data Structures, and foundational software design patterns with Grade A distinction.",
    badge: "Grade A Distinction",
    tags: ["Java", "OOP", "Core Java", "Data Structures", "Design Patterns"],
  },
  {
    id: "fullstack-diploma",
    title: "Diploma in Full Stack Development",
    issuer: "Professional Certification",
    date: "2024",
    summary:
      "Comprehensive training in modern full-stack web development, mastering frontend and backend technologies, REST API design, and database development.",
    badge: "Full Stack Certification",
    tags: ["Full Stack Development", "Frontend", "Backend", "Databases"],
  },
  {
    id: "shaastra-iit-madras",
    title: "Full Stack Development Workshop Certificate",
    issuer: "Shaastra 2024 · IIT Madras",
    date: "2024",
    summary:
      "Successfully completed the intensive Full Stack Development workshop at Shaastra 2024, IIT Madras, acquiring hands-on expertise in modern web application engineering.",
    badge: "IIT Madras Workshop",
    tags: ["Full Stack Development", "IIT Madras", "Shaastra 2024", "Web Engineering"],
  },
] as const;

export const metrics = [
  {
    label: "LeetCode Solved",
    value: 100,
    suffix: "+",
    detail: "Arrays, Trees, Graphs, DP & Algorithmic Discipline",
  },
  {
    label: "Stream throughput",
    value: 1000,
    suffix: "+ pts/s",
    detail: "Real-Time WebSocket AI Stock Prediction Feed",
  },
  {
    label: "Production Pages",
    value: 35,
    suffix: "+",
    detail: "Flowerly Multi-Tenant Floral E-Commerce Platform",
  },
  {
    label: "Latency Reduced",
    value: 15,
    suffix: "%",
    detail: "Optimized Real-Time Dashboard UI Responsiveness",
  },
] as const;

export const about = {
  heading: "Scalable full-stack precision. Measured performance.",
  body: [
    "I am a Software Engineer and MCA student at SRM Easwari Engineering College, Chennai, with hands-on experience building scalable full-stack and backend applications using React, Next.js, Node.js, FastAPI, PostgreSQL, and Redis.",
    "During my backend developer internship at Bluewhiz Infotech Private Limited, I developed Node.js RESTful APIs, designed PostgreSQL and Supabase databases, integrated React Native modules, and implemented JWT authentication with Role-Based Access Control (RBAC).",
    "With 100+ Data Structures & Algorithms problems solved on LeetCode and practical experience building AI-powered stock prediction microservices and multi-tenant e-commerce platforms, I focus on writing clean, maintainable code and building production-ready software.",
  ],
} as const;

export const experience = [
  {
    company: "Bluewhiz Infotech Private Limited",
    role: "Backend Developer Intern",
    period: "Apr 2025 – Aug 2025",
    location: "Chennai, Tamil Nadu (Hybrid)",
    bullets: [
      "Developed and maintained backend services using Node.js and RESTful APIs.",
      "Designed and managed PostgreSQL and Supabase databases, including schema design and query optimization.",
      "Integrated backend APIs with React Native frontend modules to ensure seamless data flow.",
      "Built frontend features by consuming REST APIs and resolving integration issues.",
      "Implemented JWT authentication, Role-Based Access Control (RBAC), and backend validation.",
      "Debugged backend, database, and API-related issues throughout the software development lifecycle.",
      "Collaborated with cross-functional teams using Agile/Scrum methodologies.",
      "Participated in code reviews, testing, deployment, and production maintenance.",
      "Used Git and GitHub for version control and collaborative development.",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "React Native",
      "REST APIs",
      "JWT",
      "RBAC",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineering Virtual Experience",
    period: "2024",
    location: "Forage",
    bullets: [
      "Developed a Java-based microservice using Apache Kafka to process financial data streams.",
      "Built RESTful APIs following enterprise software architecture standards.",
      "Implemented over 15 passing JUnit integration tests to validate microservice functionality.",
      "Gained practical experience with microservices, distributed systems, and enterprise design patterns.",
    ],
    stack: ["Java", "Apache Kafka", "REST APIs", "JUnit", "Microservices"],
  },
] as const;

export const projects = [
  {
    slug: "ai-stock-platform",
    title: "AI Stock Prediction & Monitoring Platform",
    image: "/stock_predition.png",
    summary:
      "A real-time AI-powered stock prediction and monitoring platform featuring a Python FastAPI machine learning inference microservice processing real-time WebSocket market data streams exceeding 1,000 data points per second.",
    tags: [
      "React",
      "Node.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
    ],
    metric: "1,000+ pts/sec · 15% Latency Cut",
    year: "MCA Final Year Project",
    details: {
      problem:
        "Traders and financial analysts require real-time market data visualization and predictive AI insights without experiencing latency bottlenecks or UI freezing during high-frequency data spikes.",
      solution:
        "Architected a real-time system with a Python FastAPI ML inference service, Socket.IO WebSocket stream handling (>1,000 data points/sec), Redis caching for rapid data retrieval, and PostgreSQL for persistent market storage.",
      features: [
        "Python FastAPI machine learning inference microservice for real-time stock price prediction",
        "High-performance Socket.IO WebSocket stream processing handling >1,000 data points per second",
        "Interactive prediction dashboard with live market data visualization",
        "Redis caching layer for high-throughput data processing and low-latency state retrieval",
        "PostgreSQL database for structured historical market logs and prediction analytics",
      ],
      results: [
        "Improved UI responsiveness and reduced rendering latency by approximately 15%",
        "Successfully processed real-time WebSocket market data streams exceeding 1,000 data points per second",
        "Integrated Redis caching to support high-performance data processing",
      ],
    },
  },
  {
    slug: "flowerly-ecommerce",
    title: "Flowerly — Multi-Tenant Floral E-Commerce Platform",
    image: "/flowerly.png",
    summary:
      "A scalable multi-tenant e-commerce platform featuring over 35 responsive application pages, 4 distinct user roles (Customer, Vendor, Admin, Delivery), Razorpay payment gateway, and Socket.IO real-time order tracking.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "Razorpay",
      "Socket.IO",
    ],
    metric: "35+ Pages · 4 Roles",
    year: "Freelance Project",
    details: {
      problem:
        "Floral vendors and customers needed a unified multi-tenant e-commerce platform supporting role-based access for store managers, customers, delivery staff, and platform administrators.",
      solution:
        "Built a full-stack Next.js and Prisma application backed by Supabase PostgreSQL, incorporating 4 distinct user roles, secure Razorpay checkout, and Socket.IO real-time delivery updates.",
      features: [
        "Built over 35 responsive application pages for seamless user experience",
        "Implemented four user roles: Customer, Vendor, Admin, and Delivery",
        "Integrated Razorpay payment gateway for secure online transactions",
        "Developed real-time order tracking using Socket.IO",
        "Designed scalable database architecture and responsive UI components",
      ],
      results: [
        "Shipped 35+ responsive application pages",
        "Supported 4 seamless user roles (Customer, Vendor, Admin, Delivery)",
        "Integrated Razorpay payment gateway and Socket.IO real-time order tracking",
      ],
    },
  },
  {
    slug: "ajay-dev-portfolio",
    title: "AJAY.DEV — Production Developer Portfolio",
    image: "/protfolio.png",
    summary:
      "Designed and developed a production-ready developer portfolio using React 19, TanStack Start, TypeScript, Tailwind CSS, GSAP, and Framer Motion with high Lighthouse performance and accessibility scores.",
    tags: ["React 19", "TanStack Start", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    metric: "High Lighthouse Perf & A11y",
    year: "Production Portfolio",
    details: {
      problem:
        "Developer portfolios often fail to balance high visual aesthetics, interactive animation performance, accessible navigation, and deep case study breakdowns.",
      solution:
        "Created an interactive Obsidian-themed portfolio with 3D tilt cards, kinetic role switcher, CLI terminal profiler, custom cursor, and responsive accessibility skip links.",
      features: [
        "Designed and developed a production-ready developer portfolio",
        "Built modern UI with advanced animations using GSAP and Framer Motion",
        "Achieved high Lighthouse performance and accessibility scores",
        "Implemented responsive layouts and optimized frontend performance",
        "Showcased projects, technical skills, and professional experience through an interactive user experience",
      ],
      results: [
        "Achieved high Lighthouse performance and accessibility scores",
        "Delivered smooth interactive showcase across mobile and desktop breakpoints",
      ],
    },
  },
] as const;

export const architectureLayers = [
  {
    id: "client",
    label: "Frontend & Mobile",
    detail:
      "React.js, Next.js, and React Native with responsive Tailwind CSS layouts, GSAP micro-interactions, and Framer Motion physics.",
    items: ["React.js", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    id: "realtime",
    label: "Real-Time & Microservices",
    detail:
      "Socket.IO WebSocket streaming processing >1,000 data points/sec, Python FastAPI ML inference microservices, and Apache Kafka messaging.",
    items: ["Socket.IO", "REST APIs", "Python FastAPI", "Redis", "Apache Kafka"],
  },
  {
    id: "services",
    label: "Backend & Security",
    detail:
      "Node.js and Express.js RESTful APIs with JWT authentication, Role-Based Access Control (RBAC), and backend validation.",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "RBAC"],
  },
  {
    id: "data",
    label: "Databases & Cloud",
    detail:
      "PostgreSQL and Supabase with Prisma ORM, MongoDB, MySQL, Redis caching, and deployment on AWS, Docker, Vercel & Render.",
    items: [
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "MySQL",
      "Prisma",
      "Redis",
      "AWS",
      "Docker",
      "Vercel",
      "Render",
    ],
  },
] as const;

export const skills = [
  {
    group: "Programming Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL", "C++"],
  },
  {
    group: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    group: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Socket.IO",
    ],
  },
  {
    group: "AI / Machine Learning",
    items: ["TensorFlow", "PyTorch"],
  },
  {
    group: "Databases & ORM",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Prisma"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Docker", "Vercel", "Render"],
  },
  {
    group: "Tools & Version Control",
    items: ["Git", "GitHub", "VS Code", "Postman", "Apache Kafka"],
  },
  {
    group: "Computer Science Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Database Management Systems (DBMS)",
      "Computer Networks",
      "Software Development Life Cycle (SDLC)",
      "Software Engineering",
      "API Design & Integration",
      "Database Design",
      "Query Optimization",
      "Authentication & Authorization",
      "Code Review",
      "Debugging & Troubleshooting",
      "Agile/Scrum Development",
      "Version Control (Git)",
      "Performance Optimization",
      "Responsive Web Development",
    ],
  },
] as const;

export const philosophy = {
  quote:
    "Passionate about writing clean, maintainable code, solving complex engineering problems, and building production-ready software with modern development practices.",
} as const;

export const achievements = [
  {
    title: "100+ LeetCode Solved",
    detail: "DSA mastery in arrays, linked lists, stacks, queues, trees, graphs, DP & recursion",
  },
  {
    title: "Bluewhiz Internship",
    detail: "Backend Node.js, PostgreSQL, Supabase, JWT/RBAC & React Native integration",
  },
  {
    title: "JPMorgan Chase",
    detail: "Software Engineering Virtual Experience (Java/Apache Kafka microservices)",
  },
  { title: "Shaastra IIT Madras", detail: "Full Stack Development Workshop Certification" },
] as const;

export const services = [
  {
    title: "Full-Stack Web & Mobile Development",
    detail:
      "Building scalable full-stack applications and mobile features using React, Next.js, React Native, Node.js, and PostgreSQL.",
    tag: "Freelance / Full-Time",
  },
  {
    title: "Backend API & Database Architecture",
    detail:
      "Designing RESTful APIs, database schemas in PostgreSQL/Supabase, JWT authentication, RBAC, and query optimization.",
    tag: "Backend & Systems",
  },
  {
    title: "Real-Time & AI-Powered Platforms",
    detail:
      "Developing WebSocket streaming applications (>1,000 pts/sec), Python FastAPI ML inference microservices, and multi-tenant platforms.",
    tag: "AI & Real-Time",
  },
] as const;

export const blogs = [
  {
    title: "Building Real-Time AI Stock Prediction with FastAPI & WebSockets",
    excerpt:
      "Processing WebSocket market data streams exceeding 1,000 data points per second with Node.js, Python FastAPI, and Redis caching.",
    href: "#",
    date: "2026",
    readTime: "7 min",
  },
  {
    title: "Architecting Multi-Tenant Floral E-Commerce with Next.js & RBAC",
    excerpt:
      "Building over 35 responsive pages supporting Customers, Vendors, Admins, and Delivery roles with Socket.IO order tracking.",
    href: "#",
    date: "2025",
    readTime: "8 min",
  },
  {
    title: "Backend Engineering at Bluewhiz: Node.js, PostgreSQL & Supabase",
    excerpt:
      "Key takeaways from developing RESTful APIs, schema design, JWT/RBAC security, and React Native frontend integration.",
    href: "#",
    date: "2025",
    readTime: "6 min",
  },
] as const;
