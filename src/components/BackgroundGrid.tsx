import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#000000]">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-30"
        style={{ backgroundSize: '40px 40px' }}
      />

      {/* Radial Gradient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_85%)]" />

      {/* Glowing Ambient Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-magenta-primary/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* Top Header Glow Bar */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* Subtle scanline overlay */}
      <div className="absolute inset-0 scanline opacity-25 mix-blend-overlay" />
    </div>
  );
};
