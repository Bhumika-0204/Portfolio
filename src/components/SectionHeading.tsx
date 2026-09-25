import React from 'react';

interface SectionHeadingProps {
  tag: string;
  title: string;
  highlightedTitle?: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  highlightedTitle,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {/* Technical Tag */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/20 text-xs font-mono tracking-wider text-purple-300 mb-3 ${centered ? 'mx-auto' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>{tag}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight uppercase">
        {title}{' '}
        {highlightedTitle && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 text-glow-purple">
            {highlightedTitle}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-3 text-base md:text-lg text-white/70 max-w-3xl font-sans ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      {/* Subtle Glow Accent Line */}
      <div className={`mt-4 h-0.5 w-24 bg-gradient-to-r from-purple-500 via-cyan-400 to-transparent ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};
