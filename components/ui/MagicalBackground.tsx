"use client";
import React from 'react';

const MagicalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 0, 150, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 200, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(150, 0, 255, 0.3) 0%, transparent 50%),
            linear-gradient(45deg, rgba(255, 100, 0, 0.1), rgba(0, 100, 255, 0.1))
          `,
          animation: 'morphBackground 10s ease-in-out infinite'
        }}
      />

      {/* Floating colorful shapes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            background: `hsl(${i * 60}, 80%, 60%)`,
            boxShadow: `0 0 ${40 + i * 20}px hsl(${i * 60}, 80%, 60%)`,
            animation: `float ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}

      <style jsx>{`
        @keyframes morphBackground {
          0%, 100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          25% {
            filter: hue-rotate(90deg) brightness(1.2);
          }
          50% {
            filter: hue-rotate(180deg) brightness(1.1);
          }
          75% {
            filter: hue-rotate(270deg) brightness(1.3);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default MagicalBackground;
