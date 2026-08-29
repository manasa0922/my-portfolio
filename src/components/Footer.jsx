import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";
import { profile } from "../data/content";

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-text">{profile.name}</p>
          <p className="mt-1 text-xs text-muted">Software Developer · Building with AI/ML</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-text"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-text"
          >
            <LinkedinIcon size={18} />
          </a>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="rounded-full border border-border p-2 text-muted transition-colors hover:border-accent/40 hover:text-text"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-xs text-muted-2">
        © 2026 {profile.name} · Software Developer · Learning AI & ML
      </p>
    </footer>
  );
}

export default Footer;
