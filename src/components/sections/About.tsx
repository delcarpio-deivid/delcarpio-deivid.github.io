import type { SectionConfig, AboutData } from "../../content/sections";
import { Badge } from "../ui/Badge";
import { SectionShell } from "../ui/SectionShell";

type Props = SectionConfig<AboutData>;

export function About({ id, title, data }: Props) {
  return (
    <SectionShell id={id} title={title} tone="muted">
      <p className="max-w-3xl text-lg leading-relaxed text-ink-soft">{data.summary}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {data.chips.map((chip) => (
          <li key={chip}>
            <Badge>{chip}</Badge>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
