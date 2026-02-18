
import React from 'react';
import { STATS, ArrowIcon } from '../constants';
import { Page } from '../App';
import RotatingPhrase3D from './RotatingPhrase3D';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[75vh] bg-[#050505] overflow-hidden flex flex-col justify-center py-2 md:py-6">

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center px-6 md:px-12 py-4 md:py-10">

        {/* RIGHT COLUMN: 3D SYSTEM & CTA - ORDERED FIRST ON MOBILE */}
        <div className="lg:col-span-9 lg:order-2 relative flex flex-col items-center lg:items-start">
          <div className="relative w-full">
            {/* NEW 3D ROTATING PHRASE SYSTEM (Atmospheric Background Built-in) */}
            <div className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
              <RotatingPhrase3D />
            </div>

            <div className="mt-8 flex flex-col items-center lg:items-start relative z-30 px-6 lg:px-0">
              <div className="max-w-md text-center lg:text-left text-[11px] md:text-[13px] text-white/40 leading-relaxed font-medium tracking-wide uppercase">
                Architecting high-performance digital infrastructure for the next stage of global evolution.
              </div>
            </div>
          </div>
        </div>

        {/* LEFT COLUMN: EXPERTISE & STATS - ORDERED SECOND ON MOBILE */}
        <div className="lg:col-span-3 lg:order-1 flex flex-col justify-center relative z-20">
          <div className="flex -space-x-3 mb-8 justify-center lg:justify-start">
            {[1, 2, 3].map(i => (
              <img key={i} src={`https://picsum.photos/seed/${i * 15}/100/100`} className="w-12 h-12 rounded-full border-2 border-black object-cover" alt="Expert" />
            ))}
            <div className="w-12 h-12 rounded-full bg-[#00ead3] text-black flex items-center justify-center text-[10px] font-black border-2 border-black">
              +20
            </div>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <p className="text-[10px] font-black text-[#00ead3] mb-2 tracking-[0.4em] uppercase">
              STATUS::ACTIVE
            </p>
            <p className="text-[11px] font-bold text-white/40 max-w-[280px] mx-auto lg:mx-0 leading-relaxed tracking-wider uppercase">
              WE ARE THE ARCHITECTS OF THE NEXT DIGITAL ERA.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8 border-t border-white/5 pt-8 lg:border-none lg:pt-0">
            {STATS.map((stat, idx) => (
              <div key={idx} className="group border-b border-white/5 pb-3">
                <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#00ead3] transition-colors tracking-tighter">{stat.value}</h3>
                <p className="text-[8px] text-white/20 font-black uppercase tracking-[0.3em] leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
