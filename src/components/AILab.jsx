import { motion } from "framer-motion";
import { GithubIcon } from "./ui/Icons";
import { aiConcepts, aiPipeline, aiProject } from "../data/content";
import { Section } from "./ui/Section";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";

function Pipeline() {
  return (
    <div className="relative overflow-x-auto py-6">
      <div className="relative flex min-w-[720px] items-center justify-between gap-2 px-2">
        {/* base connecting line */}
        <div className="absolute top-8 right-6 left-6 h-px bg-border" />
        {/* animated flowing gradient over the line */}
        <motion.div
          className="absolute top-8 left-6 h-px w-24 bg-gradient-to-r from-transparent via-cyan to-transparent"
          animate={{ left: ["1.5rem", "calc(100% - 7.5rem)"] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
        />

        {aiPipeline.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative z-10 flex flex-1 flex-col items-center text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-surface font-mono text-[10px] text-accent-light shadow-[0_0_24px_-6px_rgba(124,108,246,0.5)]">
              {String(i + 1).padStart(2, "0")}
            </div>
            <p className="mt-3 text-sm font-medium text-text">{step.label}</p>
            <p className="mt-1 max-w-[100px] text-xs text-muted">{step.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AILab() {
  return (
    <Section
      id="ai-lab"
      eyebrow="AI Lab"
      title="How my RAG pipeline works."
      subtitle="A retrieval-augmented generation flow I build with at work — from query to grounded response."
      className="border-y border-border bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent"
    >
      <Card className="p-6 sm:p-10">
        <Pipeline />

        <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
          {aiConcepts.map((c) => (
            <Badge key={c} tone="accent">
              {c}
            </Badge>
          ))}
        </div>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mt-6"
      >
        <Card className="flex flex-col justify-between gap-6 p-7 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <h3 className="font-display text-lg font-semibold text-text">{aiProject.name}</h3>
              <span className="rounded-full border border-accent/30 bg-accent-dim px-2.5 py-0.5 text-[11px] text-accent-light">
                {aiProject.status}
              </span>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted">{aiProject.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {aiProject.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
          <GithubIcon size={20} className="shrink-0 text-muted" />
        </Card>
      </motion.div>
    </Section>
  );
}

export default AILab;
