export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Lawyer {
  name: string;
  role: string;
  oab: string;
  specialty: string;
  bio: string;
  imageUrl: string;
}

export interface PracticeArea {
  id: string;
  iconName: string; // Lucide icon identifier
  title: string;
  summary: string;
  details: string[];
  features: string[];
}

export interface Testimonial {
  id: string;
  initials: string;
  clientCategory: string; // e.g., "Diretor Financeiro de Multiprovedor", "Empresário do Setor Imobiliário"
  segment: string; // e.g., "Societário / Planejamento Tributário"
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
