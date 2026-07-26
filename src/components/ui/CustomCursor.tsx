import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for outer trailing ring
  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only run custom cursor on non-touch desktop devices
    if (window.matchMedia("(hover: none)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.getAttribute("role") === "button" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.classList.contains("cursor-pointer");

      setHovered(isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handlePointerOver, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handlePointerOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block overflow-hidden">
      {/* Outer Trailing Glowing Ring */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 1.8 : 1,
          borderColor: hovered ? "rgba(203, 255, 1, 0.8)" : "rgba(203, 255, 1, 0.35)",
          backgroundColor: hovered ? "rgba(203, 255, 1, 0.15)" : "rgba(203, 255, 1, 0.04)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="fixed h-8 w-8 rounded-full border border-lime/40 backdrop-blur-[0.5px] shadow-glow-sm"
      />

      {/* Inner Precision Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 1.3 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="fixed h-2 w-2 rounded-full bg-lime shadow-glow"
      />
    </div>
  );
}
