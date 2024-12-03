import React from 'react';
import { Mic } from 'lucide-react';

interface VoiceIndicatorProps {
  isActive: boolean;
}

export const VoiceIndicator: React.FC<VoiceIndicatorProps> = ({ isActive }) => {
  return (
    <div className="relative">
      <div className={`
        absolute inset-0 rounded-full
        ${isActive ? 'animate-ping bg-gray-400/50' : ''}
      `} />
      <div className={`
        relative rounded-full p-4
        ${isActive ? 'bg-gray-200' : 'bg-gray-100'}
        transition-colors duration-200
      `}>
        <Mic className={`w-6 h-6 ${isActive ? 'text-gray-700' : 'text-gray-400'}`} />
      </div>
    </div>
  );
};