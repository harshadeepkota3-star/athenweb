
import React from 'react';
import { ArrowIcon } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 bg-neon rotate-45"></span>
            <span className="text-sm font-black uppercase text-white/50 tracking-[0.3em]">GET IN TOUCH</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-12">
            LET'S <br /> BUILD <br /> <span className="text-outline italic">FUTURE.</span>
          </h2>

          <div className="space-y-12">
            <div>
              <h4 className="text-neon text-sm font-black uppercase tracking-widest mb-4">Email Us</h4>
              <p className="text-white text-3xl font-bold tracking-tighter hover:text-neon transition-colors cursor-pointer underline underline-offset-8">hello@aurelia.studio</p>
            </div>
            <div>
              <h4 className="text-neon text-sm font-black uppercase tracking-widest mb-4">Socials</h4>
              <div className="flex gap-8 text-white font-black uppercase text-base">
                <a href="#" className="hover:text-neon transition-colors">Instagram</a>
                <a href="#" className="hover:text-neon transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-neon transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111] p-10 md:p-16 border border-white/5 rounded-3xl">
          <form className="space-y-10">
            <div className="space-y-4">
              <label className="text-xs font-black text-white/30 uppercase tracking-[0.3em]">Full Name</label>
              <input
                type="text"
                placeholder="JOHN DOE"
                className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white font-black text-2xl focus:outline-none focus:border-neon transition-colors placeholder:text-white/5"
              />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-black text-white/30 uppercase tracking-[0.3em]">Email Address</label>
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white font-black text-2xl focus:outline-none focus:border-neon transition-colors placeholder:text-white/5"
              />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-black text-white/30 uppercase tracking-[0.3em]">Tell us about your project</label>
              <textarea
                rows={4}
                placeholder="WHATS ON YOUR MIND?"
                className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white font-black text-2xl focus:outline-none focus:border-neon transition-colors placeholder:text-white/5 resize-none"
              ></textarea>
            </div>

            <button className="w-full py-8 bg-neon text-black font-black uppercase text-2xl rounded-full flex items-center justify-center gap-4 hover:bg-white transition-colors group">
              SEND MESSAGE <span className="group-hover:translate-x-4 transition-transform"><ArrowIcon /></span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
