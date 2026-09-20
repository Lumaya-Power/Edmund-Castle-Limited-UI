import { Button } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import type { MapNode } from "@/types/howWeWork";
import "./CrossBorderPartner.css";

const MAP_WIDTH = 460;
const MAP_HEIGHT = 260;

function PartnerMap({ nodes }: { nodes: MapNode[] }) {
  return (
    <div
      className="partner-map"
      role="img"
      aria-label="Map showing UK client engagement, Nigeria project delivery and an international partner network"
    >
      <svg
        className="partner-map__svg"
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <pattern id="partner-dots" width="9" height="9" patternUnits="userSpaceOnUse">
            <circle className="partner-map__dot" cx="2" cy="2" r="1.4" />
          </pattern>
          <mask id="partner-land">
            <g fill="#fff">
              <ellipse cx="240" cy="85" rx="120" ry="55" />
              <ellipse cx="225" cy="165" rx="55" ry="70" />
              <ellipse cx="70" cy="120" rx="50" ry="80" />
              <ellipse cx="395" cy="110" rx="55" ry="60" />
              <ellipse cx="395" cy="200" rx="30" ry="25" />
            </g>
          </mask>
        </defs>

        <rect
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          fill="url(#partner-dots)"
          mask="url(#partner-land)"
        />
        <path className="partner-map__arc" d="M225 70 Q330 35 355 145" />
        <path className="partner-map__arc" d="M225 70 Q195 112 215 150" />
        {nodes.map((node) => (
          <circle key={node.name} className="partner-map__node" cx={node.x} cy={node.y} r="5" />
        ))}
      </svg>

      {nodes.map((node) => (
        <div
          key={node.name}
          className={`partner-map__label partner-map__label--${node.placement}`}
          style={{
            left: `${(node.x / MAP_WIDTH) * 100}%`,
            top: `${(node.y / MAP_HEIGHT) * 100}%`,
          }}
        >
          <strong>{node.name}</strong>
          <span>{node.note}</span>
        </div>
      ))}
    </div>
  );
}

interface CrossBorderPartnerProps {
  eyebrow: string;
  title: string;
  text: string;
  cta: { label: string; to: string };
  nodes: MapNode[];
  quote: string;
  author: string;
}

export function CrossBorderPartner({
  eyebrow,
  title,
  text,
  cta,
  nodes,
  quote,
  author,
}: CrossBorderPartnerProps) {
  return (
    <section className="partner" aria-labelledby="partner-title">
      <div className="container partner__inner">
        <div className="partner__intro">
          <SectionHeading eyebrow={eyebrow} title={title} id="partner-title" size="md" />
          <p className="partner__text">{text}</p>
          <Button to={cta.to} variant="outline">
            {cta.label}
          </Button>
        </div>

        <PartnerMap nodes={nodes} />

        <figure className="partner__quote">
          <blockquote className="partner__quote-text">{quote}</blockquote>
          <figcaption className="partner__quote-author">{author}</figcaption>
        </figure>
      </div>
    </section>
  );
}