import { createFileRoute } from "@tanstack/react-router";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Loader } from "@/components/layout/Loader";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Architecture } from "@/components/sections/Architecture";
import { Skills } from "@/components/sections/Skills";
import { Philosophy } from "@/components/sections/Philosophy";
import { Achievements } from "@/components/sections/Achievements";
import { Services } from "@/components/sections/Services";
import { Blogs } from "@/components/sections/Blogs";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/ui/CustomCursor";

const TITLE = "AJAY.DEV — Ajay S | Software Engineer & Full-Stack Developer";
const DESCRIPTION =
  "Ajay S — Software Engineer and MCA student building scalable full-stack & backend applications using React, Next.js, Node.js, FastAPI, PostgreSQL, and Redis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ajay-s-portfolio-5leb.vercel.app/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://ajay-s-portfolio-5leb.vercel.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ajay S",
          url: "https://ajay-s-portfolio-5leb.vercel.app/",
          jobTitle: "Software Engineer",
          sameAs: [
            "https://github.com/Ajay-2k3",
            "https://www.linkedin.com/in/ajay-s-4b3383267/",
            "https://leetcode.com/u/Ajay-2k3/",
          ],
          knowsAbout: [
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "FastAPI",
            "Python",
            "TypeScript",
            "PostgreSQL",
            "Redis",
            "Supabase",
            "Socket.IO",
            "JWT Authentication",
            "RBAC",
            "Data Structures & Algorithms",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <CustomCursor />
      <Loader />
      <Nav />
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-md focus:bg-lime focus:px-3 focus:py-2 focus:text-lime-foreground"
      >
        Skip to content
      </a>
      <main className="overflow-hidden max-w-full w-full">
        <Hero />
        <Metrics />
        <About />
        <Projects />
        <Architecture />
        <Experience />
        <Achievements />
        <Philosophy />
        <Skills />
        <Services />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
