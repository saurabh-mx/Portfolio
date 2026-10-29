"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("cv-modal-open");
    } else {
      document.body.classList.remove("cv-modal-open");
    }
    return () => {
      document.body.classList.remove("cv-modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = "Saurabh_Bhai_Patel_CV";
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto cv-modal-print-container print:static print:block print:p-0 print:m-0 print:overflow-visible print:inset-auto print:z-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cv-print-exclude print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto z-10 glass-panel rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-10 text-zinc-100 cv-modal-window print:static print:block print:w-full print:max-w-none print:max-h-none print:overflow-visible print:p-0 print:border-none print:shadow-none print:bg-white print:text-slate-900"
        >
          {/* Header Controls (Hidden during PDF print) */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10 cv-print-exclude print:hidden">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-indigo-400/40 flex items-center justify-center text-xs font-bold text-indigo-300">
                {portfolioData.personal.initials}
              </div>
              <h2 className="text-lg font-bold tracking-tight text-white">Curriculum Vitae</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer shadow-lg shadow-indigo-600/30"
                title="Save as 1-Page PDF"
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

          {/* Printable Resume Body - Strictly Styled to Conclude on 1 Single Page */}
          <div id="resume-printable-area" className="resume-single-page space-y-6 print:space-y-3.5 print:text-slate-900 print:bg-white print:w-full">
            {/* Header / Contact Bar */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left print:flex-row print:gap-4 print:text-left print:items-center">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-indigo-400/40 bg-slate-900 flex-shrink-0 shadow-lg print:w-16 print:h-16 print:rounded-xl print:border-slate-300">
                <Image
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider uppercase print:text-xl print:font-black print:text-slate-950 print:tracking-tight print:leading-none">
                  {portfolioData.personal.name}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-indigo-400 mt-0.5 print:text-xs print:text-indigo-700 print:font-bold print:mt-1">
                  {portfolioData.personal.title}
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1.5 gap-x-4 text-xs text-zinc-300 mt-2 font-normal print:gap-x-3 print:gap-y-1 print:text-[10px] print:text-slate-600 print:mt-1.5">
                  <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-1 hover:text-indigo-400 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-600 print:w-3.5 print:h-3.5" />
                    <span>{portfolioData.personal.email}</span>
                  </a>
                  <span className="text-zinc-600 print:text-slate-400">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-600 print:w-3.5 print:h-3.5" />
                    <span>{portfolioData.personal.location}</span>
                  </span>
                  <span className="text-zinc-600 print:text-slate-400">•</span>
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-indigo-400 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-600 print:w-3.5 print:h-3.5" />
                    <span>{portfolioData.personal.githubDisplay}</span>
                  </a>
                  <span className="text-zinc-600 print:text-slate-400">•</span>
                  <span className="flex items-center gap-1">
                    <YoutubeIcon className="w-3.5 h-3.5 text-red-500 print:w-3.5 print:h-3.5" />
                    <span>YouTube</span>
                  </span>
                  <span className="text-zinc-600 print:text-slate-400">•</span>
                  <span className="flex items-center gap-1">
                    <KickIcon className="w-3.5 h-3.5 text-emerald-400 print:w-3.5 print:h-3.5" />
                    <span>Kick</span>
                  </span>
                  <span className="text-zinc-600 print:text-slate-400">•</span>
                  <span className="flex items-center gap-1">
                    <DiscordIcon className="w-3.5 h-3.5 text-indigo-400 print:w-3.5 print:h-3.5" />
                    <span>Discord</span>
                  </span>
                  <span className="text-zinc-600 print:text-slate-400">•</span>
                  <span className="flex items-center gap-1">
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-400 print:w-3.5 print:h-3.5" />
                    <span>Instagram</span>
                  </span>
                  <span className="text-zinc-600 print:text-slate-400">•</span>
                  <span className="flex items-center gap-1">
                    <SteamIcon className="w-3.5 h-3.5 text-sky-400 print:w-3.5 print:h-3.5" />
                    <span>Steam</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="border-t border-white/10 pt-4 print:pt-3 print:border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1.5 print:text-[11px] print:font-extrabold print:text-indigo-800 print:mb-1 print:tracking-wider">
                Summary
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed print:text-[10px] print:leading-relaxed print:text-slate-700">
                {portfolioData.personal.bio}
              </p>
            </div>

            {/* Skills (2x2 Grid) */}
            <div className="border-t border-white/10 pt-4 print:pt-3 print:border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2.5 print:text-[11px] print:font-extrabold print:text-indigo-800 print:mb-1.5 print:tracking-wider">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs print:grid-cols-2 print:gap-2 print:text-[10px]">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 print:p-2 print:bg-slate-50 print:border-slate-200 print:rounded-lg">
                  <span className="font-bold text-white print:text-slate-900">Frontend:</span>{" "}
                  <span className="text-zinc-300 print:text-slate-600">React, Next.js, Vite, Tailwind CSS, HTML5, CSS3</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 print:p-2 print:bg-slate-50 print:border-slate-200 print:rounded-lg">
                  <span className="font-bold text-white print:text-slate-900">Programming:</span>{" "}
                  <span className="text-zinc-300 print:text-slate-600">TypeScript, JavaScript, Python, SQL</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 print:p-2 print:bg-slate-50 print:border-slate-200 print:rounded-lg">
                  <span className="font-bold text-white print:text-slate-900">Backend & APIs:</span>{" "}
                  <span className="text-zinc-300 print:text-slate-600">Node.js, Express, PostgreSQL, Prisma ORM, Supabase, Socket.IO, JWT</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 print:p-2 print:bg-slate-50 print:border-slate-200 print:rounded-lg">
                  <span className="font-bold text-white print:text-slate-900">Development Tools:</span>{" "}
                  <span className="text-zinc-300 print:text-slate-600">Git, GitHub, Vercel, REST API Development</span>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="border-t border-white/10 pt-4 print:pt-3 print:border-slate-200">
              <div className="flex items-center gap-1.5 mb-2.5 print:mb-1.5">
                <Briefcase className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700 print:w-3.5 print:h-3.5" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-[11px] print:font-extrabold print:text-indigo-800 print:tracking-wider">
                  Featured Projects
                </h3>
              </div>
              <div className="space-y-3.5 print:space-y-2.5">
                {portfolioData.projects.map((proj) => (
                  <div key={proj.id} className="relative pl-3.5 border-l border-white/10 print:border-l-2 print:border-indigo-400/40 print:pl-2.5">
                    <div className="flex items-baseline justify-between mb-0.5">
                      <div className="flex items-center gap-2 flex-wrap print:gap-1.5">
                        <h4 className="text-xs sm:text-sm font-bold text-white print:text-[11.5px] print:font-bold print:text-slate-900">
                          {proj.title}
                        </h4>
                        <span className="text-zinc-600 print:text-slate-400 text-[10px] print:text-[9px]">|</span>
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-indigo-400 hover:underline flex items-center gap-1 print:text-[9.5px] print:text-indigo-700 font-mono"
                        >
                          <GithubIcon className="w-3 h-3 print:hidden" />
                          <span>{proj.githubUrl.replace("https://", "")}</span>
                        </a>
                      </div>
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-cyan-400 hover:underline flex items-center gap-1 print:text-[9.5px] print:text-slate-500 font-mono"
                      >
                        <ExternalLink className="w-3 h-3 print:hidden" />
                        <span>Live Demo</span>
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-1 print:mb-1 print:gap-1">
                      {proj.tags.slice(0, 6).map((t, idx) => (
                        <span key={idx} className="text-[9.5px] px-1.5 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5 print:text-[8.5px] print:py-0.5 print:px-1.5 print:bg-slate-100 print:text-slate-700 print:border-slate-200 print:rounded">
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="list-disc list-inside space-y-0.5 text-xs text-zinc-300 print:text-[9.5px] print:leading-snug print:text-slate-700 print:space-y-0.5">
                      {proj.highlights.slice(0, 2).map((h, hIdx) => (
                        <li key={hIdx} className="leading-relaxed print:leading-snug">{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Education & Certification (Placed Side-by-Side in Print to Fit Strictly on 1 Page) */}
            <div className="border-t border-white/10 pt-4 print:pt-3 print:border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-4">
              {/* Education */}
              <div>
                <div className="flex items-center gap-1.5 mb-1.5 print:mb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700 print:w-3.5 print:h-3.5" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-[11px] print:font-extrabold print:text-indigo-800 print:tracking-wider">
                    Education
                  </h3>
                </div>
                <div className="pl-3 border-l border-white/10 print:border-l-2 print:border-indigo-400/40 text-xs print:text-[10px] space-y-0.5 print:space-y-1 print:pl-2.5">
                  <p className="font-semibold text-white print:text-[11px] print:font-bold print:text-slate-900">{portfolioData.personal.education.institution}</p>
                  <p className="text-zinc-300 print:text-[10px] print:text-slate-700">{portfolioData.personal.education.degree}</p>
                  <p className="text-indigo-400 print:text-[9.5px] print:text-indigo-700 font-mono">{portfolioData.personal.education.expectedDate}</p>
                </div>
              </div>

              {/* Certification */}
              <div>
                <div className="flex items-center justify-between mb-1.5 print:mb-1">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400 print:text-amber-600 print:w-3.5 print:h-3.5" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-[11px] print:font-extrabold print:text-indigo-800 print:tracking-wider">
                      Vocational Training
                    </h3>
                  </div>
                  <a
                    href={portfolioData.personal.certification.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-cyan-400 hover:underline print:hidden"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>View Certificate</span>
                  </a>
                </div>
                <div className="pl-3 border-l border-white/10 print:border-l-2 print:border-amber-400/40 text-xs print:text-[10px] space-y-0.5 print:space-y-1 print:pl-2.5">
                  <p className="font-semibold text-white print:text-[11px] print:font-bold print:text-slate-900">{portfolioData.personal.certification.title}</p>
                  <p className="text-zinc-300 print:text-[10px] print:text-slate-700">
                    {portfolioData.personal.certification.issuer} • Duration: {portfolioData.personal.certification.duration}
                  </p>
                  <p className="text-zinc-400 print:text-[9.5px] print:text-slate-600 font-mono">
                    SID: <span className="text-zinc-200 print:text-slate-900 font-bold">{portfolioData.personal.certification.sid}</span> • Issued: {portfolioData.personal.certification.issueDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
