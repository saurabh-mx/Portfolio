"use client";

import { useState } from "react";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      {/* Portfolio Website View - Completely excluded from DOM flow when printing CV */}
      <div className={`portfolio-main-page relative min-h-screen flex flex-col justify-between ${isResumeOpen ? "print:hidden" : ""}`}>
        {/* Dynamic Animated Ambient Background Blobs */}
        <BackgroundBlobs />

        {/* Floating Glassmorphic Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Resume Modal View - The sole printable element when opened */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
