import { Container } from "@/components/ui/Container";
import { brand, nav, socials } from "@/content/portfolio";
import { Github, Linkedin, Twitter, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-mono">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-lime-foreground font-bold">
                A
              </span>
              <span>{brand.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              {brand.tagline} Engineered, shipped, and iterated in the open.
            </p>
          </div>
          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </div>
            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-foreground/90 hover:text-lime transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Elsewhere
            </div>
            <ul className="space-y-2">
              <li>
                <a href={socials.github} className="inline-flex items-center gap-2 text-sm hover:text-lime" target="_blank" rel="noreferrer">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a href={socials.linkedin} className="inline-flex items-center gap-2 text-sm hover:text-lime" target="_blank" rel="noreferrer">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </li>
              <li>
                <a href={socials.leetcode} className="inline-flex items-center gap-2 text-sm hover:text-lime" target="_blank" rel="noreferrer">
                  <Code2 className="h-3.5 w-3.5" /> LeetCode
                </a>
              </li>
              <li>
                <a href={socials.x} className="inline-flex items-center gap-2 text-sm hover:text-lime" target="_blank" rel="noreferrer">
                  <Twitter className="h-3.5 w-3.5" /> X / Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span className="font-mono">© {new Date().getFullYear()} {brand.name} — Engineered with intent.</span>
          <span className="font-mono">v1.0 · Built on TanStack Start</span>
        </div>
      </Container>
    </footer>
  );
}
