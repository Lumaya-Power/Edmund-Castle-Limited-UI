import { Lock, MessagesSquare, Users } from "lucide-react";
import type { ContactRow } from "@/types/contact";
import type { FaqItem } from "@/types/howWeWork";
import type { HighlightItem } from "@/types/service";

// The email, phone and WhatsApp details below come from the mockup: replace them with the real ones.
export const contactContent = {
  hero: {
    eyebrow: "Contact us",
    title: "Let's Talk About\nYour Project.",
    lead: "Whether you're at the early planning stage or need specialist support, we're here to help. Tell us about your project and a member of our team will get back to you.",
    aside: ["People.", "Projects.", "Progress."],
    imageUrl: "/images/contact-hero.jpg",
    size: "md" as const,
  },

  highlights: [
    {
      title: "Quick Response",
      description: "We aim to reply within 1–2 working days.",
      icon: MessagesSquare,
    },
    {
      title: "Expert Advice",
      description: "Speak with an experienced professional.",
      icon: Users,
    },
    {
      title: "Confidential",
      description: "Your information is safe with us.",
      icon: Lock,
    },
  ] satisfies HighlightItem[],

  form: {
    eyebrow: "Get in touch",
    title: "Tell Us About Your Project",
    intro: "Fill in the form below and we'll be in touch to discuss your requirements.",
    fallbackEmail: "info@edmundcastle.co.uk",
    options: {
      location: ["United Kingdom", "Nigeria", "International"],
      projectType: ["New Build", "Refurbishment", "Fit-Out", "Upgrade", "Other"],
      budget: ["Under £500k", "£500k – £2m", "£2m – £10m", "Over £10m", "Prefer not to say"],
      services: [
        "Project Management",
        "Cost & Commercial",
        "Technical Design & BIM",
        "Additional services",
        "Multiple services",
        "Not sure yet",
      ],
    },
  },

  details: {
    eyebrow: "Our contact details",
    title: "Get in Touch",
    intro: "You can also reach us directly using the details below.",
    rows: [
      {
        icon: "email",
        label: "Email",
        lines: [{ text: "info@edmundcastle.co.uk", href: "mailto:info@edmundcastle.co.uk" }],
      },
      {
        icon: "phone",
        label: "Phone",
        lines: [
          { text: "+44 7907 915490", href: "tel:+447907915490" },
          { text: "(Mon – Fri, 9am – 5pm GMT)", muted: true },
        ],
      },
      {
        icon: "company",
        label: "Company",
        lines: [
          { text: "Edmund Castle Limited" },
          { text: "United Kingdom" },
          {
            text: "(UK registered company – services delivered across the UK and internationally)",
            muted: true,
          },
        ],
      },
      {
        icon: "linkedin",
        label: "LinkedIn",
        lines: [{ text: "Connect with us on LinkedIn", href: "https://www.linkedin.com/company/edmund-castle/posts" }],
      },
      {
        icon: "whatsapp",
        label: "WhatsApp",
        lines: [{ text: "Chat with us", href: "https://wa.me/447907915490" }],
      },
    ] satisfies ContactRow[],
  },

  meeting: {
    title: "Prefer a direct conversation?",
    text: "Book a free 30-minute consultation to discuss your project.",
    label: "Book a Meeting",
    // Replace with your booking page link when you have one
    href: "mailto:info@edmundcastle.co.uk?subject=Consultation%20request",
  },

  coverage: {
    title: "United Kingdom",
    text: "Supporting clients across the UK with remote and on-site delivery.",
    regions: ["UK", "Nigeria", "International"],
    /** Optional map picture, e.g. "/images/contact-map.png" */
    imageUrl: undefined as string | undefined,
  },

  faq: {
    eyebrow: "Frequent questions",
    title: "Quick Answers",
    link: { label: "View All FAQs", to: "/how-we-work" },
    // The list reads left to right, row by row.
    items: [
      {
        question: "Do you work with clients outside the UK?",
        answer:
          "Yes. Our primary focus is the UK, but we also support projects in Nigeria and internationally, working with a network of trusted partners.",
      },
      {
        question: "How quickly can you respond to a new enquiry?",
        answer: "We aim to reply within 1–2 working days.",
      },
      {
        question: "What types of projects do you support?",
        answer:
          "Residential, commercial, education, healthcare, industrial and infrastructure projects, from early planning through to handover.",
      },
      {
        question: "Can we have an initial consultation before engaging?",
        answer:
          "Yes. We offer a free 30-minute consultation to discuss your project and how we can help.",
      },
    ] satisfies FaqItem[],
  },

  cta: {
    eyebrow: "Ready to get started?",
    title: "Let's Build Something Great Together.",
    text: "From concept to completion, we provide the technical expertise and commercial insight to help you deliver with confidence.",
    label: "Discuss Your Project",
    to: "/contact#enquiry",
    imageUrl: "/images/contact-cta.jpg",
  },
};