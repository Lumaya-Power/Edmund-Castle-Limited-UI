import type { LucideIcon } from "lucide-react";

export interface FounderCredential {
  title: string;
  institution: string;
}

export interface FounderInfo {
  name: string;
  role: string;
  imageUrl: string;
  quote: string;
  bio: string[];
  credentials: FounderCredential[];
}

export interface StoryInfo {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  cta: { label: string; to: string };
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PerspectiveItem {
  title: string;
  description: string;
  imageUrl: string;
}