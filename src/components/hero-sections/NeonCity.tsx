import React from 'react';
import { Building2, ChevronRight } from 'lucide-react';

export const NeonCity = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
      <div className="absolute inset-0">
        <div className="h-full w-full animate-[pulse_4s_ease-in-out_infinite] bg-[linear-gradient(transparent_0%,#00ff9580_2%,transparent_5%),linear-gradient(90deg,transparent_0%,#00ff9580_2%,transparent_5%)] [background-size:40px_40px]" />
      </div>
      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff95] bg-[#00ff95]/10 px-4 py-2 text-[#00ff95]">
            <Building2 className="h-5 w-5" />
            <span className="text-lg">Welcome to Neo Tokyo</span>
          </div>
          <h1 className="mt-8 animate-[tracking-in-expand_0.7s_cubic-bezier(0.215,0.610,0.355,1.000)_both] text-6xl font-bold text-white md:text-8xl">
            NEON<span className="text-[#00ff95]">CITY</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Where dreams meet digital reality
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <button className="group relative overflow-hidden rounded-lg bg-[#00ff95] px-8 py-3 text-black transition-transform hover:scale-105">
              <span className="relative z-10">Explore Now</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#00ff95] to-[#00ccff] opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-[#00ff95]/20 bg-[#00ff95]/10 px-8 py-3 text-[#00ff95] transition-all hover:border-[#00ff95]/40 hover:bg-[#00ff95]/20">
              Learn More
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};