export interface Project {
  slug: string;
  title: string;
  location: string;
  country: string;
  sector: string;
  services: string[];
  projectType: string;
  summary: string;
  imageUrl: string;
}

export interface FeaturedProjectDetail {
  slug: string;
  title: string;
  location: string;
  description: string;
  sector: string;
  services: string[];
  status: string;
  caption: string;
  imageUrl: string;
}

export interface ProjectFilterState {
  sector: string;
  service: string;
  location: string;
  projectType: string;
}

export type ProjectFilterOptions = Record<keyof ProjectFilterState, string[]>;