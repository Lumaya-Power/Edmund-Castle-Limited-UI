import type { CSSProperties } from "react";
import { Button } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import "./CtaSplit.css";

interface CtaSplitProps {
  eyebrow: string;
  title: string;
  text: string;
  label: string;
  to: string;
  imageUrl: string;
}

export function CtaSplit({ eyebrow, title, text, label, to, imageUrl }: CtaSplitProps) {
  const style = { "--cta-split-image": `url("${imageUrl}")` } as CSSProperties;

  return (
    <section className="cta-split" aria-labelledby="cta-split-title">
      <div className="cta-split__content">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          id="cta-split-title"
          size="md"
          tone="inverse"
        />
        <p className="cta-split__text">{text}</p>
        <Button to={to} className="cta-split__button">
          {label}
        </Button>
      </div>
      <div className="cta-split__media" style={style} aria-hidden="true" />
    </section>
  );
}