import React, { useState } from 'react';
import { Mail, Github, Linkedin, Code, Copy, Check, Send, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { identity } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(identity.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative z-10 border-t border-white/5 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="/ INITIATE CONNECTION"
          title="LET'S BUILD SOMETHING"
          highlightedTitle="INTELLIGENT."
          subtitle="Interested in AI engineering, high-throughput software systems, cybersecurity defense, or technical collaboration? Reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl glass-panel border border-purple-500/30 bg-[#0F1724]/90 p-6 sm:p-8 space-y-6">
              
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-2">
                  DIRECT EMAIL CONNECTION
                </span>
                
                {/* Copyable Email Bar */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-black/60 border border-white/10 group hover:border-purple-500/40 transition-colors">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-white truncate">
                      {identity.contact.email}
                    </span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center gap-1 transition-colors flex-shrink-0"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 text-[10px] font-bold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-cyan-300" />
                        <span className="text-[10px]">COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-3">
                  PRIMARY PROFILES
                </span>
                
                <div className="space-y-2">
                  <a
                    href={identity.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 text-white font-mono text-xs transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                      <span>GitHub</span>
                    </div>
                    <span className="text-[10px] text-cyan-400">// github.com/bhumikakumari08</span>
                  </a>

                  <a
                    href={identity.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 text-white font-mono text-xs transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span>LinkedIn</span>
                    </div>
                    <span className="text-[10px] text-cyan-400">// linkedin.com/in/bhumikakumari</span>
                  </a>

                  <a
                    href={identity.contact.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 text-white font-mono text-xs transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Code className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                      <span>LeetCode</span>
                    </div>
                    <span className="text-[10px] text-cyan-400">// leetcode.com/bhumikakumari</span>
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>AVAILABLE FOR ENGINEERING OPPORTUNITIES</span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel border border-white/10 bg-[#0F1724]/90 p-6 sm:p-8 shadow-xl">
              
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                SEND A MESSAGE
              </h3>
              <p className="text-xs font-sans text-white/60 mb-6">
                Fill out the form below to send an immediate transmission.
              </p>

              {submitted ? (
                <div className="p-8 text-center rounded-xl bg-purple-950/40 border border-purple-500/30 text-white animate-fadeIn">
                  <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-3 animate-bounce" />
                  <h4 className="text-lg font-heading font-bold text-cyan-300 mb-1">
                    TRANSMISSION RECEIVED
                  </h4>
                  <p className="text-xs font-mono text-white/70">
                    Thank you for reaching out! I will respond promptly via email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1.5 uppercase">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1.5 uppercase">
                      YOUR EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1.5 uppercase">
                      MESSAGE / PROJECT DETAILS
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Discussing AI models, software architecture, security, or career opportunities..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND TRANSMISSION</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
