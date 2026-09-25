import React from 'react';
import { FileCode2, Shield, CheckCircle2, Award, ArrowUpRight, Cpu } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Patent: React.FC = () => {
  const { patent } = PORTFOLIO_DATA;

  return (
    <section id="patent" className="py-20 relative z-10 border-t border-white/5 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="/ INTELLECTUAL PROPERTY"
          title="PUBLISHED"
          highlightedTitle="PATENT"
          subtitle="Official patent publication detailing an AI-driven, blockchain-enabled MRV registry for environmental carbon credit verification."
        />

        {/* Patent Certificate Showcase Card */}
        <div className="relative rounded-3xl glass-panel border border-purple-500/30 bg-gradient-to-b from-[#0F1724]/90 to-[#0A0F18]/95 p-6 sm:p-10 shadow-[0_0_50px_rgba(139,92,246,0.2)] overflow-hidden">
          
          {/* Background Hologram Glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-purple-600/15 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-8">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-purple-950/80 border border-purple-500/40 text-cyan-300">
                  {patent.status}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/70">
                  {patent.category}
                </span>
              </div>

              {/* Patent Title */}
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
                {patent.title}
              </h3>

              {/* Abstract Description */}
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans mb-6">
                "{patent.description}"
              </p>

              {/* Key Technical Innovations */}
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3">
                // PATENTED TECHNICAL INNOVATIONS & ARCHITECTURE
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {patent.innovations.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Verified IP Notice */}
              <div className="flex items-center gap-2 text-xs font-mono text-white/50 pt-4 border-t border-white/10">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>OFFICIALLY PUBLISHED INTELLECTUAL PROPERTY • BHUMIKA KUMARI</span>
              </div>

            </div>

            {/* Right Column: Patent Document Aesthetics */}
            <div className="lg:col-span-4 w-full">
              <div className="rounded-2xl glass-panel border border-white/15 bg-black/60 p-6 font-mono text-xs text-white/80 space-y-4 shadow-2xl">
                
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-purple-400 font-bold flex items-center gap-2">
                    <FileCode2 className="w-4 h-4 text-purple-400" />
                    IP SPECIFICATION
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold">PUBLISHED</span>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div><strong className="text-white/50">AUTHOR:</strong> Bhumika Kumari</div>
                  <div><strong className="text-white/50">SYSTEM:</strong> AI + Blockchain MRV</div>
                  <div><strong className="text-white/50">TOKEN STANDARD:</strong> ERC-1155 Multi-Token</div>
                  <div><strong className="text-white/50">STORAGE:</strong> IPFS Decoupled Metadata</div>
                  <div><strong className="text-white/50">FUSION:</strong> Satellite + Drone + IoT Sensor</div>
                </div>

                <div className="pt-3 border-t border-white/10 p-3 rounded-lg bg-purple-950/40 border border-purple-500/30 text-[10px] text-cyan-300 leading-normal">
                  "Guarantees cryptographic traceability and eliminates double counting in international blue carbon markets."
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
