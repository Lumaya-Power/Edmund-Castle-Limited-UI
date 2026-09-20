import {
  Building2,
  Construction,
  Factory,
  FileText,
  Globe,
  GraduationCap,
  HeartPulse,
  House,
  MapPin,
  Network,
  ShieldCheck,
} from "lucide-react";
import type { IconLabelItem, StatItem } from "@/types/content";
import type { ServiceSummary } from "@/types/service";

// Static home page content. Swap for API data via the hooks once the backend is ready.
export const homeContent = {
  reach: [
    { label: "UK", icon: Globe },
    { label: "Nigeria", icon: MapPin },
    { label: "International", icon: Network },
  ] satisfies IconLabelItem[],

  services: [
    {
      slug: "project-management",
      title: "Project Management",
      summary: "Programme, coordination, procurement, delivery and reporting.",
      imageUrl: "/images/services/project-management.jpg",
    },
    {
      slug: "cost-commercial",
      title: "Cost & Commercial",
      summary: "Cost planning, estimating, quantity take-offs, tender analysis and cost control.",
      imageUrl: "/images/services/cost-commercial.jpg",
    },
    {
      slug: "technical-design-bim",
      title: "Technical Design & BIM",
      summary: "CAD, Revit, technical drawings, modelling, coordination and engineering support.",
      imageUrl: "/images/services/technical-design-bim.jpg",
    },
  ] satisfies ServiceSummary[],

  stats: [
    { value: "6+", label: "Sectors Supported", icon: Building2 },
    { value: "50+", label: "Projects Supported", icon: FileText },
    { value: "100%", label: "Client Satisfaction Focus", icon: ShieldCheck },
  ] satisfies StatItem[],

  quote:
    "Technical expertise, commercial awareness and a collaborative approach that makes a real difference.",

  sectors: [
    { label: "Residential", icon: House },
    { label: "Commercial", icon: Building2 },
    { label: "Education", icon: GraduationCap },
    { label: "Healthcare", icon: HeartPulse },
    { label: "Industrial", icon: Factory },
    { label: "Infrastructure", icon: Construction },
  ] satisfies IconLabelItem[],
};
