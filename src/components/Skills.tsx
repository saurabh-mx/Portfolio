"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Sparkles,
  Server,
  Database,
  Terminal,
  Zap,
  Box,
  LayoutGrid,
  FileCode2,
  Atom,
  Flame,
  GitBranch,
  Network,
  CheckCircle2,
  Eye,
  Palette,
  LucideIcon,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

const iconMap: Record<string, LucideIcon> = {
  Atom,
  FileCode2,
  Palette,
  Sparkles,
  Layers,
  Database,
  Server,
  Network,
  Terminal,
  Flame,
  Box,
  GitBranch,
  CheckCircle2,
  LayoutGrid,
  Eye,
  Zap,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <section id="skills" className="scroll-mt-28 py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Skills</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Skills & Technologies
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
          Core technologies used across my streaming tools, business websites, and workflow platforms.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {portfolioData.skills.map((category, index) => {
          const isSelected = selectedCategory === index;
          return (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(index)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
                isSelected
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "glass-pill text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Active Category Grid */}
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {portfolioData.skills[selectedCategory].skills.map((skill, idx) => {
          const IconComponent = iconMap[skill.iconName] || Terminal;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              className="glass-panel-interactive rounded-2xl p-4 flex items-center justify-between border border-white/5 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-indigo-400 group-hover:text-cyan-300 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-indigo-200 transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] text-zinc-400">{skill.level}</span>
                </div>
              </div>

              <span className="w-2 h-2 rounded-full bg-indigo-500/40 group-hover:bg-cyan-400 transition-colors" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Direct Skills from CV */}
      <div className="mt-12 p-6 glass-panel rounded-2xl border border-white/5 text-center">
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
          All Skills from CV
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "Vite",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma ORM",
            "Supabase",
            "Socket.IO",
            "HTML5 / CSS3",
            "Python",
            "SQL",
            "REST APIs",
            "JWT Authentication",
            "Git & GitHub",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-zinc-300 border border-white/5 hover:border-indigo-400/40 hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
