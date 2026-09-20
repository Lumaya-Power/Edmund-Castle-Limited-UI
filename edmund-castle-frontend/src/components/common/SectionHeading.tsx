import "./SectionHeading.css";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  id?: string;
  size?: "lg" | "md";
  tone?: "default" | "inverse";
}

export function SectionHeading({
  eyebrow,
  title,
  id,
  size = "lg",
  tone = "default",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${size} section-heading--${tone}`}>
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
    </div>
  );
}
