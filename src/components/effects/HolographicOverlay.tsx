import React from 'react';

export const HolographicOverlay = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-hologram-scan" />
      <div className="absolute inset-0" style={{
        background: 'repeating-linear-gradient(90deg, rgba(0,255,255,0.03) 0px, rgba(0,255,255,0.03) 1px, transparent 1px, transparent 2px)',
        backgroundSize: '2px 100%',
      }} />
    </div>
  );
};