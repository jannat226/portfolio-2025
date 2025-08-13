"use client";
import React, { useEffect, useRef, useState } from 'react';

const NUM_TRAILS = 12;

interface TrailElement {
  x: number;
  y: number;
  size: number;
  opacity: number;
  hue: number;
}

export default function CursorTrail() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<TrailElement[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      setTrails(prevTrails => {
        const newTrails = [...prevTrails];
        
        // Add new trail element at cursor position (less frequently)
        if (newTrails.length < NUM_TRAILS && Math.random() < 0.7) {
          newTrails.push({
            x: mousePos.x,
            y: mousePos.y,
            size: Math.random() * 8 + 4,
            opacity: 0.4,
            hue: (Date.now() / 50) % 360,
          });
        } else {
          // Update existing trails
          for (let i = newTrails.length - 1; i > 0; i--) {
            newTrails[i] = { ...newTrails[i - 1] };
            newTrails[i].opacity *= 0.85;
            newTrails[i].size *= 0.95;
          }
          
          if (newTrails[0]) {
            newTrails[0] = {
              x: mousePos.x,
              y: mousePos.y,
              size: Math.random() * 8 + 4,
              opacity: 0.4,
              hue: (Date.now() / 50) % 360,
            };
          }
        }
        
        // Remove faded trails
        return newTrails.filter(trail => trail.opacity > 0.02);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {trails.map((trail, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            left: trail.x - trail.size / 2,
            top: trail.y - trail.size / 2,
            width: trail.size,
            height: trail.size,
            background: `hsl(${trail.hue}, 70%, 60%)`,
            opacity: trail.opacity,
            boxShadow: `0 0 ${trail.size}px hsl(${trail.hue}, 70%, 60%)`,
            filter: `blur(${Math.max(0, (NUM_TRAILS - i) * 0.2)}px)`,
            mixBlendMode: 'screen',
          }}
        />
      ))}
    </div>
  );
}
