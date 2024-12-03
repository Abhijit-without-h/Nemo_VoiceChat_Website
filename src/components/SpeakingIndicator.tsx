import React from 'react';

interface SpeakingIndicatorProps {
  isActive: boolean;
}

export const SpeakingIndicator: React.FC<SpeakingIndicatorProps> = ({ isActive }) => {
  return (
    <div className="relative">
      {/* Outer ripple effect */}
      {isActive && (
        <>
          <div className="absolute inset-0 rounded-full animate-ping bg-blue-200/20" />
          <div className="absolute inset-0 rounded-full animate-ping delay-75 bg-blue-200/10" />
        </>
      )}
      {/* Main circle */}
      <div className={`
        relative w-24 h-24 rounded-full 
        flex items-center justify-center
        transition-all duration-300
        ${isActive ? 'bg-blue-500 scale-110' : 'bg-blue-400'}
        shadow-lg shadow-blue-500/20
      `}>
        {/* Inner animated circles */}
        <div className={`
          absolute w-16 h-16 rounded-full
          transition-transform duration-300
          ${isActive ? 'animate-pulse bg-blue-400' : 'bg-blue-300'}
        `} />
        <div className={`
          absolute w-8 h-8 rounded-full
          transition-transform duration-300
          ${isActive ? 'animate-pulse bg-blue-300' : 'bg-blue-200'}
        `} />
      </div>
    </div>
  );
}