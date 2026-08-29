import { motion } from "framer-motion";
import { experience } from "../data/content";
import { Section } from "./ui/Section";
import { Badge } from "./ui/Badge";

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <div className="relative border-l border-border pl-8 sm:pl-10">
        {experience.map((role, i) => (
          <motion.div
            key={role.company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-14 last:mb-0"
          >
            <span className="absolute top-1.5 -left-[41px] h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[49px]" />

            <p className="font-mono text-xs tracking-wide text-muted">{role.duration}</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-text">{role.role}</h3>
            <p className="text-accent-light">{role.company}</p>

            <ul className="mt-4 space-y-2">
              {role.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-2" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {role.tech.map((t) => (
                <Badge key={t} tone="accent">
                  {t}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
