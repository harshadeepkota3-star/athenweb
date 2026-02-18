
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AthenWebLogo } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
    {
        number: '01',
        title: 'Discovery',
        description: 'Deep-dive into your ecosystem to identify growth vectors and technical constraints.'
    },
    {
        number: '02',
        title: 'Planning',
        description: 'Architecting a robust blueprint that aligns technical execution with business objectives.'
    },
    {
        number: '03',
        title: 'Development',
        description: 'Precision engineering using cutting-edge stacks to build scalable, resilient solutions.'
    },
    {
        number: '04',
        title: 'Launch',
        description: 'Strategic deployment with zero-downtime protocols and performance optimization.'
    },
    {
        number: '05',
        title: 'Support',
        description: 'Continuous evolution and proactive maintenance to ensure long-term system integrity.'
    }
];

const Process: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const logoCardRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        const logoCard = logoCardRef.current;
        const heading = headingRef.current;

        if (!section || !container || cards.length === 0 || !logoCard) return;

        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 1024;

            // 1. Setup initial states
            gsap.set(logoCard, {
                opacity: 0,
                scale: 0.8,
                pointerEvents: 'none',
                visibility: 'hidden'
            });

            // 2. Main Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=250%", // Slightly shorter scroll
                    pin: true,
                    scrub: 1, // Smoother scrubbing
                    anticipatePin: 1,
                }
            });

            // Phase 1: Heading focus
            tl.to(heading, {
                scale: 0.9,
                opacity: 0.6,
                duration: 0.5,
                ease: "power2.inOut"
            }, 0);

            // Phase 2: Card Merging
            cards.forEach((card, i) => {
                const rect = card.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();

                // Calculate target position (center of the cards container)
                const targetX = (containerRect.width / 2) - (rect.left - containerRect.left + rect.width / 2);
                const targetY = (containerRect.height / 2) - (rect.top - containerRect.top + rect.height / 2);

                // Move cards to target
                tl.to(card, {
                    x: `+=${targetX}`,
                    y: `+=${targetY}`,
                    opacity: 0,
                    scale: 0.5,
                    filter: "blur(20px)",
                    rotate: (i - 2) * 10,
                    duration: 1.5,
                    ease: "power2.in"
                }, 0.5);
            });

            // Phase 3: Logo Card Reveal
            tl.to(logoCard, {
                opacity: 1,
                scale: 1,
                visibility: 'visible',
                duration: 0.8,
                ease: "back.out(1.4)"
            }, 1.8);

            // Animate logo elements inside the card
            const logo = logoCard.querySelector('.athen-logo');
            const logoText = logoCard.querySelector('.logo-text');
            const logoLine = logoCard.querySelector('.logo-line');

            if (logo) {
                tl.from(logo, {
                    scale: 0.5,
                    rotate: -180,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, 1.9);
            }

            if (logoText) {
                tl.from(logoText, {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }, 2.2);
            }

            if (logoLine) {
                tl.from(logoLine, {
                    width: 0,
                    duration: 1,
                    ease: "expo.out"
                }, 2.4);
            }

            // Phase 4: Final hold
            tl.to({}, { duration: 0.5 }); // Add empty space at end

        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[700px] h-[90vh] w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center m-0"
            id="our-process"
        >
            {/* Background Polish rock */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,212,0.05)_0%,transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

                {/* Floating particles/glows for premium feel */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f5d4]/5 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00f5d4]/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 w-full max-w-[1400px] px-6 lg:px-12 flex flex-col items-center justify-center">
                {/* Section Header */}
                <div ref={headingRef} className="text-center mb-8 lg:mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-1.5 h-1.5 bg-[#00f5d4] rotate-45"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00f5d4]">ENGINEERING EXCELLENCE</span>
                        <span className="w-1.5 h-1.5 bg-[#00f5d4] rotate-45"></span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                        OUR <span className="text-outline-teal">PROCESS.</span>
                    </h2>
                    <p className="text-white/30 text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase">Systematic Evolution from Concept to Deployment</p>
                </div>

                {/* Cards & Logo Section */}
                <div className="relative w-full">
                    {/* Cards Container */}
                    <div
                        ref={containerRef}
                        className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 will-change-transform"
                    >
                        {PROCESS_STEPS.map((step, idx) => (
                            <div
                                key={idx}
                                ref={el => cardsRef.current[idx] = el}
                                className="
                                    glass-card group relative p-6 lg:p-8 h-[280px] lg:h-[340px] rounded-2xl border border-white/5 
                                    bg-[#0a0a0a]/80 backdrop-blur-2xl flex flex-col overflow-hidden
                                    shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-colors duration-500
                                    hover:border-[#00f5d4]/20
                                "
                            >
                                {/* Inner Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                                        <span className="text-[#00f5d4] font-mono text-lg font-black">{step.number}</span>
                                        <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00f5d4]/40 transition-colors">
                                            <div className="w-1 h-1 bg-white/20 group-hover:bg-[#00f5d4] rounded-full"></div>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight leading-tight group-hover:text-[#00f5d4] transition-colors duration-300">
                                        {step.title}
                                    </h3>

                                    <p className="text-white/40 text-xs lg:text-sm leading-relaxed font-medium group-hover:text-white/60 transition-colors duration-300 line-clamp-4">
                                        {step.description}
                                    </p>

                                    <div className="mt-auto pt-6 flex items-center justify-between">
                                        <div className="h-px flex-grow bg-white/5 group-hover:bg-[#00f5d4]/20 transition-colors"></div>
                                        <span className="ml-4 text-[8px] font-black text-white/5 tracking-[0.3em] uppercase">P_SYS_{idx + 1}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Unified Logo Card - Now shared in the same container space */}
                    <div
                        ref={logoCardRef}
                        className="
                            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                            flex flex-col items-center justify-center
                            p-8 lg:p-12 h-full w-full max-w-[400px] lg:max-w-[600px]
                            rounded-2xl border border-[#00f5d4]/40 bg-[#0a0a0a] backdrop-blur-3xl
                            shadow-[0_0_50px_rgba(0,245,212,0.1)]
                            pointer-events-none z-50
                        "
                    >
                        <div className="athen-logo relative mb-8">
                            <div className="absolute inset-0 bg-[#00f5d4]/20 blur-3xl rounded-full"></div>
                            <AthenWebLogo className="w-24 h-24 relative z-10" />
                        </div>

                        <div className="logo-text flex flex-col items-center text-center">
                            <h3 className="text-white text-4xl lg:text-6xl font-black tracking-[0.2em] uppercase leading-none">
                                ATHEN<span className="text-[#00f5d4]">WEB</span>
                            </h3>
                            <div className="logo-line mt-8 w-32 h-1.5 bg-[#00f5d4] rounded-full opacity-60"></div>
                            <p className="mt-6 text-[10px] font-black text-[#00f5d4] tracking-[0.8em] uppercase opacity-50">Ready to Evolve</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .text-outline-teal {
                    color: transparent;
                    -webkit-text-stroke: 1.5px rgba(0, 245, 212, 0.4);
                }
                @media (max-width: 768px) {
                    .text-outline-teal {
                        -webkit-text-stroke: 1px rgba(0, 245, 212, 0.4);
                    }
                }
            `}</style>
        </section>
    );
};

export default Process;
