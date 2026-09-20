import {
  Building2,
  Coins,
  FileText,
  Gem,
  Globe,
  HardHat,
  Leaf,
  Search,
  Settings,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import type { HighlightItem, ServiceDetail, SubNavItem } from "@/types/service";

// Static Services page content. Swap for API data via useServices later.
export const servicesContent = {
  hero: {
    eyebrow: "Technical expertise. Commercial control.",
    title: "Our Services",
    lead: "Integrated construction and property technical services to help you plan, design, build and deliver with confidence.",
    cta: { label: "Discuss Your Project", to: "/contact" },
    aside: ["People.", "Projects.", "Progress."],
    imageUrl: "/images/services-hero.jpg",
  },

  subNav: [
    { id: "overview", label: "Overview" },
    { id: "project-management", label: "Project Management" },
    { id: "cost-commercial", label: "Cost & Commercial" },
    { id: "technical-design-bim", label: "Technical Design & BIM" },
    { id: "additional-services", label: "Additional Services" },
  ] satisfies SubNavItem[],

  overview: {
    eyebrow: "Our core services",
    title: "End-to-End Support for Successful Projects",
    intro:
      "We provide practical, high-quality technical and commercial support across the construction and property lifecycle. Our services are designed to add value, reduce risk and help deliver better built environments.",
  },

  services: [
    {
      slug: "project-management",
      title: "Project Management",
      tagline: "From concept to completion, we help keep your project on track.",
      imageUrl: "/images/services/project-management.jpg",
      icon: HardHat,
      features: [
        "Project planning and strategy",
        "Programme management",
        "Contractor coordination",
        "Procurement support",
        "Progress monitoring and reporting",
        "Risk & issue tracking",
        "Handover and close-out support",
      ],
    },
    {
      slug: "cost-commercial",
      title: "Cost & Commercial",
      tagline: "Clear insight. Better decisions. Greater value.",
      imageUrl: "/images/services/cost-commercial.jpg",
      icon: Coins,
      features: [
        "Preliminary estimates",
        "Cost planning and budgeting",
        "Quantity take-offs and BOQs",
        "Tender analysis and evaluation",
        "Contract administration support",
        "Variation tracking",
        "Cost reporting and final account support",
      ],
    },
    {
      slug: "technical-design-bim",
      title: "Technical Design & BIM",
      tagline: "Accurate, coordinated and buildable design solutions.",
      imageUrl: "/images/services/technical-design-bim.jpg",
      icon: Building2,
      features: [
        "AutoCAD and Revit",
        "BIM modelling and coordination",
        "Technical drawings and documentation",
        "3D visualisation and rendering",
        "Design coordination (architectural, structural, MEP)",
        "As-built documentation",
        "Engineering support (structural, civil)",
      ],
    },
  ] satisfies ServiceDetail[],

  whyWorkWithUs: [
    { title: "Technical Expertise", description: "Qualified and experienced professionals.", icon: Gem },
    { title: "Commercial Focus", description: "Solutions that protect and add value.", icon: ShieldCheck },
    { title: "Collaborative Approach", description: "We work as an extension of your team.", icon: Users },
    { title: "Flexible Delivery", description: "Support across the UK and internationally.", icon: Globe },
    { title: "Commitment to Quality", description: "Reliable, practical and client-focused.", icon: TrendingUp },
  ] satisfies HighlightItem[],

  additionalServices: [
    { title: "Sustainability Advisory", description: "Support for low-carbon, energy-efficient design.", icon: Leaf },
    { title: "Planning Support", description: "Technical input for planning submissions.", icon: FileText },
    { title: "Technical Due Diligence", description: "Assessments for acquisitions and investments.", icon: Search },
    { title: "Project Support Services", description: "Tailored technical support as needed.", icon: Settings },
  ] satisfies HighlightItem[],

  cta: {
    eyebrow: "Have a project in mind?",
    title: "Let's Discuss How We Can Help.",
    text: "Whether you're at the early planning stage or require specialist support, we're here to help you move your project forward.",
    label: "Discuss Your Project",
    to: "/contact",
    imageUrl: "/images/services-cta.jpg",
  },
};