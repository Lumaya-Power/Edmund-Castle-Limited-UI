import { FaqSection } from "@/components/common/FaqSection";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactHighlights } from "@/components/contact/ContactHighlights";
import { ContactSection } from "@/components/contact/ContactSection";
import { CtaBanner } from "@/components/contact/CtaBanner";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { PageHero } from "@/components/hero/PageHero";
import { contactContent as content } from "@/config/contactContent";

export default function ContactPage() {
  return (
    <>
      <PageHero {...content.hero}>
        <ContactHighlights items={content.highlights} />
      </PageHero>

      <ContactSection>
        <EnquiryForm {...content.form} />
        <ContactDetails
          {...content.details}
          meeting={content.meeting}
          coverage={content.coverage}
        />
      </ContactSection>

      <FaqSection {...content.faq} tone="alt" />
      <CtaBanner {...content.cta} />
    </>
  );
}