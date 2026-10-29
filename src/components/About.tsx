"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Radio,
  Database,
  ShieldCheck,
  Terminal,
  Layers,
  Sparkles,
  Zap,
  Activity,
  Code2,
  Lock,
  Globe,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function About() {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);

  const telemetryNodes = [
    {
      icon: Cpu,
      title: "Core Frontend Engine",
      value: "Next.js 16 • React 19",
      sub: "App Router & Server Actions",
      accent: "#38BDF8",
      glow: "rgba(56, 189, 248, 0.25)",
    },
    {
      icon: Radio,
      title: "Real-Time Streaming",
      value: "Socket.IO Overlays",
      sub: "Low-Latency State Sync",
      accent: "#A855F7",
      glow: "rgba(168, 85, 247, 0.25)",
    },
    {
      icon: Database,
      title: "Cloud & Database",
      value: "Supabase & PostgreSQL",
      sub: "Row-Level Security & Prisma",
      accent: "#3ECF8E",
      glow: "rgba(62, 207, 142, 0.25)",
    },
    {
      icon: ShieldCheck,
      title: "Verified Credential",
      value: "KodeZen VT Certified",
      sub: "SID: KZTVT20261226",
      accent: "#F59E0B",
      glow: "rgba(245, 158, 11, 0.25)",
    },
  ];

  const pillars = [
    {
      id: "SYS-01",
      icon: Layers,
      title: "Full-Stack Architecture & Modern UI",
      tagline: "React 19, Next.js 16 & TypeScript",
      desc: "Architecting high-performance reactive web applications with Next.js 16 App Router, React Server Components (RSC), and Tailwind CSS. Obsessed with zero layout shifts, fluid micro-interactions, and 100% responsive dark-mode aesthetics.",
      telemetry: "Lighthouse 100% Performance Standard",
      accent: "#38BDF8",
    },
    {
      id: "SYS-02",
      icon: Radio,
      title: "Real-Time Systems & Stream Tooling",
      tagline: "WebSockets, Socket.IO & Event Emitters",
      desc: "Engineering bidirectional real-time data pipelines for interactive streaming widgets, betting odds displays, and creator overlays on Twitch and Kick. Built with auto-reconnect resilience, room broadcasting, and sub-50ms message latency.",
      telemetry: "< 50ms Message Latency",
      accent: "#A855F7",
    },
    {
      id: "SYS-03",
      icon: Database,
      title: "Cloud Databases & Relational Security",
      tagline: "PostgreSQL, Supabase & Prisma ORM",
      desc: "Designing resilient relational schemas with ACID compliance, automated migrations, and Supabase Row-Level Security (RLS) policies. Implementing secure token authentication (JWT, bcrypt) and clean RESTful endpoint ergonomics.",
      telemetry: "RLS Protected & Type-Safe Queries",
      accent: "#3ECF8E",
    },
    {
      id: "SYS-04",
      icon: ShieldCheck,
      title: "Verified Credentials & Engineering Core",
      tagline: "B.Tech CSE & KodeZen Vocational Training",
      desc: "Pursuing Bachelor of Technology in Computer Science & Engineering at Rungta College of Engineering and Technology (Graduating 2027). Awarded Vocational Training Certificate in Web Development by KodeZen Technologies (SID: KZTVT20261226).",
      telemetry: "Verified SID: KZTVT20261226",
      accent: "#F59E0B",
    },
  ];

  const capabilities = [
    { title: "Streaming Overlays & WebSockets", icon: Zap, color: "hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10" },
    { title: "Supabase Row-Level Security (RLS)", icon: Lock, color: "hover:border-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10" },
    { title: "Production Commerce & Event Portals", icon: Globe, color: "hover:border-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10" },
    { title: "Next.js 16 Server Components", icon: Layers, color: "hover:border-purple-400 hover:text-purple-300 hover:bg-purple-500/10" },
    { title: "Type-Safe Full-Stack Architecture", icon: Code2, color: "hover:border-blue-400 hover:text-blue-300 hover:bg-blue-500/10" },
    { title: "Automated CI/CD & Vercel Deployments", icon: Activity, color: "hover:border-amber-400 hover:text-amber-300 hover:bg-amber-500/10" },
  ];

  return (
    <section id="about" className="scroll-mt-28 py-20 px-4 sm:px-6 max-w-6xl mx-auto relative">
      {/* Background Futuristic Rotating Radar Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none -z-10 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>SYSTEM_PROFILE // SAURABH BHAI PATEL</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]"
        >
          Engineering Scalable Web Systems &{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            Modern Architectures.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed"
        >
          Experienced Full-Stack Developer specializing in production-grade web applications, real-time streaming tools, and resilient cloud backends.
        </motion.p>
      </div>

      {/* Top Telemetry HUD Grid (4 Futuristic Telemetry Nodes) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10"
      >
        {telemetryNodes.map((node, i) => {
          const NodeIcon = node.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{
                boxShadow: `0 0 20px ${node.glow}`,
              }}
              className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-white/25 transition-all group relative overflow-hidden select-none"
            >
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

      {/* Main Two-Column Interactive Core */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 cols): Futuristic Terminal & Spec Sheet */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden space-y-6"
        >
          {/* Cyberpunk HUD Corner Brackets */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-indigo-400 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-purple-400 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-400 pointer-events-none" />

          {/* Futuristic Scanning Laser Sweep */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none -z-0"
          />

          {/* Terminal Window Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-zinc-400 ml-2">~/saurabh-patel/architecture.ts</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              STATUS: PRODUCTION_READY
            </div>
          </div>

          {/* High-Impact Spec Narrative */}
          <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed relative z-10">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 font-mono text-xs text-indigo-300">
              <Terminal className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                // Full-Stack Engineer with hands-on mastery building scalable web apps, real-time overlays, and cloud backends.
              </span>
            </div>

            <p>
              I specialize in engineering responsive, high-throughput applications using <strong className="text-white">React, Next.js 16, TypeScript, Node.js, and Supabase</strong>. My code philosophy centers on modular architecture, strict type safety, fast SSR/SSG rendering, and intuitive user experiences.
            </p>

            <p>
              From architecting production event platforms with automated client WhatsApp booking flows (<em className="text-indigo-300">Laxman Phool Bhandar</em>) to engineering live interactive race streaming tools with real-time analytics (<em className="text-indigo-300">Race Bidding Platform</em>), I turn complex engineering challenges into seamless software.
            </p>
          </div>

          {/* Futuristic Interactive Capability Matrix */}
          <div className="pt-2 relative z-10">
            <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Core Engineering Matrix
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {capabilities.map((cap, i) => {
                const CapIcon = cap.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03, x: 2 }}
                    className={`flex items-center gap-2.5 p-3 rounded-xl glass-panel-subtle border border-white/5 transition-all cursor-pointer ${cap.color}`}
                  >
                    <CapIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span className="text-xs font-medium text-zinc-200">{cap.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column (5 cols): Interactive Holographic Pillar Modules */}
        <div className="lg:col-span-5 space-y-3.5">
          {pillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            const isSelected = activePillarIndex === idx;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ x: 6, scale: 1.02 }}
                onClick={() => setActivePillarIndex(idx)}
                style={{
                  borderColor: isSelected ? pillar.accent : "rgba(255, 255, 255, 0.08)",
                  boxShadow: isSelected ? `0 0 25px ${pillar.accent}30` : undefined,
                }}
                className={`glass-panel rounded-2xl p-5 border transition-all cursor-pointer relative overflow-hidden select-none group ${
                  isSelected ? "bg-slate-900/90" : "hover:bg-slate-900/60"
                }`}
              >
                {/* Active Indicator Strip */}
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
                        {pillar.id}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        {pillar.telemetry}
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
