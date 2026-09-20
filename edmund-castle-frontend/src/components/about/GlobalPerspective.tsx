import { Button } from "@/components/common/Button";
import type { PerspectiveItem } from "@/types/about";
import "./GlobalPerspective.css";

interface GlobalPerspectiveProps {
  title: string;
  text: string;
  cta: { label: string; to: string };
  items: PerspectiveItem[];
}

export function GlobalPerspective({ title, text, cta, items }: GlobalPerspectiveProps) {
  return (
    <section className="global-perspective" aria-labelledby="global-perspective-title">
      <div className="container global-perspective__inner">
        <div className="global-perspective__intro">
          <h2 id="global-perspective-title" className="global-perspective__title">
            {title}
          </h2>
          <p className="global-perspective__text">{text}</p>
          <Button to={cta.to}>{cta.label}</Button>
        </div>

        <ul className="global-perspective__list">
          {items.map((item) => (
            <li key={item.title} className="global-perspective__item">
              <div
                className="global-perspective__image"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                aria-hidden="true"
              />
              <h3 className="global-perspective__item-title">{item.title}</h3>
              <p className="global-perspective__item-text">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}