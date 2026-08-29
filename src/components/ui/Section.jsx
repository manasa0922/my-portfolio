import { motion } from "framer-motion";

export function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`relative px-6 py-24 sm:py-28 md:px-12 lg:px-20 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 md:mb-16"
          >
            {eyebrow && (
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent-light uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-4 max-w-2xl text-muted">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
