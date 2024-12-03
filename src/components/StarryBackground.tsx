import React from 'react';

export const StarryBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Static twinkling stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="shooting-star-new"
          style={{
            top: `${Math.random() * 50}%`,
            left: '100%',
            animationDelay: `${Math.random() * 15}s`
          }}
        />
      ))}
    </div>
  );
};