import { Glasses, Gamepad2, Globe2, Sparkles, Stars, Zap, Boxes } from 'lucide-react';

export const VirtualReality = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-black">
      <div className="absolute inset-0">
        <div className="h-full w-full animate-[pulse_4s_ease-in-out_infinite] bg-[linear-gradient(rgba(99,102,241,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.15)_1px,transparent_1px)] [background-size:100px_100px] [perspective:1000px] [transform:rotateX(45deg) scale(2)] motion-safe:animate-[spin_30s_linear_infinite]" />
      </div>
      <div className="absolute inset-0 opacity-70">
        <div className="absolute h-3 w-3 animate-float1 rounded-full bg-cyan-400 blur-sm left-[10%] top-[20%]" />
        <div className="absolute h-4 w-4 animate-float2 rounded-full bg-fuchsia-400 blur-sm left-[20%] top-[50%]" />
        <div className="absolute h-3 w-3 animate-float3 rounded-full bg-blue-400 blur-sm left-[80%] top-[30%]" />
        <div className="absolute h-5 w-5 animate-float2 rounded-full bg-violet-400 blur-sm left-[70%] top-[60%]" />
        <div className="absolute h-4 w-4 animate-float1 rounded-full bg-indigo-400 blur-sm left-[90%] top-[80%]" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/90 via-transparent to-black/90" />
      
      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <div className="group inline-flex items-center gap-3 rounded-full border border-indigo-500/30 bg-indigo-500/20 px-8 py-4 backdrop-blur-md transition-all duration-300 hover:border-indigo-400/50 hover:bg-indigo-500/30">
            <Glasses className="h-6 w-6 animate-pulse text-cyan-400" />
            <span className="text-xl font-bold text-indigo-300 group-hover:text-cyan-300 transition-colors">Virtual Reality</span>
            <Stars className="h-5 w-5 animate-spin-slow text-fuchsia-400" />
          </div>

          <h1 className="mt-12 text-8xl font-black text-white md:text-[10rem] animate-fade-in-up tracking-tighter">
            VIRTUAL
            <span className="relative block bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
              WORLDS
              <Sparkles className="absolute -right-20 -top-20 h-16 w-16 animate-pulse text-fuchsia-400" />
              <Zap className="absolute -left-16 bottom-0 h-12 w-12 animate-pulse text-cyan-400" />
            </span>
          </h1>

          <p className="mt-10 text-3xl font-light text-gray-300 animate-fade-in tracking-wide">
            Experience the <span className="text-cyan-400 font-medium">future</span> of reality
          </p>

          <div className="mt-16 flex justify-center gap-8">
            <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 p-[2px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] animate-fade-in-up">
              <div className="relative bg-black/90 rounded-2xl px-8 py-4 transition-all group-hover:bg-black/70">
                <span className="relative z-10 flex items-center gap-3 text-lg font-bold text-white">
                  <Globe2 className="h-5 w-5 text-cyan-400" />
                  Enter VR
                  <Boxes className="h-5 w-5 text-fuchsia-400 animate-pulse" />
                </span>
              </div>
            </button>

            <button className="group rounded-2xl border-2 border-indigo-500/30 bg-indigo-500/10 px-8 py-4 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/20 hover:shadow-[0_0_50px_rgba(99,102,241,0.2)] animate-fade-in-up">
              <span className="flex items-center gap-3 text-lg font-bold text-indigo-300 group-hover:text-cyan-300">
                <Gamepad2 className="h-5 w-5" />
                Browse Worlds
                <Stars className="h-5 w-5 animate-spin-slow" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};