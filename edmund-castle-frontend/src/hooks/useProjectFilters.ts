import { useMemo, useState } from "react";
import type { Project, ProjectFilterOptions, ProjectFilterState } from "../types/projects";

const emptyFilters: ProjectFilterState = {
  sector: "",
  service: "",
  location: "",
  projectType: "",
};

const unique = (values: string[]) =>
  Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));

export function useProjectFilters(projects: Project[]) {
  const [filters, setFilters] = useState<ProjectFilterState>(emptyFilters);

  const options = useMemo<ProjectFilterOptions>(
    () => ({
      sector: unique(projects.map((project) => project.sector)),
      service: unique(projects.flatMap((project) => project.services)),
      location: unique(projects.map((project) => project.country)),
      projectType: unique(projects.map((project) => project.projectType)),
    }),
    [projects]
  );

  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          (!filters.sector || project.sector === filters.sector) &&
          (!filters.service || project.services.includes(filters.service)) &&
          (!filters.location || project.country === filters.location) &&
          (!filters.projectType || project.projectType === filters.projectType)
      ),
    [projects, filters]
  );

  const setFilter = (key: keyof ProjectFilterState, value: string) =>
    setFilters((previous) => ({ ...previous, [key]: value }));

  const reset = () => setFilters(emptyFilters);

  const isFiltered = Object.values(filters).some(Boolean);

  return { filters, options, projects: filtered, setFilter, reset, isFiltered };
}