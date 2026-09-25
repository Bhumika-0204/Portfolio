import React, { useEffect, useRef, useState } from 'react';

interface NodeItem {
  id: string;
  label: string;
  category: 'AI' | 'SOFTWARE' | 'SECURITY';
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  color: string;
}

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initial Node Positions
    const nodes: NodeItem[] = [
      { id: '1', label: 'AGENTIC AI', category: 'AI', x: width * 0.5, y: height * 0.3, z: 1, vx: 0.2, vy: -0.15, color: '#A855F7' },
      { id: '2', label: 'LLM INFERENCE', category: 'AI', x: width * 0.25, y: height * 0.25, z: 0.8, vx: -0.1, vy: 0.2, color: '#8B5CF6' },
      { id: '3', label: 'FASTAPI GATEWAY', category: 'SOFTWARE', x: width * 0.35, y: height * 0.6, z: 0.9, vx: 0.15, vy: 0.1, color: '#06B6D4' },
      { id: '4', label: 'VECTOR DB (CHROMADB)', category: 'SOFTWARE', x: width * 0.75, y: height * 0.45, z: 0.7, vx: -0.2, vy: -0.1, color: '#38BDF8' },
      { id: '5', label: 'WAF & BOT REASONING', category: 'SECURITY', x: width * 0.6, y: height * 0.75, z: 1.1, vx: 0.1, vy: -0.2, color: '#EC4899' },
      { id: '6', label: 'SIEM & MITRE ATT&CK', category: 'SECURITY', x: width * 0.2, y: height * 0.7, z: 0.8, vx: -0.15, vy: 0.15, color: '#F43F5E' },
      { id: '7', label: 'KAFKA TELEMETRY', category: 'SOFTWARE', x: width * 0.8, y: height * 0.2, z: 0.9, vx: 0.2, vy: 0.1, color: '#10B981' },
      { id: '8', label: '3D DIGITAL TWIN', category: 'AI', x: width * 0.55, y: height * 0.2, z: 1.2, vx: -0.1, vy: -0.1, color: '#A855F7' }
    ];

    // Data Pulses along connections
    interface Pulse {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
    }

    const connections: [number, number][] = [
      [0, 1], [0, 2], [0, 3], [0, 7],
      [2, 4], [2, 5], [3, 4], [3, 6],
      [4, 5], [6, 1], [7, 3], [7, 0]
    ];

    const pulses: Pulse[] = connections.map(([from, to]) => ({
      fromIndex: from,
      toIndex: to,
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.005
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Connection Lines
      connections.forEach(([i, j]) => {
        const n1 = nodes[i];
        const n2 = nodes[j];

        const grad = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
        grad.addColorStop(0, n1.color + '44');
        grad.addColorStop(1, n2.color + '44');

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });

      // Animate & Draw Pulses
      pulses.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) pulse.progress = 0;

        const n1 = nodes[pulse.fromIndex];
        const n2 = nodes[pulse.toIndex];

        const px = n1.x + (n2.x - n1.x) * pulse.progress;
        const py = n1.y + (n2.y - n1.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#38BDF8';
        ctx.shadowColor = '#38BDF8';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Update & Draw Nodes
      nodes.forEach((node) => {
        // Slight Movement
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 50 || node.x > width - 50) node.vx *= -1;
        if (node.y < 50 || node.y > height - 50) node.vy *= -1;

        // Subtle Mouse Attraction
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          node.x += dx * 0.01;
          node.y += dy * 0.01;
        }

        // Draw Node Glow Outer Ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, 14 * node.z, 0, Math.PI * 2);
        ctx.fillStyle = node.color + '1A';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, 8 * node.z, 0, Math.PI * 2);
        ctx.fillStyle = node.color + '4D';
        ctx.fill();

        // Core Dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4 * node.z, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Node Label
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fillText(node.label, node.x + 12, node.y + 4);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[550px] rounded-2xl glass-panel border border-purple-500/20 overflow-hidden group shadow-[0_0_50px_rgba(139,92,246,0.15)] flex items-center justify-center">
      {/* Background Matrix/Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Floating System Header Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-white/90">AI × SECURITY SYSTEM GRAPH</span>
        <span className="text-purple-400 font-bold ml-1">[LIVE INFRA]</span>
      </div>

      <div className="absolute top-4 right-4 z-10 flex items-center gap-3 text-[10px] font-mono text-white/50">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500" /> AI</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400" /> SW</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-pink-500" /> SEC</span>
      </div>

      {/* Interactive Network Canvas */}
      <canvas ref={canvasRef} className="w-full h-full relative z-0 cursor-crosshair" />

      {/* Interactive Bottom Control Bar */}
      <div className="absolute bottom-4 inset-x-4 z-10 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/70">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-bold">MODE:</span>
          <span>AUTONOMOUS THREAT & MODEL REASONING PIPELINE</span>
        </div>
        <div className="flex items-center gap-4">
          <span>LATENCY: <strong className="text-emerald-400">&lt;5ms</strong></span>
          <span>NODES: <strong className="text-purple-300">8 ACTIVE</strong></span>
        </div>
      </div>
    </div>
  );
};
