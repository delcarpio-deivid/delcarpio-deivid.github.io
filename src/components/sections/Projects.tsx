import { motion, useReducedMotion } from "motion/react";
import { Chip } from "../ui/Chip";
import { SectionBlock } from "../ui/SectionBlock";
import type { ProjectsData, SectionConfig } from "../../content/sections";

export function Projects({ id, index, kicker, title, alt, data }: SectionConfig<ProjectsData>) {
  const reduce = useReducedMotion();

  return (
    <SectionBlock id={id} index={index} kicker={kicker} title={title} alt={alt}>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
        {data.items.map((project) => (
          <motion.article
            key={project.name}
            className="flex flex-col gap-16 border border-line-subtle bg-bg p-32 transition duration-200 hover:-translate-y-4 hover:border-accent hover:shadow-[0_8px_24px_#1A1A1A14]"
            whileHover={reduce ? undefined : { scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="font-mono text-[12px] text-accent">{project.index}</p>
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
            {project.link ? (
              <a href={project.link.href} className="font-mono text-[12px] text-accent">
                {project.link.label}
              </a>
            ) : (
              <span className="font-mono text-[12px] text-accent">Ver proyecto →</span>
            )}
          </motion.article>
        ))}
      </div>
    </SectionBlock>
  );
}
