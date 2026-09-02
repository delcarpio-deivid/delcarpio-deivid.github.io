import { useState } from "react";
import { SectionBlock } from "../ui/SectionBlock";
import { ProjectCard } from "../projects/ProjectCard";
import type { ProjectsData, SectionConfig } from "../../content/sections";

export function Projects({ id, index, kicker, title, alt, data }: SectionConfig<ProjectsData>) {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <SectionBlock id={id} index={index} kicker={kicker} title={title} alt={alt}>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
        {data.items.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            isExpanded={expandedSlug === project.slug}
            onToggle={() =>
              setExpandedSlug((current) => (current === project.slug ? null : project.slug))
            }
          />
        ))}
      </div>
    </SectionBlock>
  );
}
