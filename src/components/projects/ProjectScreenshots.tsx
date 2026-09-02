interface ScreenshotItem {
  src: string;
  alt: string;
}

interface ScreenshotGroup {
  label: string;
  note?: string;
  items: ScreenshotItem[];
}

interface ProjectScreenshotsProps {
  items?: ScreenshotItem[];
  groups?: ScreenshotGroup[];
  note?: string;
}

function ScreenshotGrid({ items }: { items: ScreenshotItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
      {items.map((shot) => (
        <figure key={shot.src} className="flex flex-col gap-8 border border-line-subtle bg-bg-alt">
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            className="h-auto w-full object-cover object-top"
          />
          <figcaption className="px-12 pb-12 font-body text-[12px] leading-[1.45] text-ink-secondary">
            {shot.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ProjectScreenshots({ items, groups, note }: ProjectScreenshotsProps) {
  const hasGroups = groups && groups.length > 0;
  const hasItems = items && items.length > 0;

  if (!hasGroups && !hasItems) return null;

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-8">
        <p className="font-mono text-[11px] tracking-[1.2px] text-ink-muted">CAPTURAS</p>
        {note ? (
          <p className="font-body text-[12px] leading-[1.45] text-ink-muted">{note}</p>
        ) : null}
      </div>

      {hasGroups
        ? groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <p className="font-mono text-[10px] tracking-[1px] text-accent">{group.label}</p>
                {group.note ? (
                  <p className="font-body text-[12px] leading-[1.45] text-ink-muted">{group.note}</p>
                ) : null}
              </div>
              <ScreenshotGrid items={group.items} />
            </div>
          ))
        : null}

      {hasItems && !hasGroups ? <ScreenshotGrid items={items} /> : null}
    </div>
  );
}
