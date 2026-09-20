import { Award, Handshake, Leaf, Lightbulb, ShieldCheck } from "lucide-react";
import type { FounderInfo, PerspectiveItem, StoryInfo, ValueItem } from "@/types/about";

// Copy taken from the mockup. Check names, qualifications and wording before launch.
export const aboutContent = {
  hero: {
    eyebrow: "About Edmund Castle Limited",
    title: "People. Expertise.\nBetter Built Environments.",
    lead: "We are a UK-facing construction and property technical consultancy, providing project management, cost and commercial services, and technical design support across the UK and internationally.",
    cta: { label: "Our Services", to: "/services" },
    aside: ["A", "clearer", "tomorrow,", "built today."],
    imageUrl: "/images/about-hero.jpg",
    size: "md" as const,
  },

  founder: {
    name: "Edmond Fagbuyi",
    role: "Founder & CEO",
    imageUrl: "/images/founder.jpg",
    quote:
      "I founded Edmund Castle to bring clarity, structure and technical expertise to construction and property projects.",
    bio: [
      "Edmond is a Civil and Structural Engineer with experience in construction, project management and property development. He has a strong academic foundation with an MSc in Construction Project Management from Robert Gordon University, Aberdeen, an MSc in Structural Engineering (Distinction) from the University of Lagos, and a BSc in Civil & Environmental Engineering from the University of Lagos.",
      "His background combines technical engineering knowledge with commercial and project management experience, enabling a practical and solutions-focused approach to delivering successful projects.",
    ],
    credentials: [
      {
        title: "MSc Construction Project Management",
        institution: "Robert Gordon University, Aberdeen",
      },
      {
        title: "MSc Structural Engineering (Distinction)",
        institution: "University of Lagos",
      },
      {
        title: "BSc Civil & Environmental Engineering",
        institution: "University of Lagos",
      },
    ],
  } satisfies FounderInfo,

  story: {
    eyebrow: "Our story",
    title: "Built on Experience. Driven by Impact.",
    paragraphs: [
      "Edmund Castle Limited was established to provide high-quality construction and property technical services to clients across the UK and internationally.",
      "We combine technical expertise, commercial awareness and a collaborative approach to support developers, contractors, consultants and property owners throughout the project lifecycle.",
      "Although our core operations are managed from Nigeria, we work with UK clients and partners, delivering services remotely and on-site where required. Our focus is on building long-term relationships through professionalism, reliability and measurable results.",
    ],
    cta: { label: "Our Projects", to: "/projects" },
  } satisfies StoryInfo,

  values: {
    eyebrow: "Our values",
    title: "The Principles That Guide Us",
    intro:
      "Our values shape how we work, how we support our clients and the standards we uphold in every project.",
    items: [
      { title: "Integrity", description: "We do the right thing, always.", icon: ShieldCheck },
      { title: "Excellence", description: "We strive for the highest standards.", icon: Award },
      { title: "Collaboration", description: "We achieve more together.", icon: Handshake },
      {
        title: "Practical Solutions",
        description: "We focus on workable, real-world outcomes.",
        icon: Lightbulb,
      },
      {
        title: "Sustainable Impact",
        description: "We support better, more resilient built environments.",
        icon: Leaf,
      },
    ] satisfies ValueItem[],
  },

  perspective: {
    title: "Our Global Perspective",
    text: "While our primary focus is the UK, we support projects across Nigeria and internationally, working with a network of trusted partners to deliver specialist expertise where it's needed.",
    cta: { label: "Discuss Your Project", to: "/contact" },
    items: [
      {
        title: "United Kingdom",
        description: "Supporting clients across the UK with remote and on-site delivery.",
        imageUrl: "/images/about/united-kingdom.jpg",
      },
      {
        title: "Nigeria",
        description: "Leveraging local knowledge and networks.",
        imageUrl: "/images/about/nigeria.jpg",
      },
      {
        title: "International",
        description: "Collaborating on projects worldwide through trusted partners.",
        imageUrl: "/images/about/international.jpg",
      },
    ] satisfies PerspectiveItem[],
  },

  cta: {
    eyebrow: "A long-term partner",
    title: "Let's Build a Better Tomorrow.",
    text: "Whether you're planning, designing or delivering a project, we're here to provide the expertise and support you need.",
    label: "Start a Conversation",
    to: "/contact",
    imageUrl: "/images/about-cta.jpg",
    aside: ["People.", "Projects.", "Progress."],
  },
};