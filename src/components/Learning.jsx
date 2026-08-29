import { motion } from "framer-motion";
import { learning } from "../data/content";
import { Section } from "./ui/Section";
import { Badge } from "./ui/Badge";

function Learning() {
  return (
    <Section
      id="learning"
      eyebrow="Currently Exploring"
      title="What I'm learning next."
      subtitle="Expanding further into AI/ML on top of the RAG work I already do."
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-3"
      >
        {learning.map((item) => (
          <Badge key={item} tone="accent">
            {item}
          </Badge>
        ))}
      </motion.div>
    </Section>
  );
}

export default Learning;
