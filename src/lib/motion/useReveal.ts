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
  const { y = 24, delay = 0, stagger = 0.08, selector, once = true } = opts;

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

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [y, delay, stagger, selector, once]);

  return ref;
}
