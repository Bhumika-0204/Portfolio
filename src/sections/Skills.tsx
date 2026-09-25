import React, { useState } from 'react';
import { 
  Code2, BrainCircuit, Server, Layout, Database, 
  ShieldCheck, Network, Radio, Cloud, Search
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-purple-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
  Server: <Server className="w-5 h-5 text-pink-400" />,
  Layout: <Layout className="w-5 h-5 text-purple-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  Network: <Network className="w-5 h-5 text-yellow-400" />,
  Radio: <Radio className="w-5 h-5 text-pink-400" />,
  Cloud: <Cloud className="w-5 h-5 text-cyan-400" />
};

export const Skills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions = ['ALL', 'CLOUD & DEVOPS', 'FULL-STACK', 'AI / ML', 'BACKEND & SYSTEMS', 'CYBERSECURITY', 'DATABASES'];

  const filteredCategories = skillCategories.filter((cat) => {
    // Filter by tab
    if (activeFilter !== 'ALL') {
      if (activeFilter === 'CLOUD & DEVOPS' && !cat.title.includes('Cloud') && !cat.title.includes('DevOps')) return false;
      if (activeFilter === 'FULL-STACK' && !cat.title.includes('Full-Stack') && !cat.title.includes('Frontend')) return false;
      if (activeFilter === 'AI / ML' && !cat.title.includes('AI') && !cat.title.includes('Machine')) return false;
      if (activeFilter === 'BACKEND & SYSTEMS' && !cat.title.includes('Backend') && !cat.title.includes('Programming')) return false;
      if (activeFilter === 'CYBERSECURITY' && !cat.title.includes('Cybersecurity') && !cat.title.includes('Network') && !cat.title.includes('Detection')) return false;
      if (activeFilter === 'DATABASES' && !cat.title.includes('Databases')) return false;
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesTitle = cat.title.toLowerCase().includes(q);
      const matchesSkills = cat.skills.some((s) => s.name.toLowerCase().includes(q) || ('tag' in s && s.tag && (s.tag as string).toLowerCase().includes(q)));
      return matchesTitle || matchesSkills;
    }

    return true;
  });

  return (
    <section id="skills" className="py-20 relative z-10 border-t border-white/5 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="/ TECHNICAL ARSENAL"
          title="ENGINEERING"
          highlightedTitle="SKILLS & CLOUD STACK"
          subtitle="A comprehensive overview of competencies across Full-Stack Web Development, AI Systems, Cloud & DevOps Infrastructure (AWS, Docker, Kubernetes), and Cybersecurity Defense."
        />

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeFilter === opt
                    ? 'bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. AWS, Docker, Kubernetes, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>

        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl glass-panel p-6 border border-white/10 bg-[#0A0A0E]/90 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    {iconMap[cat.iconName] || <Code2 className="w-5 h-5 text-purple-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-white">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] font-sans text-white/50">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill Items Pills / Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative px-3 py-1.5 rounded-lg bg-white/5 hover:bg-purple-950/50 border border-white/10 hover:border-cyan-400/40 transition-all flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-mono text-white/90 font-medium">
                        {skill.name}
                      </span>
                      {'tag' in skill && skill.tag && (
                        <span className="text-[10px] font-mono text-purple-300/80 bg-purple-900/40 px-1.5 py-0.5 rounded">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Count Indicator */}
              <div className="mt-6 pt-3 border-t border-white/5 text-[10px] font-mono text-white/40 flex items-center justify-between">
                <span>{cat.skills.length} MODULES</span>
                <span className="text-cyan-400 font-bold">VERIFIED</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
