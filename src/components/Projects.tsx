"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  FolderGit2,
  Star,
  RefreshCw,
  Zap,
  ShieldCheck,
  Layers,
  Lock,
  Eye,
  X,
  Search,
  Sparkles,
  Cpu,
  ArrowUpRight,
  Code2,
  SlidersHorizontal,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { portfolioData, Project } from "@/data/portfolio-data";

export default function Projects() {
  const [projectsList, setProjectsList] = useState<Project[]>(portfolioData.projects);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLiveSynced, setIsLiveSynced] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Auto-fetch and sync projects from GitHub on mount
  const syncWithGitHub = async () => {
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
  };

  useEffect(() => {
    syncWithGitHub();
  }, []);

  const categories = ["All", "Full Stack", "Frontend"];

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projectsList.filter((project) => {
      const matchesCategory =
        activeFilter === "All" ? true : project.category === activeFilter;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q)) ||
        (project.highlights &&
          project.highlights.some((h) => h.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [projectsList, activeFilter, searchQuery]);

  // Project highlight icon picker
  const getHighlightIcon = (index: number) => {
    switch (index % 3) {
      case 0:
        return <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />;
      case 1:
        return <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />;
    }
  };

  return (
    <section id="projects" className="scroll-mt-28 py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-indigo-400">
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Featured Portfolio</span>
          </div>

          {/* GitHub Auto-Sync Status Badge with Manual Refresh */}
          <button
            onClick={syncWithGitHub}
            disabled={isLoading}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 hover:bg-emerald-500/20 transition-all cursor-pointer"
            title="Click to re-sync with latest GitHub repositories"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isLiveSynced ? "GitHub Live Synced" : "GitHub Verified"}</span>
            <RefreshCw className={`w-3 h-3 ml-0.5 text-emerald-400 ${isLoading ? "animate-spin" : ""}`} />
          </button>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured Production{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            Platforms & Systems
          </span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
          Production-grade web platforms, real-time WebSocket tools, and cloud-backed enterprise applications. Built with React 19, Next.js 16, TypeScript, Supabase, and clean modular code.
        </p>

        {/* High-Level Engineering Metrics */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-zinc-300">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill bg-slate-900/60 border border-white/5">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>{projectsList.length} Production Repositories</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill bg-slate-900/60 border border-white/5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>100% Type-Safe TypeScript</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill bg-slate-900/60 border border-white/5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Real-Time WebSockets & SSR</span>
          </div>
        </div>
      </div>

      {/* Control Bar: Categories Filter & Live Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-white/5">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl glass-panel border border-white/10">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? projectsList.length
                : projectsList.filter((p) => p.category === cat).length;
            const isActive = activeFilter === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer flex items-center gap-1.5 select-none ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="projectActiveFilterPill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md shadow-indigo-600/30 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-white/5 text-zinc-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Filter Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by tech or name..."
            className="w-full pl-9 pr-8 py-2 text-xs rounded-xl glass-pill bg-slate-900/70 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all font-mono"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 glass-panel rounded-3xl border border-white/5">
          <Code2 className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white">No matching projects found</h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
            Try adjusting your search query or reset category filter to &quot;All&quot;.
          </p>
          <button
            onClick={() => {
              setActiveFilter("All");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-1.5 text-xs rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="glass-panel-interactive rounded-2xl overflow-hidden border border-white/10 flex flex-col group relative shadow-2xl shadow-black/40 hover:border-indigo-500/40"
              >
                {/* Modern Browser Window Mockup Frame */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-950/90 border-b border-white/10 text-xs">
                  {/* Traffic Light Controls */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 border border-rose-400/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 border border-amber-400/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 border border-emerald-400/30" />
                  </div>

                  {/* Browser URL Bar Mockup */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[10px] font-mono text-zinc-400 max-w-[210px] sm:max-w-xs truncate">
                    <Lock className="w-2.5 h-2.5 text-emerald-400 flex-shrink-0" />
                    <span className="truncate">
                      {project.liveUrl.replace("https://", "").replace(/\/$/, "")}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="hidden sm:inline">Active</span>
                  </div>
                </div>

                {/* Project Image Banner with Interactive Hover Glare */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Floating Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full text-[10.5px] font-semibold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-indigo-300 border border-indigo-400/30 shadow-md">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  {/* Hover Inspect Pill Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 text-xs font-medium text-white shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Inspect Architecture</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-indigo-400" />
                      </h3>
                    </div>

                    <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Architecture Key Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                        <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                          <Cpu className="w-3 h-3" />
                          <span>Core Architecture Highlights</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-zinc-300">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-[11.5px] leading-relaxed">
                              {getHighlightIcon(i)}
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack & Action Links */}
                  <div className="space-y-4 pt-2">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-zinc-300 border border-white/5 group-hover:border-white/10 hover:border-indigo-400/40 hover:text-white transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2.5 pt-3 border-t border-white/10">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition-all cursor-pointer group/btn"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl glass-pill text-zinc-300 hover:text-white hover:border-white/20 transition-all text-xs font-medium cursor-pointer"
                          title="View Source Code on GitHub"
                        >
                          <GithubIcon className="w-4 h-4 text-indigo-400" />
                          <span>Code</span>
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-2.5 rounded-xl glass-pill text-zinc-400 hover:text-indigo-300 hover:bg-white/10 transition-colors cursor-pointer"
                        title="Quick Inspect Architecture"
                        aria-label="Inspect project architecture"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Interactive Project Architecture Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 glass-panel rounded-3xl border border-white/15 p-6 sm:p-8 text-zinc-100 shadow-2xl space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {selectedProject.category}
                    </span>
                    {selectedProject.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-amber-400">
                        <Star className="w-3 h-3 fill-current" /> Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-black text-white">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Banner Image Preview */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-inner">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  System Architecture & Overview
                </h4>
                <p className="text-sm text-zinc-200 leading-relaxed font-normal">
                  {selectedProject.description}
                </p>
              </div>

              {/* Highlights */}
              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                    Engineering Implementations
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                        {getHighlightIcon(i)}
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 text-zinc-200 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl glass-panel-interactive text-zinc-200 hover:text-white border border-white/15 text-xs font-medium cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4 text-indigo-400" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
