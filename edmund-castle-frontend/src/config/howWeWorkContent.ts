import {
  Globe,
  MapPin,
  MessagesSquare,
  FileText,
  ShieldCheck,
  TrendingUp,
  Users,
  CircleCheck,
} from "lucide-react";
import type { IconLabelItem } from "@/types/content";
import type { FaqItem, MapNode, ProcessStep, ToolItem } from "@/types/howWeWork";

// Copy taken from the mockup. The FAQ answers are drafts: please review and edit them.
export const howWeWorkContent = {
  hero: {
    eyebrow: "How we work",
    title: "A Clear, Structured\nApproach to Project Success.",
    lead: "We combine technical expertise, commercial insight and collaborative working practices to deliver better built environments — wherever you are in the world.",
    cta: { label: "Discuss Your Project", to: "/contact" },
    aside: ["People.", "Projects.", "Progress."],
    imageUrl: "/images/how-we-work-hero.jpg",
    size: "md" as const,
  },

  trust: {
    items: [
      { label: "UK Expertise", icon: Globe },
      { label: "Global Delivery", icon: MapPin },
      { label: "Collaborative Approach", icon: Users },
      { label: "Quality Focus", icon: ShieldCheck },
    ] satisfies IconLabelItem[],
    note: "From concept to completion — with you at every step.",
  },

  process: {
    eyebrow: "Our process",
    title: "How We Work",
    intro:
      "A structured, transparent and collaborative approach to deliver your project with confidence.",
    link: { label: "Let's Discuss Your Project", to: "/contact" },
    steps: [
      {
        title: "Understand",
        description:
          "We take time to understand your project, objectives, constraints and success criteria.",
        icon: MessagesSquare,
      },
      {
        title: "Plan",
        description:
          "We develop a tailored plan covering technical, commercial and programme requirements.",
        icon: FileText,
      },
      {
        title: "Coordinate",
        description:
          "We bring together the right professionals, consultants and contractors for your project.",
        icon: Users,
      },
      {
        title: "Control",
        description:
          "We monitor progress, costs, risks and quality, providing clear and regular reporting.",
        icon: TrendingUp,
      },
      {
        title: "Deliver",
        description:
          "We support you through to completion, ensuring a successful handover and ongoing support where needed.",
        icon: CircleCheck,
      },
    ] satisfies ProcessStep[],
  },

  tools: {
    eyebrow: "Tools and collaboration",
    title: "Modern Tools. Seamless Collaboration.",
    text: "We use industry-standard tools and proven collaboration methods to ensure efficient communication and high-quality delivery, regardless of location.",
    imageUrl: "/images/how-we-work/tools.jpg",
    caption: ["Technology.", "People.", "Better Outcomes."],
    tools: [
      { name: "Autodesk Revit" },
      { name: "Autodesk AutoCAD" },
      { name: "Microsoft Teams" },
      { name: "Planon" },
      { name: "Excel" },
      { name: "Power BI" },
    ] satisfies ToolItem[],
    panelTitle: "You'll Always Have:",
    panelItems: [
      "Clear lines of communication",
      "Defined deliverables and timelines",
      "Regular progress updates",
      "Transparent cost tracking",
      "A dedicated point of contact",
      "Access to project information",
      "A collaborative, solution-focused team",
    ],
  },

  partner: {
    eyebrow: "Working across borders",
    title: "A UK-Facing Partner with Global Capability.",
    text: "Although our core operations are managed from Nigeria, we work closely with UK clients and partners, providing a seamless, professional and reliable service across different time zones.",
    cta: { label: "Our Services", to: "/services" },
    nodes: [
      { name: "UK", note: "Client Engagement", x: 225, y: 70, placement: "left" },
      { name: "Nigeria", note: "Project Delivery", x: 215, y: 150, placement: "right" },
      { name: "International", note: "Partner Network", x: 355, y: 145, placement: "right" },
    ] satisfies MapNode[],
    quote:
      "Their structured approach, clear communication and technical insight made a real difference to our project.",
    author: "UK Property Developer",
  },

  faq: {
    eyebrow: "Frequent questions",
    title: "Your Questions, Answered",
    link: { label: "Still Have Questions? Contact Us", to: "/contact" },
    // Order matters: the list reads left to right, row by row.
    items: [
      {
        question: "How do you work with UK clients from Nigeria?",
        answer:
          "We work as an extension of your team, using shared tools, regular video calls and clear reporting so communication stays simple across time zones. On-site support is arranged where it is needed.",
      },
      {
        question: "What tools do you use for collaboration?",
        answer:
          "We use industry-standard tools such as Autodesk Revit and AutoCAD, Microsoft Teams, Planon, Excel and Power BI to keep design, cost and progress information coordinated.",
      },
      {
        question: "What types of projects do you support?",
        answer:
          "We support residential, commercial, education, healthcare, industrial and infrastructure projects, from early planning through to handover.",
      },
      {
        question: "Can you support on-site work in the UK?",
        answer:
          "Yes. We deliver services remotely and on-site where required, working with UK partners so your project has the right presence when it matters.",
      },
    ] satisfies FaqItem[],
  },

  cta: {
    eyebrow: "Ready to work together?",
    title: "Let's Move Your Project Forward.",
    text: "Whether you're at the early planning stage or need specialist support, we're here to help.",
    label: "Discuss Your Project",
    to: "/contact",
    imageUrl: "/images/how-we-work-cta.jpg",
  },
};