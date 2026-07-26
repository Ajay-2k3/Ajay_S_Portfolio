import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap";

interface RevealOpts {
  y?: number;
  delay?: number;
  stagger?: number;
  selector?: string;
  once?: boolean;
}

export function useReveal<T extends HTMLElement = HTMLElement>(
  opts: RevealOpts = {},
) {
  const ref = useRef<T | null>(null);
  const { y = 18, delay = 0, stagger = 0.05, selector, once = true } = opts;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = selector ? el.querySelectorAll(selector) : [el];
    if (!targets.length) return;

    if (reduced) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    try {
      const ctx = gsap.context(() => {
        gsap.set(targets, { opacity: 0, y });
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          delay,
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        });
      }, el);

      return () => ctx.revert();
    } catch {
      gsap.set(targets, { opacity: 1, y: 0 });
    }
  }, [y, delay, stagger, selector, once]);

  return ref;
}
