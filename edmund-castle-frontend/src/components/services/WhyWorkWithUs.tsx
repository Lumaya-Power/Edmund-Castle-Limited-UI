import type { HighlightItem } from "@/types/service";
import "./WhyWorkWithUs.css";

export function WhyWorkWithUs({ items }: { items: HighlightItem[] }) {
  return (
    <section className="why-us" aria-labelledby="why-us-title">
      <div className="container">
        <h2 id="why-us-title" className="why-us__eyebrow">
          Why work with us
        </h2>

        <ul className="why-us__list">
          {items.map(({ title, description, icon: Icon }) => (
            <li key={title} className="why-us__item">
              <Icon className="why-us__icon" size={36} strokeWidth={1.25} aria-hidden="true" />
              <h3 className="why-us__title">{title}</h3>
              <p className="why-us__text">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}