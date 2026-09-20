import { SectionHeading } from "@/components/common/SectionHeading";
import type { ValueItem } from "@/types/about";
import "./ValuesSection.css";

interface ValuesSectionProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: ValueItem[];
}

export function ValuesSection({ eyebrow, title, intro, items }: ValuesSectionProps) {
  return (
    <section className="values" aria-labelledby="values-title">
      <div className="container values__inner">
        <div className="values__intro">
          <SectionHeading eyebrow={eyebrow} title={title} id="values-title" />
          <p className="values__text">{intro}</p>
        </div>

        <ul className="values__list">
          {items.map(({ title: itemTitle, description, icon: Icon }) => (
            <li key={itemTitle} className="values__item">
              <Icon className="values__icon" size={34} strokeWidth={1.25} aria-hidden="true" />
              <h3 className="values__title">{itemTitle}</h3>
              <p className="values__description">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}