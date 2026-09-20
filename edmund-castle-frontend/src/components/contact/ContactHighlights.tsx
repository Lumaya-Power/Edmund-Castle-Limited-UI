import type { HighlightItem } from "@/types/service";
import "./ContactHighlights.css";

export function ContactHighlights({ items }: { items: HighlightItem[] }) {
  return (
    <ul className="contact-highlights">
      {items.map(({ title, description, icon: Icon }) => (
        <li key={title} className="contact-highlights__item">
          <Icon
            className="contact-highlights__icon"
            size={38}
            strokeWidth={1.25}
            aria-hidden="true"
          />
          <div>
            <p className="contact-highlights__title">{title}</p>
            <p className="contact-highlights__text">{description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}