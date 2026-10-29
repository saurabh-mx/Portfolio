"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Award, ShieldCheck } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
  title?: string;
  sid?: string;
  issuer?: string;
  date?: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  imageUrl = "/certificates/kodezen-vt-certificate.jpg",
  title = "Certificate of Vocational Training in Web Development (React & Node.js)",
  sid = "KZTVT20261226",
  issuer = "KodeZen Technologies",
  date = "10-Jul-2026",
}: CertificateModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto z-10 glass-panel rounded-2xl border border-white/10 shadow-2xl p-5 sm:p-7 text-zinc-100 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Verified VT Certificate</span>
                  <span className="flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </span>
                </h3>
                <p className="text-xs text-zinc-400">
                  Issued by {issuer} • SID: <span className="font-mono text-zinc-200">{sid}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Certificate Image Frame */}
          <div className="relative w-full aspect-[1/1.4] max-h-[65vh] rounded-xl overflow-hidden border border-white/10 bg-slate-950 shadow-inner group">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 650px"
              priority
            />
          </div>

          {/* Footer details */}
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Program:</span>
              <span className="text-zinc-200 font-medium">Web Development (React & Node.js)</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Duration: <strong className="text-zinc-200 font-mono">4 Weeks</strong></span>
              <span>•</span>
              <span>Date: <strong className="text-zinc-200 font-mono">{date}</strong></span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

