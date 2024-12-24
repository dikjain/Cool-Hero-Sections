import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';
import { CodeBlock } from './components/CodeBlock';
import { heroSections } from './data/heroSections';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.hero-section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold text-white">Futuristic Hero Sections</span>
            </div>
            <button
              onClick={() => setShowCode(!showCode)}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white backdrop-blur-xl transition-colors hover:bg-white/10"
            >
              <Code2 className="h-4 w-4" />
              <span>{showCode ? 'Hide Code' : 'Show Code'}</span>
            </button>
          </div>
        </div>
      </nav>

      {heroSections.map((Section, index) => (
        <div key={Section.id} className="hero-section relative min-h-screen">
          <Section.component />
          {showCode && activeSection === index && (
            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/50 p-4 backdrop-blur-xl">
              <div className="mx-auto max-w-4xl">
                <h3 className="mb-2 text-lg font-semibold text-white">{Section.name}</h3>
                <CodeBlock code={Section.code} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;