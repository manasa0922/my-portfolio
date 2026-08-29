export function Badge({ children, tone = "default" }) {
  const tones = {
    default:
      "border-border bg-surface-alt text-muted group-hover:border-accent/40 group-hover:text-text",
    accent: "border-accent/30 bg-accent-dim text-accent-light",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-wide transition-colors ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
