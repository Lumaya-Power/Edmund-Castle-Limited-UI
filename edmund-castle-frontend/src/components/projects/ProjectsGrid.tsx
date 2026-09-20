import { Button } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import type { Project } from "../../types/projects";
import { ProjectCard } from "./ProjectCard";
import "./ProjectsGrid.css";

interface ProjectsGridProps {
  eyebrow: string;
  title: string;
  intro: string;
  projects: Project[];
  onReset: () => void;
}

export function ProjectsGrid({ eyebrow, title, intro, projects, onReset }: ProjectsGridProps) {
  return (
    <section className="projects-grid" aria-labelledby="projects-grid-title">
      <div className="container">
        <div className="projects-grid__header">
          <SectionHeading eyebrow={eyebrow} title={title} id="projects-grid-title" />
          <p className="projects-grid__intro">{intro}</p>
        </div>

        <p className="sr-only" role="status">
          {projects.length} {projects.length === 1 ? "project" : "projects"} shown
        </p>

        {projects.length > 0 ? (
          <div className="projects-grid__list">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="projects-grid__empty">
            <p>No projects match these filters.</p>
            <Button onClick={onReset} arrow={false}>
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}