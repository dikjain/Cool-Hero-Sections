import React from 'react';

export const CyberGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg animate-grid-slide" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center 80%',
        }}
      />
    </div>
  );
};