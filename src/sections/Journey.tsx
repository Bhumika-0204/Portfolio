import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const { journey, identity } = PORTFOLIO_DATA;

  return (
    <section id="journey" className="py-20 relative z-10 border-t border-white/5 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="/ TIMELINE & ACADEMICS"
          title="ENGINEERING"
          highlightedTitle="JOURNEY"
          subtitle="Academic milestones, technical achievements, published patent, and hackathon recognitions."
        />

        {/* Current Degree Highlight Banner */}
        <div className="mb-12 p-6 rounded-2xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-purple-950/60 via-[#0A0F18] to-cyan-950/60 flex flex-wrap items-center justify-between gap-6 shadow-[0_0_30px_rgba(56,189,248,0.15)]">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                  CURRENT ENROLLMENT
                </span>
                <span className="text-xs font-mono text-white/60">{identity.education.period}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                {identity.education.degree}
              </h3>
              <p className="text-sm font-sans text-cyan-300">
                {identity.education.institution} • {identity.education.location}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-2xl font-mono font-bold text-cyan-400">
              {identity.education.cgpa}
            </div>
            <div className="text-xs font-mono text-white/50">CUMULATIVE CGPA</div>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {journey.map((item, idx) => (
            <div key={item.year + item.title} className="relative group">
              
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#05070D] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-[0_0_10px_#38bdf8]" />

              {/* Timeline Card */}
              <div className="p-6 rounded-2xl glass-panel border border-white/10 bg-[#0F1724]/80 glass-panel-hover">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-purple-950/80 border border-purple-500/40 text-cyan-300">
                      {item.year}
                    </span>
                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 font-bold border border-amber-500/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> {item.badge}
                      </span>
                    )}
                  </div>
                  {item.score && (
                    <span className="text-sm font-mono font-bold text-cyan-400">
                      SCORE: {item.score}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-heading font-bold text-white mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-cyan-300/80 mb-3">
                  {item.institution}
                </div>

                <p className="text-sm text-white/80 font-sans leading-relaxed">
                  {item.detail}
                </p>

              </div>

            </div>
          ))}
        </div>

        {/* Key Documented Achievements Summary */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h3 className="text-xs font-mono font-bold text-purple-300 mb-4 tracking-wider uppercase">
            // DOCUMENTED ENGINEERING ACHIEVEMENTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Award className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono font-bold text-white mb-0.5">1000+ DSA Problems Solved</h4>
                <p className="text-[11px] text-white/70">Mastered competitive programming algorithms in C++ & Python.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Award className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono font-bold text-white mb-0.5">Smart India Hackathon Qualified</h4>
                <p className="text-[11px] text-white/70">Participated & qualified internal selection rounds with innovative engineering solutions.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Award className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono font-bold text-white mb-0.5">Published Intellectual Property</h4>
                <p className="text-[11px] text-white/70">Official published patent on Blockchain Blue Carbon Registry MRV System.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
