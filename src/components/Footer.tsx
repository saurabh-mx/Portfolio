"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, YoutubeIcon, KickIcon } from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-white/5 bg-slate-950/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-base font-bold text-white tracking-tight">
              {portfolioData.personal.name}
            </span>
            <p className="text-xs text-zinc-400 mt-1">
              Computer Science & Engineering student • Web Developer ({portfolioData.personal.location})
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-pill text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-pill text-zinc-400 hover:text-red-400 transition-colors"
              aria-label="YouTube"
              title="YouTube Channel"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.kick}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-pill text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="Kick"
              title="Kick Stream"
            >
              <KickIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 rounded-xl glass-pill text-zinc-400 hover:text-white transition-colors"
              aria-label="Email"
              title="Email Saurabh"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-pill text-xs text-zinc-400 hover:text-white hover:border-indigo-400/30 transition-all group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2">
          <p>© 2026 {portfolioData.personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-indigo-400 font-medium">Next.js</span>,{" "}
            <span className="text-cyan-400 font-medium">Tailwind CSS</span> &{" "}
            <span className="text-purple-400 font-medium">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
