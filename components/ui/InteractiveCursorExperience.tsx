"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';

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
  type: 'spark' | 'trail' | 'explosion';
}

interface MagicTrail {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
  hue: number;
}

export default function InteractiveCursorExperience() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [magicTrail, setMagicTrail] = useState<MagicTrail[]>([]);
  const [isFirstInteraction, setIsFirstInteraction] = useState(true);
  const [showWelcomeEffect, setShowWelcomeEffect] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const animationRef = useRef<number | null>(null);
  const particleIdRef = useRef(0);
  const lastMoveTime = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Welcome explosion effect
  const createWelcomeExplosion = useCallback((x: number, y: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 15; i++) { // Reduced from 30 to 15
      const angle = (Math.PI * 2 * i) / 15;
      const velocity = 1 + Math.random() * 2; // Reduced velocity
      newParticles.push({
        id: particleIdRef.current++,
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 80, // Reduced from 100
        maxLife: 80,
        size: 1 + Math.random() * 2, // Reduced size
        hue: 280 + Math.random() * 80, // Purple to blue spectrum
        type: 'explosion'
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    setMousePos({ x: e.clientX, y: e.clientY });
    
    if (isFirstInteraction) {
      setIsFirstInteraction(false);
      setShowWelcomeEffect(true);
      createWelcomeExplosion(e.clientX, e.clientY);
      
      // Show welcome text
      setTimeout(() => setShowWelcomeEffect(false), 3000);
    }

    // Create trail particles on movement
    if (now - lastMoveTime.current > 32) { // Reduced frequency (was 16ms, now 32ms)
      lastMoveTime.current = now;
      
      // Magic trail - reduced intensity
      setMagicTrail(prev => [
        ...prev.slice(-12), // Reduced from 20 to 12 trail points
        {
          id: particleIdRef.current++,
          x: e.clientX + (Math.random() - 0.5) * 6, // Reduced spread
          y: e.clientY + (Math.random() - 0.5) * 6,
          opacity: 0.8, // Reduced opacity
          size: 2 + Math.random() * 2, // Smaller size
          hue: 260 + Math.random() * 60
        }
      ]);

      // Sparkle particles - much less frequent
      if (Math.random() < 0.15) { // Reduced from 0.3 to 0.15
        setParticles(prev => [...prev, {
          id: particleIdRef.current++,
          x: e.clientX + (Math.random() - 0.5) * 15, // Reduced spread
          y: e.clientY + (Math.random() - 0.5) * 15,
          vx: (Math.random() - 0.5) * 1.5, // Reduced velocity
          vy: (Math.random() - 0.5) * 1.5,
          life: 40, // Shorter life
          maxLife: 40,
          size: 0.5 + Math.random() * 1.5, // Smaller size
          hue: 280 + Math.random() * 40,
          type: 'spark'
        }]);
      }
    }
  }, [isFirstInteraction, createWelcomeExplosion]);

  // Handle scroll
  const handleScroll = useCallback(() => {
    setIsScrolling(true);
    
    // Create scroll particles - reduced
    const scrollParticles: Particle[] = [];
    for (let i = 0; i < 2; i++) { // Reduced from 5 to 2
      scrollParticles.push({
        id: particleIdRef.current++,
        x: mousePos.x + (Math.random() - 0.5) * 60, // Reduced spread
        y: mousePos.y + (Math.random() - 0.5) * 60,
        vx: (Math.random() - 0.5) * 1.5, // Reduced velocity
        vy: -0.5 - Math.random() * 1, // Reduced velocity
        life: 50, // Shorter life
        maxLife: 50,
        size: 1 + Math.random() * 1.5, // Smaller size
        hue: 200 + Math.random() * 60,
        type: 'trail'
      });
    }
    setParticles(prev => [...prev, ...scrollParticles]);
    
    setTimeout(() => setIsScrolling(false), 100);
  }, [mousePos]);

  // Animation loop
  useEffect(() => {
    if (!mounted) return;

    const animate = () => {
      // Update particles
      setParticles(prev => prev
        .map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          life: particle.life - 1,
          vx: particle.vx * 0.98,
          vy: particle.vy * 0.98 + (particle.type === 'trail' ? 0.1 : 0),
        }))
        .filter(particle => particle.life > 0)
      );

      // Update magic trail
      setMagicTrail(prev => prev
        .map(trail => ({
          ...trail,
          opacity: trail.opacity * 0.95,
          size: trail.size * 0.98
        }))
        .filter(trail => trail.opacity > 0.1)
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mounted]);

  // Event listeners
  useEffect(() => {
    if (!mounted) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [mounted, handleMouseMove, handleScroll]);

  if (!mounted) return null;

  return (
    <>
      {/* Welcome message */}
      {showWelcomeEffect && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          <div className="text-center">
            <div className="animate-pulse text-2xl font-bold text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text mb-2">
              ✨ Welcome to my portfolio! ✨
            </div>
            <div className="animate-pulse text-lg font-medium text-transparent bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 bg-clip-text">
              Let's explore together! 🚀
            </div>
          </div>
        </div>
      )}

      {/* Cursor effects container */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {/* Magic trail */}
        {magicTrail.map(trail => (
          <div
            key={trail.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: trail.x - trail.size / 2,
              top: trail.y - trail.size / 2,
              width: trail.size,
              height: trail.size,
              background: `hsla(${trail.hue}, 70%, 60%, ${trail.opacity})`,
              boxShadow: `0 0 ${trail.size * 2}px hsla(${trail.hue}, 70%, 60%, ${trail.opacity * 0.5})`,
            }}
          />
        ))}

        {/* Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
              width: particle.size,
              height: particle.size,
              background: `hsla(${particle.hue}, 80%, 60%, ${particle.life / particle.maxLife})`,
              boxShadow: `0 0 ${particle.size * 3}px hsla(${particle.hue}, 80%, 60%, ${particle.life / particle.maxLife * 0.5})`,
              transform: particle.type === 'explosion' ? 'scale(1.2)' : 'scale(1)',
            }}
          />
        ))}

        {/* Scroll indicator */}
        {isScrolling && (
          <div
            className="absolute text-2xl animate-bounce"
            style={{
              left: mousePos.x - 15,
              top: mousePos.y - 30,
            }}
          >
            ⚡
          </div>
        )}
      </div>

      {/* Custom cursor */}
      <div
        className="fixed w-6 h-6 rounded-full border-2 border-purple-400 pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
          transform: isScrolling ? 'scale(1.5)' : 'scale(1)',
        }}
      />
    </>
  );
}
