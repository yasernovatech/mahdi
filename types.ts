
export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Digital Art' | 'Commercial' | 'Social Campaign' | 'Identity';
  description: string;
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface ExperienceSubItem {
  text: string;
  imageUrl?: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: ExperienceSubItem[];
}
