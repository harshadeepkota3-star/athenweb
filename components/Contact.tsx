
import React from 'react';
import { ArrowIcon } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="bg-[#111111] py-10 px-6 md:px-12 min-h-[calc(100vh-5rem)] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full max-w-7xl mx-auto">

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-neon rotate-45"></span>
            <span className="text-xs font-bold uppercase text-white/50 tracking-[0.3em]" style={{ fontFamily: "'Inter', sans-serif" }}>GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-8">
            LET'S <br /> BUILD <br /> <span className="text-outline italic">FUTURE.</span>
          </h2>

          <div className="space-y-8">
            <div>
              <h4 className="text-neon text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Email Us</h4>
              <p className="text-white text-2xl font-bold tracking-tighter hover:text-neon transition-colors cursor-pointer underline underline-offset-8">hello@aurelia.studio</p>
            </div>
            <div>
              <h4 className="text-neon text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Socials</h4>
              <div className="flex gap-6 text-white font-bold uppercase text-sm">
                <a href="#" className="hover:text-neon transition-colors">Instagram</a>
                <a href="#" className="hover:text-neon transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-neon transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1c1c1c] p-6 md:p-10 border border-white/5 rounded-2xl flex flex-col justify-center">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.3em]" style={{ fontFamily: "'Inter', sans-serif" }}>Full Name</label>
              <input
                type="text"
                placeholder="JOHN DOE"
                className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-black text-lg focus:outline-none focus:border-neon transition-colors placeholder:text-white/5"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.3em]" style={{ fontFamily: "'Inter', sans-serif" }}>Email Address</label>
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-black text-lg focus:outline-none focus:border-neon transition-colors placeholder:text-white/5"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.3em]" style={{ fontFamily: "'Inter', sans-serif" }}>Tell us about your project</label>
              <textarea
                rows={3}
                placeholder="WHATS ON YOUR MIND?"
                className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-black text-lg focus:outline-none focus:border-neon transition-colors placeholder:text-white/5 resize-none"
              ></textarea>
            </div>

            <button className="w-full py-5 bg-neon text-black font-black uppercase text-lg rounded-full flex items-center justify-center gap-3 hover:bg-white transition-colors group">
              SEND MESSAGE <span className="group-hover:translate-x-4 transition-transform"><ArrowIcon /></span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
