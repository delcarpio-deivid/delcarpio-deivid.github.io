import { SectionBlock } from "../ui/SectionBlock";
import type { EducationData, SectionConfig } from "../../content/sections";

export function Education({ id, index, kicker, title, data }: SectionConfig<EducationData>) {
  return (
    <SectionBlock id={id} index={index} kicker={kicker} title={title}>
      <div className="flex flex-col gap-24 md:flex-row md:gap-48">
        <div className="flex w-full flex-col gap-8 md:w-[280px]">
          <p className="font-mono text-[13px] text-accent">{data.period}</p>
          <p className="font-mono text-[12px] text-ink-muted">{data.status}</p>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-12">
          <h3 className="font-heading text-[22px] font-bold text-ink md:text-[28px]">{data.school}</h3>
          <p className="font-body text-[16px] leading-[1.45] text-ink-secondary md:text-[18px]">
            {data.degree}
          </p>
          <p className="font-body text-[15px] leading-[1.5] text-ink-secondary">{data.note}</p>
        </div>
      </div>
    </SectionBlock>
  );
}
