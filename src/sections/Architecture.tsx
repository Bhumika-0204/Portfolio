import React, { useState } from 'react';
import { Layers, Server, Cpu, Database, ShieldCheck, Cloud, Layout, ArrowDown } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const layerIcons: Record<string, React.ReactNode> = {
  user: <Layout className="w-5 h-5 text-purple-400" />,
  frontend: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
  backend: <Server className="w-5 h-5 text-pink-400" />,
  ai: <Cpu className="w-5 h-5 text-purple-400" />,
  data: <Database className="w-5 h-5 text-emerald-400" />,
  security: <ShieldCheck className="w-5 h-5 text-amber-400" />,
  infrastructure: <Cloud className="w-5 h-5 text-cyan-400" />
};

export const Architecture: React.FC = () => {
  const { architectureLayers } = PORTFOLIO_DATA;
  const [activeLayerId, setActiveLayerId] = useState<string>('ai');

  const selectedLayer = architectureLayers.find((l) => l.id === activeLayerId) || architectureLayers[3];

  return (
    <section id="architecture" className="py-20 relative z-10 border-t border-white/5 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="/ SYSTEM DESIGN & PATTERNS"
          title="HOW I BUILD"
          highlightedTitle="SYSTEMS"
          subtitle="Modular, event-driven, decoupled microservices architecture designed for security, observability, and AI model inference."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stacked Architecture Layers */}
          <div className="lg:col-span-7 space-y-3">
            {architectureLayers.map((layer, idx) => {
              const isActive = activeLayerId === layer.id;
              return (
                <div key={layer.id} className="relative">
                  <button
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`w-full p-4 rounded-xl text-left font-mono transition-all border flex items-center justify-between group ${
                      isActive
                        ? 'bg-purple-950/80 border-cyan-400 text-white shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                        : 'bg-white/5 border-white/10 hover:border-purple-500/40 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-black/40 border border-white/10">
                        {layerIcons[layer.id] || <Layers className="w-5 h-5 text-purple-400" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white tracking-wide">
                          {layer.name}
                        </div>
                        <div className="text-[11px] text-cyan-300/80 font-normal">
                          {layer.tech}
                        </div>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-purple-400 font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                      L{idx + 1}
                    </div>
                  </button>

                  {idx < architectureLayers.length - 1 && (
                    <div className="flex justify-center my-0.5">
                      <ArrowDown className="w-3.5 h-3.5 text-purple-500/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Layer Detail Deep Dive */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl glass-panel border border-purple-500/30 bg-[#0F1724]/90 p-6 sm:p-8 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-500/40 text-cyan-400">
                  {layerIcons[selectedLayer.id] || <Layers className="w-6 h-6" />}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                    // ARCHITECTURAL LAYER DEEP-DIVE
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white">
                    {selectedLayer.name}
                  </h3>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider mb-2">
                  TECHNOLOGY & FRAMEWORKS
                </h4>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                  {selectedLayer.tech}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold text-white/50 uppercase tracking-wider mb-2">
                  RESPONSIBILITIES & SPECS
                </h4>
                <p className="text-sm text-white/90 leading-relaxed font-sans">
                  {selectedLayer.desc}
                </p>
              </div>

              {/* Design Principles Checklist */}
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-white/70">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Decoupled API Contracts & Data Validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Asynchronous Event-Driven Messaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>Zero-Trust Security & TLS Encryption</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
