import { FounderStory } from "@/components/about/FounderStory";
import { GlobalPerspective } from "@/components/about/GlobalPerspective";
import { ValuesSection } from "@/components/about/ValuesSection";
import { CtaBanner } from "@/components/contact/CtaBanner";
import { PageHero } from "@/components/hero/PageHero";
import { aboutContent as content } from "@/config/aboutContent";

export default function AboutPage() {
  return (
    <>
      <PageHero {...content.hero} />
      <FounderStory founder={content.founder} story={content.story} />
      <ValuesSection {...content.values} />
      <GlobalPerspective {...content.perspective} />
      <CtaBanner {...content.cta} />
    </>
  );
}