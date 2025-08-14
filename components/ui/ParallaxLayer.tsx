"use client";
import { useEffect, useState, useRef } from 'react';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

export default function ParallaxLayer({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'vertical'
}: ParallaxLayerProps) {
  const [offsetY, setOffsetY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      if (direction === 'vertical') {
        setOffsetY(rate);
      } else {
        setOffsetX(rate * 0.1); // Horizontal movement is usually more subtle
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div 
      ref={elementRef}
      className={className}
      style={{
        transform: direction === 'vertical' 
          ? `translateY(${offsetY}px)` 
          : `translateX(${offsetX}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  );
}
