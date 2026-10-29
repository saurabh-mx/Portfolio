"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, FolderGit2, Star, CheckCircle2, RefreshCw, GitBranch } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { portfolioData, Project } from "@/data/portfolio-data";

export default function Projects() {
  const [projectsList, setProjectsList] = useState<Project[]>(portfolioData.projects);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [isLiveSynced, setIsLiveSynced] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Auto-fetch and sync projects from GitHub on mount
  useEffect(() => {
    async function loadGitHubProjects() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          if (data?.projects && Array.isArray(data.projects)) {
            setProjectsList(data.projects);
            setIsLiveSynced(true);
          }
        }
      } catch (err) {
        console.warn("Using offline projects cache:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadGitHubProjects();
  }, []);

  const categories = ["All", "Full Stack", "Frontend", "Web Apps"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsList
      : projectsList.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="scroll-mt-28 py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-indigo-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Projects</span>
          </div>

          {/* GitHub Auto-Sync Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>GitHub Live Sync</span>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured Repositories & Products
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
          Auto-synchronized with <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">github.com/saurabh-mx</a>. Any new public repo pushed to GitHub is automatically added.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
              activeFilter === cat
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                : "glass-pill text-zinc-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="glass-panel-interactive rounded-2xl overflow-hidden border border-white/5 flex flex-col group"
            >
              {/* Project Image Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 backdrop-blur-md text-zinc-200 border border-white/10">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-indigo-500/80 backdrop-blur-md text-white shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights from GitHub Repo README */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5 text-xs text-zinc-400">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/30 text-indigo-300 hover:text-white text-xs font-medium transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl glass-pill text-zinc-300 hover:text-white hover:border-white/20 transition-all text-xs font-medium cursor-pointer"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
