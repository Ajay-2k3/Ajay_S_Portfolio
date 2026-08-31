import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { brand, nav } from "@/content/portfolio";
import { CTAButton } from "@/components/ui/CTAButton";
import { StatusPill } from "@/components/ui/StatusPill";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const sectionElements = nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -50% 0px" },
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-6",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6 transition-all duration-500",
            scrolled &&
              "glass rounded-full py-2 pl-6 pr-2 shadow-card backdrop-saturate-150 border-lime/10",
          )}
        >
          {/* Brand Logo & Status */}
          <a
            href="#top"
            className="group inline-flex items-center gap-3 font-mono text-sm tracking-tight transition-transform active:scale-95"
            aria-label={`${brand.name} home`}
          >
            <span className="relative grid h-8 w-8 place-items-center rounded-full bg-lime text-lime-foreground font-bold shadow-glow transition-transform duration-300 group-hover:scale-105">
              A
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime border-2 border-background" />
              </span>
            </span>
            <div className="flex flex-col">
              <span className="font-semibold leading-none text-foreground group-hover:text-lime transition-colors">
                {brand.name}
              </span>
              <span className="hidden text-xs leading-tight text-muted-foreground sm:inline-block">
                {brand.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 md:flex rounded-full bg-elevated/40 p-1 border border-border/40 backdrop-blur-md"
            aria-label="Primary"
            onMouseLeave={() => setHoveredSection(null)}
          >
            {nav.map((item) => {
              const isActive = activeSection === item.href;
              const isHovered = hoveredSection === item.href;
              const isHighlighted = isHovered || (!hoveredSection && isActive);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredSection(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full",
                    isActive || isHovered
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isHighlighted && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-lime/15 border border-lime/30 shadow-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-2 md:flex">
            <CTAButton as="a" href={brand.resumeUrl} variant="ghost" size="sm">
              Resume
            </CTAButton>
            <CTAButton as="a" href="#contact" variant="lime" size="sm">
              Hire Me
            </CTAButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <CTAButton
            type="button"
            variant="icon"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
          >
            <Menu aria-hidden="true" className="h-4 w-4" />
          </CTAButton>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-background/95 backdrop-blur-2xl md:hidden px-6 py-6"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-lime-foreground font-bold">
                    A
                  </span>
                  <span className="font-mono text-sm font-semibold">{brand.name}</span>
                </div>
                <CTAButton
                  type="button"
                  variant="icon"
                  size="icon"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X aria-hidden="true" className="h-4 w-4" />
                </CTAButton>
              </div>

              {/* Drawer Nav Links */}
              <nav className="flex flex-col items-start gap-4 pt-8" aria-label="Mobile Navigation">
                {nav.map((item, i) => {
                  const isActive = activeSection === item.href;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "group flex items-center justify-between w-full text-3xl font-medium tracking-tight transition-colors",
                        isActive ? "text-lime font-semibold" : "text-foreground hover:text-lime",
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight
                        className={cn(
                          "h-6 w-6 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1",
                          isActive
                            ? "text-lime opacity-100"
                            : "text-muted-foreground opacity-40 group-hover:opacity-100",
                        )}
                      />
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer / Status */}
            <div className="pt-6 border-t border-border/40 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <StatusPill label={brand.status} />
              </div>
              <div className="flex gap-3">
                <CTAButton
                  as="a"
                  href={brand.resumeUrl}
                  variant="outline"
                  className="flex-1 justify-center"
                >
                  Resume
                </CTAButton>
                <CTAButton
                  as="a"
                  href="#contact"
                  variant="lime"
                  className="flex-1 justify-center"
                  onClick={() => setOpen(false)}
                >
                  Hire Me
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
