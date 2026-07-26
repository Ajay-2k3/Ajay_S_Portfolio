import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "mb-16 md:mb-20 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-lime" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
