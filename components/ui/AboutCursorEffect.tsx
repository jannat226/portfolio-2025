"use client";
import React, { useEffect, useRef, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  vx: number;
  vy: number;
}

interface AboutCursorEffectProps {
  children: React.ReactNode;
}

export default function AboutCursorEffect({ children }: AboutCursorEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sparkleIdRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });

      // Create new sparkle
      if (Math.random() < 0.3) { // 30% chance to create sparkle
        const newSparkle: Sparkle = {
          id: sparkleIdRef.current++,
          x: x,
          y: y,
          size: Math.random() * 8 + 4,
          opacity: 1,
          life: 0,
          maxLife: 60 + Math.random() * 40,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
        };

        setSparkles(prev => [...prev.slice(-15), newSparkle]); // Keep max 15 sparkles
      }
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animateSparkles = () => {
      setSparkles(prev => 
        prev
          .map(sparkle => ({
            ...sparkle,
            x: sparkle.x + sparkle.vx,
            y: sparkle.y + sparkle.vy,
            life: sparkle.life + 1,
            opacity: Math.max(0, 1 - sparkle.life / sparkle.maxLife),
            vy: sparkle.vy + 0.1, // gravity effect
          }))
          .filter(sparkle => sparkle.life < sparkle.maxLife)
      );
    };

    const interval = setInterval(animateSparkles, 16); // ~60fps

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {children}
      
      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute pointer-events-none animate-pulse"
          style={{
            left: sparkle.x - sparkle.size / 2,
            top: sparkle.y - sparkle.size / 2,
            width: sparkle.size,
            height: sparkle.size,
            opacity: sparkle.opacity,
            background: `radial-gradient(circle, 
              rgba(147, 51, 234, ${sparkle.opacity}) 0%, 
              rgba(59, 130, 246, ${sparkle.opacity * 0.8}) 50%, 
              transparent 100%)`,
            borderRadius: "50%",
            transform: `scale(${sparkle.opacity})`,
            transition: "transform 0.1s ease-out",
          }}
        />
      ))}

      {/* Cursor glow effect */}
      <div
        className="absolute pointer-events-none rounded-full opacity-20 transition-opacity duration-300"
        style={{
          left: mousePos.x - 30,
          top: mousePos.y - 30,
          width: 60,
          height: 60,
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
          filter: "blur(10px)",
        }}
      />
    </div>
  );
}