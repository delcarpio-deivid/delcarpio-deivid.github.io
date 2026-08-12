import type { SectionConfig, LanguagesCertsData } from "../../content/sections";
import { SectionShell } from "../ui/SectionShell";

type Props = SectionConfig<LanguagesCertsData>;

export function LanguagesCerts({ id, title, data }: Props) {
  return (
    <SectionShell id={id} title={title}>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-ink">Idiomas</h3>
          <ul className="space-y-3">
            {data.languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-baseline justify-between gap-4 border-b border-border pb-3"
              >
                <span className="text-ink-soft">{lang.name}</span>
                <span className="text-sm text-ink-muted">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-ink">
            Certificaciones
          </h3>
          <ul className="space-y-3">
            {data.certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-baseline justify-between gap-4 border-b border-border pb-3"
              >
                <span className="text-ink-soft">{cert.name}</span>
                <span className="text-sm text-ink-muted">{cert.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
