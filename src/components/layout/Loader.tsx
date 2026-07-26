import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand } from "@/content/portfolio";

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("ajdev-loaded") === "1") {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("ajdev-loaded", "1");
    }, 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 font-mono text-lg tracking-tight"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-lime text-lime-foreground font-bold">
              A
            </span>
            <span>{brand.name}</span>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-lime"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
