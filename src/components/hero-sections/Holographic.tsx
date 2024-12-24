import { Hexagon } from 'lucide-react';

export const Holographic = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 opacity-30 blur-xl" />
            <div className="relative rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <Hexagon className="mx-auto h-12 w-12 text-cyan-400" />
              <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
                Holo<span className="text-cyan-400">verse</span>
              </h1>
              <p className="mt-4 text-lg text-cyan-100">
                Step into the holographic dimension of web design
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <button className="group relative overflow-hidden rounded-lg bg-cyan-400 px-6 py-2">
                  <span className="relative z-10 font-medium text-black">Enter Portal</span>
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-300 to-teal-300 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
                <button className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-6 py-2 font-medium text-cyan-400 transition-colors hover:bg-cyan-400/20">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};