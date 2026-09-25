import React from 'react';
import { Github, Linkedin, Code, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { identity } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#000000] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          
          {/* Brand Identity - Clean Text without Icon Box */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="text-white font-heading font-bold text-xl mb-1 hover:text-cyan-300 transition-colors">
              BHUMIKA KUMARI
            </a>
            <p className="text-xs font-mono text-cyan-400/80">
              {identity.primaryRole} {identity.secondaryRole}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={identity.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-purple-950/60 border border-white/10 hover:border-purple-500/40 text-white/80 hover:text-cyan-300 transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={identity.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-purple-950/60 border border-white/10 hover:border-purple-500/40 text-white/80 hover:text-cyan-300 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={identity.contact.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-purple-950/60 border border-white/10 hover:border-purple-500/40 text-white/80 hover:text-cyan-300 transition-all"
              title="LeetCode"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${identity.contact.email}`}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-purple-950/60 border border-white/10 hover:border-purple-500/40 text-white/80 hover:text-cyan-300 transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white/70 hover:text-cyan-300 transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Copyright & Telemetry Status */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © 2026 Bhumika Kumari. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>/ SYSTEM ONLINE / ALL MODULES OPTIMAL</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
