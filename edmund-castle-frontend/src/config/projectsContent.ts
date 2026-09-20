import { Building2, Globe, Users } from "lucide-react";
import type { StatItem } from "@/types/content";
import type { FeaturedProjectDetail, Project } from "../types/projects";

// Sample content taken from the mockup. Replace with real projects (or API data via useProjects later).
export const projectsContent = {
  hero: {
    eyebrow: "Our projects",
    title: "Real Projects. Real Impact.",
    lead: "A selection of projects we have supported through technical expertise, commercial insight and practical delivery.",
    cta: { label: "Discuss a Similar Project", to: "/contact" },
    aside: ["People.", "Projects.", "Progress."],
    imageUrl: "/images/projects-hero.jpg",
  },

  grid: {
    eyebrow: "Selected experience",
    title: "Projects We've Supported",
    intro:
      "From residential developments to education and infrastructure, we have worked with clients, contractors and consultants to deliver successful outcomes across a range of sectors.",
  },

  projects: [
    {
      slug: "student-accommodation",
      title: "Student Accommodation",
      location: "Aberdeen, UK",
      country: "UK",
      sector: "Education",
      services: ["Project Management", "Cost & Commercial", "Technical Design & BIM"],
      projectType: "New Build",
      summary:
        "Technical and commercial support for a student accommodation development, including cost analysis, programme monitoring and design coordination.",
      imageUrl: "/images/projects/student-accommodation.jpg",
    },
    {
      slug: "mixed-use-development",
      title: "Mixed-Use Development",
      location: "Birmingham, UK",
      country: "UK",
      sector: "Residential",
      services: ["Project Management", "Cost & Commercial"],
      projectType: "New Build",
      summary:
        "Project management and cost control support for a mixed-use scheme comprising residential, retail and community spaces.",
      imageUrl: "/images/projects/mixed-use-development.jpg",
    },
    {
      slug: "residential-apartments",
      title: "Residential Apartments",
      location: "Lagos, Nigeria",
      country: "Nigeria",
      sector: "Residential",
      services: ["Technical Design & BIM"],
      projectType: "New Build",
      summary:
        "Technical design and coordination support for a residential development, including architectural and structural drawings.",
      imageUrl: "/images/projects/residential-apartments.jpg",
    },
    {
      slug: "healthcare-facility",
      title: "Healthcare Facility",
      location: "Coventry, UK",
      country: "UK",
      sector: "Healthcare",
      services: ["Cost & Commercial", "Technical Design & BIM"],
      projectType: "New Build",
      summary:
        "Cost planning and technical design support for a healthcare facility, including stakeholder coordination and tender analysis.",
      imageUrl: "/images/projects/healthcare-facility.jpg",
    },
    {
      slug: "infrastructure-upgrade",
      title: "Infrastructure Upgrade",
      location: "West Midlands, UK",
      country: "UK",
      sector: "Infrastructure",
      services: ["Project Management", "Cost & Commercial"],
      projectType: "Upgrade",
      summary:
        "Commercial and programme support for an infrastructure upgrade project, including risk tracking and progress reporting.",
      imageUrl: "/images/projects/infrastructure-upgrade.jpg",
    },
    {
      slug: "office-fit-out",
      title: "Office Fit-Out",
      location: "London, UK",
      country: "UK",
      sector: "Commercial",
      services: ["Project Management", "Cost & Commercial"],
      projectType: "Fit-Out",
      summary:
        "Project coordination and cost control for a commercial office fit-out, including contractor management and handover support.",
      imageUrl: "/images/projects/office-fit-out.jpg",
    },
  ] satisfies Project[],

  featured: {
    slug: "riverside-residential-development",
    title: "Riverside Residential Development",
    location: "London, UK",
    description:
      "We provided project management, cost control and technical design coordination for a high-quality residential development, helping the client deliver on time and within budget.",
    sector: "Residential",
    services: ["Project Management", "Cost & Commercial"],
    status: "Completed",
    caption: "Delivering quality homes in prime locations.",
    imageUrl: "/images/projects/riverside-residential.jpg",
  } satisfies FeaturedProjectDetail,

  testimonial: {
    quote:
      "Edmund Castle brought clarity, structure and technical expertise to our project. Their support made a real difference.",
    author: { name: "Project Director", role: "UK Property Developer" },
  },

  stats: [
    { value: "50+", label: "Projects Supported", icon: Building2 },
    { value: "6+", label: "Sectors", icon: Globe },
    { value: "100%", label: "Client Satisfaction Focus", icon: Users },
  ] satisfies StatItem[],

  cta: {
    eyebrow: "Have a project in mind?",
    title: "Let's Build What's Next.",
    text: "Whether you're planning, designing or delivering, we're here to support you.",
    label: "Discuss Your Project",
    to: "/contact",
    imageUrl: "/images/projects-cta.jpg",
  },
};