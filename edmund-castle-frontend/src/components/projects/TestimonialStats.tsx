import type { StatItem } from "@/types/content";
import "./TestimonialStats.css";

interface TestimonialStatsProps {
  quote: string;
  author: { name: string; role: string };
  stats: StatItem[];
}

export function TestimonialStats({ quote, author, stats }: TestimonialStatsProps) {
  return (
    <section className="testimonial-stats" aria-label="Client feedback and results">
      <div className="container testimonial-stats__inner">
        <figure className="testimonial-stats__quote">
          <blockquote className="testimonial-stats__text">{quote}</blockquote>
          <figcaption className="testimonial-stats__author">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </figcaption>
        </figure>

        <ul className="testimonial-stats__stats">
          {stats.map(({ value, label, icon: Icon }) => (
            <li key={label} className="testimonial-stats__stat">
              <Icon
                className="testimonial-stats__icon"
                size={40}
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <div>
                <p className="testimonial-stats__value">{value}</p>
                <p className="testimonial-stats__label">{label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}