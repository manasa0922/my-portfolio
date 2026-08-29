import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./ui/Icons";
import { projects } from "../data/content";
import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";

function ProjectCard({ project, className = "" }) {
  return (
    <Card className={`flex flex-col justify-between p-7 ${className}`}>
      <div>
        <div className="mb-4 flex items-start justify-between">
          <h3 className="font-display text-xl font-semibold text-text">{project.name}</h3>
          <GithubIcon
            size={18}
            className="mt-1 shrink-0 text-muted transition-colors group-hover:text-text"
          />
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
      </div>

      <div className="mt-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm text-accent-light">
          View project
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Card>
  );
}

function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built."
      subtitle="A mix of full-stack applications across web development coursework and personal builds."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <ProjectCard project={featured} className="min-h-[220px] md:flex-row md:items-center md:gap-8" />
        </motion.div>

        {rest.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
          >
            <ProjectCard project={project} className="h-full min-h-[220px]" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
