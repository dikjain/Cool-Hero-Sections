import { Hexagon, Code, Cpu } from 'lucide-react';

export const Holographic = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 animate-pulse" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <Hexagon
            key={i}
            className="absolute animate-float text-cyan-400/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${Math.random() * 2 + 1})`,
            }}
          />
        ))}
      </div>
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 mb-6">
              <Cpu className="h-5 w-5 animate-pulse text-cyan-400" />
              <span className="text-lg text-cyan-400">Next Generation Tech</span>
            </div>
            <div className="relative animate-hover">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 opacity-30 blur-xl animate-pulse" />
              <div className="relative rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-500">
                <Hexagon className="h-12 w-12 text-cyan-400 animate-spin-slow" />
                <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-7xl animate-text bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-500 bg-clip-text text-transparent bg-300% hover:scale-105 transition-transform">
                  Holo<span className="text-cyan-400 animate-pulse">verse</span>
                </h1>
                <p className="mt-4 text-lg text-cyan-100 hover:text-cyan-300 transition-colors">
                  Step into the holographic dimension of web design
                </p>
                <div className="mt-8 flex justify-center md:justify-start gap-4">
                  <button className="group relative overflow-hidden rounded-lg bg-cyan-400 px-6 py-2 hover:scale-105 transition-all duration-300">
                    <span className="relative z-10 font-medium text-black">Enter Portal</span>
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-300 via-teal-400 to-emerald-300 opacity-0 transition-opacity group-hover:opacity-100 animate-gradient-x" />
                  </button>
                  <button className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-6 py-2 font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-400/20 hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 via-teal-300 to-emerald-500 opacity-30 blur-2xl animate-pulse" />
            <div className="relative aspect-square rounded-full border-2 border-cyan-400/30 p-2 animate-float">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-spin-slow" />
              <div className="absolute inset-0 rounded-full border-2 border-emerald-400/20 animate-reverse-spin" />
              <img 
                src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80"
                alt="Holographic Interface"
                className="rounded-full w-full h-full object-cover hover:scale-105 transition-transform duration-500 animate-pulse"
              />
              <Code className="absolute -right-4 top-1/4 h-8 w-8 text-cyan-400 animate-bounce" />
              <Hexagon className="absolute -left-4 bottom-1/4 h-8 w-8 text-emerald-400 animate-float" />
              <Cpu className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-teal-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};