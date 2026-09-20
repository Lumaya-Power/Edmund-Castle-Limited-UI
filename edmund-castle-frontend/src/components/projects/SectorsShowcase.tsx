import { Button } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import type { IconLabelItem } from "@/types/content";
import "./SectorsShowcase.css";

export function SectorsShowcase({ sectors }: { sectors: IconLabelItem[] }) {
  return (
    <section className="sectors" aria-labelledby="sectors-title">
      <div className="sectors__media">
        <p className="sectors__caption">Real projects. Real impact.</p>
      </div>

      <div className="sectors__content">
        <div className="sectors__intro">
          <SectionHeading
            eyebrow="Selected experience"
            title="Delivering Value Across Sectors"
            id="sectors-title"
          />
          <p className="sectors__text">
            From residential and commercial developments to education and infrastructure, we have
            supported clients with technical and commercial expertise across a range of projects.
          </p>
          <Button to="/projects">View Our Projects</Button>
        </div>

        <ul className="sectors__list">
          {sectors.map(({ label, icon: Icon }) => (
            <li key={label} className="sectors__item">
              <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
