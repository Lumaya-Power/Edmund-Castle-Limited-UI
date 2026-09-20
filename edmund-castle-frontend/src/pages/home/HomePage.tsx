import { StatsStrip } from "../../components/about/StatsStrip";
import { CtaBanner } from "../../components/contact/CtaBanner";
import { Hero } from "../../components/hero/Hero";
import { SectorsShowcase } from "../../components/projects/SectorsShowcase";
import { ServicesPreview } from "../../components/services/ServicesPreview";
import { homeContent } from "../../config/homeContent";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview services={homeContent.services} />
      <StatsStrip stats={homeContent.stats} quote={homeContent.quote} />
      <SectorsShowcase sectors={homeContent.sectors} />
      <CtaBanner />
    </>
  );
}
