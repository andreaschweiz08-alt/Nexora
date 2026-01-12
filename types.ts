
import React from 'react';

export type Language = 'en' | 'it' | 'de' | 'fr';

export interface Service {
  id: string;
  title: string;
  problem: string;
  solution: string;
  benefit: string;
  icon: React.ReactNode;
  category: 'web' | 'ai' | 'support';
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface PricingPlan {
  name: string;
  features: string[];
  times: string;
  color: string;
}

export interface PortfolioProject {
  title: string;
  description: string;
  result: string;
  image: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
