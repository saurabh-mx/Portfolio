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
  Rocket,
} from "lucide-react";
import {
  GithubIcon,
  YoutubeIcon,
  KickIcon,
  DiscordIcon,
  InstagramIcon,
  SteamIcon,
} from "@/components/SocialIcons";
import {
  ReactIcon,
  NextjsIcon,
  TypescriptIcon,
  TailwindIcon,
  NodeIcon,
  SupabaseIcon,
} from "@/components/TechIcons";
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
  {
    name: "React",
    icon: ReactIcon,
    glow: "rgba(97, 218, 251, 0.4)",
    hoverClass: "hover:border-cyan-400 hover:text-cyan-300",
  },
  {
    name: "Next.js 16",
    icon: NextjsIcon,
    glow: "rgba(255, 255, 255, 0.35)",
    hoverClass: "hover:border-white hover:text-white",
  },
  {
    name: "TypeScript",
    icon: TypescriptIcon,
    glow: "rgba(49, 120, 198, 0.4)",
    hoverClass: "hover:border-blue-400 hover:text-blue-300",
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    glow: "rgba(56, 189, 248, 0.4)",
    hoverClass: "hover:border-sky-400 hover:text-sky-300",
  },
  {
    name: "Node.js",
    icon: NodeIcon,
    glow: "rgba(95, 160, 78, 0.4)",
    hoverClass: "hover:border-green-400 hover:text-green-300",
  },
  {
    name: "Supabase",
    icon: SupabaseIcon,
    glow: "rgba(62, 207, 142, 0.4)",
    hoverClass: "hover:border-emerald-400 hover:text-emerald-300",
  },
];

