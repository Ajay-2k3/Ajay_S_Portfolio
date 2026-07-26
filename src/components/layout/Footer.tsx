import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { brand, nav, socials } from "@/content/portfolio";
import { Github, Linkedin, Twitter, Code2, ArrowUp, Clock } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border py-16 bg-background">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-mono">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-lime-foreground font-bold">
                A
              </span>
              <span className="font-bold tracking-tight">{brand.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              {brand.tagline} Engineered, shipped, and iterated in the open.
            </p>
            {time && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-elevated/60 px-3 py-1 text-xs font-mono text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-lime" />
                <span>IST {time} (UTC+5:30)</span>
              </div>
            )}
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
                <a href={socials.github} className="inline-flex items-center gap-2 text-sm hover:text-lime transition-colors" target="_blank" rel="noreferrer">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a href={socials.linkedin} className="inline-flex items-center gap-2 text-sm hover:text-lime transition-colors" target="_blank" rel="noreferrer">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </li>
              <li>
                <a href={socials.leetcode} className="inline-flex items-center gap-2 text-sm hover:text-lime transition-colors" target="_blank" rel="noreferrer">
                  <Code2 className="h-3.5 w-3.5" /> LeetCode
                </a>
              </li>
              <li>
                <a href={socials.x} className="inline-flex items-center gap-2 text-sm hover:text-lime transition-colors" target="_blank" rel="noreferrer">
                  <Twitter className="h-3.5 w-3.5" /> X / Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end justify-between">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Back to Top
            </div>
            <button
              onClick={scrollToTop}
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-elevated/80 transition-all hover:border-lime/60 hover:bg-lime/10 active:scale-95"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-5 w-5 text-foreground group-hover:text-lime transition-colors" />
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span className="font-mono">© {new Date().getFullYear()} {brand.name} — Engineered with intent.</span>
          <span className="font-mono">v1.0 · Built on TanStack Start + React 19</span>
        </div>
      </Container>
    </footer>
  );
}
