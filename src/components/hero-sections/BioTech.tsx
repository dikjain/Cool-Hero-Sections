import { Dna } from 'lucide-react';

export const BioTech = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-emerald-950">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 h-16 w-16 -translate-x-1/2 animate-[spin_20s_linear_infinite]"
              style={{ top: `${i * 10}%` }}
            >
              <div className="absolute h-2 w-2 rounded-full bg-emerald-400/50 blur-sm" style={{ left: '-2rem' }} />
              <div className="absolute h-2 w-2 rounded-full bg-emerald-400/50 blur-sm" style={{ right: '-2rem' }} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-transparent to-emerald-950" />
      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
            <Dna className="h-5 w-5 animate-pulse text-emerald-400" />
            <span className="text-lg text-emerald-400">Biotechnology</span>
          </div>
          <h1 className="mt-8 text-7xl font-bold text-white md:text-9xl">
            BIO
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">TECH</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            The future of biological engineering
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <button className="group relative overflow-hidden rounded-full bg-emerald-500 px-8 py-3 transition-transform hover:scale-105">
              <span className="relative z-10 text-white">Start Research</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            <button className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-8 py-3 text-emerald-400 transition-all hover:border-emerald-500/40 hover:bg-emerald-500/20">
              View Lab Results
            </button>on
          </div>
        </div>br
      </div>
    </div>
  );
};