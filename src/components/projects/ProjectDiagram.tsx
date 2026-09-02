interface ProjectDiagramProps {
  src?: string;
  alt: string;
  interactiveSrc?: string;
}

export function ProjectDiagram({ src, alt, interactiveSrc }: ProjectDiagramProps) {
  if (!src) return null;

  return (
    <div className="flex flex-col gap-12">
      <p className="font-mono text-[11px] tracking-[1.2px] text-ink-muted">ARQUITECTURA</p>
      <div className="border border-line-subtle bg-bg-alt p-16">
        <img src={src} alt={alt} loading="lazy" className="h-auto w-full" />
      </div>
      {interactiveSrc ? (
        <a
          href={interactiveSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[12px] text-accent underline-offset-2 hover:underline"
        >
          Diagrama interactivo →
        </a>
      ) : null}
    </div>
  );
}
