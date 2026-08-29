import { motion } from "framer-motion";
import profilePic from "../assets/Photo.jpeg";
import { aboutStats, profile } from "../data/content";
import { Section } from "./ui/Section";
import { Card } from "./ui/Card";

function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about how I work.">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-5">
            <img
              src={profilePic}
              alt={profile.name}
              className="h-20 w-20 rounded-2xl border border-border object-cover"
            />
            <div>
              <p className="font-display text-lg font-semibold text-text">{profile.name}</p>
              <p className="text-sm text-muted">{profile.tagline} · {profile.title}</p>
            </div>
          </div>

          <p className="leading-relaxed text-muted">
            I'm an MCA graduate and software developer with experience building web
            applications using ASP.NET, Django, JavaScript, HTML, CSS and MySQL. At my
            current role I also work on AI/ML systems — building RAG pipelines with FAISS
            vector search, embeddings and tokenization — alongside C++ plugin development
            with the InDesign SDK.
          </p>
          <p className="leading-relaxed text-muted">
            I enjoy building user-friendly applications end to end, and continuously
            picking up new tools — right now that means going deeper into AI/ML alongside
            my day-to-day development work.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {aboutStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="p-6">
                <p className="font-display text-2xl font-semibold text-text">{stat.label}</p>
                <p className="mt-1 text-sm text-muted">{stat.sub}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default About;
