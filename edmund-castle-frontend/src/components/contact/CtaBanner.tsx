import type { CSSProperties } from "react";
import { Button } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import "./CtaBanner.css";

interface CtaBannerProps {
  eyebrow?: string;
  title?: string;
  text?: string;
  label?: string;
  to?: string;
  /** Background photo. Defaults to /images/cta-site.jpg */
  imageUrl?: string;
  /** Optional italic tagline shown on the right, one line per item */
  aside?: string[];
}

export function CtaBanner({
  eyebrow = "Let's build together",
  title = "Ready to discuss your project?",
  text = "Whether you’re a developer, main contractor, consultant or private client, we’re here to help you move your project forward with confidence.",
  label = "Start a Conversation",
  to = "/contact",
  imageUrl,
  aside,
}: CtaBannerProps) {
  const style = imageUrl
    ? ({ "--cta-banner-image": `url("${imageUrl}")` } as CSSProperties)
    : undefined;

  return (
    <section className="cta-banner" style={style} aria-labelledby="cta-title">
      <div className="container cta-banner__inner">
        <div className="cta-banner__copy">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            id="cta-title"
            size="md"
            tone="inverse"
          />
          <p className="cta-banner__text">{text}</p>
        </div>

        <Button to={to}>{label}</Button>

        {aside && (
          <p className="cta-banner__aside">
            {aside.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}