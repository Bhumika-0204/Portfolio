import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch screens
    if (window.innerWidth < 1024 || 'ontouchstart' in window) {
      return;
    }

    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .interactive-card, .interactive-tag');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none z-[9999] w-2 h-2 bg-cyan-400 rounded-full transition-transform duration-75 ease-out shadow-[0_0_10px_#38bdf8]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 2.5 : 1})`,
        }}
      />
      {/* Outer Ring */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border border-purple-500/60 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(139,92,246,0.3)]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: isHovered ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.8)' : 'rgba(139, 92, 246, 0.5)',
        }}
      />
    </>
  );
};
