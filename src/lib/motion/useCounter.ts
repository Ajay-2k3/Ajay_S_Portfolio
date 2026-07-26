import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "./gsap";

export function useCounter(target: number, duration = 1.6) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return;
    }

    const obj = { n: 0 };
    try {
      if (typeof ScrollTrigger === "undefined" || !ScrollTrigger.create) {
        setValue(target);
        return;
      }
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            n: target,
            duration,
            ease: "power2.out",
            onUpdate: () => setValue(Math.round(obj.n)),
          });
        },
      });
      return () => st.kill();
    } catch {
      setValue(target);
    }
  }, [target, duration]);

  return { ref, value };
}
