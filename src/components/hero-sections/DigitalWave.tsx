import { Waves, Sparkles, ArrowRight } from 'lucide-react';

export const DigitalWave = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-blue-950">
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-[float_3s_ease-in-out_infinite] rounded-full bg-white/30 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-[2px] w-full animate-[wave_8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-md"
            style={{
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.4}s`,
              transform: `rotate(${-2 + i * 1}deg)`,
            }}
          />
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-96 w-96 animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-blue-500/20 blur-[100px]" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-white/10">
            <Waves className="h-5 w-5 text-blue-400" />
            <span className="text-lg text-blue-50">Digital Experience</span>
            <Sparkles className="h-4 w-4 animate-pulse text-blue-400" />
            <div className="absolute inset-0 -z-10 animate-[spin_4s_linear_infinite] bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0" />
          </div>

          <h1 className="mt-12 bg-gradient-to-b from-white to-white/60 bg-clip-text text-8xl font-black tracking-tighter text-transparent md:text-[10rem]">
            WAVE
          </h1>

          <p className="mx-auto mt-8 max-w-md text-lg text-blue-100/80">
            Experience the future of digital transformation through elegant simplicity
          </p>

          <div className="mt-12 flex justify-center gap-6">
            <button className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-medium text-black transition-transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Begin Journey
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            
            <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-white/10">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};