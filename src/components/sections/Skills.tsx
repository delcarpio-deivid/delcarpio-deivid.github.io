import { motion, useReducedMotion } from "motion/react";
import type { SectionConfig, SkillsData } from "../../content/sections";
import { Badge } from "../ui/Badge";
import { SectionShell } from "../ui/SectionShell";

type Props = SectionConfig<SkillsData>;

export function Skills({ id, title, data }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id={id} title={title}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.groups.map((group, groupIndex) => (
          <div key={group.category} className="border-t border-line pt-5">
            <h3 className="mb-4 font-display text-base font-semibold text-ink">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item, itemIndex) => (
                <motion.li
                  key={item}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    delay: reduceMotion ? 0 : groupIndex * 0.04 + itemIndex * 0.03,
                    duration: 0.35,
                  }}
                >
                  <Badge>{item}</Badge>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
