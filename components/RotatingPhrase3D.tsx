
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHRASES = [
    { text: "ENGINEERING DIGITAL POWER", image: "/power.png" },
    { text: "CRAFTING FUTURE EXPERIENCES", image: "/future.png" },
    { text: "SCALING INTELLIGENT SYSTEMS", image: "/web.png" },
    { text: "DESIGNING MARKET DOMINANCE", image: "/global.png" }
];

const RotatingPhrase3D: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const spinEase = [0.83, 0, 0.17, 1];
    const revealEase = [0.22, 1, 0.36, 1];

    const rotate = useCallback(() => {
        setIsTransitioning(true);
        setRotation(prev => prev - 90);
        setTimeout(() => setIndex(prev => (prev + 1) % PHRASES.length), 450);
        setTimeout(() => setIsTransitioning(false), 1400);
    }, []);

    useEffect(() => {
        const interval = setInterval(rotate, 4500);
        return () => clearInterval(interval);
    }, [rotate]);

    return (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none select-none overflow-visible">

            {/* 🌌 ATMOSPHERIC ECOSYSTEM (Full-Width Breakout) */}
            <div className="absolute inset-0 -z-10 w-screen h-screen left-1/2 -translate-x-1/2 pointer-events-none overflow-hidden">
                {/* Layer 1: Deep Base & Noise */}
                <div className="absolute inset-0 bg-[#050505]" />
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />

                {/* Layer 1.5: Dynamic Glow */}
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] rounded-full"
                    animate={{
                        background: isTransitioning
                            ? 'radial-gradient(circle, rgba(0,234,211,0.12) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(0,234,211,0.06) 0%, transparent 60%)',
                        scale: isTransitioning ? 1.1 : 1,
                        opacity: isTransitioning ? 1 : 0.8
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Layer 2: Tech Grid & Scanlines */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,234,211,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,234,211,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
                    <motion.div
                        className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,234,211,0.1)_50%,transparent_100%)] bg-[size:100%_4px]"
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* Layer 2.5: Edge Blending (Vignette) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]" />
            </div>

            {/* 🌎 3D ORBITAL SYSTEM - Layer 3 */}
            <div style={{ perspective: '3000px' }} className="relative w-full h-full flex items-center justify-center">
                <motion.div
                    className="relative w-[280px] h-[280px] md:w-[600px] md:h-[600px] flex items-center justify-center transform-gpu z-20"
                    animate={{ rotateX: 55, rotateY: rotation }}
                    transition={{
                        rotateY: { type: "spring", stiffness: 35, damping: 15, mass: 1.2, restDelta: 0.001 },
                        rotateX: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
                    }}
                    style={{ transformStyle: 'preserve-3d', willChange: 'transform', backfaceVisibility: 'hidden' }}
                >
                    <div className="absolute inset-0 border-[4px] border-[#00ead3]/20 rounded-full pointer-events-none" style={{ backfaceVisibility: 'hidden' }} />
                    <div className="absolute inset-[15%] border-[1px] border-[#00ead3]/5 rounded-full border-dashed pointer-events-none" style={{ backfaceVisibility: 'hidden' }} />

                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-[#00ead3] rounded-full"
                            animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1, 0.5] }}
                            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                            style={{
                                transform: `rotateY(${Math.random() * 360}deg) translateZ(${150 + Math.random() * 200}px)`,
                                willChange: 'transform'
                            }}
                        />
                    ))}

                    {PHRASES.map((phrase, i) => {
                        const angle = i * 90;
                        const isActive = index === i;
                        return (
                            <div key={i} className="absolute top-1/2 left-1/2" style={{ transform: `rotateY(${angle}deg) translateZ(clamp(150px, 30vw, 300px)) rotateX(-55deg)`, transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}>
                                <motion.div
                                    animate={{
                                        rotateY: -rotation - angle,
                                        scale: isActive ? 1.3 : 0.4,
                                        z: isActive ? 80 : 0,
                                        opacity: isActive ? 1 : 0.1
                                    }}
                                    transition={{
                                        type: "spring", stiffness: 40, damping: 20, mass: 1
                                    }}
                                    className="w-24 h-24 md:w-64 md:h-64 relative"
                                    style={{ transformStyle: 'preserve-3d', willChange: 'transform', backfaceVisibility: 'hidden' }}
                                >
                                    <img
                                        src={phrase.image}
                                        alt=""
                                        style={{
                                            filter: isActive ? 'none' : 'grayscale(1) brightness(0.5)',
                                            WebkitBackfaceVisibility: 'hidden'
                                        }}
                                        className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(0,234,211,0.5)]"
                                    />
                                </motion.div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* 🔥 LAYER 4: FRONT-END TYPOGRAPHY & UI ACCENTS */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center items-center lg:items-start pt-10 md:pt-0">
                    <AnimatePresence mode="wait">
                        <motion.div key={index} className="relative flex flex-col items-center lg:items-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-12">
                                <motion.div className="hidden md:flex flex-col items-center gap-2" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.8 }}>
                                    <span className="text-[10px] font-black text-[#00ead3]">SEQ_VOL_{index + 1}</span>
                                    <div className="w-px h-16 md:h-24 bg-gradient-to-b from-[#00ead3] to-transparent" />
                                </motion.div>
                                <motion.div className="relative overflow-visible" initial={{ x: -100, clipPath: 'inset(0 100% 0 0)' }} animate={{ x: 0, clipPath: 'inset(0 0% 0 0)' }} transition={{ delay: 1, duration: 1.2, ease: revealEase }}>
                                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8vw] font-black text-white leading-[0.9] md:leading-[0.8] tracking-[-0.05em] uppercase text-center lg:text-left">
                                        {PHRASES[index].text.split(' ').slice(0, 2).map((word, i) => (
                                            <span key={i} className="block relative">{word}</span>
                                        ))}
                                        <span className="block text-outline text-[#00ead3] opacity-40 lg:text-[7vw]">
                                            {PHRASES[index].text.split(' ').slice(2).join(' ')}
                                        </span>
                                    </h1>
                                </motion.div>
                            </div>
                            {/* Interactive Status Indicator */}
                            <motion.div
                                className="mt-6 flex items-center gap-4 text-[9px] font-black text-white/30 tracking-[0.6em] uppercase"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.6 }}
                            >
                                <div className="flex gap-2">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className={`w-1 h-1 ${index === i ? 'bg-[#00ead3]' : 'bg-white/10'}`} />
                                    ))}
                                </div>
                                <span className="hidden sm:inline">NODE::STABLE</span>
                                <span className="text-[#00ead3] animate-pulse">OPTIMIZING_SYSTEMS...</span>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default RotatingPhrase3D;
