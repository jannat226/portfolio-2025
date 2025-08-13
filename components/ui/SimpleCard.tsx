import React from 'react';

interface SimpleCardProps {
  children: React.ReactNode;
  className?: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div 
      className={`
        bg-white/70 dark:bg-gray-800/40 
        backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30
        rounded-lg px-4 py-5
        transition-colors duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default SimpleCard;
