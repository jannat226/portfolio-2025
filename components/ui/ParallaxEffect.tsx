"use client";
import { useEffect, useState, useRef } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  offset?: number;
}

export default function ParallaxEffect({ 
  children, 
  speed = 0.5, 
  className = "",
  offset = 0 
}: ParallaxProps) {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = (scrollY + offset) * speed;

  return (
    <div 
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(0, ${parallaxOffset}px, 0)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}
