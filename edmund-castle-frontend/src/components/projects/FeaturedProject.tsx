import { House, Layers, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/common/Button";
import type { FeaturedProjectDetail } from "@/types/project";
import "./FeaturedProject.css";

export function FeaturedProject({ project }: { project: FeaturedProjectDetail }) {
  const meta = [
    { label: "Sector", value: project.sector, icon: House },
    { label: "Services", value: project.services.join(", "), icon: Layers },
    { label: "Status", value: project.status, icon: ShieldCheck },
  ];

  return (
    <section className="featured-project" aria-labelledby="featured-project-title">
      <div className="container">
        <div className="featured-project__inner">
          <div
            className="featured-project__media"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          >
            <span className="featured-project__badge">Featured project</span>
            <p className="featured-project__caption">{project.caption}</p>
          </div>

          <div className="featured-project__content">
            <p className="featured-project__eyebrow">Featured case study</p>
            <h2 id="featured-project-title" className="featured-project__title">
              {project.title}
            </h2>
            <p className="featured-project__location">
              <MapPin size={14} aria-hidden="true" />
              {project.location}
            </p>
            <p className="featured-project__text">{project.description}</p>

            <dl className="featured-project__meta">
              {meta.map(({ label, value, icon: Icon }) => (
                <div key={label} className="featured-project__meta-item">
                  <Icon
                    className="featured-project__meta-icon"
                    size={30}
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <div>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <Button to={`/projects/${project.slug}`}>View Full Case Study</Button>
          </div>
        </div>
      </div>
    </section>
  );
}