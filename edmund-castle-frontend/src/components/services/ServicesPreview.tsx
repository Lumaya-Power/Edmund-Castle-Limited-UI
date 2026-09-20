import { SectionHeading } from "@/components/common/SectionHeading";
import { TextLink } from "@/components/common/TextLink";
import type { ServiceSummary } from "@/types/service";
import { ServiceCard } from "./ServiceCard";
import "./ServicesPreview.css";

export function ServicesPreview({ services }: { services: ServiceSummary[] }) {
  return (
    <section className="services-preview" aria-labelledby="services-preview-title">
      <div className="container">
        <div className="services-preview__header">
          <SectionHeading
            eyebrow="What we do"
            title="Our Core Services"
            id="services-preview-title"
          />
          <TextLink to="/services">View All Services</TextLink>
        </div>
        <div className="services-preview__grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
