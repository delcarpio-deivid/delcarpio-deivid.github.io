interface ProjectPreviewProps {
  demoUrl?: string;
  embeddable?: boolean;
  poster?: string;
  projectName: string;
  isActive: boolean;
  unavailableNote?: string;
}

function BrowserChrome({ url }: { url?: string }) {
  return (
    <div className="flex items-center gap-12 border-b border-line-subtle bg-bg-alt px-16 py-12">
      <div className="flex gap-6" aria-hidden>
        <span className="size-8 rounded-full bg-line-subtle" />
        <span className="size-8 rounded-full bg-line-subtle" />
        <span className="size-8 rounded-full bg-line-subtle" />
      </div>
      <p className="min-w-0 flex-1 truncate font-mono text-[11px] text-ink-muted">
        {url ?? "demo no disponible"}
      </p>
    </div>
  );
}

export function ProjectPreview({
  demoUrl,
  embeddable = true,
  poster,
  projectName,
  isActive,
  unavailableNote,
}: ProjectPreviewProps) {
  const canEmbed = Boolean(demoUrl) && embeddable !== false;
  const showIframe = canEmbed && isActive;

  return (
    <div className="flex flex-col gap-12">
      <p className="font-mono text-[11px] tracking-[1.2px] text-ink-muted">VISTA PREVIA</p>
      <div className="flex min-h-[280px] flex-col border border-line-subtle bg-bg md:min-h-[360px]">
        <BrowserChrome url={demoUrl} />
        <div className="relative flex flex-1 flex-col">
          {poster && !showIframe ? (
            <img
              src={poster}
              alt={`Captura de ${projectName}`}
              className="h-auto w-full object-cover object-top"
              loading="lazy"
            />
          ) : null}

          {showIframe ? (
            <iframe
              src={demoUrl}
              title={`Demo de ${projectName}`}
              className="min-h-[240px] w-full flex-1 border-0 md:min-h-[320px]"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              loading="lazy"
            />
          ) : null}

          {!demoUrl && !poster ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-8 px-24 py-32">
              <p className="font-body text-[14px] text-ink-secondary text-center">
                {unavailableNote ?? "Demo no disponible"}
              </p>
            </div>
          ) : null}

          {demoUrl && !canEmbed && !poster ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-8 px-24 py-32">
              <p className="font-body text-[14px] text-ink-secondary text-center">
                Este demo no se puede embeber. Ábrelo en una pestaña nueva.
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex flex-wrap gap-16">
        {demoUrl ? (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] text-accent underline-offset-2 hover:underline"
          >
            Abrir demo en pestaña →
          </a>
        ) : (
          <span className="font-mono text-[12px] text-ink-muted">Abrir demo</span>
        )}
      </div>
    </div>
  );
}
