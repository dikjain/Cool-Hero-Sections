import { Brain, Cpu, Network, Sparkles, ChevronRight } from 'lucide-react';


export const ArtificialIntelligence = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" 
          alt="AI Background"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
      </div>

      <div className="absolute inset-0">
        <div className="h-full w-full animate-[pulse_4s_ease-in-out_infinite] bg-[radial-gradient(circle,rgba(79,70,229,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
            <div className="flex flex-col items-start space-y-8">
              <div className="inline-flex items-center space-x-2 rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-400 ring-1 ring-indigo-500/20">
                <Brain className="h-4 w-4" />
                <span>Next-Gen AI Technology</span>
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-white lg:text-7xl">
                The Future of
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Artificial Intelligence
                </span>
              </h1>

              <p className="max-w-xl text-lg text-gray-400">
                Harness the power of advanced neural networks and machine learning to transform your business. Our AI solutions deliver unprecedented insights and automation.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <Cpu className="mr-2 h-4 w-4" />
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800 px-6 py-3 text-sm font-semibold text-gray-300 hover:bg-gray-700 focus:outline-none">
                  <Network className="mr-2 h-4 w-4" />
                  View Demo
                </button>
              </div>
            </div>

            <div className="relative aspect-square w-full max-w-lg justify-self-center lg:justify-self-end">
              <div className="absolute -inset-4">
                <div className="h-full w-full animate-[spin_10s_linear_infinite] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-20 blur-3xl" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1676277791608-ac54525aa94d"
                alt="AI Visualization"
                className="relative h-full w-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
                <Sparkles className="h-5 w-5 text-indigo-400" />
                <span className="text-sm font-medium text-white">AI Powered</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};