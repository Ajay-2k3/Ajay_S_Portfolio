import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap";

export function useHorizontalScroll<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const track = el.querySelector<HTMLElement>("[data-hscroll-track]");
    if (!track) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (reduced || !isDesktop) return;

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth + 96;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return ref;
}
