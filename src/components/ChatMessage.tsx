import React from 'react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`
        max-w-[70%] rounded-lg px-4 py-2
        ${isUser ? 'bg-gray-200' : 'bg-white border border-gray-200'}
      `}>
        <p className="text-gray-800">{message}</p>
        <span className="text-xs text-gray-500 mt-1 block">{timestamp}</span>
      </div>
    </div>
  );
};