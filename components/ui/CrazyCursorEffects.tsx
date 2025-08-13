"use client";
import { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

export default function CrazyCursorEffects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isClicking, setIsClicking] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    
    // Detect theme changes
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };
    
    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create trailing particles
      if (Math.random() < 0.8) {
        const newParticle: Particle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          life: 0,
          maxLife: 60 + Math.random() * 40,
          size: 3 + Math.random() * 8,
          hue: Math.random() * 360,
        };
        
        setParticles(prev => [...prev.slice(-50), newParticle]);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      
      // Create explosion effect
      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2;
        const speed = 3 + Math.random() * 5;
        const newParticle: Particle = {
          id: Date.now() + Math.random() + i,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 80 + Math.random() * 40,
          size: 4 + Math.random() * 12,
          hue: Math.random() * 360,
        };
        
        setParticles(prev => [...prev, newParticle]);
      }
      
      // Create ripple effect
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 100 + Math.random() * 100,
        opacity: 1,
      };
      
      setRipples(prev => [...prev, newRipple]);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mounted]);

  // Animate particles
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          life: particle.life + 1,
          vx: particle.vx * 0.98,
          vy: particle.vy * 0.98 + 0.1, // gravity
        })).filter(particle => particle.life < particle.maxLife)
      );
      
      setRipples(prev => 
        prev.map(ripple => ({
          ...ripple,
          radius: ripple.radius + 3,
          opacity: 1 - (ripple.radius / ripple.maxRadius),
        })).filter(ripple => ripple.radius < ripple.maxRadius)
      );
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  const cursorColors = theme === "dark" 
    ? {
        primary: "rgba(168, 85, 247, 0.8)", // purple
        secondary: "rgba(236, 72, 153, 0.6)", // pink
        accent: "rgba(59, 130, 246, 0.4)", // blue
        glow: "rgba(255, 255, 255, 0.3)",
      }
    : {
        primary: "rgba(124, 58, 237, 0.8)", // darker purple
        secondary: "rgba(219, 39, 119, 0.6)", // darker pink
        accent: "rgba(37, 99, 235, 0.4)", // darker blue
        glow: "rgba(0, 0, 0, 0.1)",
      };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Main cursor glow */}
      <div
        className="absolute w-8 h-8 rounded-full transition-all duration-100 ease-out"
        style={{
          left: mousePos.x - 16,
          top: mousePos.y - 16,
          background: `radial-gradient(circle, ${cursorColors.primary} 0%, ${cursorColors.secondary} 50%, transparent 100%)`,
          filter: "blur(8px)",
          transform: isClicking ? "scale(1.5)" : "scale(1)",
        }}
      />
      
      {/* Cursor ring */}
      <div
        className="absolute w-6 h-6 rounded-full border-2 transition-all duration-200 ease-out"
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
          borderColor: cursorColors.primary,
          transform: isClicking ? "scale(1.8)" : "scale(1)",
          opacity: 0.8,
        }}
      />

      {/* Inner cursor dot */}
      <div
        className="absolute w-2 h-2 rounded-full transition-all duration-100"
        style={{
          left: mousePos.x - 4,
          top: mousePos.y - 4,
          backgroundColor: cursorColors.primary,
          transform: isClicking ? "scale(0.5)" : "scale(1)",
        }}
      />

      {/* Trailing particles */}
      {particles.map(particle => {
        const alpha = 1 - (particle.life / particle.maxLife);
        const scale = alpha * (particle.size / 10);
        
        return (
          <div
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
              width: particle.size,
              height: particle.size,
              backgroundColor: theme === "dark" 
                ? `hsla(${particle.hue}, 70%, 60%, ${alpha * 0.8})`
                : `hsla(${particle.hue}, 60%, 45%, ${alpha * 0.6})`,
              transform: `scale(${scale})`,
              filter: "blur(1px)",
              boxShadow: theme === "dark"
                ? `0 0 ${particle.size * 2}px hsla(${particle.hue}, 70%, 60%, ${alpha * 0.5})`
                : `0 0 ${particle.size}px hsla(${particle.hue}, 60%, 45%, ${alpha * 0.3})`,
            }}
          />
        );
      })}

      {/* Click ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full border-2 pointer-events-none"
          style={{
            left: ripple.x - ripple.radius,
            top: ripple.y - ripple.radius,
            width: ripple.radius * 2,
            height: ripple.radius * 2,
            borderColor: theme === "dark" 
              ? `rgba(168, 85, 247, ${ripple.opacity * 0.6})`
              : `rgba(124, 58, 237, ${ripple.opacity * 0.4})`,
            opacity: ripple.opacity,
          }}
        />
      ))}

      {/* Ambient glow that follows cursor */}
      <div
        className="absolute w-32 h-32 rounded-full transition-all duration-500 ease-out"
        style={{
          left: mousePos.x - 64,
          top: mousePos.y - 64,
          background: theme === "dark"
            ? `radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.1) 30%, transparent 70%)`
            : `radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(219, 39, 119, 0.05) 30%, transparent 70%)`,
          filter: "blur(20px)",
          transform: isClicking ? "scale(1.3)" : "scale(1)",
        }}
      />
    </div>
  );
}
