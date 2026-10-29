"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Building,
  ChevronRight,
  Award,
  Eye,
  ShieldCheck,
  FileBadge,
} from "lucide-react";
import CertificateModal from "@/components/CertificateModal";
import { portfolioData } from "@/data/portfolio-data";

export default function Experience() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section id="experience" className="scroll-mt-28 py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Timeline</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Education & Certification
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
          Academic foundation in Computer Science and verified vocational training in full-stack web development.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 max-w-4xl mx-auto">
        {portfolioData.experiences.map((exp, index) => {
          const isEducation = exp.type === "Education";
          const isCert = exp.type === "Certification";

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(99,102,241,0.6)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
              </div>

              {/* Card */}
              <div className="glass-panel-interactive rounded-2xl p-6 sm:p-7 border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.sid && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          SID: {exp.sid}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-1">
                      <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                        {isEducation ? (
                          <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                        ) : isCert ? (
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                        ) : (
                          <Building className="w-3.5 h-3.5 text-indigo-400" />
                        )}
                        {exp.organization}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {exp.location}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-indigo-300 border border-white/5">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 font-mono self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-zinc-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Certificate Action Card */}
                {exp.certificateUrl && (
                  <div className="mt-5 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex-shrink-0">
                        <FileBadge className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-white">Official VT Certificate</span>
                          <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400">
                            <ShieldCheck className="w-3 h-3" /> Verified
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 font-mono">
                          KodeZen Technologies • SID: {exp.sid}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setCertModalOpen(true)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 text-xs font-medium transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>
                  </div>
                )}

                {/* Skills Used */}
                <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/5 group-hover:border-indigo-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Verified Certificate Modal */}
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        imageUrl="/certificates/kodezen-vt-certificate.jpg"
        title="Certificate of Vocational Training in Web Development (React & Node.js)"
        sid="KZTVT20261226"
        issuer="KodeZen Technologies"
        date="10-Jul-2026"
      />
    </section>
  );
}
