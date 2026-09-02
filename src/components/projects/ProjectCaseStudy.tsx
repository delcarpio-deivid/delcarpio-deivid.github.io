import type { ReactNode } from "react";

interface ProjectCaseStudyProps {
  problem?: string;
  features?: string[];
  decisions?: string[];
  repoUrl?: string;
  repoNote?: string;
  docsUrl?: string;
}

function CaseBlock({
  kicker,
  children,
}: {
  kicker: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8">
      <p className="font-mono text-[11px] tracking-[1.2px] text-ink-muted">{kicker}</p>
      {children}
    </div>
  );
}

export function ProjectCaseStudy({
  problem,
  features,
  decisions,
  repoUrl,
  repoNote,
  docsUrl,
}: ProjectCaseStudyProps) {
  const hasLinks = Boolean(repoUrl || docsUrl || repoNote);
  const hasContent =
    Boolean(problem) ||
    (features && features.length > 0) ||
    (decisions && decisions.length > 0) ||
    hasLinks;

  if (!hasContent) return null;

  return (
    <div className="flex flex-col gap-24">
      {problem ? (
        <CaseBlock kicker="EL PROBLEMA">
          <p className="font-body text-[14px] leading-[1.55] text-ink md:text-[15px]">
            {problem}
          </p>
        </CaseBlock>
      ) : null}

      {features && features.length > 0 ? (
        <CaseBlock kicker="QUÉ CONSTRUÍ">
          <ul className="flex flex-col gap-8">
            {features.map((feature) => (
              <li key={feature} className="font-body text-[14px] leading-[1.5] text-ink">
                {feature}
              </li>
            ))}
          </ul>
        </CaseBlock>
      ) : null}

      {decisions && decisions.length > 0 ? (
        <CaseBlock kicker="DECISIONES">
          <ul className="flex flex-col gap-8">
            {decisions.map((decision) => (
              <li key={decision} className="font-body text-[14px] leading-[1.5] text-ink">
                {decision}
              </li>
            ))}
          </ul>
        </CaseBlock>
      ) : null}

      {hasLinks ? (
        <CaseBlock kicker="ENLACES">
          <div className="flex flex-wrap gap-16">
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-accent underline-offset-2 hover:underline"
              >
                Ver repositorio →
              </a>
            ) : null}
            {repoNote && !repoUrl ? (
              <p className="font-body text-[13px] leading-[1.5] text-ink-secondary">{repoNote}</p>
            ) : null}
            {docsUrl ? (
              <a
                href={docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-accent underline-offset-2 hover:underline"
              >
                Documentación →
              </a>
            ) : null}
          </div>
        </CaseBlock>
      ) : null}
    </div>
  );
}
