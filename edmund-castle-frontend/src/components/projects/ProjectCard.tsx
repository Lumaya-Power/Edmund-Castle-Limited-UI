import { MapPin } from "lucide-react";
import { TextLink } from "@/components/common/TextLink";
import type { Project } from "@/types/project";
import "./ProjectCard.css";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card__media" style={{ backgroundImage: `url(${project.imageUrl})` }}>
        <ul className="project-card__tags">
          <li>{project.sector}</li>
          <li>{project.country}</li>
        </ul>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__location">
          <MapPin size={14} aria-hidden="true" />
          {project.location}
        </p>
        <p className="project-card__text">{project.summary}</p>
        <TextLink to={`/projects/${project.slug}`}>
          View Project<span className="sr-only">: {project.title}</span>
        </TextLink>
      </div>
    </article>
  );
}