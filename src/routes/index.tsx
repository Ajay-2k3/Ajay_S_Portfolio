import { createFileRoute } from "@tanstack/react-router";
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

const TITLE = "AJ.DEV — Software Engineer Portfolio";
const DESCRIPTION =
  "Ajay S. Software engineer building scalable React, TypeScript, and full-stack products with measurable performance and clean architecture.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ajay S",
          url: "/",
          jobTitle: "Software Engineer",
          knowsAbout: [
            "React",
            "TypeScript",
            "Next.js",
            "TanStack",
            "Node.js",
            "PostgreSQL",
            "Performance Engineering",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Loader />
      <Nav />
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-md focus:bg-lime focus:px-3 focus:py-2 focus:text-lime-foreground"
      >
        Skip to content
      </a>
      <main>
        <Hero />
        <Metrics />
        <About />
        <Experience />
        <Projects />
        <Architecture />
        <Skills />
        <Philosophy />
        <Achievements />
        <Services />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
