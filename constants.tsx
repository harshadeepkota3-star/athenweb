
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
    image: '/screenshots/ivypyramid.png',
    description: 'A dynamic recruitment website connecting talent with opportunities across diverse industries.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '2',
    title: 'JK EXIM GROUP',
    category: 'Export & Trading',
    url: 'https://jkeximgroup.in',
    image: '/screenshots/jkeximgroup.png',
    description: 'Global export-website showcasing premium vegetable & agro products from India to international markets.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },

  {
    id: '4',
    title: 'LIGHTS OF HAPPINESS',
    category: 'Non-Profit',
    url: 'https://lightsofhappiness.org',
    image: '/screenshots/lightsofhappiness.png',
    description: 'Empowering underserved communities through vital education, health, and sanitation initiatives.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '5',
    title: 'EDU2EXCEL',
    category: 'Ed-Tech',
    url: 'https://edu2excel.com',
    image: '/screenshots/edu2excel.png',
    description: 'Industry-relevant online learning platform with mentorship and real-time project support.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '6',
    title: 'STUDY ABROAD (E2E)',
    category: 'Education Consultancy',
    url: 'https://studyabroad.edu2excel.com',
    image: '/screenshots/studyabroad.png',
    description: 'Comprehensive platform guiding students through international university applications and processes.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '7',
    title: 'MAYURA EVENTS',
    category: 'Event Planning',
    url: 'https://mayuraevents.com',
    image: '/screenshots/mayuraevents.png',
    description: 'End-to-end event management for weddings, corporate functions, and milestone celebrations.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '8',
    title: 'WAYEVA',
    category: 'Ed-Tech & Internship',
    url: 'https://wayeva.com',
    image: '/screenshots/wayeva.png',
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
    image: '/screenshots/viswafx.png',
    description: 'A high-end creative VFX studio turning complex imagination into cinematic visual realities.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '13',
    title: 'DLITE INDUSTRIES',
    category: 'Manufacturing',
    url: 'https://dliteindustries.com',
    image: '/screenshots/dliteindustries.png',
    description: 'Manufacturer of high-quality dry mortars and specialist paint textures for modern construction.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '14',
    title: 'LAVISH SPACE STUDIOS',
    category: 'Interior Design',
    url: 'https://lavishspacestudios.com',
    image: '/screenshots/lavishspacestudios.png',
    description: 'A boutique studio crafting immersive brand spaces and bespoke interiors that inspire.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '15',
    title: 'LK GLOBAL EXPORTS',
    category: 'Global Trading',
    url: 'https://lkglobalexports.com',
    image: '/screenshots/lkglobalexports.png',
    description: 'Specialised global export-house connecting Indian manufacturing to international markets.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '16',
    title: 'ASTITVA CREATIONS',
    category: 'Cinematography',
    url: 'https://astitvacreations.com',
    image: '/screenshots/astitvacreations.png',
    description: 'Creative studio specialising in cinematic storytelling through photography and videography.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '17',
    title: 'NC DESIGNER STUDIO',
    category: 'Printing & Gifting',
    url: 'https://ncdesignerstudio.com',
    image: '/screenshots/ncdesignerstudio.png',
    description: 'Full-service online printing shop offering customized gifts, frames, and branding materials.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '18',
    title: 'OF OUTFIT',
    category: 'Fashion E-commerce',
    url: 'https://ofoutfit.com',
    image: '/screenshots/ofoutfit.png',
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
    image: '/screenshots/brosoc.png',
    description: 'Custom-fit men’s tailoring and premium apparel designed for leaders and visionaries.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '21',
    title: 'VICOL LUBRICANTS',
    category: 'Industrial',
    url: 'https://vicollubricants.com',
    image: '/screenshots/vicollubricants.png',
    description: 'Premium brand offering high-performance lubricants and specialty industrial greases.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '22',
    title: 'HEIRLOOM SEED HUB',
    category: 'E-commerce',
    url: 'https://heirloomseedhub.com',
    image: '/screenshots/heirloomseedhub.png',
    description: 'Online store specialising in rare, organic, and heirloom seeds for sustainable gardening.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '23',
    title: 'APEX SELF DRIVE',
    category: 'Services',
    url: 'https://apexselfdrivecars.com',
    image: '/screenshots/apexselfdrivecars.png',
    description: 'A premium car rental platform offering a wide fleet of self-drive vehicles for every journey.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '24',
    title: 'VARAHI CUSTOM GIFTS',
    category: 'E-commerce',
    url: 'https://varahicustomgifts.com',
    image: '/screenshots/varahicustomgifts.png',
    description: 'Personalized gifting platform offering unique, custom-made items for all special occasions.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '25',
    title: 'ELECTRON IND',
    category: 'E-commerce',
    url: 'https://electronind.com',
    image: '/screenshots/electronind.png',
    description: 'B2B and B2C marketplace for high-quality electronic components and industrial equipment.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '26',
    title: 'JS NAIDU',
    category: 'Seafood Trading',
    url: 'https://jsnaidu.com',
    image: '/screenshots/jsnaidu.png',
    description: 'Specialized platform offering premium dry-fish and seafood products for global markets.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '27',
    title: 'NATURE FARMEASY',
    category: 'Agri-Tech',
    url: 'https://naturefarmeasy.in',
    image: '/screenshots/naturefarmeasy.png',
    description: 'One-stop platform for organic products and innovative machinery for sustainable farming.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '28',
    title: 'HAASVIKA JEWELLERY',
    category: 'Jewellery Retail',
    url: 'https://haasvikajewellery.com',
    image: '/screenshots/haasvikajewellery.png',
    description: 'Online store offering curated jewellery collections with bespoke customization features.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '29',
    title: 'PURNAVI IT SOLUTIONS',
    category: 'IT Solutions & Staffing',
    url: 'https://purnaviitsolutions.com',
    image: '/screenshots/purnavi.png',
    description: 'A comprehensive IT solutions platform specializing in staffing and technology services.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '30',
    title: 'VIDISHA EDUCATIONAL SOCIETY',
    category: 'Education & Society',
    url: 'https://vidishaedusociety.com',
    image: '/screenshots/vidisha.png',
    description: 'A platform dedicated to educational excellence and social empowerment through learning.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '31',
    title: 'MN ENTERPRISES',
    category: 'Solar & Power Solutions',
    url: 'https://mnenterprisess.co.in',
    image: '/screenshots/mnenterprises.png',
    description: 'Providing reliable solar energy and power solutions for a sustainable future.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: '32',
    title: 'SOWMYA SELECTIONS',
    category: 'E-commerce & Fashion',
    url: 'https://sowmyaselections.com/',
    image: '/screenshots/sowmyaselections.png',
    description: 'A premium e-commerce platform specializing in graceful sarees and handpicked ethnic collections.',
    tech: ['React', 'Firebase', 'Tailwind'],
  },
  {
    id: '33',
    title: 'B&J FASHIONS',
    category: 'Lifestyle & Apparel',
    url: 'https://bjfashions.in',
    image: '/screenshots/bjfashions.png',
    description: 'An innovative fashion platform featuring high-end apparel and curated denim collections.',
    tech: ['React', 'Next.js', 'Tailwind'],
  },
  {
    id: '34',
    title: 'HAATH SAGA',
    category: 'Traditional & Ethnic Wear',
    url: 'https://haathsaga.com',
    image: '/screenshots/haathsaga.png',
    description: 'A dedicated platform showcasing handcrafted sarees and ethnic wear that preserves traditional artisan skills.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
  },
];

export const STATS: Stat[] = [
  { label: 'HAPPY CLIENTS', value: '150 +' },
  { label: 'SYSTEMS EVOLVED', value: '90 +' },
  { label: 'INDUSTRIES SERVED', value: '10 +' },
];

export const SKILLS = [
  'GOLANG', 'RUST', 'TYPESCRIPT', 'KUBERNETES', 'TERRAFORM', 'REACT', 'ELIXIR', 'PYTHON', 'DOCKER'
];

export const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
