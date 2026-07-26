import { useEffect, useRef } from "react";
import { gsap } from "./gsap";

/** Word-by-word reveal without paid SplitText. */
export function useTextReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const original = el.getAttribute("data-original") ?? el.innerText;
    el.setAttribute("data-original", original);

    const words = original.split(/(\s+)/);
    el.innerHTML = words
      .map((w) =>
        /\s+/.test(w)
          ? w
          : `<span class="inline-block will-change-transform" style="opacity:0;transform:translateY(0.4em)">${w}</span>`,
      )
      .join("");

    const spans = el.querySelectorAll<HTMLSpanElement>("span");
    if (reduced) {
      spans.forEach((s) => {
        s.style.opacity = "1";
        s.style.transform = "none";
      });
      return;
    }

    try {
      const ctx = gsap.context(() => {
        gsap.to(spans, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.025,
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      }, el);
      return () => ctx.revert();
    } catch {
      spans.forEach((s) => {
        s.style.opacity = "1";
        s.style.transform = "none";
      });
    }
  }, []);

  return ref;
}
