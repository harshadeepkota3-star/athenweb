
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeInSection: React.FC<{
    children: React.ReactNode;
    delay?: number;
    className?: string;
}> = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const OriginSection: React.FC = () => {
    return (
        <div className="bg-[#050505] text-white">
            {/* ───── THE ORIGIN ───── */}
            <section className="relative py-8 md:py-16 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(0,234,211,0.1)_0%,transparent_70%)]" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
                    <FadeInSection>
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00ead3]">OUR ORIGIN</span>
                            <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            BORN FROM <span className="origin-text-outline italic">FRUSTRATION.</span>
                        </h2>
                    </FadeInSection>

                    <div className="space-y-8">
                        <FadeInSection delay={0.1}>
                            <p className="text-white/40 text-lg md:text-2xl leading-[1.6] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Every great company starts with a frustration. Not a mild inconvenience a deep, structural frustration with the way things are being done. The kind that keeps engineers up at night not because they're stuck, but because they can <span className="text-white">see exactly what's wrong</span> and exactly how it should be fixed.
                            </p>
                        </FadeInSection>

                        <FadeInSection delay={0.2}>
                            <p className="text-[#00ead3] text-xl md:text-2xl font-black tracking-tight uppercase">
                                AthenWeb was born from that frustration.
                            </p>
                        </FadeInSection>

                        <FadeInSection delay={0.3}>
                            <div className="h-px w-24 bg-white/10 mx-auto" />
                        </FadeInSection>

                        <FadeInSection delay={0.4}>
                            <p className="text-white/30 text-base md:text-lg leading-[1.8] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                                We watched businesses invest in software that couldn't grow with them. We watched engineering teams spend more time wrestling their own infrastructure than building the products their customers needed. We watched companies hit walls because the systems underneath them were built for the company they <span className="text-white/60">were</span>, not the company they were <span className="text-white">becoming.</span>
                            </p>
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/* ───── THE PROBLEM WE SOLVE ───── */}
            <section className="relative py-8 md:py-16 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
                <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
                    <FadeInSection>
                        <span className="text-sm font-black text-[#00ead3] font-mono tracking-widest opacity-80">/ REF_02</span>
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mt-4">
                            THE PROBLEM WE <span className="origin-text-outline italic">SOLVE.</span>
                        </h2>
                        <p className="mt-6 text-white/30 text-xs font-bold uppercase tracking-[0.3em]">REACTIVE VS. FORWARD LOOKING</p>
                    </FadeInSection>

                    <div className="space-y-10 mt-8">
                        <FadeInSection>
                            <p className="text-white/40 text-base md:text-lg leading-[1.8]" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Most software development is reactive. The system strains. Engineers patch, then patch the patch. The codebase becomes a record of every crisis ever survived. Eventually, the weight of it all slows everything down.
                            </p>
                        </FadeInSection>

                        <FadeInSection delay={0.1}>
                            <div className="py-2">
                                <p className="text-white/70 text-lg md:text-xl font-semibold italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    "This is not a technology problem. It is an architecture problem."
                                </p>
                            </div>
                        </FadeInSection>

                        <FadeInSection delay={0.2}>
                            <p className="text-white/40 text-base md:text-lg leading-[1.8]" style={{ fontFamily: "'Inter', sans-serif" }}>
                                We don't build software for where you are today. We build infrastructure for the company you are in the process of becoming systems with the elasticity to absorb 3x growth without a rewrite, the observability to surface problems before they become crises.
                            </p>
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/* ───── THE NAME ───── */}
            <section className="relative py-8 md:py-16 px-6 md:px-12 lg:px-20 bg-[#050505]">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeInSection>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-5xl md:text-9xl font-black uppercase tracking-tighter about-text-outline italic mb-8">
                                ATHENA.
                            </h3>
                            <p className="max-w-2xl text-white/40 text-base md:text-xl leading-[1.8] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Goddess of wisdom and strategic warfare did not win by brute force. She won by thinking further ahead, by understanding the full shape of a problem before committing to a solution.
                            </p>
                            <p className="mt-8 text-[#00ead3] text-xl md:text-2xl font-black uppercase tracking-widest px-8 py-4 border border-[#00ead3]/20 rounded-full">
                                THE INTELLIGENCE LAYER BENEATH YOUR BUSINESS.
                            </p>
                        </div>
                    </FadeInSection>
                </div>
            </section>



            <style>{`
        .origin-text-outline, .about-text-outline {
          color: #00ead3;
          -webkit-text-stroke: 0;
        }
      `}</style>
        </div>
    );
};

export default OriginSection;
