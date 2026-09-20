import type { ReactNode } from "react";
import "./ContactSection.css";

export function ContactSection({ children }: { children: ReactNode }) {
  return (
    <section
      id="enquiry"
      className="contact-section"
      aria-label="Enquiry form and contact details"
    >
      <div className="container contact-section__inner">{children}</div>
    </section>
  );
}