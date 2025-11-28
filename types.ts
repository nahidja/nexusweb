export enum Sector {
  HOME = 'HOME',
  TRAVEL = 'TRAVEL',
  NEWS = 'NEWS',
  TUTORIALS = 'TUTORIALS',
  CRYPTO = 'CRYPTO',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT'
}

export interface NavItem {
  label: string;
  sector: Sector;
  icon: React.ReactNode;
}

export interface StockData {
  symbol: string;
  price: string;
  change: string;
  isUp: boolean;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}