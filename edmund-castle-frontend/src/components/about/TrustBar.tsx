import type { IconLabelItem } from "@/types/content";
import "./TrustBar.css";

interface TrustBarProps {
  items: IconLabelItem[];
  note: string;
}

export function TrustBar({ items, note }: TrustBarProps) {
  return (
    <section className="trust-bar" aria-label="Why clients choose us">
      <div className="container trust-bar__inner">
        <ul className="trust-bar__list">
          {items.map(({ label, icon: Icon }) => (
            <li key={label} className="trust-bar__item">
              <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
        <p className="trust-bar__note">{note}</p>
      </div>
    </section>
  );
}