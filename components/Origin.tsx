
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─────────────────────────────────────────────
   Animated Section Wrapper
   ───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   Counter Animation
   ───────────────────────────────────────────── */
const AnimatedCounter: React.FC<{ end: number; suffix: string; label: string }> = ({
    end,
    suffix,
    label,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 2000;
        const stepTime = Math.max(Math.floor(duration / end), 20);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
        }, stepTime);
        return () => clearInterval(timer);
    }, [isInView, end]);

    return (
        <div ref={ref} className="text-center">
            <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                {count}
                <span className="text-[#00ead3]">{suffix}</span>
            </span>
            <p
                className="text-[9px] md:text-[10px] font-bold text-white/25 tracking-[0.4em] uppercase mt-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                {label}
            </p>
        </div>
    );
};

/* ─────────────────────────────────────────────
   ORIGIN PAGE
   ───────────────────────────────────────────── */
const Origin: React.FC = () => {
    return (
        <section className="relative bg-[#050505] text-white overflow-hidden">

            {/* ═══════════════════════════════════════════
          GLOBAL BACKGROUND EFFECTS
          ═══════════════════════════════════════════ */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
            </div>


            {/* ═══════════════════════════════════════════
          SECTION 1 — THE ORIGIN HERO
          ═══════════════════════════════════════════ */}
            <div className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,234,211,0.06)_0%,transparent_60%)]"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00ead3]/[0.03] blur-[150px] rounded-full"></div>
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full">
                    <FadeInSection>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00ead3]">
                                THE ORIGIN
                            </span>
                            <span className="h-px w-16 bg-[#00ead3]/30"></span>
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            EVERY GREAT
                            <br />
                            COMPANY STARTS
                            <br />
                            WITH A{' '}
                            <span className="origin-text-outline italic">FRUSTRATION.</span>
                        </h1>
                    </FadeInSection>

                    <FadeInSection delay={0.2}>
                        <div className="max-w-2xl mt-12">
                            <p
                                className="text-white/45 text-base md:text-lg leading-[1.8] font-medium"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Not a mild inconvenience — a deep, structural frustration with
                                the way things are being done. The kind that keeps engineers up
                                at night not because they're stuck, but because they can{' '}
                                <em className="text-white/70 not-italic font-semibold">see exactly what's wrong</em> and
                                exactly how it should be fixed.
                            </p>
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={0.3}>
                        <div className="mt-8">
                            <span className="text-[#00ead3] text-xl md:text-2xl font-black tracking-tight">
                                AthenWeb was born from that frustration.
                            </span>
                        </div>
                    </FadeInSection>
                </div>
            </div>


            {/* ═══════════════════════════════════════════
          SECTION 2 — THE FULL ORIGIN STORY
          ═══════════════════════════════════════════ */}
            <div className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,234,211,0.04)_0%,transparent_60%)]"></div>
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Left — Section Label */}
                        <div className="lg:col-span-4">
                            <FadeInSection>
                                <div className="lg:sticky lg:top-32">
                                    <span className="text-sm font-black text-[#00ead3] font-mono tracking-widest opacity-80">
                                        / SEC_01
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mt-6 mb-8">
                                        WHY WE
                                        <br />
                                        <span className="origin-text-outline italic">EXIST.</span>
                                    </h2>
                                    <div className="w-16 h-1 bg-[#00ead3]/40 rounded-full"></div>
                                </div>
                            </FadeInSection>
                        </div>

                        {/* Right — Story Paragraphs */}
                        <div className="lg:col-span-8 space-y-10">
                            <FadeInSection>
                                <p
                                    className="text-white/40 text-base md:text-lg leading-[1.85] font-medium"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    We watched businesses invest in software that couldn't grow
                                    with them. We watched engineering teams spend more time
                                    wrestling their own infrastructure than building the products
                                    their customers needed. We watched companies hit walls — not
                                    because they lacked ambition, but because the systems
                                    underneath them were built for the company they{' '}
                                    <em className="text-white/70 not-italic font-semibold">were</em>, not the company they were{' '}
                                    <em className="text-white/70 not-italic font-semibold">becoming</em>.
                                </p>
                            </FadeInSection>

                            <FadeInSection delay={0.1}>
                                <p
                                    className="text-[#00ead3]/80 text-lg md:text-xl leading-[1.7] font-bold"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    We decided to build differently.
                                </p>
                            </FadeInSection>

                            <FadeInSection delay={0.15}>
                                <div className="h-px w-full bg-white/5"></div>
                            </FadeInSection>

                            <FadeInSection delay={0.2}>
                                <p
                                    className="text-white/40 text-base md:text-lg leading-[1.85] font-medium"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    The companies that define industries don't just write code.
                                    They build{' '}
                                    <strong className="text-white/70 font-bold">engineering ecosystems</strong> — living,
                                    breathing systems that scale silently in the background while
                                    the business charges forward. They think in distributed
                                    networks, not monolithic blocks. They design for the failure
                                    that hasn't happened yet. They don't react to demand; they{' '}
                                    <em className="text-white/70 not-italic font-semibold">anticipate</em> it.
                                </p>
                            </FadeInSection>

                            <FadeInSection delay={0.25}>
                                <p
                                    className="text-white/40 text-base md:text-lg leading-[1.85] font-medium"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    Look at the businesses that have reshaped everyday life —
                                    hyperlocal delivery networks processing billions of events
                                    daily, platforms serving hundreds of millions of users without
                                    a second of visible strain, enterprise systems that don't just
                                    record business activity but{' '}
                                    <em className="text-white/70 not-italic font-semibold">orchestrate</em> it. The technology
                                    underneath them is not magic. It is architecture. It is
                                    discipline. It is the decision — made early and made
                                    deliberately — to build systems that evolve instead of systems
                                    that expire.
                                </p>
                            </FadeInSection>

                            <FadeInSection delay={0.3}>
                                <div className="pl-6 border-l-2 border-[#00ead3]/40 py-2">
                                    <p
                                        className="text-white/60 text-lg md:text-xl leading-[1.7] font-semibold italic"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        That is the standard AthenWeb holds itself to.
                                        <br />
                                        That is the standard we bring to every client we work with.
                                    </p>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </div>


            {/* ═══════════════════════════════════════════
          SECTION 3 — THE PROBLEM WE SOLVE
          ═══════════════════════════════════════════ */}
            <div className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[#050505]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,234,211,0.05)_0%,transparent_60%)]"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00ead3]/[0.03] blur-[120px] rounded-full"></div>
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Left — Section Label */}
                        <div className="lg:col-span-4">
                            <FadeInSection>
                                <div className="lg:sticky lg:top-32">
                                    <span className="text-sm font-black text-[#00ead3] font-mono tracking-widest opacity-80">
                                        / SEC_02
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mt-6 mb-8">
                                        THE PROBLEM
                                        <br />
                                        WE{' '}
                                        <span className="origin-text-outline italic">SOLVE.</span>
                                    </h2>
                                    <div className="w-16 h-1 bg-[#00ead3]/40 rounded-full"></div>
                                </div>
                            </FadeInSection>
                        </div>

                        {/* Right — Content */}
                        <div className="lg:col-span-8 space-y-10">
                            <FadeInSection>
                                <p
                                    className="text-white/40 text-base md:text-lg leading-[1.85] font-medium"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    Most software development is reactive. A business grows. The
                                    system strains. Engineers patch, then patch the patch. The
                                    codebase becomes a record of every crisis ever survived.
                                    Eventually, the weight of it all slows everything down — new
                                    features take longer, deployments become risky, and the
                                    engineering team spends more time maintaining the past than
                                    building the future.
                                </p>
                            </FadeInSection>

                            <FadeInSection delay={0.1}>
                                <p
                                    className="text-[#00ead3]/80 text-lg md:text-xl leading-[1.7] font-bold"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    This is not a technology problem. It is an architecture problem.
                                </p>
                            </FadeInSection>

                            <FadeInSection delay={0.15}>
                                <div className="h-px w-full bg-white/5"></div>
                            </FadeInSection>

                            <FadeInSection delay={0.2}>
                                <p
                                    className="text-white/40 text-base md:text-lg leading-[1.85] font-medium"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    When a city-scale delivery network sees its delivery times
                                    slip past ten minutes, it doesn't hire more drivers. It
                                    restructures. It splits zones, opens new fulfillment centers,
                                    redistributes load. The system adapts its own geometry to meet
                                    the demand. That is{' '}
                                    <strong className="text-white/70 font-bold">forward-looking engineering</strong> — and
                                    it is exactly what most growing businesses never get from their
                                    software partners.
                                </p>
                            </FadeInSection>

                            <FadeInSection delay={0.25}>
                                <p
                                    className="text-[#00ead3]/80 text-lg md:text-xl leading-[1.7] font-bold"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    AthenWeb exists to change that.
                                </p>
                            </FadeInSection>

                            <FadeInSection delay={0.3}>
                                <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 md:p-10">
                                    <p
                                        className="text-white/50 text-base md:text-lg leading-[1.85] font-medium"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        We don't build software for where you are today. We build
                                        infrastructure for the company you are in the process of
                                        becoming — systems with the elasticity to absorb 3x growth
                                        without a rewrite, the observability to surface problems
                                        before they become crises, and the architectural clarity
                                        that lets your engineering team move fast without breaking
                                        things.
                                    </p>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </div>


            {/* ═══════════════════════════════════════════
          SECTION 4 — IMPACT METRICS
          ═══════════════════════════════════════════ */}
            <div className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,234,211,0.03)_0%,transparent_50%)]"></div>
                </div>

                <div className="relative z-10 max-w-[1200px] mx-auto">
                    <FadeInSection>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            <AnimatedCounter end={450} suffix="+" label="Global Clients" />
                            <AnimatedCounter end={800} suffix="+" label="Systems Evolved" />
                            <AnimatedCounter end={99} suffix=".9%" label="Uptime Record" />
                            <AnimatedCounter end={20} suffix="+" label="Expert Engineers" />
                        </div>
                    </FadeInSection>
                </div>
            </div>


            {/* ═══════════════════════════════════════════
          SECTION 5 — THE NAME
          ═══════════════════════════════════════════ */}
            <div className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[#050505]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,234,211,0.05)_0%,transparent_60%)]"></div>
                    <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#00ead3]/[0.02] blur-[100px] rounded-full"></div>
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                        {/* Left — The Name */}
                        <div className="lg:col-span-5">
                            <FadeInSection>
                                <span className="text-sm font-black text-[#00ead3] font-mono tracking-widest opacity-80">
                                    / SEC_03
                                </span>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mt-6 mb-4">
                                    THE{' '}
                                    <span className="origin-text-outline italic">NAME.</span>
                                </h2>
                                <div className="w-16 h-1 bg-[#00ead3]/40 rounded-full mt-6"></div>
                            </FadeInSection>

                            <FadeInSection delay={0.15}>
                                <div className="mt-12">
                                    <p
                                        className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-[1.1]"
                                    >
                                        ATHEN<span className="text-[#00ead3]">WEB.</span>
                                    </p>
                                    <p
                                        className="text-[10px] font-bold text-[#00ead3]/60 tracking-[0.5em] uppercase mt-2"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        THE INTELLIGENCE LAYER
                                    </p>
                                </div>
                            </FadeInSection>
                        </div>

                        {/* Right — Meaning */}
                        <div className="lg:col-span-7 space-y-8">
                            <FadeInSection delay={0.1}>
                                <p
                                    className="text-white/40 text-base md:text-lg leading-[1.85] font-medium"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    Athena — goddess of wisdom and strategic warfare — did not win
                                    by brute force. She won by thinking further ahead than her
                                    opponents, by understanding the full shape of a problem before
                                    committing to a solution, by combining technical precision
                                    with strategic clarity.
                                </p>
                            </FadeInSection>

                            <FadeInSection delay={0.2}>
                                <p
                                    className="text-[#00ead3]/80 text-lg md:text-xl leading-[1.7] font-bold"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    That is how we build.
                                </p>
                            </FadeInSection>

                            <FadeInSection delay={0.25}>
                                <div className="pl-6 border-l-2 border-[#00ead3]/40 py-2">
                                    <p
                                        className="text-white/55 text-base md:text-lg leading-[1.8] font-medium"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        The intelligence layer beneath your business.
                                        <br />
                                        The architecture that lets you evolve.
                                    </p>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </div>


            {/* ═══════════════════════════════════════════
          SECTION 6 — THE PROMISE (CLOSING)
          ═══════════════════════════════════════════ */}
            <div className="relative py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(0,234,211,0.06)_0%,transparent_50%)]"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00ead3]/[0.03] blur-[150px] rounded-full"></div>
                </div>

                <div className="relative z-10 max-w-[900px] mx-auto text-center">
                    <FadeInSection>
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00ead3]">
                                OUR PROMISE
                            </span>
                            <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={0.1}>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
                            WE DON'T JUST BUILD{' '}
                            <span className="origin-text-outline italic">SOFTWARE.</span>
                        </h2>
                    </FadeInSection>

                    <FadeInSection delay={0.15}>
                        <p
                            className="text-white/40 text-base md:text-lg leading-[1.85] font-medium mb-8 max-w-2xl mx-auto"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            The businesses that will define the next decade are being built
                            right now. They will be built on systems that can absorb ten
                            times the load without flinching. On data pipelines that surface
                            insight in seconds, not hours. On platforms that evolve with the
                            business instead of constraining it. On engineering
                            infrastructure that is a competitive advantage — not a cost
                            center.
                        </p>
                    </FadeInSection>

                    <FadeInSection delay={0.2}>
                        <p
                            className="text-white/40 text-base md:text-lg leading-[1.85] font-medium mb-12 max-w-2xl mx-auto"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Not for the Fortune 500 of twenty years ago. For the companies
                            being built today, by founders and engineers who understand that
                            the real leverage is in the infrastructure — that the right
                            architecture, designed with the right intention, is one of the
                            most powerful strategic assets a growing business can possess.
                        </p>
                    </FadeInSection>

                    <FadeInSection delay={0.25}>
                        <p className="text-2xl md:text-3xl font-black text-[#00ead3] tracking-tight leading-tight">
                            We build the systems that scale your ambition.
                        </p>
                    </FadeInSection>

                    <FadeInSection delay={0.3}>
                        <div className="mt-16 flex items-center justify-center gap-4">
                            <div className="h-px w-12 bg-white/10"></div>
                            <span
                                className="text-[10px] font-bold text-white/20 tracking-[0.5em] uppercase"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                AthenWeb — Driving Evolution
                            </span>
                            <div className="h-px w-12 bg-white/10"></div>
                        </div>
                    </FadeInSection>
                </div>
            </div>

            {/* Inline Styles */}
            <style>{`
        .origin-text-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(0, 234, 211, 0.4);
        }
        @media (max-width: 768px) {
          .origin-text-outline {
            -webkit-text-stroke: 1px rgba(0, 234, 211, 0.4);
          }
        }
      `}</style>
        </section>
    );
};

export default Origin;
