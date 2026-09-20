import type { CSSProperties, ReactNode } from "react";
import { Button } from "@/components/common/Button";
import "./PageHero.css";

interface PageHeroProps {
  eyebrow: string;
  /** Use "\n" to force a line break. */
  title: string;
  lead: string;
  imageUrl: string;
  size?: "lg" | "md";
  cta?: { label: string; to: string };
  aside?: string[];
  /** Optional extra content shown under the text, e.g. a row of highlights */
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  lead,
  imageUrl,
  size = "lg",
  cta,
  aside,
  children,
}: PageHeroProps) {
  const style = { "--page-hero-image": `url("${imageUrl}")` } as CSSProperties;

  return (
    <section
      className={`page-hero page-hero--${size}`}
      style={style}
      aria-labelledby="page-hero-title"
    >
      <div className="container page-hero__inner">
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">{eyebrow}</p>
          <h1 id="page-hero-title" className="page-hero__title">
            {title.split("\n").map((line) => (
              <span key={line} className="page-hero__title-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="page-hero__lead">{lead}</p>
          {cta && (
            <Button to={cta.to} className="page-hero__cta">
              {cta.label}
            </Button>
          )}
          {children && <div className="page-hero__extra">{children}</div>}
        </div>

        {aside && (
          <p className="page-hero__aside">
            {aside.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}