"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, Sparkles, Download, MapPin, Code2 } from "lucide-react";
import {
  GithubIcon,
  YoutubeIcon,
  KickIcon,
  DiscordIcon,
  InstagramIcon,
  SteamIcon,
} from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio-data";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="hero" className="relative pt-16 sm:pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
        {/* Left Column: Narrative & CTAs */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Availability / Graduation Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill mb-6 text-xs font-medium text-zinc-300 shadow-inner"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{portfolioData.personal.status}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-indigo-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> CSE Undergrad
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            Building responsive web apps with{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              React, Next.js & Node.js.
            </span>
          </motion.h1>

          {/* Subtitle / Bio from CV */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base lg:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed"
          >
            Hi, I&apos;m <strong className="text-zinc-100 font-semibold">{portfolioData.personal.name}</strong> — a{" "}
            <span className="text-zinc-200">{portfolioData.personal.title}</span>. {portfolioData.personal.bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white font-medium text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel-interactive text-zinc-200 font-medium text-sm cursor-pointer"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Curriculum Vitae</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel-subtle text-zinc-400 hover:text-white font-medium text-sm hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Direct Social & Contact Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-zinc-300"
          >
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-indigo-400/40 transition-all hover:scale-105"
            >
              <GithubIcon className="w-3.5 h-3.5 text-indigo-400" />
              <span>{portfolioData.personal.githubDisplay}</span>
            </a>
            <a
              href={portfolioData.personal.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-red-500/40 hover:bg-red-500/10 transition-all hover:scale-105"
            >
              <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
              <span>YouTube</span>
            </a>
            <a
              href={portfolioData.personal.kick}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all hover:scale-105"
            >
              <KickIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kick</span>
            </a>
            <a
              href={portfolioData.personal.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 transition-all hover:scale-105"
            >
              <DiscordIcon className="w-3.5 h-3.5 text-indigo-400" />
              <span>Discord</span>
            </a>
            <a
              href={portfolioData.personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-pink-500/40 hover:bg-pink-500/10 transition-all hover:scale-105"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram</span>
            </a>
            <a
              href={portfolioData.personal.steam}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-sky-400/40 hover:bg-sky-500/10 transition-all hover:scale-105"
            >
              <SteamIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>Steam</span>
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-indigo-400/40 transition-all hover:scale-105"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>{portfolioData.personal.email}</span>
            </a>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              <span>{portfolioData.personal.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: High-End Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          {/* Ambient Behind Glow */}
          <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-indigo-500/25 via-purple-500/20 to-cyan-400/25 blur-2xl -z-10 opacity-70" />

          {/* Photo Container */}
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-[28px] overflow-hidden glass-panel border border-white/15 p-2 shadow-2xl shadow-indigo-950/50">
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
              <Image
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 288px, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Card Caption */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white tracking-wide">{portfolioData.personal.name}</p>
                  <p className="text-[10px] text-indigo-300 font-mono">B.Tech CSE • Graduating 2027</p>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Floating Floating Badge (Top Left) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -left-3 px-3 py-1.5 rounded-xl glass-panel border border-white/15 shadow-xl text-[11px] font-medium text-white flex items-center gap-1.5"
            >
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full-Stack Web</span>
            </motion.div>

            {/* Floating Badge (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-xl glass-panel border border-white/15 shadow-xl text-[11px] font-medium text-white flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>React & Node.js</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Counter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
      >
        {portfolioData.stats.map((stat, i) => (
          <div
            key={i}
            className="glass-panel rounded-2xl p-4 sm:p-5 text-center border border-white/5 hover:border-indigo-500/20 transition-all group"
          >
            <div className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
              {stat.value}
            </div>
            <div className="text-xs text-zinc-400 mt-1 font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
