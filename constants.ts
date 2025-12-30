
import { PortfolioItem, Skill, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Sayed Mahdi Kazemi",
  first_name: "Mahdi",
  last_name: "Kazemi",
  title: "Senior Visual Artist & Social Advocate",
  email: "saam10409@gmail.com",
  phone: ["+93 797 44 82 90", "+93 705 46 74 70"],
  location: "Sar-e Pol, Afghanistan",
  telegram: "https://t.me/veera_production",
  instagram: "https://instagram.com/saamart98",
  whatsapp: "https://wa.me/93797448290",
  linkedin: "https://linkedin.com/in/mahdi-kazemi",
  about: "For over 8 years, I have shaped the visual narrative of Afghanistan through art. From leading visual campaigns at the Presidential Press to crafting commercial identities for global giants like Super Cola, my work bridges the gap between commercial aesthetics and deep social responsibility. As the Head of the Afghan Women's Support Institute, I use my brush to amplify voices that need to be heard.",
};

export const EXPERTISE_AREAS = [
  {
    title: "Strategic Branding",
    desc: "Developing visual identities for market leaders like Super Cola and Zalal Mawafaq, ensuring commercial dominance through design.",
    icon: "branding",
    imageUrl: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Social Advocacy Art",
    desc: "Leading visual storytelling for women's rights, voting awareness, and civic education in partnership with national media.",
    icon: "social",
    imageUrl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Editorial Illustration",
    desc: "High-impact digital paintings for 8AM Newspaper and other leading publications, translating complex politics into art.",
    icon: "editorial",
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Campaign Management",
    desc: "Directing public awareness initiatives for the Presidential Office, from COVID-19 health protocols to national defense motivation.",
    icon: "campaign",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400"
  }
];

export const SERVICES = EXPERTISE_AREAS;

export const SKILLS: Skill[] = [
  { name: "Adobe Photoshop", level: 98 },
  { name: "Adobe Illustrator", level: 95 },
  { name: "Procreate Digital Painting", level: 92 },
  { name: "CorelDRAW Branding", level: 88 },
  { name: "Campaign Creative Strategy", level: 94 },
  { name: "Art Direction", level: 96 }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Visual Lead & Artist",
    organization: "Presidential Press & 8AM",
    period: "2016 — PRESENT",
    description: [
      { text: "Directed national visual strategies.", imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=200" },
      { text: "1,000+ political illustrations for 8AM Newspaper.", imageUrl: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=200" },
      { text: "Led Presidential voting awareness campaigns.", imageUrl: "https://images.unsplash.com/photo-1540910419892-f0c74b0e53b1?auto=format&fit=crop&q=80&w=200" }
    ]
  },
  {
    role: "Head of Institute",
    organization: "Women's Support Institute",
    period: "2020 — ONGOING",
    description: [
      { text: "Curated international art exhibitions.", imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=200" },
      { text: "Led high-impact social advocacy series.", imageUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=200" },
      { text: "Managed global craft branding.", imageUrl: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=200" }
    ]
  },
  {
    role: "Lead Commercial Designer",
    organization: "Super Cola & Zalal Group",
    period: "2018 — 2022",
    description: [
      { text: "Engineered multi-million dollar brand identities.", imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" },
      { text: "Designed global-standard product collateral.", imageUrl: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&q=80&w=200" },
      { text: "Bridged cultural and commercial design.", imageUrl: "https://images.unsplash.com/photo-152207182399e-b89e7df830c5?auto=format&fit=crop&q=80&w=200" }
    ]
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "1",
    title: "Super Cola: Regional Rebrand",
    category: "Commercial",
    description: "A comprehensive commercial branding project including product identity and fleet design.",
    imageUrl: "./4.webp"
  },
  {
    id: "2",
    title: "The Silent Canvas Series",
    category: "Social Campaign",
    description: "Digital paintings for 8AM Newspaper highlighting social shifts and women's resilience.",
    imageUrl: "./85F187EC-277F-4C21-856E-81035B489410.webp"
  },
  {
    id: "3",
    title: "Zalal Mawafaq Identity",
    category: "Commercial",
    description: "High-end corporate identity and marketing strategy for a leading production house.",
    imageUrl: "./5.webp"
  },
  {
    id: "4",
    title: "Civic Duty Awareness",
    category: "Social Campaign",
    description: "National voting awareness campaign developed in partnership with the Presidential Office.",
    imageUrl: "./Screenshot (124).webp"
  },
  {
    id: "5",
    title: "Afghan Women's Exhibition",
    category: "Digital Art",
    description: "Visual direction and promotional art for the international handicraft exhibition.",
    imageUrl: "./Screenshot (121).webp"
  },
  {
    id: "6",
    title: "Defense Forces Tribute",
    category: "Digital Art",
    description: "Motivational artwork series dedicated to national security and resilience.",
    imageUrl: "./Screenshot (120).webp"
  }
];
