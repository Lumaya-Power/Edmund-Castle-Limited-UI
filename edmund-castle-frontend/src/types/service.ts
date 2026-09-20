import type { LucideIcon } from "lucide-react";

export interface ServiceSummary {
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  imageUrl: string;
  features: string[];
  icon: LucideIcon;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SubNavItem {
  id: string;
  label: string;
}