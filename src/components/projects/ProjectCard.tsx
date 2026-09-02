import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Chip } from "../ui/Chip";
import type { ProjectItem } from "../../content/sections";
import { ProjectCaseStudy } from "./ProjectCaseStudy";
import { ProjectDiagram } from "./ProjectDiagram";
import { ProjectPreview } from "./ProjectPreview";
import { ProjectScreenshots } from "./ProjectScreenshots";
import { ProjectStatusChip } from "./ProjectStatusChip";

interface ProjectCardProps {
  project: ProjectItem;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ProjectCard({ project, isExpanded, onToggle }: ProjectCardProps) {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isExpanded || !cardRef.current) return;
    cardRef.current.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "nearest",
    });
  }, [isExpanded, reduce]);

  const panelId = `project-panel-${project.slug}`;

  return (
    <motion.article
      ref={cardRef}
      className={`flex flex-col gap-16 border border-line-subtle bg-bg p-32 transition duration-200 ${
        isExpanded
          ? "md:col-span-2"
          : "hover:-translate-y-4 hover:border-accent hover:shadow-[0_8px_24px_#1A1A1A14]"
      }`}
      whileHover={!isExpanded && !reduce ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-wrap items-center gap-12">
        <p className="font-mono text-[12px] text-accent">{project.index}</p>
        <ProjectStatusChip status={project.status} />
      </div>

      <h3 className="font-heading text-[24px] font-bold tracking-[-0.4px] text-ink">
        {project.name}
      </h3>

      <p className="font-body text-[15px] leading-[1.5] text-ink-secondary">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-8">
        {project.stack.map((tag) => (
          <li key={tag}>
            <Chip>{tag}</Chip>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-8">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="font-body text-[14px] leading-[1.45] text-ink">
            {bullet}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="self-start font-mono text-[12px] text-accent underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {isExpanded ? "Cerrar ↑" : "Ver proyecto →"}
      </button>

      {isExpanded ? (
        <div
          id={panelId}
          className="flex flex-col gap-32 border-t border-line-subtle pt-32 md:grid md:grid-cols-2 md:gap-32"
        >
          <div className="flex flex-col gap-32">
            <ProjectCaseStudy
              problem={project.problem}
              features={project.features}
              decisions={project.decisions}
              repoUrl={project.repoUrl}
              repoNote={project.repoNote}
              docsUrl={project.docsUrl}
            />
            <ProjectDiagram
              src={project.diagram}
              alt={`Diagrama de arquitectura de ${project.name}`}
              interactiveSrc={project.diagramInteractive}
            />
            <ProjectScreenshots
              items={project.screenshots}
              groups={project.screenshotGroups}
              note={project.screenshotsNote}
            />
          </div>
          <ProjectPreview
            demoUrl={project.demoUrl}
            embeddable={project.embeddable}
            poster={project.poster}
            projectName={project.name}
            isActive={isExpanded}
            unavailableNote={project.previewNote}
          />
        </div>
      ) : null}
    </motion.article>
  );
}
