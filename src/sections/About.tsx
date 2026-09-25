import React from 'react';
import { Cpu, Server, ShieldCheck, Award, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { identity, stats } = PORTFOLIO_DATA;

  const focusCards = [
    {
      num: '01',
      title: 'INTELLIGENT SYSTEMS',
      subtitle: 'AI, ML & Generative Reasoning',
      icon: Cpu,
      desc: 'Architecting local LLM copilot agents (Ollama/Qwen3), multi-objective optimization algorithms (NSGA-II, PSO), RAG architectures with vector embeddings (ChromaDB), and explainable AI models (SHAP).',
      tags: ['LLMs', 'PyTorch', 'RAG', 'Agentic AI', 'SHAP', 'NSGA-II'],
      color: 'from-purple-500/20 to-purple-900/10',
      borderColor: 'border-purple-500/30',
      accentColor: 'text-purple-400'
    },
    {
      num: '02',
      title: 'SOFTWARE ENGINEERING',
      subtitle: 'Backend, Systems & Full-Stack',
      icon: Server,
      desc: 'Building high-throughput FastAPI & Node.js microservices, distributed Kafka telemetry pipelines, Redis Lua caching, and interactive 3D WebGL Digital Twin user interfaces with React and Vite.',
      tags: ['FastAPI', 'Node.js', 'Kafka', 'Redis', 'React', 'Three.js'],
      color: 'from-cyan-500/20 to-cyan-900/10',
      borderColor: 'border-cyan-500/30',
      accentColor: 'text-cyan-400'
    },
    {
      num: '03',
      title: 'SECURITY ENGINEERING',
      subtitle: 'Detection, SOC & Cloud Defense',
      icon: ShieldCheck,
      desc: 'Engineering threat detection pipelines (Isolation Forest & JA4 bot fingerprinting), MITRE ATT&CK log normalization, Palo Alto/Cisco cloud security fundamentals, and patented blockchain MRV registries.',
      tags: ['Threat Detection', 'WAF', 'SIEM', 'MITRE ATT&CK', 'Cloud Security'],
      color: 'from-pink-500/20 to-pink-900/10',
      borderColor: 'border-pink-500/30',
      accentColor: 'text-pink-400'
    }
  ];

  return (
    <section id="about" className="py-20 relative z-10 border-t border-white/5 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="/ WHO I AM"
          title="ABOUT"
          highlightedTitle="ME"
          subtitle={identity.bio}
        />

        {/* 3 Core Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {focusCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.num}
                className={`relative rounded-2xl glass-panel p-6 border ${card.borderColor} bg-gradient-to-b ${card.color} glass-panel-hover flex flex-col justify-between group`}
              >
                <div>
                  {/* Card Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono text-2xl font-black ${card.accentColor}`}>
                      {card.num}
                    </span>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform">
                      <IconComponent className={`w-6 h-6 ${card.accentColor}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    {card.title}
                  </h3>
                  <div className="text-xs font-mono text-white/50 mb-4">
                    {card.subtitle}
                  </div>

                  <p className="text-sm text-white/80 leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl glass-panel border border-purple-500/20 bg-purple-950/20 text-center hover:border-cyan-400/40 transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-mono font-bold bg-gradient-to-r from-purple-400 via-cyan-300 to-white bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-sans font-medium text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
