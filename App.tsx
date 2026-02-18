
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

import Process from './components/Process';

export type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAiOpen, setIsAiOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <Marquee />
            <Process />
            <About compact />
            <Portfolio compact />
          </>
        );
      case 'about':
        return <About />;
      case 'services':
        return <Process />; // Maybe the services page should also show this? Or keep old Services?

      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#00ead3] selection:text-black bg-[#050505]">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="pt-20">
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />

      <button
        onClick={() => setIsAiOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#00ead3] text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      >
        <div className="flex items-center gap-2">
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">ASK ATHEN</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
      </button>

      {isAiOpen && <AIAssistant onClose={() => setIsAiOpen(false)} />}
    </div>
  );
};

export default App;
