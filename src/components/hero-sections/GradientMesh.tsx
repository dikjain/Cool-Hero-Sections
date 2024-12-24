import React from 'react';
import { Sparkles } from 'lucide-react';

export const GradientMesh = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20" />
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000000_70%,transparent_100%)]" />
      </div>
      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-xl">
            <Sparkles className="mr-2 h-4 w-4 text-blue-400" />
            <span className="text-white">The Future is Now</span>
          </div>
          <h1 className="mt-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold text-transparent md:text-8xl">
            Build the Future
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Create stunning interfaces with our next-generation components
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-full bg-white px-6 py-2.5 text-black transition hover:bg-white/90">
              Get Started
            </button>
            <button className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-white backdrop-blur-xl transition hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};