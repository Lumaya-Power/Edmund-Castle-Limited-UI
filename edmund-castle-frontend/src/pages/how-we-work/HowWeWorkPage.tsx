import { CrossBorderPartner } from "@/components/about/CrossBorderPartner";
import { ProcessSteps } from "@/components/about/ProcessSteps";
import { ToolsCollaboration } from "../../components/about/ToolsCollaborations";
import { TrustBar } from "@/components/about/TrustBar";
import { FaqSection } from "@/components/common/FaqSection";
import { CtaBanner } from "@/components/contact/CtaBanner";
import { PageHero } from "@/components/hero/PageHero";
import { howWeWorkContent as content } from "@/config/howWeWorkContent";

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero {...content.hero} />
      <TrustBar {...content.trust} />
      <ProcessSteps {...content.process} />
      <ToolsCollaboration {...content.tools} />
      <CrossBorderPartner {...content.partner} />
      <FaqSection {...content.faq} />
      <CtaBanner {...content.cta} />
    </>
  );
}