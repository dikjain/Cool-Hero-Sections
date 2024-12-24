import React from 'react';
import { Cpu } from 'lucide-react';

export const CyberPunk = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="relative flex min-h-screen items-center">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-sm text-red-400">
                <Cpu className="h-4 w-4" />
                <span>Cyberpunk 2077</span>
              </div>
              <h1 className="mt-6 font-mono text-5xl font-bold text-red-500 md:text-7xl">
                CYBER_
                <span className="animate-pulse text-white">FUTURE</span>
              </h1>
              <p className="mt-4 max-w-lg text-gray-400">
                Enter the digital realm where technology meets humanity. Experience the next evolution of web design.
              </p>
              <div className="mt-8 flex gap-4">
                <button className="group relative overflow-hidden rounded bg-red-500 px-6 py-2 font-mono">
                  <span className="relative z-10 text-white">INITIALIZE</span>
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
                <button className="rounded border border-red-500/20 bg-red-500/10 px-6 py-2 font-mono text-red-400 transition-colors hover:bg-red-500/20">
                  CONNECT
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-red-500 blur-[120px]" />
              <div className="absolute right-20 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-blue-500 blur-[80px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};