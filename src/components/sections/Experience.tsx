import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { useReducedMotion } from "motion/react";
import { SectionBlock } from "../ui/SectionBlock";
import type { ExperienceData, SectionConfig } from "../../content/sections";

export function Experience({ id, index, kicker, title, data }: SectionConfig<ExperienceData>) {
  const lineRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = lineRef.current;
    if (!el || reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        animate(el, { scaleY: [0, 1], duration: 1100, ease: "outQuad" });
        io.disconnect();
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <SectionBlock id={id} index={index} kicker={kicker} title={title}>
      <div className="relative">
        <div
          ref={lineRef}
          className="absolute top-8 bottom-8 left-[5px] hidden w-px origin-top bg-line-subtle md:block"
          style={{ transform: reduce ? "scaleY(1)" : "scaleY(0)" }}
          aria-hidden
        />
        <ol className="flex flex-col">
          {data.items.map((job) => (
            <li key={job.company} className="relative flex gap-24 pb-32 last:pb-0">
              <span
                className="relative z-10 mt-4 hidden size-12 shrink-0 rounded-full bg-accent md:block"
                aria-hidden
              />
              <div className="flex min-w-0 flex-1 flex-col gap-8 border-b border-line-subtle pb-16 md:border-0 md:pb-0">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                  <h3 className="font-heading text-[18px] font-semibold text-ink md:text-[20px]">
                    {job.company}
                  </h3>
                  <p className="font-mono text-[11px] text-ink-muted md:text-[12px]">
                    {job.startLabel} — {job.endLabel}
                  </p>
                </div>
                <p className="font-body text-[13px] text-ink-secondary md:text-[14px]">{job.role}</p>
                <ul className="flex flex-col gap-8">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="font-body text-[14px] leading-[1.5] text-ink md:text-[15px]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionBlock>
  );
}
