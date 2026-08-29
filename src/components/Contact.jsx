import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";
import { profile } from "../data/content";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";

function Contact() {
  return (
    <Section id="contact" className="text-center">
      <div className="relative mx-auto max-w-2xl">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 font-mono text-xs tracking-[0.2em] text-accent-light uppercase"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl"
        >
          Let's build something meaningful.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-md text-muted"
        >
          Open to software development and AI/ML opportunities — feel free to reach out on
          GitHub or LinkedIn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href={profile.github} variant="primary" icon={false}>
            <GithubIcon size={16} /> GitHub
          </Button>
          <Button href={profile.linkedin} variant="secondary" icon={false}>
            <LinkedinIcon size={16} /> LinkedIn
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}

export default Contact;
