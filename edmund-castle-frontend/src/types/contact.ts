export type ContactIcon = "email" | "phone" | "company" | "linkedin" | "whatsapp";

export interface ContactLine {
  text: string;
  href?: string;
  /** Smaller, lighter text for notes such as opening hours */
  muted?: boolean;
}

export interface ContactRow {
  icon: ContactIcon;
  label: string;
  lines: ContactLine[];
}