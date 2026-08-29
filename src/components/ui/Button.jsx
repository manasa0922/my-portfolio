import { ArrowUpRight } from "lucide-react";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-light shadow-[0_0_0_1px_rgba(124,108,246,0.4)]",
  secondary:
    "border border-border-strong bg-surface-alt text-text hover:border-accent/50 hover:bg-surface",
  ghost: "text-muted hover:text-text",
};

export function Button({
  children,
  href,
  variant = "primary",
  icon = true,
  className = "",
  ...rest
}) {
  const classes = `group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
