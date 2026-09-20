import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TextLink } from "@/components/common/TextLink";
import type { FaqItem } from "@/types/howWeWork";
import "./FaqSection.css";

interface FaqSectionProps {
  eyebrow: string;
  title: string;
  link: { label: string; to: string };
  items: FaqItem[];
  tone?: "default" | "alt";
}

export function FaqSection({ eyebrow, title, link, items, tone = "default" }: FaqSectionProps) {
  return (
    <section className={`faq faq--${tone}`} aria-labelledby="faq-title">
      <div className="container">
        <div className="faq__header">
          <SectionHeading eyebrow={eyebrow} title={title} id="faq-title" size="md" />
          <TextLink to={link.to}>{link.label}</TextLink>
        </div>

        <div className="faq__list">
          {items.map((item) => (
            <details key={item.question} className="faq__item">
              <summary className="faq__question">
                <span>{item.question}</span>
                <Plus className="faq__icon" size={18} aria-hidden="true" />
              </summary>
              <p className="faq__answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}