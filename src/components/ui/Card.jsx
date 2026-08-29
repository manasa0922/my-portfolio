export function Card({ children, className = "", as: Comp = "div", ...rest }) {
  return (
    <Comp
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 ${className}`}
      {...rest}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-accent/[0.06]" />
      <div className="relative">{children}</div>
    </Comp>
  );
}
