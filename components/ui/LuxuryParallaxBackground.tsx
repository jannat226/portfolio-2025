"use client";
import { useEffect, useState } from 'react';
import ParallaxEffect from './ParallaxEffect';

export default function LuxuryParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 dark:from-black dark:via-purple-900/30 dark:to-gray-900" />
      
      {/* Parallax Layer 1 - Slowest moving background shapes */}
      <ParallaxEffect speed={0.1} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </ParallaxEffect>

      {/* Parallax Layer 2 - Medium speed geometric shapes */}
      <ParallaxEffect speed={0.3} className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-purple-400/20 rotate-45 rounded-lg" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-blue-400/20 rotate-12 rounded-lg" />
      </ParallaxEffect>

      {/* Parallax Layer 3 - Faster moving accent elements */}
      <ParallaxEffect speed={0.6} className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-600/20 to-transparent rounded-full blur-xl" />
        <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-gradient-to-r from-blue-600/20 to-transparent rounded-full blur-xl" />
      </ParallaxEffect>

      {/* Animated floating particles */}
      <ParallaxEffect speed={0.4} className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </ParallaxEffect>

      {/* Luxury grid overlay */}
      <ParallaxEffect speed={0.2} className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </ParallaxEffect>

      {/* Dynamic light rays */}
      <ParallaxEffect speed={0.8} className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-purple-400/20 via-transparent to-transparent transform -translate-x-1/2 rotate-12"
          style={{
            transform: `translateX(-50%) rotate(${12 + scrollY * 0.01}deg)`
          }}
        />
        <div 
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-blue-400/20 via-transparent to-transparent transform rotate-[-8deg]"
          style={{
            transform: `rotate(${-8 + scrollY * 0.005}deg)`
          }}
        />
      </ParallaxEffect>
    </div>
  );
}
