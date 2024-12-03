import React, { useState } from 'react';
import { VoiceIndicator } from './VoiceIndicator';
import { ChatMessage } from './ChatMessage';
import { Mic, MicOff } from 'lucide-react';

export const VoiceChat: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [messages] = useState([
    { message: "Hello! How can I help you today?", isUser: false, timestamp: "10:00 AM" },
    { message: "I need help with my account settings.", isUser: true, timestamp: "10:01 AM" },
    { message: "I'd be happy to help you with that.", isUser: false, timestamp: "10:01 AM" },
  ]);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto p-4">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} {...msg} />
        ))}
      </div>
      
      <div className="flex items-center justify-center space-x-4 py-4 border-t border-gray-200">
        <button
          onClick={toggleListening}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label={isListening ? "Stop listening" : "Start listening"}
        >
          {isListening ? (
            <MicOff className="w-6 h-6 text-gray-600" />
          ) : (
            <Mic className="w-6 h-6 text-gray-600" />
          )}
        </button>
        
        <VoiceIndicator isActive={isListening} />
        
        <div className="text-sm text-gray-500">
          {isListening ? "Listening..." : "Click the microphone to start"}
        </div>
      </div>
    </div>
  );
};