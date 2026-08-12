import type { SectionConfig, EducationData } from "../../content/sections";
import { SectionShell } from "../ui/SectionShell";

type Props = SectionConfig<EducationData>;

export function Education({ id, title, data }: Props) {
  return (
    <SectionShell id={id} title={title} tone="muted">
      <div className="max-w-2xl border-l-2 border-accent pl-6">
        <h3 className="font-display text-xl font-semibold text-ink">
          {data.institution}
        </h3>
        <p className="mt-1 text-ink-soft">{data.degree}</p>
        <p className="mt-2 text-sm text-ink-muted">{data.period}</p>
        <p className="mt-3 text-sm text-ink-soft">{data.status}</p>
      </div>
    </SectionShell>
  );
}
