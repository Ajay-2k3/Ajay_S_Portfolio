export function StatusPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-3 py-1 font-mono text-xs text-lime">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
      </span>
      {label}
    </span>
  );
}
