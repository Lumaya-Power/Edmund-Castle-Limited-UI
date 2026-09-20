import { SectionHeading } from "@/components/common/SectionHeading";
import type { ServiceDetail } from "@/types/service";
import { ServiceDetailCard } from "./ServiceDetailCard";
import "./ServicesOverview.css";

interface ServicesOverviewProps {
  eyebrow: string;
  title: string;
  intro: string;
  services: ServiceDetail[];
}

export function ServicesOverview({ eyebrow, title, intro, services }: ServicesOverviewProps) {
  return (
    <section id="overview" className="services-overview" aria-labelledby="overview-title">
      <div className="container">
        <div className="services-overview__header">
          <SectionHeading eyebrow={eyebrow} title={title} id="overview-title" />
          <p className="services-overview__intro">{intro}</p>
        </div>

        <div className="services-overview__grid">
          {services.map((service) => (
            <ServiceDetailCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}