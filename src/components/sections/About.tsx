import { Chip } from "../ui/Chip";
import { SectionBlock } from "../ui/SectionBlock";
import type { AboutData, SectionConfig } from "../../content/sections";

export function About({ id, index, kicker, title, data }: SectionConfig<AboutData>) {
  return (
    <SectionBlock id={id} index={index} kicker={kicker} title={title}>
      <div className="flex flex-col gap-32">
        <p className="max-w-[72ch] font-body text-[16px] leading-[1.55] text-ink-secondary md:text-[18px]">
          {data.summary}
        </p>
        <ul className="flex flex-wrap gap-8">
          {data.chips.map((chip) => (
            <li key={chip}>
              <Chip>{chip}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </SectionBlock>
  );
}
