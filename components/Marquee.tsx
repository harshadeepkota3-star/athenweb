
import React from 'react';
import { SKILLS } from '../constants';

const Marquee: React.FC = () => {
  return (
    <div className="relative z-30 py-24 -my-16 pointer-events-none">
      <div className="bg-neon py-8 marquee-container -rotate-3 scale-110">
        <div className="marquee-content">
          <div className="inline-flex items-center gap-12 px-6">
            {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, idx) => (
              <React.Fragment key={idx}>
                <span className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic">
                  {skill}
                </span>
                <span className="text-4xl md:text-6xl text-black">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
