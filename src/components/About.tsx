"use client";

import { motion } from "framer-motion";
import { Zap, Code, GraduationCap, Award, Compass, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function About() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Computer Science Education",
      desc: "Currently pursuing B.Tech in CSE at Rungta College of Engineering and Technology (graduating 2027), mastering core algorithms, data structures, and system design.",
    },
    {
      icon: Award,
      title: "Vocational Training Certified",
      desc: "Completed a 4-week Vocational Training Program in Web Development (React & Node.js) with KodeZen Technologies (SID: KZTVT20261226).",
    },
    {
      icon: Code,
      title: "Real-time & Workflow Systems",
      desc: "Hands-on experience developing streaming overlays with Socket.IO, centralized HR management portals, and responsive business platforms.",
    },
    {
      icon: Zap,
      title: "Modern Full-Stack Stack",
      desc: "Proficient with React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, PostgreSQL, Prisma ORM, and Supabase.",
    },
  ];

  return (
    <section id="about" className="scroll-mt-28 py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Summary & Background
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
          Full-Stack Web Developer specialized in building robust, production-grade applications with modern React, Next.js, and Node architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-xl font-bold text-white mb-4">
            Hands-on Engineering & Web Application Development
          </h3>

          <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
            <p>
              {portfolioData.personal.bio}
            </p>
            <p>
              My development experience spans building complex frontend interfaces using React, Next.js, and TypeScript, 
              paired with scalable backends leveraging Node.js, Express, PostgreSQL, Prisma ORM, and Supabase.
            </p>
            <p>
              I take pride in implementing clean architecture, secure authentication (JWT tokens, bcrypt), real-time WebSockets, 
              and fluid responsive UI design with Tailwind CSS.
            </p>
          </div>

          {/* Quick Checklist directly from CV */}
          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <span>Streaming Overlays & Widgets</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <span>HR & Workflow Portals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <span>Business & Service Websites</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <span>Real-Time Socket.IO & JWT Auth</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Key Pillars */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel-interactive rounded-2xl p-5 border border-white/5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{pillar.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{pillar.desc}</p>
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
