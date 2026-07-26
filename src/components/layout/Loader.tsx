import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand } from "@/content/portfolio";

export function Loader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("ajdev-loaded") !== "1";
  });

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem("ajdev-loaded", "1");
      } catch {
        // ignore storage quota / sandbox restrictions
      }
    }, 600);
    return () => clearTimeout(t);
  }, [visible]);

  if (!visible) return null;

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="app-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 font-mono text-lg tracking-tight"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-lime text-lime-foreground font-bold shadow-glow-sm">
              A
            </span>
            <span className="font-bold text-foreground">{brand.name}</span>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-lime"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
