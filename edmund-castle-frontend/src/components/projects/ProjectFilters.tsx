import { ChevronDown, RotateCw } from "lucide-react";
import type { ProjectFilterOptions, ProjectFilterState } from "../../types/projects";
import "./ProjectFilters.css";

const fields: { key: keyof ProjectFilterState; label: string; allLabel: string }[] = [
  { key: "sector", label: "Sector", allLabel: "All Sectors" },
  { key: "service", label: "Service", allLabel: "All Services" },
  { key: "location", label: "Location", allLabel: "All Locations" },
  { key: "projectType", label: "Project type", allLabel: "All Project Types" },
];

interface ProjectFiltersProps {
  filters: ProjectFilterState;
  options: ProjectFilterOptions;
  onChange: (key: keyof ProjectFilterState, value: string) => void;
  onReset: () => void;
  canReset: boolean;
}

export function ProjectFilters({
  filters,
  options,
  onChange,
  onReset,
  canReset,
}: ProjectFiltersProps) {
  return (
    <section className="project-filters" aria-label="Filter projects">
      <div className="container project-filters__inner">
        <p id="project-filters-title" className="project-filters__title">
          Filter Projects
        </p>

        <div className="project-filters__fields" role="group" aria-labelledby="project-filters-title">
          {fields.map(({ key, label, allLabel }) => (
            <div key={key} className="project-filters__field">
              <label htmlFor={`filter-${key}`} className="sr-only">
                {label}
              </label>
              <select
                id={`filter-${key}`}
                className="project-filters__select"
                value={filters[key]}
                onChange={(event) => onChange(key, event.target.value)}
              >
                <option value="">{allLabel}</option>
                {options[key].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="project-filters__chevron" size={16} aria-hidden="true" />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="project-filters__reset"
          onClick={onReset}
          disabled={!canReset}
        >
          Reset Filters
          <RotateCw size={16} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}