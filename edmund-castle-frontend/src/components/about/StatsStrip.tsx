import type { StatItem } from "@/types/content";
import "./StatsStrip.css";

interface StatsStripProps {
  stats: StatItem[];
  quote: string;
}

export function StatsStrip({ stats, quote }: StatsStripProps) {
  return (
    <section className="stats-strip" aria-label="Edmund Castle in numbers">
      <div className="container stats-strip__inner">
        <ul className="stats-strip__stats">
          {stats.map(({ value, label, icon: Icon }) => (
            <li key={label} className="stats-strip__stat">
              <Icon className="stats-strip__icon" size={44} strokeWidth={1.25} aria-hidden="true" />
              <div>
                <p className="stats-strip__value">{value}</p>
                <p className="stats-strip__label">{label}</p>
              </div>
            </li>
          ))}
        </ul>
        <blockquote className="stats-strip__quote">{quote}</blockquote>
      </div>
    </section>
  );
}
