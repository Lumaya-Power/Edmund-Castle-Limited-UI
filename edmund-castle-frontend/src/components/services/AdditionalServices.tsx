import { SectionHeading } from "@/components/common/SectionHeading";
import { TextLink } from "@/components/common/TextLink";
import type { HighlightItem } from "@/types/service";
import "./AdditionalServices.css";

export function AdditionalServices({ items }: { items: HighlightItem[] }) {
  return (
    <section
      id="additional-services"
      className="additional-services"
      aria-labelledby="additional-services-title"
    >
      <div className="container">
        <div className="additional-services__header">
          <SectionHeading
            eyebrow="Additional services"
            title="Supporting Your Wider Project Needs"
            id="additional-services-title"
            size="md"
          />
          <TextLink to="/services">View All Services</TextLink>
        </div>

        <ul className="additional-services__grid">
          {items.map(({ title, description, icon: Icon }) => (
            <li key={title} className="additional-services__card">
              <Icon
                className="additional-services__icon"
                size={40}
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <div>
                <h3 className="additional-services__title">{title}</h3>
                <p className="additional-services__text">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}