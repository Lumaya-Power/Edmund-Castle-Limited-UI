import { Check } from "lucide-react";
import { TextLink } from "@/components/common/TextLink";
import type { ServiceDetail } from "@/types/service";
import "./ServiceDetailCard.css";

export function ServiceDetailCard({ service }: { service: ServiceDetail }) {
  const Icon = service.icon;
  const titleId = `${service.slug}-title`;

  return (
    <article id={service.slug} className="service-detail" aria-labelledby={titleId}>
      <div
        className="service-detail__media"
        style={{ backgroundImage: `url(${service.imageUrl})` }}
        aria-hidden="true"
      />

      <div className="service-detail__body">
        <header className="service-detail__header">
          <Icon className="service-detail__icon" size={40} strokeWidth={1.25} aria-hidden="true" />
          <div>
            <h3 id={titleId} className="service-detail__title">
              {service.title}
            </h3>
            <p className="service-detail__tagline">{service.tagline}</p>
          </div>
        </header>

        <ul className="service-detail__features">
          {service.features.map((feature) => (
            <li key={feature}>
              <span className="service-detail__check">
                <Check size={12} strokeWidth={3} aria-hidden="true" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="service-detail__footer">
          <TextLink to={`/services/${service.slug}`}>
            Learn More<span className="sr-only"> about {service.title}</span>
          </TextLink>
        </div>
      </div>
    </article>
  );
}