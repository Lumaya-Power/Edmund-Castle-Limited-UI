import { CtaBanner } from "@/components/contact/CtaBanner";
import { PageHero } from "@/components/hero/PageHero";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { TestimonialStats } from "@/components/projects/TestimonialStats";
import { projectsContent as content } from "@/config/projectsContent";
import { useProjectFilters } from "@/hooks/useProjectFilters";

export default function ProjectsPage() {
  const { filters, options, projects, setFilter, reset, isFiltered } = useProjectFilters(
    content.projects
  );

  return (
    <>
      <PageHero {...content.hero} />
      <ProjectFilters
        filters={filters}
        options={options}
        onChange={setFilter}
        onReset={reset}
        canReset={isFiltered}
      />
      <ProjectsGrid {...content.grid} projects={projects} onReset={reset} />
      <FeaturedProject project={content.featured} />
      <TestimonialStats {...content.testimonial} stats={content.stats} />
      <CtaBanner {...content.cta} />
    </>
  );
}