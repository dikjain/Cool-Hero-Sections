import React from 'react';

export const ParallaxStars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 perspective-1000">
        {[1, 2, 3].map((layer) => (
          <div
            key={layer}
            className="absolute inset-0"
            style={{
              transform: `translateZ(${layer * 50}px) scale(${1 - layer * 0.1})`,
              animation: `space-parallax ${8 - layer * 2}s ease-in-out infinite`,
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.3 + Math.random() * 0.7,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};