import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, Lock, Network, Sparkles, Filter } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'ALL' | 'CISCO' | 'PALO_ALTO'>('ALL');

  const filteredCerts = certifications.filter((cert) => {
    if (activeTab === 'CISCO') return cert.issuer.includes('Cisco');
    if (activeTab === 'PALO_ALTO') return cert.issuer.includes('Palo Alto');
    return true;
  });

  return (
    <section id="certifications" className="py-20 relative z-10 border-t border-white/5 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="/ INDUSTRY CREDENTIALS & CISCO BLUE BADGES"
          title="PROFESSIONAL"
          highlightedTitle="CERTIFICATIONS"
          subtitle="Official verified industry credentials from Cisco Networking Academy (CCNA 1, CCNA 2, CCNA 3, Python Essentials, Data Analytics) and Palo Alto Networks."
        />

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('ALL')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'ALL'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              ALL CERTIFICATIONS ({certifications.length})
            </button>
            <button
              onClick={() => setActiveTab('CISCO')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'CISCO'
                  ? 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(2,132,199,0.3)]'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              CISCO BLUE BADGES (6)
            </button>
            <button
              onClick={() => setActiveTab('PALO_ALTO')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'PALO_ALTO'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              PALO ALTO NETWORKS (5)
            </button>
          </div>

          <div className="text-xs font-mono text-cyan-300 bg-cyan-950/30 border border-cyan-500/30 px-3 py-1.5 rounded-lg flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>VERIFIED DIGITAL BADGES</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => {
            const isCisco = cert.issuer.includes('Cisco');
            return (
              <div
                key={cert.title}
                className={`rounded-2xl glass-panel p-6 border transition-all duration-300 flex flex-col justify-between group ${
                  isCisco 
                    ? 'border-sky-500/30 bg-[#050B14]/90 hover:border-sky-400/60 shadow-[0_0_20px_rgba(2,132,199,0.15)]'
                    : 'border-white/10 bg-[#0B0812]/90 hover:border-purple-500/40 shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                }`}
              >
                <div>
                  {/* Header Badge */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold ${
                      isCisco ? 'bg-sky-950/80 border border-sky-400/40 text-sky-300' : 'bg-purple-950/80 border border-purple-500/40 text-purple-300'
                    }`}>
                      {cert.category}
                    </span>
                    <div
                      className={`p-2 rounded-xl border group-hover:scale-110 transition-transform ${
                        isCisco ? 'bg-sky-950/60 border-sky-400/40 text-sky-300' : 'bg-purple-950/60 border-purple-400/40 text-purple-300'
                      }`}
                    >
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-heading font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-4">
                    <span>ISSUER: <strong className="text-white">{cert.issuer}</strong></span>
                    {cert.issueDate && <span className="text-[10px] text-cyan-400">{cert.issueDate}</span>}
                  </div>

                  {/* Skills Covered Pills */}
                  <div className="space-y-1.5 mb-6">
                    {cert.skillsCovered.map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs font-sans text-white/80">
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${isCisco ? 'text-sky-400' : 'text-purple-400'}`} />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Badge Footer */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span className="flex items-center gap-1">
                    {cert.badgeType || 'VERIFIED CREDENTIAL'}
                  </span>
                  <span className="text-emerald-400 font-bold">STATUS: VALID</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
