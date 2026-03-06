
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
          <p className="text-white/30 text-lg max-w-sm mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            Pioneering the next stage of digital infrastructure with intelligent design and high-performance code.
          </p>
          <div className="flex gap-4">
            <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
              <linearGradient id="ig-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#405DE6" />
                <stop offset="25%" stopColor="#833AB4" />
                <stop offset="50%" stopColor="#C13584" />
                <stop offset="75%" stopColor="#E1306C" />
                <stop offset="100%" stopColor="#FD1D1D" />
              </linearGradient>
            </svg>
            {[
              { id: 'IG', url: 'https://www.instagram.com/athenwebservices?igsh=MXZiMmNqa2M1eGlvZQ==', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="url(#ig-gradient)" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
              { id: 'FB', url: 'https://www.facebook.com/profile.php?id=61576352673682', icon: <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
              { id: 'WA', url: 'https://wa.me/917671855226', icon: <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.004 12.048c0 2.12.554 4.189 1.603 6.01L0 24l6.117-1.605a11.812 11.812 0 005.932 1.577c6.635 0 12.044-5.412 12.044-12.048a11.822 11.822 0 00-3.483-8.411z" /></svg> }
            ].map(social => (
              <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.id} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[#00ead3] font-black text-base uppercase tracking-widest mb-8">LABORATORY</h4>
          <ul className="space-y-4 text-white/40 text-base font-bold uppercase">
            <li><button onClick={() => onNavigate('home')} className="hover:text-[#00ead3] transition-colors">Origin</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-[#00ead3] transition-colors">About</button></li>
            <li><button onClick={() => onNavigate('portfolio')} className="hover:text-[#00ead3] transition-colors">Archive</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-[#00ead3] transition-colors">Terminal</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#00ead3] font-black text-base uppercase tracking-widest mb-8">NODE INFO</h4>
          <ul className="space-y-4 text-white/40 text-base font-bold">
            <li className="hover:text-white cursor-pointer transition-colors">athenwebservices@gmail.com</li>
            <li className="hover:text-white cursor-pointer transition-colors">+91 76718 55226</li>
            <li className="text-xs leading-relaxed max-w-[200px]">C9RV+7R8, 500 081, Andra Basti, Sri Rama Colony, Madhapur, Hyderabad, Telangana 500033</li>
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
