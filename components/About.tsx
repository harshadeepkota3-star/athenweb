import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Page } from '../App';

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
   HOW WE THINK — Data
   ───────────────────────────────────────────── */
const THINKING_PILLARS = [
  {
    number: '01',
    title: 'Systems, Not Features',
    accent: 'We think in systems, not features.',
    body: 'A feature solves a problem. A system prevents a category of problems. When we design, we are always asking: what happens when this has to handle ten times the load? What happens when two users hit the same resource at the exact same millisecond? What happens when the data pipeline has to carry a billion events a day instead of a million? These are not hypothetical questions. They are design requirements. We answer them before a single line of production code is written.',
  },
  {
    number: '02',
    title: 'Concurrency First',
    accent: 'We think about concurrency before it becomes a crisis.',
    body: 'The hardest problem in any high scale system is not delivery it is concurrency. When two transactions collide on a single resource, a naive system lets both through and creates a contradiction. A well designed system resolves the conflict in microseconds, invisibly, without either user ever knowing a conflict existed. That kind of precision requires deliberate architecture distributed locking, atomic operations, in memory state management built into the foundation, not retrofitted under pressure.',
  },
  {
    number: '03',
    title: 'Real-Time Data',
    accent: 'We think about data as a real-time nervous system.',
    body: 'In a modern business, data that arrives two hours late is not just slow it is dangerous. Inventory decisions made on stale data create waste. Pricing decisions made without real time demand signals leave money on the table. Operational decisions made without live visibility create blind spots. We build event driven pipelines where every state change every transaction, every update, every signal flows through the system continuously. Your business sees what is happening as it happens.',
  },
  {
    number: '04',
    title: 'Observability',
    accent: 'We think about observability as a first class concern.',
    body: 'Distributed systems fail in complex ways. A single root cause can generate thousands of redundant log messages, burying the signal in noise. An engineering team without proper observability tooling is flying blind reacting to symptoms rather than causes, spending hours in a production incident that should have taken minutes. We build logging, monitoring, and alerting infrastructure that cuts through the clutter. When something goes wrong, you find the root cause fast.',
  },
  {
    number: '05',
    title: 'Scale as Input',
    accent: 'We think about scale as a design input, not an afterthought.',
    body: 'Scale is not a problem you solve when you\'re big enough to have it. By then, it\'s too late the rewrites are expensive, the downtime is public, and the engineering team is exhausted. Scale is a constraint you respect from day one. We architect systems that grow gracefully: containerized workloads that can be replicated on demand, databases sharded for horizontal growth, APIs designed to handle bursts without degrading.',
  },
];

/* ─────────────────────────────────────────────
   WHAT WE BUILD — Data
   ───────────────────────────────────────────── */
const BUILD_CAPABILITIES = [
  {
    number: '01',
    title: 'Scalable Software Systems',
    body: 'Distributed, microservice based architectures that handle real world volume. Built on modern orchestration infrastructure, designed for high availability, and instrumented for observability from the ground up.',
    tags: ['Distributed Systems', 'Microservices', 'High Availability'],
  },
  {
    number: '02',
    title: 'Enterprise Resource Planning (ERP) Platforms',
    body: 'End to end business operating systems built for your specific domain. Not adapted templates purpose designed platforms that model your business logic, your workflows, and your growth trajectory.',
    tags: ['Custom ERP', 'Workflow Engine', 'Domain Modeling'],
  },
  {
    number: '03',
    title: 'Platform Engineering & Developer Infrastructure',
    body: 'The internal systems that make your engineering team fast. Deployment pipelines, internal tooling, logging infrastructure, CI/CD architecture the invisible layer that separates teams that ship at speed from teams that are perpetually fighting fires.',
    tags: ['CI/CD', 'Dev Tooling', 'Infrastructure'],
  },
  {
    number: '04',
    title: 'Predictive & Intelligence Layers',
    body: 'Machine learning pipelines and AI powered automation embedded into operational workflows. Systems that learn from your data, surface non obvious patterns, and act before problems escalate because the best engineering anticipates the future rather than reacting to it.',
    tags: ['ML Pipelines', 'AI Automation', 'Predictive Analytics'],
  },
];

