
import React from 'react';
import { SERVICES, ArrowIcon } from '../constants';

interface ServicesProps {
  showAll?: boolean;
}

const Services: React.FC<ServicesProps> = ({ showAll }) => {
  const displayServices = showAll ? [...SERVICES, ...SERVICES] : SERVICES;

  return (
    <section className="services-grid-bg bg-black py-24 px-6 md:px-12">
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 bg-neon rotate-45"></span>
            <span className="text-sm font-black uppercase text-white/50 tracking-[0.3em]">WHAT WE DO</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white leading-none max-w-2xl uppercase tracking-tighter">
            WE ENGINEER <span className="text-outline">DIFFERENCE.</span>
          </h2>
        </div>
        {!showAll && (
          <button className="border border-white/20 px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-neon hover:text-black hover:border-neon transition-all">
            EXPLORE SOLUTIONS
          </button>
        )}
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayServices.map((service, idx) => (
          <div
            key={idx}
            className={`group relative p-10 h-[550px] flex flex-col justify-between overflow-hidden transition-all duration-500 ${service.highlighted ? 'bg-brand-blue' : 'bg-[#121212] hover:bg-[#1a1a1a]'
              }`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
              <img src={service.image} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10">
              <span className="text-xs font-black text-neon mb-4 block tracking-[0.2em]">SERVICE 0{idx + 1}</span>
              <h3 className="text-4xl font-black text-white leading-tight uppercase tracking-tighter mb-4">
                {service.title}
              </h3>
              <p className={`text-base ${service.highlighted ? 'text-white/80' : 'text-white/40'} leading-relaxed max-w-xs mb-8`}>
                {service.description}
              </p>
            </div>

            <div className="relative z-10 flex items-end justify-between">
              <div className="w-32 h-32 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all">
                <img src={service.image} className="w-full h-full object-cover" alt="" />
              </div>
              <div className={`p-5 rounded-full border ${service.highlighted ? 'bg-neon text-black border-neon' : 'text-neon border-neon'} group-hover:rotate-45 transition-all`}>
                <ArrowIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
