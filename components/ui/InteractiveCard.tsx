import React from 'react';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div 
      className={`
        group relative overflow-hidden 
        bg-white/90 dark:bg-gray-800/60 
        backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50
        rounded-xl p-6
        transition-all duration-500 ease-out
        hover:scale-105 hover:shadow-2xl 
        hover:shadow-purple-500/20 dark:hover:shadow-purple-400/30
        hover:bg-white dark:hover:bg-gray-700/70
        hover:border-purple-300/50 dark:hover:border-purple-400/50
        transform-gpu cursor-pointer
        ${className}
      `}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 blur-sm"></div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-purple-50/30 dark:via-gray-700/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default InteractiveCard;
