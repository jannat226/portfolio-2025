"use client";
import React, { useEffect, useRef, useState } from 'react';

interface SpiralThread {
  id: number;
  centerX: number;
  centerY: number;
  radius: number;
  angle: number;
  life: number;
  maxLife: number;
  color: string;
  opacity: number;
  spiralPoints: { x: number; y: number; opacity: number }[];
}

export default function SpiralCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [spirals, setSpirals] = useState<SpiralThread[]>([]);
  const animationRef = useRef<number | null>(null);
  const spiralIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      // Create a new spiral thread on click
      const newSpiral: SpiralThread = {
        id: spiralIdRef.current++,
        centerX: e.clientX,
        centerY: e.clientY,
        radius: 0,
        angle: 0,
        life: 0,
        maxLife: 120, // Frames
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        opacity: 1,
        spiralPoints: []
      };
      
      setSpirals(prev => [...prev.slice(-3), newSpiral]); // Keep max 4 spirals
    };

    const handleTouch = (e: TouchEvent) => {
      // Create a new spiral thread on touch
      const touch = e.touches[0];
      if (touch) {
        const newSpiral: SpiralThread = {
          id: spiralIdRef.current++,
          centerX: touch.clientX,
          centerY: touch.clientY,
          radius: 0,
          angle: 0,
          life: 0,
          maxLife: 120,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`,
          opacity: 1,
          spiralPoints: []
        };
        
        setSpirals(prev => [...prev.slice(-3), newSpiral]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleTouch);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setSpirals(prevSpirals => {
        return prevSpirals.map(spiral => {
          if (spiral.life >= spiral.maxLife) return null;

          const newSpiral = { ...spiral };
          newSpiral.life += 1;
          newSpiral.angle += 0.2; // Spiral speed
          newSpiral.radius = Math.min(100, spiral.life * 1.5); // Max radius
          newSpiral.opacity = 1 - (spiral.life / spiral.maxLife);

          // Calculate spiral points
          const points: { x: number; y: number; opacity: number }[] = [];
          const numPoints = 30;
          
          for (let i = 0; i < numPoints; i++) {
            const pointAngle = newSpiral.angle - (i * 0.3);
            const pointRadius = Math.max(0, newSpiral.radius - (i * 3));
            const pointOpacity = newSpiral.opacity * (1 - i / numPoints);
            
            if (pointRadius > 0 && pointOpacity > 0.01) {
              points.push({
                x: newSpiral.centerX + Math.cos(pointAngle) * pointRadius,
                y: newSpiral.centerY + Math.sin(pointAngle) * pointRadius,
                opacity: pointOpacity
              });
            }
          }
          
          newSpiral.spiralPoints = points;
          return newSpiral;
        }).filter(Boolean) as SpiralThread[];
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Mouse move spiral effect (subtle)
  useEffect(() => {
    const createMoveSpiral = () => {
      if (Math.random() < 0.1) { // 10% chance on mouse move
        const newSpiral: SpiralThread = {
          id: spiralIdRef.current++,
          centerX: mousePos.x,
          centerY: mousePos.y,
          radius: 0,
          angle: Math.random() * Math.PI * 2,
          life: 0,
          maxLife: 60, // Shorter life for move spirals
          color: `hsl(${(Date.now() / 50) % 360}, 60%, 70%)`,
          opacity: 0.6,
          spiralPoints: []
        };
        
        setSpirals(prev => [...prev.slice(-5), newSpiral]);
      }
    };

    createMoveSpiral();
  }, [mousePos]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      {spirals.map((spiral) => (
        <div key={spiral.id}>
          {spiral.spiralPoints.map((point, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: point.x - 2,
                top: point.y - 2,
                width: 4,
                height: 4,
                background: spiral.color,
                opacity: point.opacity,
                boxShadow: `0 0 8px ${spiral.color}`,
                transform: `scale(${point.opacity})`,
              }}
            />
          ))}
          
          {/* Spiral thread connecting lines */}
          {spiral.spiralPoints.slice(0, -1).map((point, i) => {
            const nextPoint = spiral.spiralPoints[i + 1];
            if (!nextPoint) return null;
            
            const distance = Math.sqrt(
              Math.pow(nextPoint.x - point.x, 2) + Math.pow(nextPoint.y - point.y, 2)
            );
            const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x);
            
            return (
              <div
                key={`line-${i}`}
                className="absolute"
                style={{
                  left: point.x,
                  top: point.y - 0.5,
                  width: distance,
                  height: 1,
                  background: `linear-gradient(to right, ${spiral.color}, transparent)`,
                  opacity: point.opacity * 0.6,
                  transform: `rotate(${angle}rad)`,
                  transformOrigin: '0 50%',
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