const socialBadges = [
  {
    id: "github",
    href: portfolioData.personal.github,
    icon: GithubIcon,
    label: portfolioData.personal.githubDisplay,
    hoverBorder: "hover:border-white/50",
    hoverBg: "hover:bg-white/10",
    iconColor: "text-white",
    glowColor: "rgba(255, 255, 255, 0.35)",
    isLink: true,
  },
  {
    id: "youtube",
    href: portfolioData.personal.youtube,
    icon: YoutubeIcon,
    label: "YouTube",
    hoverBorder: "hover:border-red-500/50",
    hoverBg: "hover:bg-red-500/10",
    iconColor: "text-red-500",
    glowColor: "rgba(239, 68, 68, 0.4)",
    isLink: true,
  },
  {
    id: "kick",
    href: portfolioData.personal.kick,
    icon: KickIcon,
    label: "Kick",
    hoverBorder: "hover:border-emerald-500/50",
    hoverBg: "hover:bg-emerald-500/10",
    iconColor: "text-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.4)",
    isLink: true,
  },
  {
    id: "discord",
    href: portfolioData.personal.discord,
    icon: DiscordIcon,
    label: "Discord",
    hoverBorder: "hover:border-indigo-400/50",
    hoverBg: "hover:bg-indigo-500/10",
    iconColor: "text-indigo-400",
    glowColor: "rgba(99, 102, 241, 0.4)",
    isLink: true,
  },
  {
    id: "instagram",
    href: portfolioData.personal.instagram,
    icon: InstagramIcon,
    label: "Instagram",
    hoverBorder: "hover:border-pink-500/50",
    hoverBg: "hover:bg-pink-500/10",
    iconColor: "text-pink-400",
    glowColor: "rgba(236, 72, 153, 0.4)",
    isLink: true,
  },
  {
    id: "steam",
    href: portfolioData.personal.steam,
    icon: SteamIcon,
    label: "Steam",
    hoverBorder: "hover:border-sky-400/50",
    hoverBg: "hover:bg-sky-500/10",
    iconColor: "text-sky-400",
    glowColor: "rgba(56, 189, 248, 0.4)",
    isLink: true,
  },
  {
    id: "email",
    href: `mailto:${portfolioData.personal.email}`,
    icon: Mail,
    label: portfolioData.personal.email,
    hoverBorder: "hover:border-indigo-400/50",
    hoverBg: "hover:bg-indigo-500/10",
    iconColor: "text-indigo-400",
    glowColor: "rgba(129, 140, 248, 0.4)",
    isLink: true,
  },
  {
    id: "location",
    icon: MapPin,
    label: portfolioData.personal.location,
    hoverBorder: "hover:border-purple-400/40",
    hoverBg: "hover:bg-purple-500/10",
    iconColor: "text-indigo-400",
    glowColor: "rgba(168, 85, 247, 0.35)",
    isLink: false,
  },
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base lg:text-lg text-zinc-300 max-w-xl font-normal leading-relaxed"
          >
            Hi, I&apos;m <strong className="text-white font-semibold">{portfolioData.personal.name}</strong> — an{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent font-semibold">
              Experienced Full-Stack Web Developer
            </span>. I architect and build scalable web platforms, real-time streaming tools, and production-ready applications with modern cloud backends, intuitive UI animations, and clean, modular code.
          </motion.p>

          {/* Animated Core Tech Pills with Brand SVGs & Gentle Float Wave */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs"
          >
            <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-widest mr-1">
              STACK:
            </span>
            {coreTechnologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  animate={{ y: [0, -3.5, 0] }}
                  transition={{
                    duration: 3 + i * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                    boxShadow: `0 0 18px ${tech.glow}`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill text-zinc-200 border border-white/10 transition-all cursor-pointer select-none bg-slate-900/60 ${tech.hoverClass}`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" size={16} />
                  <span className="font-semibold text-xs tracking-tight">{tech.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Action CTA Buttons with Interactive Shimmer & Magnetic Motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(99, 102, 241, 0.55)" }}
              whileTap={{ scale: 0.96 }}
              className="group relative overflow-hidden flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white font-medium text-sm shadow-xl shadow-indigo-500/25 transition-all cursor-pointer"
            >
              {/* Infinite Laser Shimmer Sweep */}
              <motion.div
                animate={{ x: ["-100%", "250%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
              />
              <span className="font-semibold">Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </motion.a>

            <motion.button
              onClick={onOpenResume}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(167, 139, 250, 0.6)",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                boxShadow: "0 0 20px rgba(167, 139, 250, 0.25)",
              }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel-interactive text-zinc-200 font-medium text-sm cursor-pointer border border-white/10 transition-all group"
            >
              <Download className="w-4 h-4 text-indigo-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Curriculum Vitae</span>
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel-subtle text-zinc-300 hover:text-white font-medium text-sm hover:bg-white/10 transition-all border border-white/5 group"
            >
              <Mail className="w-4 h-4 text-zinc-400 group-hover:scale-110 transition-transform" />
              <span>Get in Touch</span>
            </motion.a>
          </motion.div>

          {/* Continuous Wave Motion Social & Contact Chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-zinc-300 py-1.5">
            {socialBadges.map((badge, i) => {
              const BadgeIcon = badge.icon;
              const content = (
                <>
                  <BadgeIcon className={`w-3.5 h-3.5 ${badge.iconColor}`} />
                  <span>{badge.label}</span>
                </>
              );

              const motionProps = {
                key: badge.id,
                initial: { opacity: 0, y: 10 },
                animate: {
                  opacity: 1,
                  y: [0, -5, 0],
                },
                transition: {
                  opacity: { duration: 0.4, delay: 0.35 + i * 0.05 },
                  y: {
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                    delay: i * 0.22,
                  },
                },
                whileHover: {
                  scale: 1.1,
                  y: -7,
                  boxShadow: `0 0 18px ${badge.glowColor}`,
                },
                whileTap: { scale: 0.95 },
                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill transition-colors cursor-pointer select-none hover:text-white ${badge.hoverBorder} ${badge.hoverBg}`,
              };

              if (badge.isLink) {
                return (
                  <motion.a
                    {...motionProps}
                    href={badge.href}
                    target={badge.href?.startsWith("mailto:") ? undefined : "_blank"}
                    rel={badge.href?.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  >
                    {content}
                  </motion.a>
                );
              }

              return (
                <motion.div
                  {...motionProps}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill text-zinc-400 border border-white/5 transition-colors cursor-default select-none ${badge.hoverBorder} ${badge.hoverBg}`}
                >
                  {content}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: 3D Mouse-Tilt Interactive Photo Frame (Cleaned of Corner Badges) */}
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
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Stats Bar with Continuous Wave Motion & Crisp Readability */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-16 w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
      >
        {portfolioData.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.22,
            }}
            whileHover={{
              y: -7,
              scale: 1.03,
              boxShadow: "0 14px 30px -10px rgba(99, 102, 241, 0.35)",
              borderColor: "rgba(129, 140, 248, 0.4)",
            }}
            className="glass-panel rounded-2xl p-5 text-center border border-white/10 hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all group relative overflow-hidden cursor-pointer select-none"
          >
            {/* Top Laser Accent Sweep */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Subtle Shimmer Light Reflection Sweep */}
            <motion.div
              animate={{ x: ["-100%", "250%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: i * 0.9 }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-12 pointer-events-none"
            />

            {/* Value */}
            <div className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-300 transition-colors tracking-tight">
              {stat.value}
            </div>

            {/* Label */}
            <div className="text-xs text-zinc-400 mt-1.5 font-medium group-hover:text-zinc-200 transition-colors">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
