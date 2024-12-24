import { Atom } from 'lucide-react';

export const QuantumRealm = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 animate-[float_3s_ease-in-out_infinite] rounded-full bg-blue-500/50 blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
            <Atom className="h-5 w-5 animate-spin text-blue-400" />
            <span className="text-lg text-blue-400">Quantum Computing</span>
          </div>
          <h1 className="mt-8 animate-[text-shadow-drop-center_0.6s_both] text-7xl font-bold text-white md:text-9xl">
            QUANTUM
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              REALM
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Experience computing at the quantum level
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 transition-transform hover:scale-105">
              <span className="relative z-10 text-white">Initialize Quantum Coffee</span>
            </button>
            <button className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-8 py-3 text-blue-400 transition-all hover:border-blue-500/40 hover:bg-blue-500/20">
              Learn Quantum Theory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};