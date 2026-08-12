import { motion, useReducedMotion } from "motion/react";
import type { SectionConfig, ProjectsData } from "../../content/sections";
import { Badge } from "../ui/Badge";
import { SectionShell } from "../ui/SectionShell";

type Props = SectionConfig<ProjectsData>;

export function Projects({ id, title, data }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id={id} title={title}>
      <div className="grid gap-8 md:grid-cols-2">
        {data.items.map((project) => (
          <motion.article
            key={project.name}
            className="group border-t border-line pt-6 transition-transform duration-300 hover:-translate-y-1"
            whileHover={reduceMotion ? undefined : { scale: 1.01 }}
            transition={{ duration: 0.25 }}
          >
            <h3 className="font-display text-2xl font-semibold text-ink">
              {project.link ? (
                <a
                  href={project.link}
                  className="hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">{project.description}</p>
            <p className="mt-2 text-sm font-medium text-accent">{project.role}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <Badge>{tech}</Badge>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink-soft">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
