
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { PORTFOLIO } from '../constants';

interface PortfolioProps {
  compact?: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ compact }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const displayItems = compact ? PORTFOLIO.slice(0, 4) : PORTFOLIO;
  const total = displayItems.length;

  const navigate = useCallback((direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);

    setActiveIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % total;
      } else {
        return (prev - 1 + total) % total;
      }
    });

    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        navigate('next');
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        navigate('prev');
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (container) {
        container.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [navigate]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        navigate('next');
      } else {
        navigate('prev');
      }
    }
  };

  /** Calculate the card's transform style based on its position relative to the active index.
   * The center card moves up and forward, creating the "center focus" behavior. */
  const getCardStyle = (index: number): React.CSSProperties => {
    // Calculate the relative position from the active card
    let offset = index - activeIndex;

    // Wrap around for circular navigation
    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;

    const isActive = offset === 0;
    const absOffset = Math.abs(offset);
    const isMobileLocal = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

    // Base values
    const baseScale = isActive ? 1 : Math.max(0.55, 1 - absOffset * 0.15);
    const baseOpacity = isActive ? 1 : Math.max(0.15, 1 - absOffset * 0.3);
    const baseBlur = isActive ? 0 : Math.min(absOffset * 3, 8);

    // 3D positioning: diagonal stack with perspective
    // Cards spread out diagonally with depth
    const spreadX = isMobileLocal ? 40 : 160;
    const translateX = offset * spreadX; // Horizontal spread
    const translateY = isActive ? -30 : absOffset * 25; // Active card lifts up, others lower
    const translateZ = isActive ? 80 : -(absOffset * 120); // Active card comes forward
    const rotateY = offset * -8; // Subtle Y rotation for 3D feel
    const rotateZ = offset * 2; // Subtle tilt

    const transform = `
      translateX(${translateX}px)
      translateY(${translateY}px)
      translateZ(${translateZ}px)
      rotateY(${rotateY}deg)
      rotateZ(${rotateZ}deg)
      scale(${baseScale})
    `;

    return {
      transform,
      opacity: baseOpacity,
      filter: `blur(${baseBlur}px)`,
      zIndex: total - absOffset,
      '--card-transform': transform,
    } as React.CSSProperties;
  };

  // displayItems already computed above

  return (
    <section
      className={`relative py-20 px-6 md:px-12 overflow-hidden ${compact ? 'bg-[#050505]' : 'bg-[#050505]'
        }`}
      id="portfolio-section"
    >
      {/* Background glow decorations */}
      <div className="portfolio-bg-glow" style={{ top: '10%', left: '-10%' }} />
      <div className="portfolio-bg-glow" style={{ bottom: '10%', right: '-10%' }} />

      {/* Section Header */}
      <div className="relative z-10 mb-16 md:mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-3 h-3 bg-[#00ead3] rotate-45" />
          <span className="text-sm font-black uppercase text-white/30 tracking-[0.3em]">
            PORTFOLIO
          </span>
        </div>
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-none uppercase tracking-tighter">
          OUR WORK <span className="text-outline">SPEAKS FOR ITSELF.</span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative z-10"
        tabIndex={0}
        role="region"
        aria-label="Portfolio carousel"
        aria-roledescription="carousel"
      >
        {/* Large counter in background */}
        <div className="carousel-counter" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, '0')}
        </div>

        {/* Carousel with side navigation */}
        <div className="carousel-wrapper">
          {/* Previous Button — Left Side */}
          <button
            className="carousel-nav-btn carousel-nav-left"
            onClick={() => navigate('prev')}
            aria-label="Previous project"
            disabled={isAnimating}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* 3D Card Stack */}
          <div
            className="portfolio-carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {displayItems.map((item, index) => {
              const offset = index - activeIndex;
              let wrappedOffset = offset;
              if (wrappedOffset > Math.floor(total / 2)) wrappedOffset -= total;
              if (wrappedOffset < -Math.floor(total / 2)) wrappedOffset += total;
              const isActive = wrappedOffset === 0;

              return (
                <div
                  key={item.id}
                  className="portfolio-card"
                  data-active={isActive}
                  style={getCardStyle(index)}
                  onClick={() => {
                    if (isActive && item.url) {
                      window.open(item.url, '_blank', 'noopener,noreferrer');
                    } else if (!isActive && !isAnimating) {
                      setIsAnimating(true);
                      setActiveIndex(index);
                      setTimeout(() => setIsAnimating(false), 800);
                    }
                  }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${displayItems.length}: ${item.title}`}
                  aria-hidden={!isActive}
                >
                  <div className="portfolio-card-inner">
                    {/* Glow border */}
                    <div className="portfolio-card-glow" />

                    {/* Card image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="portfolio-card-img"
                      loading="lazy"
                    />

                    {/* Card content */}
                    <div className="portfolio-card-content">
                      <span className="portfolio-card-category">{item.category}</span>
                      <h3 className="portfolio-card-title">{item.title}</h3>
                      {item.description && (
                        <p className="portfolio-card-description">{item.description}</p>
                      )}

                      {/* Tech tags */}
                      {item.tech && item.tech.length > 0 && (
                        <div
                          className="flex flex-wrap gap-2 mt-3"
                          style={{
                            opacity: isActive ? 1 : 0,
                            maxHeight: isActive ? '40px' : '0',
                            overflow: 'hidden',
                            transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                          }}
                        >
                          {item.tech.map(t => (
                            <span key={t} className="tech-tag">{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Button — Right Side */}
          <button
            className="carousel-nav-btn carousel-nav-right"
            onClick={() => navigate('next')}
            aria-label="Next project"
            disabled={isAnimating}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Progress Dots — Below */}
        <div className="flex items-center justify-center gap-3 mt-8 relative z-20" role="tablist" aria-label="Portfolio items">
          {displayItems.map((item, index) => (
            <button
              key={item.id}
              className="carousel-dot"
              data-active={index === activeIndex}
              onClick={() => {
                if (!isAnimating && index !== activeIndex) {
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 800);
                }
              }}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to ${item.title}`}
            />
          ))}
        </div>

        {/* Active Project Info — visible on larger screens */}
        <div className="hidden md:flex items-center justify-between mt-12 px-8 relative z-20">
          <div className="flex items-center gap-4">
            <span className="text-6xl font-black text-white/5 leading-none">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <div>
              <span className="text-xs font-bold text-[#00ead3] uppercase tracking-[0.2em]">
                {displayItems[activeIndex]?.category}
              </span>
              <h4 className="text-xl font-black text-white uppercase tracking-tight">
                {displayItems[activeIndex]?.title}
              </h4>
            </div>
          </div>
          <div className="text-sm text-white/30 font-bold uppercase tracking-widest">
            {String(activeIndex + 1).padStart(2, '0')} / {String(displayItems.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
