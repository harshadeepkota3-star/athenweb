
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
    title: 'Ether Fintech',
    category: 'Blockchain',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Decentralized trading platform with real-time portfolio analytics and smart contract integration.',
    tech: ['Solidity', 'React', 'GraphQL'],
  },
  {
    id: '2',
    title: 'Nova Dashboard',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Enterprise-grade analytics dashboard processing 10M+ events daily with sub-second latency.',
    tech: ['TypeScript', 'Go', 'Kafka'],
  },
  {
    id: '3',
    title: 'Athen Cloud',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Multi-region cloud orchestration with zero-downtime deployments and auto-scaling.',
    tech: ['Kubernetes', 'Terraform', 'Rust'],
  },
  {
    id: '4',
    title: 'Synapse AI',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Neural network platform for predictive analytics with 99.2% model accuracy.',
    tech: ['Python', 'PyTorch', 'CUDA'],
  },
  {
    id: '5',
    title: 'Pulse Health',
    category: 'HealthTech',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'HIPAA-compliant telemedicine platform serving 500K+ patients with real-time monitoring.',
    tech: ['React Native', 'Node.js', 'AWS'],
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
