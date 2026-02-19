
import React from 'react';

import AboutRainEffect from './AboutRainEffect';

interface AboutProps {
  compact?: boolean;
}

const About: React.FC<AboutProps> = ({ compact }) => {
  return (
    <section className={`relative py-24 px-6 md:px-12 text-white overflow-hidden ${compact ? 'bg-[#0a0a0a]' : 'bg-black'}`}>
      {!compact && <AboutRainEffect />}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 bg-[#00ead3] rotate-45"></span>
            <span className="text-sm font-black uppercase text-white/30 tracking-[0.3em]">OUR MISSION</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85]">
            SYSTEMIC <br /> <span className="italic text-[#00ead3]">PROGRESS.</span>
          </h2>
          <p className="text-white/60 text-xl mb-12 max-w-xl leading-relaxed font-medium">
            AthenWeb is a premium software lab dedicated to high-concurrency systems, immersive interfaces, and AI-driven evolution.
          </p>

          {!compact && (
            <div className="grid grid-cols-2 gap-8 mb-16">
              <div className="border-l border-[#00ead3]/20 pl-6">
                <h4 className="font-black text-3xl uppercase mb-2">01. Precision</h4>
                <p className="text-sm text-white/40 leading-loose">Low-latency, high-availability, and clean code are our non-negotiables.</p>
              </div>
              <div className="border-l border-[#00ead3]/20 pl-6">
                <h4 className="font-black text-3xl uppercase mb-2">02. Evolution</h4>
                <p className="text-sm text-white/40 leading-loose">We don't just update; we evolve systems to meet future demands today.</p>
              </div>
            </div>
          )}

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#00ead3] flex items-center justify-center border-2 border-black transition-transform group-hover:scale-110">
                <span className="font-black text-black text-xl">⚡</span>
              </div>
              <span className="font-black text-2xl uppercase tracking-tighter group-hover:text-[#00ead3] transition-colors">DRIVING ENTERPRISE EFFICIENCY</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border-2 border-black text-black transition-transform group-hover:scale-110">
                <span className="font-black text-xl">∞</span>
              </div>
              <span className="font-black text-2xl uppercase tracking-tighter group-hover:text-[#00ead3] transition-colors">SCALABLE ARCHITECTURE EXPERTS</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 w-full max-w-md mx-auto aspect-[3/4] bg-[#111] p-1 transform -rotate-1 hover:rotate-0 transition-all duration-700 shadow-[0_0_50px_rgba(0,234,211,0.05)]">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover border border-white/5"
              alt="Technology Evolution"
            />
            <div className="absolute -top-10 -left-10 bg-[#00ead3] p-8 rounded-full shadow-2xl border-4 border-black flex flex-col items-center justify-center text-black">
              <span className="text-5xl font-black">X</span>
              <span className="text-xs font-bold uppercase">EVO-LAB</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
