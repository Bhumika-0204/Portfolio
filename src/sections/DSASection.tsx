import React from 'react';
import { Code, ExternalLink, Award, CheckCircle2, Terminal } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const DSASection: React.FC = () => {
  const { dsa, identity } = PORTFOLIO_DATA;

  return (
    <section id="dsa" className="py-20 relative z-10 border-t border-white/5 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="/ ALGORITHMIC MASTERY"
          title="PROBLEM"
          highlightedTitle="SOLVING & DSA"
          subtitle="Rigorous algorithmic practice, competitive programming, dynamic programming, and graph optimization across C++ and Python."
        />

        {/* Counter & Core Languages Banner */}
        <div className="mb-12 p-6 rounded-2xl glass-panel border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-[#0A0F18] to-cyan-950/40 flex flex-wrap items-center justify-between gap-6">
          
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-purple-950/80 border border-purple-500/40 text-cyan-400">
              <Code className="w-8 h-8 animate-pulse" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-white">
                {dsa.solvedCount}
              </div>
              <div className="text-xs font-mono text-white/70">
                DSA & Algorithmic Problems Solved
              </div>
            </div>
          </div>

          {/* Languages Used */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-white/50">PRIMARY LANGUAGES:</span>
            {dsa.languages.map((lang) => (
              <span
                key={lang}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-white/10 border border-white/20 text-cyan-300"
              >
                {lang}
              </span>
            ))}
          </div>

          {/* LeetCode Link Button */}
          <a
            href={identity.contact.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] transform hover:-translate-y-0.5"
          >
            <Terminal className="w-4 h-4" />
            <span>VIEW LEETCODE PROFILE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

        </div>

        {/* Algorithm Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dsa.topics.map((topic) => (
            <div
              key={topic.name}
              className="p-5 rounded-xl glass-panel border border-white/10 bg-[#0F1724]/70 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <h3 className="text-sm font-heading font-bold text-white">
                    {topic.name}
                  </h3>
                </div>
                <p className="text-xs text-white/70 font-sans leading-relaxed pl-6">
                  {topic.description}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-white/5 text-[10px] font-mono text-purple-400 flex items-center justify-between">
                <span>MASTERED</span>
                <span>C++ / PYTHON</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
