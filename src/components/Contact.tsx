"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight, ExternalLink } from "lucide-react";
import {
  GithubIcon,
  YoutubeIcon,
  KickIcon,
  DiscordIcon,
  InstagramIcon,
  SteamIcon,
} from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio-data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [lastMailtoUrl, setLastMailtoUrl] = useState<string>("");

  const buildMailtoUrl = () => {
    const sub = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim() || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Hello Saurabh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Saurabh Patel's Portfolio Website`
    );
    return `mailto:${portfolioData.personal.email}?subject=${sub}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    const mailto = buildMailtoUrl();
    setLastMailtoUrl(mailto);

    setTimeout(() => {
      // Trigger default email app
      window.location.href = mailto;
      setStatus("success");
    }, 600);
  };

  return (
    <section id="contact" className="scroll-mt-28 py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Contact</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Get in Touch
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
          Interested in discussing web development projects, internships, or engineering roles? Reach out directly!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Information</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Available via direct email or social channels.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-4 p-3.5 rounded-2xl glass-panel-subtle hover:bg-white/10 border border-white/5 transition-colors group cursor-pointer"
              >
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-zinc-400">Direct Email</p>
                  <p className="text-sm font-medium text-white truncate group-hover:text-indigo-300">
                    {portfolioData.personal.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3.5 rounded-2xl glass-panel-subtle border border-white/5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Location</p>
                  <p className="text-sm font-medium text-white">{portfolioData.personal.location}</p>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                Social Profiles
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-pill text-xs text-zinc-300 hover:text-white hover:border-indigo-400/40 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-indigo-400" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>

                <a
                  href={portfolioData.personal.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-pill text-xs text-zinc-300 hover:text-white hover:border-red-500/40 hover:bg-red-500/10 transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4 text-red-500" />
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>

                <a
                  href={portfolioData.personal.kick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-pill text-xs text-zinc-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-colors"
                >
                  <KickIcon className="w-4 h-4 text-emerald-400" />
                  <span>Kick</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>

                <a
                  href={portfolioData.personal.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-pill text-xs text-zinc-300 hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 transition-colors"
                >
                  <DiscordIcon className="w-4 h-4 text-indigo-400" />
                  <span>Discord</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>

                <a
                  href={portfolioData.personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-pill text-xs text-zinc-300 hover:text-white hover:border-pink-500/40 hover:bg-pink-500/10 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>

                <a
                  href={portfolioData.personal.steam}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-pill text-xs text-zinc-300 hover:text-white hover:border-sky-400/40 hover:bg-sky-500/10 transition-colors"
                >
                  <SteamIcon className="w-4 h-4 text-sky-400" />
                  <span>Steam</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form with Direct Mailto Fallback */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Email Client Launched!</h4>
                <p className="text-sm text-zinc-300 max-w-md leading-relaxed">
                  Your email client was opened with your message pre-filled to <strong className="text-indigo-400 font-mono">{portfolioData.personal.email}</strong>.
                </p>

                {/* Direct Action Links */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                  {lastMailtoUrl && (
                    <a
                      href={lastMailtoUrl}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Re-open Email App</span>
                    </a>
                  )}

                  <button
                    onClick={() => setStatus("idle")}
                    className="px-4 py-2.5 rounded-xl glass-pill text-xs font-medium text-zinc-300 hover:text-white cursor-pointer"
                  >
                    Write Another
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Your Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Your Email <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Message <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white font-medium text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Opening Mail...
                      </span>
                    ) : (
                      <>
                        <span>Send via Email App</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-zinc-500 mt-2">
                  💡 Clicking &quot;Send via Email App&quot; automatically opens your email program (Gmail, Outlook, etc.) with everything filled in directly to <span className="text-zinc-400 font-mono">{portfolioData.personal.email}</span>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
