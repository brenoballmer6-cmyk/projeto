import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: number; // For Bento Grid layout
  highlight?: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}