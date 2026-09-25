import React from 'react';
import { X, Github, ExternalLink, Shield, Cpu, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-purple-500/30 bg-[#0A0F18]/95 p-6 sm:p-8 shadow-[0_0_50px_rgba(139,92,246,0.3)] my-8 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="font-mono text-sm font-bold text-cyan-400">
              [{project.number}]
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/60 border border-purple-500/30 text-purple-300">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-cyan-300 font-mono">
            {project.subtitle}
          </p>
        </div>

        {/* Overview */}
        <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-white/90 leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        {/* Metrics Grid (if any) */}
        {project.metrics && (
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 text-center">
                <div className="text-2xl font-mono font-bold text-cyan-400">{m.value}</div>
                <div className="text-xs text-white/60 font-sans mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" /> ENGINEERING PROBLEM
            </h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> ARCHITECTURAL SOLUTION
            </h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* System Pipeline Flow */}
        {project.flow && (
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
              // ARCHITECTURE PIPELINE FLOW
            </h4>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex flex-wrap items-center gap-2 text-xs font-mono">
              {project.flow.map((step, idx) => (
                <React.Fragment key={step}>
                  <span className="px-3 py-1.5 rounded-lg bg-purple-950/80 border border-purple-500/30 text-purple-200">
                    {step}
                  </span>
                  {idx < project.flow!.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Key Engineering Highlights */}
        <div className="mb-8">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-3">
            // KEY ENGINEERING HIGHLIGHTS & INNOVATIONS
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.highlights.map((item) => (
              <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/5 border border-white/5 text-xs sm:text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 mb-3">
            // TECHNOLOGIES & TOOLS USED
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-4 pt-4 border-t border-white/10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold transition-all"
            >
              <Github className="w-4 h-4" />
              <span>VIEW SOURCE CODE</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>LAUNCH DEMO</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
