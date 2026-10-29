"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Sparkles,
  Download,
  MapPin,
  Code2,
  Layers,
  Radio,
  Database,
  Terminal,
  Flame,
} from "lucide-react";
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

const headlineWords = "Engineering high-performance web applications with".split(" ");

const dynamicRoles = [
  "React, Next.js & Node.js.",
  "Scalable Full-Stack Web Apps.",
  "High-Performance Cloud Architectures.",
  "Interactive Real-Time Platforms.",
];

const coreTechnologies = [
  { name: "React", icon: Code2, hoverClass: "hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-cyan-300" },
  { name: "Next.js 16", icon: Layers, hoverClass: "hover:border-white/60 hover:bg-white/10 hover:text-white" },
  { name: "TypeScript", icon: Terminal, hoverClass: "hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-blue-300" },
  { name: "Tailwind CSS", icon: Sparkles, hoverClass: "hover:border-teal-400/60 hover:bg-teal-500/10 hover:text-teal-300" },
  { name: "Node.js", icon: Database, hoverClass: "hover:border-green-400/60 hover:bg-green-500/10 hover:text-green-300" },
  { name: "Supabase", icon: Flame, hoverClass: "hover:border-emerald-400/60 hover:bg-emerald-500/10 hover:text-emerald-300" },
];

