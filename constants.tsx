
import React from 'react';
import { Service, PortfolioItem, Stat } from './types';

export const AthenWebLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <img
    src="/logo.png"
    alt="AthenWeb Logo"
    className={`${className} object-contain`}
  />
);

export const SERVICES: Service[] = [
  {
    title: "AI & EVOLUTIONARY TECH.",
    description: "Integrating advanced neural networks to drive business automation and intelligent insights.",
    image: "https://picsum.photos/seed/ai/800/600"
  },
  {
    title: "HIGH-END PLATFORMS.",
    description: "Architecting scalable web and mobile solutions with uncompromising performance and security.",
    highlighted: true,
    image: "https://picsum.photos/seed/web/800/600"
  },
  {
    title: "DIGITAL TRANSFORMATION.",
    description: "Strategic consulting to evolve legacy systems into modern, agile digital powerhouses.",
    image: "https://picsum.photos/seed/transform/800/600"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'IVY PYRAMID',
    category: 'Recruitment & Consulting',
    url: 'https://ivypyramid.com',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'A dynamic recruitment website connecting talent with opportunities across diverse industries.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '2',
    title: 'JK EXIM GROUP',
    category: 'Export & Trading',
    url: 'https://jkeximgroup.in',
    image: 'https://images.unsplash.com/photo-1566378246598-5b11a0efbc8b?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Global export-website showcasing premium vegetable & agro products from India to international markets.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '3',
    title: 'ADI JAMBAVA ARUNDATHI',
    category: 'Religious & Spiritual',
    url: 'https://adijambavaarundathi.org',
    image: 'https://images.unsplash.com/photo-1542358917-419a4e928240?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'A dedicated platform celebrating the life and spiritual legacy of the saint Adi Jambava Arundathi.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '4',
    title: 'LIGHTS OF HAPPINESS',
    category: 'Non-Profit',
    url: 'https://lightsofhappiness.org',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Empowering underserved communities through vital education, health, and sanitation initiatives.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '5',
    title: 'EDU2EXCEL',
    category: 'Ed-Tech',
    url: 'https://edu2excel.com',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Industry-relevant online learning platform with mentorship and real-time project support.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '6',
    title: 'STUDY ABROAD (E2E)',
    category: 'Education Consultancy',
    url: 'https://studyabroad.edu2excel.com',
    image: 'https://images.unsplash.com/photo-1523050335392-9befafa56dc4?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Comprehensive platform guiding students through international university applications and processes.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '7',
    title: 'MAYURA EVENTS',
    category: 'Event Planning',
    url: 'https://mayuraevents.com',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'End-to-end event management for weddings, corporate functions, and milestone celebrations.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '8',
    title: 'WAYEVA',
    category: 'Ed-Tech & Internship',
    url: 'https://wayeva.com',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'A launchpad transforming students into skilled professionals via live projects and placement support.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '9',
    title: 'POCKET FACEE',
    category: 'Fashion E-commerce',
    url: 'https://pocketfacee.com',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'A trendy online store offering curated apparel and designer accessories for the modern wardrobe.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '10',
    title: 'MASTER SPORTS',
    category: 'Sports & Fitness',
    url: 'https://mastersports.org',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Professional training and community support platform to achieve elite health and fitness goals.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '11',
    title: 'ELITE TAX FILER',
    category: 'Finance & Tax',
    url: 'https://elitetaxfiler.com',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Professional platform offering end-to-end tax filing services with audit support and estimates.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '12',
    title: 'VISWA FX',
    category: 'Visual Effects Studio',
    url: 'https://viswafx.com',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'A high-end creative VFX studio turning complex imagination into cinematic visual realities.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '13',
    title: 'DLITE INDUSTRIES',
    category: 'Manufacturing',
    url: 'https://dliteindustries.com',
    image: 'https://images.unsplash.com/photo-1581094125919-5136b2b21f1b?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Manufacturer of high-quality dry mortars and specialist paint textures for modern construction.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '14',
    title: 'LAVISH SPACE STUDIOS',
    category: 'Interior Design',
    url: 'https://lavishspacestudios.com',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'A boutique studio crafting immersive brand spaces and bespoke interiors that inspire.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '15',
    title: 'LK GLOBAL EXPORTS',
    category: 'Global Trading',
    url: 'https://lkglobalexports.com',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Specialised global export-house connecting Indian manufacturing to international markets.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '16',
    title: 'ASTITVA CREATIONS',
    category: 'Cinematography',
    url: 'https://astitvacreations.com',
    image: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Creative studio specialising in cinematic storytelling through photography and videography.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '17',
    title: 'NC DESIGNER STUDIO',
    category: 'Printing & Gifting',
    url: 'https://ncdesignerstudio.com',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Full-service online printing shop offering customized gifts, frames, and branding materials.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '18',
    title: 'OF OUTFIT',
    category: 'Fashion E-commerce',
    url: 'https://ofoutfit.com',
    image: 'https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'A stylish online store offering curated clothing and premium fashion accessories.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '19',
    title: 'BABU TRADERS',
    category: 'Grocery Retail',
    url: 'https://babutraders.com',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Online marketplace for fresh produce, organic vegetables, and daily household essentials.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '20',
    title: 'BROSOC',
    category: 'Custom Apparel',
    url: 'https://brosoc.in',
    image: 'https://images.unsplash.com/photo-1594932224010-74f43a163548?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Custom-fit men’s tailoring and premium apparel designed for leaders and visionaries.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '21',
    title: 'VICOL LUBRICANTS',
    category: 'Industrial',
    url: 'https://vicollubricants.com',
    image: 'https://images.unsplash.com/photo-1635848600714-173384db1368?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Premium brand offering high-performance lubricants and specialty industrial greases.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '22',
    title: 'HEIRLOOM SEED HUB',
    category: 'Agriculture',
    url: 'https://heirloomseedhub.com',
    image: 'https://images.unsplash.com/photo-1592398633820-a00307705786?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Dedicated platform offering rare, non-hybrid heritage seeds for sustainable farming.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '23',
    title: 'APEX SELF DRIVE',
    category: 'Mobility Services',
    url: 'https://apexselfdrivecars.com',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Flexible self-drive car rentals empowering customers with freedom and convenience.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '24',
    title: 'VARAHI CUSTOM GIFTS',
    category: 'Personalized Gifts',
    url: 'https://varahicustomgifts.com',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Delivering unique keepsakes and premium merchandise for special corporate and personal occasions.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '25',
    title: 'ELECTRON IND',
    category: 'Electronics Manufacturing',
    url: 'https://electronind.com',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Supplier and manufacturer of precision electronic components and industrial parts.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '26',
    title: 'JS NAIDU',
    category: 'Seafood Trading',
    url: 'https://jsnaidu.com',
    image: 'https://images.unsplash.com/photo-1534080564607-198f9dd5d61a?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Specialized platform offering premium dry-fish and seafood products for global markets.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '27',
    title: 'NATURE FARMEASY',
    category: 'Agri-Tech',
    url: 'https://naturefarmeasy.in',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'One-stop platform for organic products and innovative machinery for sustainable farming.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '28',
    title: 'HAASVIKA JEWELLERY',
    category: 'Jewellery Retail',
    url: 'https://haasvikajewellery.com',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Online store offering curated jewellery collections with bespoke customization features.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
];

export const STATS: Stat[] = [
  { label: 'GLOBAL CLIENTS', value: '450 +' },
  { label: 'SYSTEMS EVOLVED', value: '800 +' },
  { label: 'UPTIME RECORD', value: '99.9 %' },
];

export const SKILLS = [
  'GOLANG', 'RUST', 'TYPESCRIPT', 'GEMINI 2.5', 'KUBERNETES', 'TERRAFORM', 'REACT', 'ELIXIR', 'PYTHON', 'DOCKER'
];

export const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
