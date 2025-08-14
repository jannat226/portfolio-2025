"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface SpiralPoint {
  id: number;
  x: number;
  y: number;
  angle: number;
  radius: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function SpiralCursorEffect() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [spiralPoints, setSpiralPoints] = useState<SpiralPoint[]>([]);
  const [isFirstInteraction, setIsFirstInteraction] = useState(true);
  const [showWelcomeEffect, setShowWelcomeEffect] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const animationRef = useRef<number | null>(null);
  const pointIdRef = useRef(0);
  const lastMoveTime = useRef(0);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Create welcome spiral explosion
  const createWelcomeSpiral = useCallback((x: number, y: number) => {
    const newPoints: SpiralPoint[] = [];
    for (let i = 0; i < 2; i++) { // Reduced from 3 to 2 spiral arms
      for (let j = 0; j < 8; j++) { // Reduced from 12 to 8 points per arm
        const baseAngle = (i * 180) * (Math.PI / 180); // 180 degrees apart
        const spiralAngle = baseAngle + (j * 0.4);
        newPoints.push({
          id: pointIdRef.current++,
          x,
          y,
          angle: spiralAngle,
          radius: j * 6 + 8,
          opacity: 1,
          life: 60, // Reduced from 80
          maxLife: 60
        });
      }
    }
    setSpiralPoints(prev => [...prev, ...newPoints]);
  }, []);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    setMousePos({ x: e.clientX, y: e.clientY });
    
    if (isFirstInteraction) {
      setIsFirstInteraction(false);
      setShowWelcomeEffect(true);
      createWelcomeSpiral(e.clientX, e.clientY);
      
      // Auto-hide welcome message after 2 seconds
      setTimeout(() => setShowWelcomeEffect(false), 2000);
    }

    // Create subtle spiral trail
    if (now - lastMoveTime.current > 80) { // Increased from 60ms to 80ms for better performance
      lastMoveTime.current = now;
      
      const newPoints: SpiralPoint[] = [];
      const baseAngle = Date.now() * 0.005; // Slower rotation for smoother effect
      newPoints.push({
        id: pointIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        angle: baseAngle,
        radius: 10,
        opacity: 0.6,
        life: 30, // Reduced from 40
        maxLife: 30
      });
      setSpiralPoints(prev => [...prev, ...newPoints]);
    }
  }, [isFirstInteraction, createWelcomeSpiral]);

  // Handle welcome button click
  const handleExploreClick = useCallback(() => {
    setShowWelcomeEffect(false);
  }, []);

  // Handle scroll
  const handleScroll = useCallback(() => {
    const now = Date.now();
    setIsScrolling(true);
    
    // Create scroll-triggered spiral effects
    if (now - lastScrollTime.current > 100) { // Increased from 40ms to 100ms
      lastScrollTime.current = now;
      
      const scrollPoints: SpiralPoint[] = [];
      for (let i = 0; i < 2; i++) { // Reduced from 3 to 2 spiral arms
        for (let j = 0; j < 3; j++) { // Reduced from 6 to 3 points per arm
          const baseAngle = (i * 180) * (Math.PI / 180);
          const spiralAngle = baseAngle + (j * 0.5) + (now * 0.008);
          scrollPoints.push({
            id: pointIdRef.current++,
            x: mousePos.x + (Math.random() - 0.5) * 30, // Reduced spread
            y: mousePos.y + (Math.random() - 0.5) * 30,
            angle: spiralAngle,
            radius: j * 6 + 8,
            opacity: 0.7,
            life: 40, // Reduced from 50
            maxLife: 40
          });
        }
      }
      setSpiralPoints(prev => [...prev, ...scrollPoints]);
    }
    
    // Reset scrolling state
    setTimeout(() => setIsScrolling(false), 150);
  }, [mousePos]);

  // Animation loop with performance optimization
  useEffect(() => {
    if (!mounted) return;

    const animate = () => {
      setSpiralPoints(prev => {
        const activePoints = prev
          .map(point => ({
            ...point,
            life: point.life - 1,
            opacity: point.opacity * 0.97, // Slightly faster fade
            radius: point.radius + 0.6, // Slower expansion
            angle: point.angle + 0.06 // Slower rotation
          }))
          .filter(point => point.life > 0 && point.opacity > 0.02); // Remove very faint points
        
        // Limit maximum points for performance
        return activePoints.length > 50 ? activePoints.slice(-50) : activePoints;
      });

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

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleMouseMove, handleScroll, mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Creative welcome message with interactive button */}
      {showWelcomeEffect && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl px-10 py-8 shadow-2xl border-2 border-purple-100 animate-fade-in max-w-md mx-4 text-center relative overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 opacity-60"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              {/* Welcome text */}
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                Welcome to my portfolio
              </h2>
              
              <p className="text-gray-600 text-lg mb-6 font-medium">
                Ready to explore amazing projects?
              </p>
              
              {/* Interactive button */}
              <button
                onClick={handleExploreClick}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                <span className="flex items-center justify-center gap-2">
                  Let&apos;s explore together
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              {/* Auto-hide indicator */}
              <div className="mt-4 text-xs text-gray-400">
                Auto-closing in a moment...
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-4 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
          </div>
        </div>
      )}

      {/* Optimized spiral cursor effects */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {spiralPoints.map((point) => {
          const x = point.x + Math.cos(point.angle) * point.radius;
          const y = point.y + Math.sin(point.angle) * point.radius;
          
          return (
            <div
              key={point.id}
              className="absolute w-1.5 h-1.5 rounded-full will-change-transform"
              style={{
                left: x - 3,
                top: y - 3,
                opacity: point.opacity,
                background: `linear-gradient(45deg, 
                  hsl(${280 + (point.angle * 15)}, 70%, 60%), 
                  hsl(${320 + (point.angle * 15)}, 70%, 70%))`,
                transform: `scale(${point.opacity}) translate3d(0, 0, 0)`, // Use GPU acceleration
                boxShadow: `0 0 ${point.opacity * 6}px hsla(${280 + (point.angle * 15)}, 70%, 60%, ${point.opacity * 0.4})`
              }}
            />
          );
        })}

        {/* Scroll indicator */}
        {isScrolling && (
          <div
            className="absolute text-sm font-medium text-purple-400 animate-pulse pointer-events-none"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 10,
              transform: 'translateZ(0)' // Hardware acceleration
            }}
          >
            🌀 Scrolling...
          </div>
        )}
      </div>
    </>
  );
}
