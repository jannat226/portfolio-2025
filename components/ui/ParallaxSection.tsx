"use client";
import { useEffect, useState, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundSpeed?: number;
  contentSpeed?: number;
  id?: string;
  allowHorizontalScroll?: boolean;
}

export default function ParallaxSection({ 
  children, 
  className = '',
  backgroundSpeed = 0.5,
  contentSpeed = 0.2,
  id,
  allowHorizontalScroll = false
}: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundTransform = `translateY(${scrollY * backgroundSpeed}px)`;
  const contentTransform = `translateY(${scrollY * contentSpeed}px)`;

  return (
    <div 
      ref={sectionRef}
      id={id}
      className={`relative ${allowHorizontalScroll ? 'overflow-y-hidden' : 'overflow-hidden'} ${className}`}
      style={{ willChange: 'transform' }}
    >
      {/* Background Layer */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ 
          transform: backgroundTransform,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Gradient background for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-cyan-900/10 dark:from-purple-500/10 dark:via-blue-500/5 dark:to-cyan-500/10" />
        
        {/* Floating shapes for parallax effect */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl" />
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-lg" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl" />
      </div>

      {/* Content Layer */}
      <div 
        className="relative z-10"
        style={{ 
          transform: contentTransform,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {children}
      </div>

      {/* Foreground accent layer */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{ 
          transform: `translateY(${scrollY * -0.3}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute top-1/4 right-10 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-1/3 left-16 w-1 h-1 bg-cyan-400 rounded-full opacity-40 animate-pulse" />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 animate-pulse" />
      </div>
    </div>
  );
}
