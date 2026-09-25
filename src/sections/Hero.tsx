import React from 'react';
import { ArrowDown, FileText, Github, Linkedin, Code, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeroVisual } from '../components/HeroVisual';

export const Hero: React.FC = () => {
  const { identity } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-cyan-300 w-fit mb-6 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>GL BAJAJ CSE '27</span>
              <span className="text-purple-400">|</span>
              <span className="text-white/80">CGPA 8.08</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black tracking-tight text-white uppercase leading-[1.08] mb-4">
              BHUMIKA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 text-glow-purple">
                KUMARI
              </span>
            </h1>

            {/* Main Roles */}
            <div className="font-mono text-base sm:text-xl font-bold text-cyan-400 mb-6 tracking-wide flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>{identity.primaryRole}</span>
              <span className="text-purple-400">{identity.secondaryRole}</span>
            </div>

            {/* Professional Statement */}
            <p className="text-base sm:text-lg text-white/80 font-sans leading-relaxed max-w-2xl mb-8">
              "{identity.statement}"
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-mono text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={identity.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-purple-500/40 text-white font-mono text-xs sm:text-sm font-bold transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Quick Links & Badge Footer */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
                CONNECT //
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={identity.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-cyan-300 transition-colors"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={identity.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-cyan-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={identity.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-cyan-300 transition-colors"
                >
                  <Code className="w-4 h-4 text-pink-400" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive AI/Cyber Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-xs font-mono text-white/40 hover:text-cyan-400 transition-colors"
      >
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </a>
    </section>
  );
};
