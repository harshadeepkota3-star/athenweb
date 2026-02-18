
import React from 'react';
import { Page } from '../App';
import { AthenWebLogo } from '../constants';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050505] pt-16 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <AthenWebLogo className="w-10 h-10" />
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-black tracking-tighter text-white">ATHENWEB</span>
              <span className="text-[10px] font-bold text-[#00ead3] tracking-[0.4em]">DRIVING EVOLUTION</span>
            </div>
          </div>
          <p className="text-white/30 text-lg max-w-sm mb-8">
            Pioneering the next stage of digital infrastructure with intelligent design and high-performance code.
          </p>
          <div className="flex gap-4">
            {['LN', 'GH', 'TW', 'DR'].map(social => (
              <a key={social} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-sm font-bold text-white/50 hover:bg-[#00ead3] hover:text-black hover:border-[#00ead3] transition-all">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[#00ead3] font-black text-base uppercase tracking-widest mb-8">LABORATORY</h4>
          <ul className="space-y-4 text-white/40 text-base font-bold uppercase">
            <li><button onClick={() => onNavigate('home')} className="hover:text-[#00ead3] transition-colors">Core Systems</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-[#00ead3] transition-colors">Manifesto</button></li>
            <li><button onClick={() => onNavigate('services')} className="hover:text-[#00ead3] transition-colors">Evo-Tools</button></li>
            <li><button onClick={() => onNavigate('portfolio')} className="hover:text-[#00ead3] transition-colors">Archive</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#00ead3] font-black text-base uppercase tracking-widest mb-8">NODE INFO</h4>
          <ul className="space-y-4 text-white/40 text-base font-bold">
            <li className="hover:text-white cursor-pointer transition-colors">uplink@athenweb.io</li>
            <li>+1 (555) ATHEN-EVO</li>
            <li>Sector 7, Digital District, Global</li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-xs font-bold text-white/20 uppercase tracking-[0.4em]">
          &copy; 2024 ATHENWEB SYSTEMS. ALL NODES SECURED.
        </span>
        <div className="flex gap-8 text-xs font-bold text-white/20 uppercase tracking-[0.4em]">
          <a href="#" className="hover:text-[#00ead3]">PROTOCOLS</a>
          <a href="#" className="hover:text-[#00ead3]">NETWORK STATUS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
