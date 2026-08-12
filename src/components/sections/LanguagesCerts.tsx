import { SectionBlock } from "../ui/SectionBlock";
import type { LanguagesCertsData, SectionConfig } from "../../content/sections";

export function LanguagesCerts({
  id,
  index,
  kicker,
  title,
  alt,
  data,
}: SectionConfig<LanguagesCertsData>) {
  return (
    <SectionBlock id={id} index={index} kicker={kicker} title={title} alt={alt}>
      <div className="grid grid-cols-1 gap-48 md:grid-cols-2">
        <div className="flex flex-col gap-16">
          <h3 className="font-heading text-[16px] font-semibold text-ink">Idiomas</h3>
          <div className="h-px w-full bg-line-subtle" />
          <ul className="flex flex-col gap-16">
            {data.languages.map((lang) => (
              <li key={lang.name} className="flex items-center justify-between gap-16">
                <span className="font-body text-[16px] text-ink">{lang.name}</span>
                <span className="font-mono text-[13px] text-ink-muted">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-16">
          <h3 className="font-heading text-[16px] font-semibold text-ink">Cursos y certificaciones</h3>
          <div className="h-px w-full bg-line-subtle" />
          <ul className="flex flex-col gap-16">
            {data.certs.map((cert) => (
              <li key={cert.title} className="flex items-center gap-16">
                <span className="font-mono text-[13px] text-accent">{cert.year}</span>
                <span className="font-body text-[16px] text-ink">{cert.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionBlock>
  );
}
