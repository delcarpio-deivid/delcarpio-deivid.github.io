import { useEffect, useRef } from "react";
import { animate, createTimeline, stagger, utils } from "animejs";
import type { SectionConfig, ExperienceData } from "../../content/sections";
import { SectionShell } from "../ui/SectionShell";

type Props = SectionConfig<ExperienceData>;

function formatPeriod(start: string, end: string) {
  const fmt = (iso: string) => {
    const [y, m] = iso.split("-");
    const months = [
      "ene", "feb", "mar", "abr", "may", "jun",
      "jul", "ago", "sep", "oct", "nov", "dic",
    ];
    return `${months[Number(m) - 1]} ${y}`;
  };
  return `${fmt(start)} — ${fmt(end)}`;
}

export function Experience({ id, title, data }: Props) {
  const lineRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = lineRef.current;
    const root = sectionRef.current;
    if (!path || !root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const length = path.getTotalLength();
    utils.set(path, {
      strokeDasharray: String(length),
      strokeDashoffset: String(length),
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        createTimeline({ defaults: { ease: "inOut(2)" } }).add(path, {
          strokeDashoffset: 0,
          duration: 1400,
        });
        animate(root.querySelectorAll("[data-exp-node]"), {
          opacity: [0, 1],
          translateY: [16, 0],
          delay: stagger(140, { start: 200 }),
          duration: 500,
          ease: "out(3)",
        });
        io.disconnect();
      },
      { threshold: 0.25 },
    );

    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <SectionShell id={id} title={title} tone="muted">
      <div ref={sectionRef} className="relative">
        <svg
          className="pointer-events-none absolute top-2 bottom-2 left-[11px] hidden w-px overflow-visible sm:block"
          aria-hidden
        >
          <path
            ref={lineRef}
            d={`M 0.5 0 V ${Math.max(data.items.length * 180, 200)}`}
            stroke="var(--color-accent)"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <ol className="space-y-10">
          {data.items.map((item) => (
            <li
              key={`${item.company}-${item.start}`}
              data-exp-node
              className="relative grid gap-3 sm:grid-cols-[28px_1fr] sm:gap-6"
              style={{ opacity: 1 }}
            >
              <span
                className="mt-1.5 hidden h-3 w-3 rounded-full border-2 border-accent bg-bg-elevated sm:block"
                aria-hidden
              />
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {item.company}
                  </h3>
                  <span className="text-sm text-ink-muted">
                    {formatPeriod(item.start, item.end)}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">{item.role}</p>
                <ul className="mt-3 space-y-2 text-ink-soft">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-[15px] leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
