import { Rocket, Star } from 'lucide-react';

export const SpaceExplorer = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a2a]">
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <Star
            key={i}
            className="absolute animate-[twinkle_2s_ease-in-out_infinite] text-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
            size={Math.random() * 4 + 2}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2a] via-transparent to-[#0a0a2a]" />
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2">
            <Rocket className="h-5 w-5 animate-bounce text-purple-400" />
            <span className="text-lg text-purple-400">Space Exploration</span>
          </div>
          <h1 className="mt-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-7xl font-bold text-transparent md:text-9xl">
            COSMOS
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Venture into the unknown reaches of space
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <button className="group relative overflow-hidden rounded-full bg-purple-500 px-8 py-3 transition-transform hover:scale-105">
              <span className="relative z-10 text-white">Launch Mission</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            <button className="rounded-full border border-purple-500/20 bg-purple-500/10 px-8 py-3 text-purple-400 transition-all hover:border-purple-500/40 hover:bg-purple-500/20">
              View Galaxy Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};