import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap";

export function useParallax<T extends HTMLElement = HTMLElement>(y = -60) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: y,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);
    return () => ctx.revert();
  }, [y]);
  return ref;
}