interface AboutProps {
  compact?: boolean;
  onNavigate?: (page: Page) => void;
}

/* ─────────────────────────────────────────────
   ABOUT PAGE COMPONENT
   ───────────────────────────────────────────── */
const About: React.FC<AboutProps> = ({ compact, onNavigate }) => {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden">

      {/* ═══════════════════════════════════════════
          GLOBAL BACKGROUND
          ═══════════════════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>


      {/* ═══════════════════════════════════════════
          SECTION 1 — ABOUT HERO
          ═══════════════════════════════════════════ */}
      <div className="relative min-h-[40vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-12 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(0,234,211,0.06)_0%,transparent_60%)]"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <FadeInSection>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00ead3]">
                ABOUT ATHENWEB
              </span>
              <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h1 className="text-4xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] mb-8 whitespace-nowrap">
              HOW WE <span className="about-text-outline italic">THINK.</span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="max-w-2xl mx-auto">
              <p
                className="text-white/45 text-base md:text-lg leading-[1.8] font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                The companies that define industries don't just write code.
                They build engineering ecosystems living, breathing systems
                that scale silently in the background while the business
                charges forward.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>


      {/* ═══════════════════════════════════════════
          SECTION 2 — HOW WE THINK (5 PILLARS)
          ═══════════════════════════════════════════ */}
      <div className="relative py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <FadeInSection>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00ead3]">
                OUR PHILOSOPHY
              </span>
              <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-12 whitespace-nowrap">
              FIVE PRINCIPLES OF <span className="about-text-outline italic">DESIGN.</span>
            </h2>
          </FadeInSection>

          <div className="space-y-0 text-left">
            {THINKING_PILLARS.map((pillar, idx) => (
              <FadeInSection key={idx} delay={idx * 0.08}>
                <div className="group py-8 md:py-10 border-b border-white/5 last:border-b-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-black text-[#00ead3] font-mono tracking-widest opacity-80">
                          / P_{pillar.number}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[0.9] group-hover:text-[#00ead3] transition-colors duration-500">
                        {pillar.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-8 space-y-4">
                      <p className="text-[#00ead3]/80 text-base md:text-lg font-bold leading-relaxed">{pillar.accent}</p>
                      <p className="text-white/40 text-sm md:text-base leading-[1.85] font-medium">{pillar.body}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>


      {/* ═══════════════════════════════════════════
          SECTION 3 — WHAT WE BUILD
          ═══════════════════════════════════════════ */}
      <div className="relative py-12 md:py-20 px-6 md:px-12 lg:px-20 bg-[#050505]">
        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <FadeInSection>
            <div className="mb-12">
              <span className="text-sm font-black text-[#00ead3] font-mono tracking-widest opacity-80">
                / SEC_02
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mt-6 mb-6 whitespace-nowrap">
                WHAT WE <span className="about-text-outline italic">BUILD.</span>
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
            {BUILD_CAPABILITIES.map((cap, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div className="group relative p-8 md:p-10 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-[#00ead3]/20 hover:bg-[#111111] transition-all duration-500 h-full flex flex-col">
                  <div className="relative z-10 flex flex-col h-full">
                    <span className="text-sm font-black text-[#00ead3] font-mono tracking-widest opacity-80 mb-6">/ {cap.number}</span>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight mb-5 group-hover:text-[#00ead3] transition-colors duration-300">
                      {cap.title}
                    </h3>
                    <p className="text-white/40 text-sm md:text-base leading-[1.8] font-medium mb-8 group-hover:text-white/55 transition-colors duration-300">
                      {cap.body}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {cap.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-white/30 group-hover:border-[#00ead3]/20 group-hover:text-[#00ead3]/70 transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>


      {/* ───── OUR TEAM ───── */}
      <section className="relative py-12 md:py-24 px-6 md:px-12 lg:px-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              OUR <span className="about-text-outline italic">TEAM.</span>
            </h2>
            <p className="text-white/40 text-sm md:text-base font-bold uppercase tracking-[0.25em]">
              Meet the talented people behind AthenWeb's success
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 text-left">
            {[
              {
                name: 'Jaswanth G',
                role: 'Co-founder / CEO',
                quote: 'Leading vision and strategy of AthenWeb'
              },
              {
                name: 'Rakesh',
                role: 'Co-founder / CTO',
                quote: 'Driving technical innovation and excellence'
              },
              {
                name: 'Manikanta K',
                role: 'Co-founder / COO',
                quote: 'Ensuring operational excellence and business growth'
              }
            ].map((member, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="group space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#00ead3] opacity-50 group-hover:w-10 transition-all duration-500"></span>
                    <p className="text-[#00ead3] text-[10px] font-black uppercase tracking-[0.3em]">
                      {member.role}
                    </p>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-[#00ead3] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-white/30 text-sm font-medium leading-relaxed max-w-[280px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {member.quote}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 4 — THE ATHENWEB STANDARD
          ═══════════════════════════════════════════ */}
      <div className="relative py-12 md:py-20 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
        <div className="relative z-10 max-w-[1400px] mx-auto text-center flex flex-col items-center">
          <FadeInSection>
            <span className="text-sm font-black text-[#00ead3] font-mono tracking-widest opacity-80">
              / SEC_03
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.85] mt-6 mb-8 whitespace-nowrap">
              THE ATHENWEB <span className="about-text-outline italic">STANDARD.</span>
            </h2>
          </FadeInSection>

          <div className="space-y-10 max-w-3xl">
            <FadeInSection>
              <div className="bg-[#111111] border border-white/5 rounded-2xl p-8">
                <p className="text-white/60 text-lg md:text-xl leading-[1.85] font-semibold italic">
                  Does this system make the team that operates it faster or
                  slower over time?
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <p className="text-white/40 text-base md:text-lg leading-[1.85] font-medium">
                We have a simple internal benchmark for every system we
                deliver. Most software makes teams slower over time.
                Complexity accumulates. Technical debt compounds. The system
                becomes a weight that must be carried rather than an engine
                that drives momentum.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <p className="text-[#00ead3] text-lg md:text-xl font-black uppercase tracking-widest">
                We build engines.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-white/40 text-base md:text-lg leading-[1.85] font-medium">
                Systems with clean architecture that new engineers can
                understand quickly. Platforms with the kind of structural
                integrity that makes adding a new feature feel like
                extension, not excavation. Infrastructure with the
                observability and resilience that lets teams deploy with
                confidence rather than dread.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.25}>
              <p className="text-white/55 text-base md:text-lg leading-[1.8] font-medium italic">
                That is the AthenWeb standard. It is not the easiest
                standard to hold. But it is the only one worth holding.
              </p>
            </FadeInSection>
          </div>
        </div>
      </div>


      {/* ═══════════════════════════════════════════
          SECTION 5 — CLOSING CTA
          ═══════════════════════════════════════════ */}
      {!compact && (
        <div className="relative py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#050505]">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <FadeInSection>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00ead3]">
                  GET STARTED
                </span>
                <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
                READY TO{' '}
                <span className="italic text-[#00ead3]">TRANSFORM</span> YOUR
                BUSINESS?
              </h3>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed font-medium">
                AthenWeb exists to build the systems that scale your ambition.
                Let's start the conversation.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="w-full sm:w-auto px-10 py-5 bg-[#00ead3] text-black font-black uppercase text-lg rounded-full flex items-center justify-center gap-3 hover:bg-white transition-colors group"
                >
                  START EVOLVING
                  <span className="group-hover:translate-x-2 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </FadeInSection>
          </div>
        </div>
      )}

      {/* Inline Styles */}
      <style>{`
        .about-text-outline {
          color: #00ead3;
          -webkit-text-stroke: 0;
        }
      `}</style>
    </section>
  );
};

export default About;
