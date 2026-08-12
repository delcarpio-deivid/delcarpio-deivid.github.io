import { motion, useReducedMotion } from "motion/react";
import { Chip } from "../ui/Chip";
import { SectionBlock } from "../ui/SectionBlock";
import type { SectionConfig, SkillsData } from "../../content/sections";

export function Skills({ id, index, kicker, title, alt, data }: SectionConfig<SkillsData>) {
  const reduce = useReducedMotion();

  return (
    <SectionBlock id={id} index={index} kicker={kicker} title={title} alt={alt}>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-3">
        {data.groups.map((group, i) => (
          <motion.article
            key={group.category}
            className="flex flex-col gap-16 border border-line-subtle bg-bg p-24"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: reduce ? 0 : i * 0.06 }}
          >
            <h3 className="font-heading text-[16px] font-semibold text-ink">{group.category}</h3>
            <div className="h-px w-full bg-line-subtle" />
            <ul className="flex flex-wrap gap-8">
              {group.items.map((item) => (
                <li key={item}>
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionBlock>
  );
}
