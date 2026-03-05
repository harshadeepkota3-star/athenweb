
import React from 'react';

interface AboutProps {
  compact?: boolean;
}

const ERP_CATEGORIES = [
  {
    number: '01',
    title: 'Retail Softwares',
    description: 'Specialized management systems for retail storefronts, pharmacies, and hospitality businesses to streamline daily operations and customer transactions.',
    products: [
      'Pharmacy Shop Software',
      'Kirana/Grocery Shop Software',
      'POS Software',
      'Jewellery Software',
      'Restaurant Software',
      'Garment Software',
      'Retail Software',
      'Salon Software',
    ],
  },
  {
    number: '02',
    title: 'Distribution Softwares',
    description: 'Robust supply chain and warehouse solutions designed for wholesalers, distributors, and multi-location logistics operations to ensure seamless inventory flow.',
    products: [
      'Pharma Distribution Software',
      'FMCG Distribution Software',
      'Mandi (AADHAT) Software',
      'Warehouse Management Software',
      'Wholesale Distribution Software',
      'Automobile Software',
      'Supply Chain Management',
      'DMSXpert/Multi-location Software',
    ],
  },
  {
    number: '03',
    title: 'Manufacturing Softwares',
    description: 'High-precision ERP systems for the manufacturing sector, covering process industries, automotive assembly, and pharmaceutical production lines.',
    products: [
      'ERP Software Solution',
      'Pharmaceutical Manufacturing Software',
      'Ayurvedic & Homeopathic Software',
      'Automobile Industry Software',
      'Textile Software',
      'Assembling Industry Software',
      'Process Manufacturing Software',
      'Food & Beverage Industry Software',
    ],
  },
];

const About: React.FC<AboutProps> = ({ compact }) => {
  return (
    <section
      className={`relative py-24 px-6 md:px-12 text-white overflow-hidden ${compact ? 'bg-[#0a0a0a]' : 'bg-[#050505]'
        }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,234,211,0.04)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ead3]/5 blur-[120px] rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ead3]/5 blur-[120px] rounded-full animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00ead3]">
              SOFTWARE SOLUTIONS
            </span>
            <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            OUR ERP <span className="text-outline-erp italic">SOFTWARE</span>
          </h2>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            <span className="text-outline-erp italic">SOLUTIONS.</span>
          </h2>
          <p
            className="text-white/30 text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Enterprise-grade ERP software across industries
          </p>
        </div>

        {/* Category Sections — Advanced Editorial Layout */}
        <div className="mb-20 space-y-0">
          {ERP_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="group py-16 md:py-24 border-b border-white/5 last:border-b-0"
            >
              {/* Category 12-column Row for unique framing */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                {/* Left: Metadata & Context (4 cols) */}
                <div className="lg:col-span-4 flex flex-col items-start h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-black text-[#00ead3] font-mono tracking-widest opacity-80">
                      / SEC_{category.number}
                    </span>
                    <span className="h-[1px] w-8 bg-white/10 group-hover:bg-[#00ead3]/30 group-hover:w-12 transition-all duration-700"></span>
                    <span className="text-[10px] font-bold text-white/30 tracking-[0.2em] group-hover:text-white transition-colors duration-500">
                      {category.products.length} MODULES
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 group-hover:text-neon transition-colors duration-500">
                    {category.title}
                  </h3>

                  <p
                    className="text-white/40 text-sm md:text-base leading-relaxed font-medium max-w-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {category.description}
                  </p>
                </div>

                {/* Right: Interactive Product Catalog (8 cols) */}
                <div className="lg:col-span-8 pt-2">
                  <div className="flex flex-wrap gap-4">
                    {category.products.map((product, pIdx) => (
                      <span
                        key={pIdx}
                        className="
                          inline-flex items-center px-6 py-4 rounded-full
                          border border-white/5 bg-white/[0.02]
                          text-white/50 text-base md:text-xl font-bold uppercase tracking-tight
                          hover:border-[#00ead3]/50 hover:text-white hover:bg-[#00ead3]/10 hover:scale-[1.03]
                          transition-all duration-300 cursor-pointer select-none
                        "
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="w-1.5 h-1.5 bg-[#00ead3]/30 group-hover/item:bg-[#00ead3] rounded-full mr-3 transition-colors"></span>
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {!compact && (
          <div className="text-center">
            <div className="max-w-3xl mx-auto py-10 md:py-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00ead3]">
                  GET STARTED
                </span>
                <span className="w-1.5 h-1.5 bg-[#00ead3] rotate-45"></span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
                READY TO <span className="italic text-[#00ead3]">TRANSFORM</span> YOUR BUSINESS?
              </h3>
              <p
                className="text-white/40 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore our enterprise solutions with a free demo or download
                our software today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-10 py-5 bg-neon text-black font-black uppercase text-lg rounded-full flex items-center justify-center gap-3 hover:bg-white transition-colors group">
                  REQUEST FREE DEMO
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
                <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white font-black uppercase text-lg rounded-full border-2 border-white/20 flex items-center justify-center gap-3 hover:border-[#00ead3] hover:text-[#00ead3] transition-colors group">
                  DOWNLOAD NOW
                  <span className="group-hover:translate-y-1 transition-transform">
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
                        d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .text-outline-erp {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(0, 234, 211, 0.4);
        }
        @media (max-width: 768px) {
          .text-outline-erp {
            -webkit-text-stroke: 1px rgba(0, 234, 211, 0.4);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
