import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: string;
  alpha: number;
}

interface PulsePacket {
  nodeA: number;
  nodeB: number;
  progress: number;
  speed: number;
  color: string;
  size: number;
}

export const NetworkCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const particles: Particle[] = [];
    const packets: PulsePacket[] = [];
    const nodeCount = 38; // optimal for performance and aesthetic density
    const maxConnectionDist = 130;
    const colors = [
      'rgba(56, 189, 248, ', // sky-400
      'rgba(99, 102, 241, ', // indigo-500
      'rgba(147, 51, 234, ', // violet-600
      'rgba(45, 212, 191, '  // teal-400
    ];

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect() || {
        width: window.innerWidth,
        height: 600
      };
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height || 640;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Re-seed particles smoothly within new bounds
      if (particles.length === 0) {
        for (let i = 0; i < nodeCount; i++) {
          const colorPrefix = colors[i % colors.length];
          const baseRadius = 1.6 + Math.random() * 2.2;
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            radius: baseRadius,
            baseRadius,
            pulsePhase: Math.random() * Math.PI * 2,
            pulseSpeed: 0.02 + Math.random() * 0.03,
            color: colorPrefix,
            alpha: 0.35 + Math.random() * 0.45
          });
        }
      } else {
        // adjust positions to stay in bounds
        particles.forEach((p) => {
          p.x = Math.min(Math.max(p.x, 10), width - 10);
          p.y = Math.min(Math.max(p.y, 10), height - 10);
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Spawn packets along connected nodes periodically
    let lastPacketTime = 0;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle AI ambient background glow spots
      const bgGrad1 = ctx.createRadialGradient(
        width * 0.3,
        height * 0.35,
        10,
        width * 0.3,
        height * 0.35,
        width * 0.65
      );
      bgGrad1.addColorStop(0, 'rgba(56, 189, 248, 0.07)');
      bgGrad1.addColorStop(0.6, 'rgba(99, 102, 241, 0.03)');
      bgGrad1.addColorStop(1, 'rgba(11, 19, 43, 0)');
      ctx.fillStyle = bgGrad1;
      ctx.fillRect(0, 0, width, height);

      const bgGrad2 = ctx.createRadialGradient(
        width * 0.75,
        height * 0.65,
        10,
        width * 0.75,
        height * 0.65,
        width * 0.6
      );
      bgGrad2.addColorStop(0, 'rgba(147, 51, 234, 0.06)');
      bgGrad2.addColorStop(0.6, 'rgba(59, 130, 246, 0.02)');
      bgGrad2.addColorStop(1, 'rgba(11, 19, 43, 0)');
      ctx.fillStyle = bgGrad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Update and draw particles & build connection graph
      const connectedPairs: [number, number, number][] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Soft bounce at edges
        if (p.x <= 15) { p.x = 15; p.vx *= -1; }
        if (p.x >= width - 15) { p.x = width - 15; p.vx *= -1; }
        if (p.y <= 15) { p.y = 15; p.vy *= -1; }
        if (p.y >= height - 15) { p.y = height - 15; p.vy *= -1; }

        p.pulsePhase += p.pulseSpeed;
        const currentPulse = Math.sin(p.pulsePhase);
        p.radius = p.baseRadius + currentPulse * 0.7;

        // Collect pairs
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDist) {
            connectedPairs.push([i, j, dist]);
            const alpha = (1 - dist / maxConnectionDist) * 0.28;
            
            // Draw subtle neural line
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(125, 211, 252, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 3. Spawn data packet light trails
      if (time - lastPacketTime > 600 && connectedPairs.length > 0) {
        lastPacketTime = time;
        if (packets.length < 9) {
          const randomPair = connectedPairs[Math.floor(Math.random() * connectedPairs.length)];
          packets.push({
            nodeA: randomPair[0],
            nodeB: randomPair[1],
            progress: 0,
            speed: 0.012 + Math.random() * 0.016,
            color: Math.random() > 0.5 ? '#38bdf8' : '#a855f7',
            size: 2.2 + Math.random() * 1.5
          });
        }
      }

      // 4. Draw data packets (flowing light signals along lines)
      for (let i = packets.length - 1; i >= 0; i--) {
        const pkt = packets[i];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        const pA = particles[pkt.nodeA];
        const pB = particles[pkt.nodeB];
        if (!pA || !pB) continue;

        const curX = pA.x + (pB.x - pA.x) * pkt.progress;
        const curY = pA.y + (pB.y - pA.y) * pkt.progress;
        const packetAlpha = Math.sin(pkt.progress * Math.PI);

        // Glow halo
        ctx.beginPath();
        ctx.arc(curX, curY, pkt.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color === '#38bdf8'
          ? `rgba(56, 189, 248, ${packetAlpha * 0.3})`
          : `rgba(168, 85, 247, ${packetAlpha * 0.3})`;
        ctx.fill();

        // Core bright dot
        ctx.beginPath();
        ctx.arc(curX, curY, pkt.size, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color === '#38bdf8'
          ? `rgba(224, 242, 254, ${packetAlpha * 0.9})`
          : `rgba(250, 232, 255, ${packetAlpha * 0.9})`;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 5. Draw particles (Nodes with subtle glow)
      particles.forEach((p) => {
        // Node outer ring glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}0.12)`;
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
};
