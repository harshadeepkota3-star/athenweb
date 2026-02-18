
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from '../App';
import { AthenWebLogo } from '../constants';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

/**
 * ANIMATION CONFIGURATION
 * Precise timing values as requested for premium, cinematic feel.
 */
const CONFIG = {
  PHASE_1: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1], // Strong ease-out
  },
  PHASE_2: {
    pause: 0.15,
    duration: 0.9,
    ease: [0.65, 0, 0.35, 1], // Cinematic In-Out
  },
  PHASE_3: {
    stagger: 0.04,
    yOffset: 6,
  },
  PHASE_4: {
    duration: 0.4,
    delay: 0.2,
  }
};

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Contact', value: 'contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  /**
   * VARIANTS
   * Using GPU-accelerated transforms and opacity only.
   */

  // Improved variant to avoid collision with Phase 1
  const brandTransition = {
    initial: { left: '50%', x: '-50%', y: '100vh', opacity: 0 },
    phase1: {
      y: '0%',
      top: '50%',
      translateY: '-50%',
      opacity: 1,
      transition: { duration: CONFIG.PHASE_1.duration, ease: CONFIG.PHASE_1.ease }
    },
    phase2: (isMobile: boolean) => ({
      left: isMobile ? '24px' : '48px', // px-6 and px-12
      x: '0%',
      top: '50%',
      translateY: '-50%',
      transition: {
        delay: CONFIG.PHASE_2.pause,
        duration: CONFIG.PHASE_2.duration,
        ease: CONFIG.PHASE_2.ease
      }
    })
  };

  const brandTextVariants = {
    initial: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
    phase2: {
      clipPath: 'inset(0 0% 0 0)',
      opacity: 1,
      transition: {
        delay: CONFIG.PHASE_2.pause,
        duration: CONFIG.PHASE_2.duration,
        ease: CONFIG.PHASE_2.ease,
      }
    }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: CONFIG.PHASE_3.yOffset },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: CONFIG.PHASE_1.duration + CONFIG.PHASE_2.pause + (CONFIG.PHASE_2.duration * 0.4) + (i * CONFIG.PHASE_3.stagger),
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    })
  };

  const ctaVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: CONFIG.PHASE_1.duration + CONFIG.PHASE_2.pause + CONFIG.PHASE_2.duration + CONFIG.PHASE_4.delay,
        duration: CONFIG.PHASE_4.duration,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    pulse: {
      boxShadow: ['0 0 0px #00ead300', '0 0 15px #00ead344', '0 0 0px #00ead300'],
      transition: {
        duration: 1.2,
        repeat: 1,
        repeatDelay: 2,
        delay: CONFIG.PHASE_1.duration + CONFIG.PHASE_2.pause + CONFIG.PHASE_2.duration + CONFIG.PHASE_4.delay + 0.4,
      }
    }
  };

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      x: '0%',
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[120] h-20 bg-black/80 backdrop-blur-xl border-b border-white/5 overflow-visible">

        {/* PHASE 1 & 2: Logo and Brand Reveal */}
        <motion.div
          className="absolute h-full flex items-center px-6 md:px-12 z-[130]"
          initial="initial"
          animate={["phase1", "phase2"]}
          custom={isMobile}
          variants={brandTransition}
          style={{ willChange: 'transform, left' }}
        >
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 md:gap-4 group relative cursor-pointer"
          >
            <AthenWebLogo className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:rotate-12 flex-shrink-0" />

            <motion.div
              className="flex flex-col items-start leading-none whitespace-nowrap pointer-events-none"
              variants={brandTextVariants}
            >
              <span className="text-xl md:text-3xl font-black tracking-tighter text-white">ATHENWEB</span>
              <span className="text-[7px] md:text-[10px] font-bold text-[#00ead3] tracking-[0.4em]">DRIVING EVOLUTION</span>
            </motion.div>
          </button>
        </motion.div>

        {/* PHASE 3: Nav Options kinetic trail - Staggered Reveal */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] font-black uppercase tracking-widest absolute left-1/2 top-0 h-full -translate-x-1/2 z-10">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.value}
              custom={i}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              onClick={() => handleNavigate(link.value)}
              className={`transition-all hover:text-[#00ead3] relative py-2 ${currentPage === link.value ? 'text-[#00ead3]' : 'text-white/60'
                }`}
              whileHover={{ scale: 1.05 }}
              style={{ willChange: 'transform, opacity' }}
            >
              {link.label}
              {currentPage === link.value && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00ead3]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* PHASE 4: CTA Button + Mobile Toggle */}
        <div className="absolute right-6 md:right-12 top-0 h-full z-[130] flex items-center gap-4">
          <motion.button
            variants={ctaVariants}
            initial="initial"
            animate={["animate", "pulse"]}
            onClick={() => handleNavigate('contact')}
            className="hidden md:flex bg-[#00ead3] text-black px-6 md:px-8 py-2 md:py-3 rounded-full text-[11px] md:text-[13px] font-extrabold hover:bg-white transition-colors items-center gap-2 group border border-transparent shadow-2xl"
            style={{ willChange: 'transform, opacity, box-shadow' }}
          >
            <span>GET STARTED</span>
            <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[140] relative"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 8 : 0,
                width: isMenuOpen ? '100%' : '80%'
              }}
              className="h-0.5 bg-white rounded-full block"
            />
            <motion.span
              animate={{
                opacity: isMenuOpen ? 0 : 1,
                x: isMenuOpen ? 10 : 0,
                width: isMenuOpen ? '0%' : '100%'
              }}
              className="h-0.5 bg-[#00ead3] rounded-full block"
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -8 : 0,
                width: isMenuOpen ? '100%' : '60%'
              }}
              className="h-0.5 bg-white rounded-full block"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Moved outside <nav> for cleaner stacking context */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[115] bg-[#050505] md:hidden flex flex-col pt-32 px-10"
            style={{ backgroundColor: '#050505' }} // Force solid background
          >
            {/* Background Accents (Restricted to overlay only) */}
            <div className="absolute inset-0 -z-10 opacity-30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,234,211,0.15)_0%,transparent_50%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,234,211,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,234,211,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.value}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: i * 0.08 + 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                  }}
                  onClick={() => handleNavigate(link.value)}
                  className="flex items-baseline gap-4 group"
                >
                  <span className="text-[10px] font-black text-[#00ead3] opacity-40">0{i + 1}.</span>
                  <span className={`text-4xl font-black uppercase tracking-tighter transition-all ${currentPage === link.value ? 'text-[#00ead3]' : 'text-white/60 group-hover:text-white'
                    }`}>
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6 }
              }}
              className="mt-16"
            >
              <button
                onClick={() => handleNavigate('contact')}
                className="w-full bg-[#00ead3] text-black py-5 rounded-xl text-lg font-black tracking-widest flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,234,211,0.2)]"
              >
                <span>GET STARTED</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase mb-4">CONNECT_SYSTEMS</p>
                <div className="flex gap-6 text-white/40 text-xs font-bold uppercase tracking-widest">
                  <span>Instagram</span>
                  <span>LinkedIn</span>
                  <span>Twitter</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
