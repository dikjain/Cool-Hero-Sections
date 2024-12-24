import React from 'react';

export const NeonLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-px animate-neon-flicker"
          style={{
            width: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            background: 'linear-gradient(90deg, transparent, #00ff9580, transparent)',
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};