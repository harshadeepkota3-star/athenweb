
export interface Service {
  title: string;
  description: string;
  highlighted?: boolean;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  tech?: string[];
}

export interface Stat {
  label: string;
  value: string;
}
