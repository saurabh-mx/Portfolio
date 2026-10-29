"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Radio,
  Database,
  ShieldCheck,
  Layers,
  Sparkles,
  Zap,
  Activity,
  Code2,
  Lock,
  Globe,
  CheckCircle2,
  GitBranch,
  Terminal,
} from "lucide-react";
import { BorderBeam } from "@/components/BorderBeam";
import { portfolioData } from "@/data/portfolio-data";

export default function About() {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [hoveredPillarIndex, setHoveredPillarIndex] = useState<number | null>(null);
  const [hoveredMetricIndex, setHoveredMetricIndex] = useState<number | null>(null);

  const competencyMetrics = [
    {
      icon: Layers,
      title: "Frontend Architecture",
      value: "Next.js 16 • React 19",
      sub: "App Router, RSC & Fluid State",
      accent: "#38BDF8",
      glow: "rgba(56, 189, 248, 0.25)",
    },
    {
      icon: Radio,
      title: "Real-Time Infrastructure",
      value: "WebSockets & Socket.IO",
      sub: "Low-Latency Event Pipelines",
      accent: "#A855F7",
      glow: "rgba(168, 85, 247, 0.25)",
    },
    {
      icon: Database,
      title: "Database Engineering",
      value: "PostgreSQL & Supabase",
      sub: "Row-Level Security & Prisma ORM",
      accent: "#3ECF8E",
      glow: "rgba(62, 207, 142, 0.25)",
    },
    {
      icon: ShieldCheck,
      title: "Engineering Rigor",
      value: "Type-Safe & Scalable",
      sub: "Clean Code & Production CI/CD",
      accent: "#F59E0B",
      glow: "rgba(245, 158, 11, 0.25)",
    },
  ];

  const engineeringPillars = [
    {
      index: "01",
      icon: Layers,
      title: "Modern Frontend Architecture & Web Performance",
      category: "Frontend Engineering",
      desc: "Architecting responsive, high-performance web applications using the Next.js 16 App Router, React Server Components (RSC), TypeScript, and Tailwind CSS. Focused on deterministic state management, sub-second LCP metrics, zero layout shifts, and intuitive interaction design.",
      metric: "Sub-Second Rendering",
      accent: "#38BDF8",
    },
    {
      index: "02",
      icon: Radio,
      title: "Event-Driven Systems & Real-Time Communication",
      category: "Real-Time Infrastructure",
      desc: "Designing and implementing bidirectional WebSocket data pipelines with Socket.IO. Experienced in engineering live broadcast overlays for digital content creators, real-time betting odds feeds, and synchronized state engines with robust reconnect resilience.",
      metric: "Low-Latency Feeds",
      accent: "#A855F7",
    },
    {
      index: "03",
      icon: Database,
      title: "Cloud Data Modeling, Security & API Design",
      category: "Backend & Cloud",
      desc: "Structuring normalized PostgreSQL relational schemas, Prisma ORM migrations, and Supabase Row-Level Security (RLS) policies. Engineering stateless authentication services with secure JWT tokens, bcrypt password hashing, and clean RESTful endpoint ergonomics.",
      metric: "ACID & RLS Enforced",
      accent: "#3ECF8E",
    },
    {
      index: "04",
      icon: ShieldCheck,
      title: "Computer Science Foundations & Verified Training",
      category: "Technical Credentials",
      desc: "Grounded in core Computer Science fundamentals—algorithms, data structures, and systems design—paired with intensive vocational training in production Full-Stack Web Development from KodeZen Technologies (SID: KZTVT20261226).",
      metric: "Industry Certified",
      accent: "#F59E0B",
    },
  ];

  const coreCompetencies = [
    { title: "Next.js 16 App Router & RSC", icon: Layers, color: "hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10" },
    { title: "Real-Time WebSockets & Socket.IO", icon: Radio, color: "hover:border-purple-400 hover:text-purple-300 hover:bg-purple-500/10" },
    { title: "Supabase & PostgreSQL Security (RLS)", icon: Lock, color: "hover:border-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10" },
    { title: "End-to-End TypeScript Type Safety", icon: Code2, color: "hover:border-blue-400 hover:text-blue-300 hover:bg-blue-500/10" },
    { title: "Production E-Commerce & Event Platforms", icon: Globe, color: "hover:border-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10" },
    { title: "Automated CI/CD & Vercel Deployments", icon: GitBranch, color: "hover:border-amber-400 hover:text-amber-300 hover:bg-amber-500/10" },
  ];

  return (
    <section id="about" className="scroll-mt-28 py-20 px-4 sm:px-6 max-w-6xl mx-auto relative">
      {/* Subtle Ambient Orbital Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none -z-10 opacity-15">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-full border border-dashed border-indigo-500/30 flex items-center justify-center"
        >
          <div className="w-[420px] h-[420px] rounded-full border border-cyan-500/20 flex items-center justify-center">
            <div className="w-[240px] h-[240px] rounded-full border border-purple-500/30" />
          </div>
        </motion.div>
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-3 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>ENGINEERING PROFILE & BACKGROUND</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]"
        >
          Architecting Scalable Web Systems with{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            Modern Engineering Rigor.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed"
        >
          Full-Stack Web Developer dedicated to delivering high-performance web applications, event-driven architectures, and resilient cloud backends.
        </motion.p>
      </div>

      {/* Top 4 Competency Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10"
      >
        {competencyMetrics.map((node, i) => {
          const NodeIcon = node.icon;
          return (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredMetricIndex(i)}
              onMouseLeave={() => setHoveredMetricIndex(null)}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{
                boxShadow: `0 0 20px ${node.glow}`,
              }}
              className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-white/25 transition-all group relative overflow-hidden select-none"
            >
              {/* Glowing Stick Border Beam on Hover */}
              {hoveredMetricIndex === i && (
                <BorderBeam
                  size={100}
                  duration={3}
                  colorFrom={node.accent}
                  colorTo="#FFFFFF"
                  borderWidth={1.5}
                  borderRadius={16}
                />
              )}

              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300"
                style={{ backgroundColor: node.accent }}
              />

              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  {node.title}
                </span>
                <div
                  className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform"
                  style={{ color: node.accent }}
                >
                  <NodeIcon className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                {node.value}
              </div>
              <p className="text-[11px] text-zinc-400 font-mono mt-1">{node.sub}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Main Two-Column Professional Engineering Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 cols): Professional Engineering Philosophy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden space-y-6"
        >
          {/* Subtle Ambient Laser Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-60" />

          {/* Professional Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Engineering Approach & Practice
              </h3>
              <p className="text-xs text-indigo-300 font-medium mt-0.5">
                Full-Stack Systems • Clean Architecture • Production Stability
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE FOR HIRE
            </div>
          </div>

          {/* Professional Narrative */}
          <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <p>
              I am a <strong className="text-white font-semibold">Full-Stack Software Engineer</strong> focused on building production-grade web systems with <strong className="text-white">React, Next.js 16, TypeScript, Node.js, and Supabase</strong>. My work bridges complex backend infrastructure with refined, responsive user interfaces.
            </p>

            <p>
              My architectural philosophy prioritizes modular separation of concerns, end-to-end type safety, and predictable state management. Whether deploying scalable Next.js Server Components, managing real-time WebSocket state for live streaming platforms, or designing relational PostgreSQL schemas with Row-Level Security, I engineer for reliability, performance, and long-term maintainability.
            </p>

            <p>
              I have delivered end-to-end applications across commercial services, interactive digital media tools, and data-driven dashboards—delivering clean code that solves real business problems.
            </p>
          </div>

          {/* Core Competencies Grid */}
          <div className="pt-2">
            <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Core Technical Competencies
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {coreCompetencies.map((comp, i) => {
                const CompIcon = comp.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, x: 2 }}
                    className={`flex items-center gap-2.5 p-3 rounded-xl glass-panel-subtle border border-white/5 transition-all cursor-pointer ${comp.color}`}
                  >
                    <CompIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span className="text-xs font-medium text-zinc-200">{comp.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column (5 cols): 4 Professional Engineering Pillars */}
        <div className="lg:col-span-5 space-y-3.5">
          {engineeringPillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            const isSelected = activePillarIndex === idx;

            return (
              <motion.div
                key={pillar.index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ x: 6, scale: 1.02 }}
                onMouseEnter={() => setHoveredPillarIndex(idx)}
                onMouseLeave={() => setHoveredPillarIndex(null)}
                onClick={() => setActivePillarIndex(idx)}
                style={{
                  borderColor: isSelected ? pillar.accent : "rgba(255, 255, 255, 0.08)",
                  boxShadow: isSelected ? `0 0 25px ${pillar.accent}30` : undefined,
                }}
                className={`glass-panel rounded-2xl p-5 border transition-all cursor-pointer relative overflow-hidden select-none group ${
                  isSelected ? "bg-slate-900/90" : "hover:bg-slate-900/60"
                }`}
              >
                {/* Glowing Stick Border Beam Animation */}
                {(isSelected || hoveredPillarIndex === idx) && (
                  <BorderBeam
                    size={140}
                    duration={3.5}
                    colorFrom={pillar.accent}
                    colorTo="#FFFFFF"
                    borderWidth={1.5}
                    borderRadius={16}
                  />
                )}

                {/* Active Neon Accent Indicator */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300"
                  style={{ backgroundColor: isSelected ? pillar.accent : "transparent" }}
                />

                <div className="flex items-start gap-3.5">
                  <div
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner"
                    style={{ color: pillar.accent }}
                  >
                    <PillarIcon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold" style={{ color: pillar.accent }}>
                        {pillar.category}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
                        {pillar.metric}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
