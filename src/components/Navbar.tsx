import React, { useState, useEffect } from 'react';
import { Shield, Github, Linkedin, FileText, Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Security Lab', href: '#security' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'DSA', href: '#dsa' },
  { label: 'Journey', href: '#journey' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Patent', href: '#patent' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section intersection detection
      const sections = navItems.map(item => item.href.substring(1));
      sections.unshift('hero');
      
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000]/85 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Clean Text without Icon Box */}
          <a
            href="#hero"
            className="flex items-center group text-white font-heading font-bold text-lg md:text-xl tracking-wider"
          >
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-cyan-300 transition-all">
              BHUMIKA <span className="text-cyan-400 font-mono text-sm font-normal ml-1">KUMARI</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-cyan-300 bg-purple-950/40 border border-purple-500/30'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-2 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#38bdf8]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.identity.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-purple-950/60 border border-white/10 hover:border-purple-500/40 text-white/80 hover:text-cyan-300 transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.identity.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-purple-950/60 border border-white/10 hover:border-purple-500/40 text-white/80 hover:text-cyan-300 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            <a
              href={PORTFOLIO_DATA.identity.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-cyan-300"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#000000]/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl py-6 px-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-mono text-white/80 hover:text-cyan-300 hover:bg-purple-950/40 border border-transparent hover:border-purple-500/30 transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-purple-400/60">//</span>
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.identity.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PORTFOLIO_DATA.identity.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <a
                href={PORTFOLIO_DATA.identity.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-bold bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
