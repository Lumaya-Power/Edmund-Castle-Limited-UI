import type { LucideIcon } from "lucide-react";
import { Building2, Coins, HardHat } from "lucide-react";
import { TextLink } from "@/components/common/TextLink";
import type { ServiceSummary } from "@/types/service";
import "./ServiceCard.css";

const serviceIcons: Record<string, LucideIcon> = {
  "project-management": HardHat,
  "cost-commercial": Coins,
  "technical-design-bim": Building2,
};

export function ServiceCard({ service }: { service: ServiceSummary }) {
  const Icon = serviceIcons[service.slug] ?? Building2;

  return (
    <article className="service-card">
      <div className="service-card__media" style={{ backgroundImage: `url(${service.imageUrl})` }}>
        <span className="service-card__icon">
          <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
        </span>
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__text">{service.summary}</p>
        <TextLink to={`/services#${service.slug}`}>
          Learn More<span className="sr-only"> about {service.title}</span>
        </TextLink>
      </div>
    </article>
  );
}
