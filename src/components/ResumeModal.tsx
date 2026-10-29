"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Download, ExternalLink, Briefcase, GraduationCap, Award, Mail, MapPin } from "lucide-react";
import {
  GithubIcon,
  YoutubeIcon,
  KickIcon,
  DiscordIcon,
  InstagramIcon,
  SteamIcon,
} from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio-data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto z-10 glass-panel rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-10 text-zinc-100"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-indigo-400/40 flex items-center justify-center text-xs font-bold text-indigo-300">
                {portfolioData.personal.initials}
              </div>
              <h2 className="text-lg font-bold tracking-tight text-white">Curriculum Vitae</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="space-y-7">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-indigo-400/40 bg-slate-900 flex-shrink-0 shadow-lg">
                <Image
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider uppercase">
                  {portfolioData.personal.name}
                </h1>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-5 text-xs text-zinc-300 mt-3 font-normal">
                <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  {portfolioData.personal.email}
                </a>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  {portfolioData.personal.location}
                </span>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{portfolioData.personal.githubDisplay}</span>
                </a>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <a
                  href={portfolioData.personal.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
                >
                  <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                  <span>YouTube</span>
                </a>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <a
                  href={portfolioData.personal.kick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                >
                  <KickIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Kick</span>
                </a>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <a
                  href={portfolioData.personal.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                >
                  <DiscordIcon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Discord</span>
                </a>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <a
                  href={portfolioData.personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </a>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <a
                  href={portfolioData.personal.steam}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
                >
                  <SteamIcon className="w-3.5 h-3.5 text-sky-400" />
                  <span>Steam</span>
                </a>
              </div>
            </div>
          </div>

            {/* Summary */}
            <div className="border-t border-white/10 pt-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">Summary</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {portfolioData.personal.bio}
              </p>
            </div>

            {/* Skills */}
            <div className="border-t border-white/10 pt-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-semibold text-white">Frontend:</span>{" "}
                  <span className="text-zinc-300">React, Next.js, Vite, Tailwind CSS, HTML5, CSS3</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-semibold text-white">Programming:</span>{" "}
                  <span className="text-zinc-300">TypeScript, JavaScript, Python, SQL</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-semibold text-white">Backend & APIs:</span>{" "}
                  <span className="text-zinc-300">Node.js, Express, PostgreSQL, Prisma ORM, Supabase, Socket.IO, JWT</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-semibold text-white">Development Tools:</span>{" "}
                  <span className="text-zinc-300">Git, GitHub, Vercel, REST API Development</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400">Education</h3>
              </div>
              <div className="pl-4 border-l border-white/10 space-y-1 text-xs">
                <p className="text-sm font-semibold text-white">{portfolioData.personal.education.institution}</p>
                <p className="text-zinc-300">{portfolioData.personal.education.degree}</p>
                <p className="text-indigo-400 font-mono text-[11px]">{portfolioData.personal.education.expectedDate}</p>
              </div>
            </div>

            {/* Projects */}
            <div className="border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-4 h-4 text-indigo-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400">Projects</h3>
              </div>
              <div className="space-y-5">
                {portfolioData.projects.map((proj) => (
                  <div key={proj.id} className="relative pl-4 border-l border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1 gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-sm font-bold text-white">{proj.title}</h4>
                        <span className="text-zinc-600">|</span>
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-indigo-400 hover:underline flex items-center gap-1"
                        >
                          <GithubIcon className="w-3 h-3" />
                          <span>{proj.githubUrl.replace("https://", "")}</span>
                        </a>
                      </div>
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Demo</span>
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {proj.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="leading-relaxed">{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification */}
            <div className="border-t border-white/10 pt-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400">Certification</h3>
                </div>
                <a
                  href={portfolioData.personal.certification.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>View Original Certificate</span>
                </a>
              </div>
              <div className="pl-4 border-l border-white/10 text-xs space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <p className="font-semibold text-white">{portfolioData.personal.certification.title}</p>
                  <span className="text-indigo-400 font-mono text-[11px]">
                    {portfolioData.personal.certification.period}
                  </span>
                </div>
                <p className="text-zinc-300">
                  {portfolioData.personal.certification.issuer} • Duration: {portfolioData.personal.certification.duration}
                </p>
                <p className="text-zinc-400 font-mono text-[11px]">
                  SID: <span className="text-zinc-200">{portfolioData.personal.certification.sid}</span> • Completed on {portfolioData.personal.certification.issueDate}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
