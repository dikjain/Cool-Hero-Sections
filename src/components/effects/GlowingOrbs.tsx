import React from 'react';

export const GlowingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <div
            className="h-32 w-32 rounded-full animate-pulse-glow"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.4), transparent)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};