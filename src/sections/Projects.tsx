import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, Cpu, ShieldAlert, Layers, Sparkles, Activity, Search, Filter } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'AI / ML & RAG', 'FULL-STACK & MEDIA', 'CYBERSECURITY & SYSTEMS', 'AGRICULTURE & HEALTHCARE'];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'AI / ML & RAG' && (project.category.includes('AI') || project.category.includes('RAG'))) return true;
    if (activeCategory === 'FULL-STACK & MEDIA' && (project.category.includes('FULL-STACK') || project.category.includes('MEDIA'))) return true;
    if (activeCategory === 'CYBERSECURITY & SYSTEMS' && (project.category.includes('CYBERSECURITY') || project.category.includes('SYSTEMS'))) return true;
    if (activeCategory === 'AGRICULTURE & HEALTHCARE' && (project.category.includes('AGRICULTURE') || project.category.includes('HEALTHCARE'))) return true;
    return false;
  });

  return (
    <section id="projects" className="py-20 relative z-10 border-t border-white/5 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="/ FEATURED ENGINEERING PROJECTS"
          title="FEATURED"
          highlightedTitle="SYSTEMS & PLATFORMS"
          subtitle="Production-grade AI platforms, hybrid video social engines, conversational multi-document RAG systems, distributed security gateways, and cloud agriculture applications."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            return (
              <div
                key={project.id}
                className="group relative rounded-3xl glass-panel border border-white/10 bg-[#07070B]/90 overflow-hidden glass-panel-hover p-6 sm:p-8 lg:p-10 shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all animate-fadeIn"
              >
                {/* Background Accent Glow */}
                <div 
                  className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[110px] pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity"
                  style={{ backgroundColor: project.accentColor }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column Info */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      
                      {/* Top Header Tag */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="font-mono text-sm font-bold text-cyan-400">
                          [{project.number}]
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/60 border border-purple-500/30 text-purple-300">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-400" /> FEATURED
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-sm font-mono text-cyan-400/90 mb-4">
                        {project.subtitle}
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 font-sans">
                        {project.description}
                      </p>

                      {/* Metrics (If available) */}
                      {project.metrics && (
                        <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl bg-purple-950/30 border border-purple-500/20">
                          {project.metrics.map((m) => (
                            <div key={m.label} className="flex flex-col">
                              <span className="text-xs font-sans text-white/60">{m.label}</span>
                              <span className="text-lg font-mono font-bold text-cyan-400">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Key Highlights Bullet Pills */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {project.highlights.slice(0, 4).map((h) => (
                          <div key={h} className="flex items-center gap-2 text-xs font-sans text-white/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.technologies.slice(0, 8).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 8 && (
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-purple-900/30 text-purple-300">
                            +{project.technologies.length - 8} MORE
                          </span>
                        )}
                      </div>

                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] transform hover:-translate-y-0.5"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900/80 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>LAUNCH LIVE</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-semibold transition-all"
                        >
                          <Github className="w-4 h-4" />
                          <span>VIEW CODE</span>
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Right Column Visual Architecture Flow Container */}
                  <div className="lg:col-span-5 w-full">
                    <div className="relative rounded-2xl glass-panel border border-white/10 p-6 bg-black/80 font-mono text-xs text-white/80">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                        <span className="text-cyan-400 font-bold flex items-center gap-2">
                          <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                          SYSTEM PIPELINE FLOW
                        </span>
                        <span className="text-[10px] text-white/40">// DIAGRAM</span>
                      </div>

                      {project.flow ? (
                        <div className="space-y-2.5">
                          {project.flow.map((step, sIdx) => (
                            <div
                              key={step}
                              className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/40 transition-colors"
                            >
                              <span className="w-5 h-5 rounded-md bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-[10px] text-cyan-400 font-bold">
                                {sIdx + 1}
                              </span>
                              <span className="text-xs text-white/90 font-medium">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-8 text-center text-white/40">
                          Architecture Visualizing...
                        </div>
                      )}

                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
                        <span>LATENCY: OPTIMIZED</span>
                        <span>STATUS: PRODUCTION-READY</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