export default function Hero({ onOpenResume }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Character-by-character typewriter animation
  useEffect(() => {
    const currentRole = dynamicRoles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText.length < currentRole.length) {
      // Typing forward with natural cadence
      timer = setTimeout(() => {
        setCurrentText(currentRole.slice(0, currentText.length + 1));
      }, 55);
    } else if (!isDeleting && currentText.length === currentRole.length) {
      // Pause at complete word for 2.2 seconds so user can read it
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && currentText.length > 0) {
      // Deleting briskly
      timer = setTimeout(() => {
        setCurrentText(currentRole.slice(0, currentText.length - 1));
      }, 28);
    } else if (isDeleting && currentText.length === 0) {
      // Pause slightly, then advance to next phrase
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // 3D Interactive Card Tilt
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 180 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="hero" className="relative pt-16 sm:pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
        {/* Left Column: Narrative & Kinetic Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Availability & Senior Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill mb-6 text-xs font-medium text-zinc-300 shadow-inner group cursor-pointer hover:border-emerald-500/40 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-200 font-medium">Available for High-Impact Roles & Freelance</span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-indigo-400 hidden sm:flex items-center gap-1 font-semibold">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              Full-Stack Architect
            </span>
          </motion.div>

          {/* Staggered Animated Headline with Dynamic Role Cycler */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.04, delayChildren: 0.08 },
              },
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="inline-block mr-2.5"
              >
                {word}
              </motion.span>
            ))}
            <br className="hidden sm:inline" />
            <span className="inline">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent font-extrabold">
                {currentText || "\u00A0"}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[3.5px] h-[0.85em] ml-1.5 align-baseline bg-cyan-400 rounded-sm shadow-[0_0_12px_#22d3ee]"
              />
            </span>
          </motion.h1>

          {/* Senior Narrative Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-sm sm:text-base lg:text-lg text-zinc-300 max-w-xl font-normal leading-relaxed"
          >
            Hi, I&apos;m <strong className="text-white font-semibold">{portfolioData.personal.name}</strong> — an{" "}
            <span className="text-indigo-300 font-medium">Experienced Full-Stack Web Developer</span>. I architect and build
            scalable web platforms, real-time streaming tools, and production-ready applications with modern cloud backends,
            intuitive UI animations, and clean, modular code.
          </motion.p>

          {/* Interactive Core Tech Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs"
          >
            <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mr-1">Stack:</span>
            {coreTechnologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg glass-pill text-zinc-300 border border-white/5 transition-all cursor-pointer ${tech.hoverClass}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="font-medium text-[11px]">{tech.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(99, 102, 241, 0.45)" }}
              whileTap={{ scale: 0.96 }}
              className="group relative overflow-hidden flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white font-medium text-sm shadow-xl shadow-indigo-500/25 transition-all cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.button
              onClick={onOpenResume}
              whileHover={{ scale: 1.04, borderColor: "rgba(167, 139, 250, 0.5)" }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel-interactive text-zinc-200 font-medium text-sm cursor-pointer border border-white/10 hover:bg-white/10 transition-all"
            >
              <Download className="w-4 h-4 text-indigo-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Curriculum Vitae</span>
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel-subtle text-zinc-300 hover:text-white font-medium text-sm hover:bg-white/10 transition-all border border-white/5"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>Get in Touch</span>
            </motion.a>
          </motion.div>

          {/* Direct Social & Contact Chips with Spring Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-zinc-300"
          >
            <motion.a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-indigo-400" />
              <span>{portfolioData.personal.githubDisplay}</span>
            </motion.a>

            <motion.a
              href={portfolioData.personal.youtube}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-red-500/40 hover:bg-red-500/10 transition-colors"
            >
              <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
              <span>YouTube</span>
            </motion.a>

            <motion.a
              href={portfolioData.personal.kick}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-colors"
            >
              <KickIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kick</span>
            </motion.a>

            <motion.a
              href={portfolioData.personal.discord}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 transition-colors"
            >
              <DiscordIcon className="w-3.5 h-3.5 text-indigo-400" />
              <span>Discord</span>
            </motion.a>

            <motion.a
              href={portfolioData.personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-pink-500/40 hover:bg-pink-500/10 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram</span>
            </motion.a>

            <motion.a
              href={portfolioData.personal.steam}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-sky-400/40 hover:bg-sky-500/10 transition-colors"
            >
              <SteamIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>Steam</span>
            </motion.a>

            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>{portfolioData.personal.email}</span>
            </motion.a>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              <span>{portfolioData.personal.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Mouse-Tilt Interactive Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex-shrink-0"
          style={{ perspective: 1000 }}
        >
          {/* Pulsing Ambient Backdrop Aura */}
          <motion.div
            animate={{
              scale: isCardHovered ? [1.02, 1.08, 1.02] : [1, 1.04, 1],
              opacity: isCardHovered ? 0.85 : 0.6,
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-3 rounded-[36px] bg-gradient-to-tr from-indigo-500/30 via-purple-500/25 to-cyan-400/30 blur-2xl -z-10"
          />

          {/* 3D Tilt Card */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-[28px] overflow-hidden glass-panel border border-white/20 p-2 shadow-2xl shadow-indigo-950/60 cursor-pointer select-none"
          >
            {/* Dynamic Glass Glare Overlay on Hover */}
            <div
              className={`absolute inset-0 pointer-events-none rounded-[28px] z-20 mix-blend-overlay transition-opacity duration-300 ${
                isCardHovered ? "opacity-35" : "opacity-0"
              }`}
              style={{
                background: "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.7) 0%, transparent 70%)",
              }}
            />

            {/* Inner Photo */}
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
              <Image
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 288px, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Bottom Card Caption */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-xs font-bold text-white tracking-wide">{portfolioData.personal.name}</p>
                  <p className="text-[10px] text-indigo-300 font-mono font-medium">Experienced Full-Stack Developer</p>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] text-emerald-300 font-medium">Open to Work</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badge #1: Top Left */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="absolute -top-3 -left-3 px-3 py-1.5 rounded-xl glass-panel border border-cyan-400/40 shadow-xl shadow-cyan-950/50 text-[11px] font-semibold text-white flex items-center gap-1.5 backdrop-blur-md z-30 hover:border-cyan-400 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full-Stack Web</span>
            </motion.div>

            {/* Floating Tech Badge #2: Top Right */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              whileHover={{ scale: 1.1, y: 4 }}
              className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl glass-panel border border-indigo-400/40 shadow-xl shadow-indigo-950/50 text-[11px] font-semibold text-white flex items-center gap-1.5 backdrop-blur-md z-30 hover:border-indigo-400 transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>Next.js 16 • React 19</span>
            </motion.div>

            {/* Floating Tech Badge #3: Bottom Left */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              whileHover={{ scale: 1.1, y: 4 }}
              className="absolute -bottom-2 -left-3 px-3 py-1.5 rounded-xl glass-panel border border-emerald-400/40 shadow-xl shadow-emerald-950/50 text-[11px] font-semibold text-white flex items-center gap-1.5 backdrop-blur-md z-30 hover:border-emerald-400 transition-colors"
            >
              <Radio className="w-3.5 h-3.5 text-emerald-400" />
              <span>Real-Time Systems</span>
            </motion.div>

            {/* Floating Tech Badge #4: Bottom Right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="absolute -bottom-2 -right-3 px-3 py-1.5 rounded-xl glass-panel border border-amber-400/40 shadow-xl shadow-amber-950/50 text-[11px] font-semibold text-white flex items-center gap-1.5 backdrop-blur-md z-30 hover:border-amber-400 transition-colors"
            >
              <Database className="w-3.5 h-3.5 text-amber-400" />
              <span>Supabase & Node</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Counter Bar with Interactive Hover Elevation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
      >
        {portfolioData.stats.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="glass-panel rounded-2xl p-4 sm:p-5 text-center border border-white/5 hover:border-indigo-500/40 hover:bg-white/[0.04] transition-all group relative overflow-hidden shadow-lg cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-300 transition-colors tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs text-zinc-400 mt-1 font-medium group-hover:text-zinc-200 transition-colors">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
