"use client";
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
}

const CrazyEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create particles on mouse move
      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 100,
        y: e.clientY + (Math.random() - 0.5) * 100,
        size: Math.random() * 20 + 10,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`,
        opacity: 1
      };
      
      setParticles(prev => [...prev.slice(-10), newParticle]);
    };

    const handleClick = (e: MouseEvent) => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 300);
      
      // Create explosion
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        const distance = 100;
        const newParticle: Particle = {
          id: Date.now() + i,
          x: e.clientX + Math.cos(angle) * distance,
          y: e.clientY + Math.sin(angle) * distance,
          size: Math.random() * 25 + 15,
          color: `hsl(${Math.random() * 360}, 100%, 70%)`,
          opacity: 1
        };
        
        setParticles(prev => [...prev, newParticle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // Auto-remove particles after 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.filter(p => Date.now() - p.id < 2000));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Crazy rainbow cursor */}
      <div
        className="absolute rounded-full"
        style={{
          left: mousePos.x - 30,
          top: mousePos.y - 30,
          width: 60,
          height: 60,
          background: `conic-gradient(
            hsl(${(Date.now() / 10) % 360}, 100%, 70%),
            hsl(${(Date.now() / 10 + 60) % 360}, 100%, 70%),
            hsl(${(Date.now() / 10 + 120) % 360}, 100%, 70%),
            hsl(${(Date.now() / 10 + 180) % 360}, 100%, 70%),
            hsl(${(Date.now() / 10 + 240) % 360}, 100%, 70%),
            hsl(${(Date.now() / 10 + 300) % 360}, 100%, 70%),
            hsl(${(Date.now() / 10) % 360}, 100%, 70%)
          )`,
          boxShadow: `
            0 0 50px hsl(${(Date.now() / 10) % 360}, 100%, 70%),
            0 0 100px hsl(${(Date.now() / 10 + 120) % 360}, 100%, 70%),
            0 0 150px hsl(${(Date.now() / 10 + 240) % 360}, 100%, 70%)
          `,
          transform: `scale(${isClicking ? 2 : 1}) rotate(${Date.now() / 20}deg)`,
          transition: 'transform 0.3s ease-out',
          opacity: 0.8,
        }}
      />

      {/* Particles */}
  {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-ping"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            opacity: Math.max(0, 1 - (Date.now() - particle.id) / 2000),
            animation: `ping 1s cubic-bezier(0, 0, 0.2, 1) infinite, fadeOut 2s ease-out`,
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-bounce"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + Math.sin(Date.now() / 1000 + i) * 20}%`,
            width: `${30 + i * 5}px`,
            height: `${30 + i * 5}px`,
            background: `hsl(${i * 72 + (Date.now() / 50) % 360}, 90%, 60%)`,
            boxShadow: `0 0 ${30 + i * 10}px hsl(${i * 72 + (Date.now() / 50) % 360}, 90%, 60%)`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${2 + i * 0.5}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes fadeOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.5); }
        }
      `}</style>
    </div>
  );
};

export default CrazyEffects;
