"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  FolderGit2,
  ArrowRight,
  Info,
} from "lucide-react";
import { allSkillsList, skillCategories, SkillItem } from "@/data/skills-data";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>(skillCategories[0]);
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);
  const [activeSkill, setActiveSkill] = useState<SkillItem>(allSkillsList[0]); // default to React
  const [isMarqueePaused, setIsMarqueePaused] = useState<boolean>(false);

  // Active skill to display in the immersive deep-dive preview
  const displaySkill = hoveredSkill || activeSkill;

  // Skills in current selected category
  const filteredCategorySkills = allSkillsList.filter(
    (skill) => skill.category === selectedCategory
  );

  // Marquee splits for the "All Skills from CV" animated ticker
  const marqueeHalf1 = allSkillsList.slice(0, 10);
  const marqueeHalf2 = allSkillsList.slice(10);

  // Duplicate for continuous seamless marquee loop
  const row1Skills = [...marqueeHalf1, ...marqueeHalf1];
  const row2Skills = [...marqueeHalf2, ...marqueeHalf2];

  return (
    <section id="skills" className="scroll-mt-28 py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Expertise</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed"
        >
          Production-proven tech stack used to build high-performance web applications, real-time streaming tools, and scalable cloud systems.
        </motion.p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
        {skillCategories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
                isSelected
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "glass-pill text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{category}</span>
              {isSelected && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 rounded-xl bg-indigo-600 -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Grid & Live Immersive Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (8 cols): Categorized Skills Grid */}
        <div className="lg:col-span-7 space-y-4">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
          >
            {filteredCategorySkills.map((skill, idx) => {
              const Icon = skill.icon;
              const isHovered = hoveredSkill?.id === skill.id;
              const isActive = activeSkill.id === skill.id;

              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  onMouseEnter={() => {
                    setHoveredSkill(skill);
                    setActiveSkill(skill);
                  }}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onClick={() => setActiveSkill(skill)}
                  style={{
                    borderColor: isHovered || isActive ? skill.brandColor : "rgba(255, 255, 255, 0.08)",
                    boxShadow: isHovered || isActive ? `0 0 25px ${skill.glowColor}` : "none",
                  }}
                  className="glass-panel rounded-2xl p-4 flex items-center justify-between border transition-all cursor-pointer relative overflow-hidden group select-none"
                >
                  {/* Subtle Brand Background Glow */}
                  <div
                    className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                    style={{ backgroundColor: skill.brandColor }}
                  />

                  <div className="flex items-center gap-3.5 z-10">
                    <div
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform shadow-inner flex items-center justify-center flex-shrink-0"
                      style={{
                        boxShadow: isHovered || isActive ? `0 0 15px ${skill.glowColor}` : undefined,
                      }}
                    >
                      <Icon className="w-6 h-6" size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-indigo-200 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] text-zinc-400 font-mono mt-0.5">{skill.level}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end z-10">
                    <span
                      className="w-2 h-2 rounded-full transition-all"
                      style={{
                        backgroundColor: isHovered || isActive ? skill.brandColor : "rgba(255, 255, 255, 0.2)",
                        boxShadow: isHovered || isActive ? `0 0 8px ${skill.brandColor}` : undefined,
                      }}
                    />
                    <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300 font-mono mt-2 transition-colors">
                      Inspect ↗
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Column (5 cols): Immersive Quick Describe UI Inspector */}
        <div className="lg:col-span-5">
          <motion.div
            key={displaySkill.id}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              borderColor: displaySkill.brandColor,
              boxShadow: `0 0 35px ${displaySkill.glowColor}`,
            }}
            className="sticky top-24 glass-panel rounded-3xl p-6 sm:p-7 border bg-slate-950/80 backdrop-blur-xl relative overflow-hidden space-y-5"
          >
            {/* Ambient Background Aura */}
            <div
              className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-35 pointer-events-none transition-all duration-500"
              style={{ backgroundColor: displaySkill.brandColor }}
            />

            {/* Header: Brand Icon + Title + Category */}
            <div className="flex items-start justify-between gap-3 relative z-10 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3.5">
                <div
                  className="p-3 rounded-2xl bg-slate-900 border border-white/15 shadow-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    boxShadow: `0 0 20px ${displaySkill.glowColor}`,
                  }}
                >
                  {(() => {
                    const ActiveIcon = displaySkill.icon;
                    return <ActiveIcon className="w-8 h-8" size={32} />;
                  })()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-extrabold text-white tracking-tight">{displaySkill.name}</h3>
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: displaySkill.brandColor }} />
                  </div>
                  <span className="text-xs text-indigo-300 font-medium font-mono">{displaySkill.category}</span>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-zinc-300 border border-white/10">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {displaySkill.level}
                </span>
              </div>
            </div>

            {/* Quick Description */}
            <div className="space-y-2 relative z-10">
              <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Production Application</p>
              <p className="text-sm text-zinc-200 leading-relaxed font-normal">
                {displaySkill.description}
              </p>
            </div>

            {/* Applied In Projects */}
            <div className="space-y-2 relative z-10 pt-1">
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-zinc-400">
                <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Featured In Projects</span>
              </div>
              <p className="text-xs sm:text-sm text-indigo-300 font-medium bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                {displaySkill.appliedProjects}
              </p>
            </div>

            {/* Technical Highlights Tags */}
            <div className="space-y-2 relative z-10 pt-1">
              <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Core Highlights</p>
              <div className="flex flex-wrap gap-1.5">
                {displaySkill.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ borderColor: `${displaySkill.brandColor}50` }}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] text-zinc-300 border hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Hover Tip */}
            <div className="pt-2 text-[11px] text-zinc-500 font-mono flex items-center gap-1.5 border-t border-white/5">
              <Info className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
              <span>Hover any skill below or in the grid to inspect details in real time.</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ALL SKILLS FROM CV (Animated Continuous Ticker / Marquee with Brand Icons) */}
      <div className="mt-16 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-white tracking-wide">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Skills</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">{allSkillsList.length} Skills Added</span>
          </div>
        </div>

        {/* Dual-lane Infinite Kinetic Ribbon */}
        <div
          className="space-y-4 overflow-hidden py-2 select-none"
          onMouseEnter={() => setIsMarqueePaused(true)}
          onMouseLeave={() => setIsMarqueePaused(false)}
        >
          {/* Row 1: Flowing Left */}
          <div className="relative w-full overflow-hidden mask-gradient-x">
            <motion.div
              animate={{
                x: isMarqueePaused ? undefined : ["0%", "-50%"],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-3 w-max"
            >
              {row1Skills.map((skill, index) => {
                const Icon = skill.icon;
                const isCurrent = displaySkill.id === skill.id;

                return (
                  <motion.div
                    key={`row1-${skill.id}-${index}`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    onMouseEnter={() => {
                      setHoveredSkill(skill);
                      setActiveSkill(skill);
                    }}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => setActiveSkill(skill)}
                    style={{
                      borderColor: isCurrent ? skill.brandColor : "rgba(255, 255, 255, 0.1)",
                      boxShadow: isCurrent ? `0 0 20px ${skill.glowColor}` : undefined,
                    }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-pill bg-slate-900/90 border hover:bg-slate-800 transition-all cursor-pointer flex-shrink-0 group"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                    <span className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 group-hover:text-indigo-300">
                      • {skill.level}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Row 2: Flowing Right */}
          <div className="relative w-full overflow-hidden mask-gradient-x">
            <motion.div
              animate={{
                x: isMarqueePaused ? undefined : ["-50%", "0%"],
              }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-3 w-max"
            >
              {row2Skills.map((skill, index) => {
                const Icon = skill.icon;
                const isCurrent = displaySkill.id === skill.id;

                return (
                  <motion.div
                    key={`row2-${skill.id}-${index}`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    onMouseEnter={() => {
                      setHoveredSkill(skill);
                      setActiveSkill(skill);
                    }}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => setActiveSkill(skill)}
                    style={{
                      borderColor: isCurrent ? skill.brandColor : "rgba(255, 255, 255, 0.1)",
                      boxShadow: isCurrent ? `0 0 20px ${skill.glowColor}` : undefined,
                    }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-pill bg-slate-900/90 border hover:bg-slate-800 transition-all cursor-pointer flex-shrink-0 group"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                    <span className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 group-hover:text-indigo-300">
                      • {skill.level}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Quick Grid View of All CV Skills */}
        <div className="pt-4 border-t border-white/5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-3 text-center sm:text-left">
            Interactive CV Cloud (Click any skill to inspect)
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {allSkillsList.map((skill) => {
              const Icon = skill.icon;
              const isSelected = displaySkill.id === skill.id;

              return (
                <button
                  key={`cloud-${skill.id}`}
                  onClick={() => {
                    setActiveSkill(skill);
                    setHoveredSkill(null);
                  }}
                  style={{
                    borderColor: isSelected ? skill.brandColor : "rgba(255, 255, 255, 0.08)",
                    backgroundColor: isSelected ? `${skill.brandColor}18` : "rgba(255, 255, 255, 0.02)",
                    boxShadow: isSelected ? `0 0 15px ${skill.glowColor}` : undefined,
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs text-zinc-300 hover:text-white transition-all cursor-pointer group hover:border-white/20 select-none"
                >
                  <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" size={15} />
                  <span className="font-medium text-[11px]">{skill.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
