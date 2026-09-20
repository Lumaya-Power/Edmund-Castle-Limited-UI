import { CtaSplit } from "@/components/contact/CtaSplit";
import { PageHero } from "@/components/hero/PageHero";
import { AdditionalServices } from "@/components/services/AdditionalServices";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { ServiceSubNav } from "@/components/services/ServiceSubNav";
import { WhyWorkWithUs } from "@/components/services/WhyWorkWithUs";
import { servicesContent as content } from "@/config/servicesContent";

export default function ServicesPage() {
  return (
    <>
      <PageHero {...content.hero} />
      <ServiceSubNav items={content.subNav} action={{ label: "Get in Touch", to: "/contact" }} />
      <ServicesOverview {...content.overview} services={content.services} />
      <WhyWorkWithUs items={content.whyWorkWithUs} />
      <AdditionalServices items={content.additionalServices} />
      <CtaSplit {...content.cta} />
    </>
  );
}