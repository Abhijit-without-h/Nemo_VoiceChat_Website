import React, { useState } from 'react';
import { SpeakingIndicator } from './components/SpeakingIndicator';
import { StarryBackground } from './components/StarryBackground';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
      <StarryBackground />
      
      <h1 className="text-5xl font-black mb-12 title-gradient tracking-wider z-10">
        Nemo VoiceChat
      </h1>

      <div 
        className="cursor-pointer relative z-10"
        onClick={() => setIsActive(!isActive)}
      >
        <SpeakingIndicator isActive={isActive} />
      </div>
      
      <p className="mt-8 text-gray-400 text-sm z-10">
        {isActive ? 'Speaking...' : 'Click to simulate speaking'}
      </p>
    </div>
  );
}

export default App;