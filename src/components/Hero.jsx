import { motion } from "framer-motion";
import { profile } from "../data/content";
import { Button } from "./ui/Button";

const floatingBadges = [
  { label: "React", pos: "top-2 left-4", delay: 0 },
  { label: "Python", pos: "top-16 -right-4", delay: 0.4 },
  { label: "RAG", pos: "bottom-24 -left-6", delay: 0.8 },
  { label: "FAISS", pos: "bottom-4 right-6", delay: 1.2 },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20 md:px-12 lg:px-20"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 font-mono text-xs tracking-[0.15em] text-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.eyebrow}
          </div>

          <h1 className="font-display text-4xl leading-[1.08] font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
            Hi, I'm {profile.name}. <br />
            <span className="text-gradient">{profile.headline}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#projects">View My Work</Button>
            <Button href="#contact" variant="secondary">
              Let's Connect
            </Button>
          </div>

          <a
            href="#contact"
            className="mt-6 inline-block text-sm text-muted underline-offset-4 transition-colors hover:text-text hover:underline"
          >
            Download Resume →
          </a>
        </motion.div>

        {/* Right: interactive dev/AI visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto hidden aspect-square w-full max-w-md sm:block"
        >
          {/* connecting lines */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none">
            <motion.path
              d="M 80 60 Q 200 140 320 90"
              stroke="url(#heroGrad)"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.6 }}
            />
            <motion.path
              d="M 60 300 Q 200 260 340 320"
              stroke="url(#heroGrad)"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.9 }}
            />
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7C6CF6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7C6CF6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* central glass card: code snippet */}
          <div className="absolute top-1/2 left-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-surface/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="mb-3 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            <pre className="overflow-hidden font-mono text-[11px] leading-relaxed text-muted">
              <code>
                <span className="text-accent-light">def</span> query_rag(question):{"\n"}
                {"  "}vec = embed(question){"\n"}
                {"  "}ctx = faiss_index.search(vec){"\n"}
                {"  "}<span className="text-accent-light">return</span> llm.respond(ctx)
              </code>
            </pre>
          </div>

          {floatingBadges.map((b) => (
            <motion.div
              key={b.label}
              className={`absolute ${b.pos} rounded-full border border-border bg-surface/80 px-3 py-1.5 font-mono text-xs text-muted shadow-lg shadow-black/30 backdrop-blur-md`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: b.delay, ease: "easeInOut" }}
            >
              {b.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
