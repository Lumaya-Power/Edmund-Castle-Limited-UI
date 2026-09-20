export const siteConfig = {
  name: "Edmund Castle Limited",
  shortName: "Edmund Castle",
  tagline: "People. Projects. Progress.",
  nav: [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
    { label: "How We Work", to: "/how-we-work" },
    { label: "Contact", to: "/contact" },
  ],
  cta: { label: "Discuss Your Project", to: "/contact" },
  // Replace with the real company profile URLs
  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
    { name: "X", href: "https://x.com", icon: "x" },
    { name: "YouTube", href: "https://www.youtube.com", icon: "youtube" },
  ],
  legalLinks: [
    { label: "Privacy Policy", to: "/legal#privacy" },
    { label: "Terms", to: "/legal#terms" },
    { label: "Cookies", to: "/legal#cookies" },
  ],
} as const;
