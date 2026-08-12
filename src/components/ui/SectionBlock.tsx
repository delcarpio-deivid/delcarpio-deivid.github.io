import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface SectionBlockProps {
  id: string;
  index: string;
  kicker: string;
  title?: string;
  titleAs?: "h1" | "h2";
  titleClassName?: string;
  alt?: boolean;
  children: ReactNode;
}

export function SectionBlock({
  id,
  index,
  kicker,
  title,
  titleAs = "h2",
  titleClassName = "text-[24px] tracking-[-0.6px] md:text-[32px]",
  alt = false,
  children,
}: SectionBlockProps) {
  const reduce = useReducedMotion();
  const TitleTag = titleAs;

  return (
    <motion.section
      id={id}
      className={`scroll-mt-[var(--nav-h)] px-24 py-64 md:px-[120px] md:py-96 ${alt ? "bg-bg-alt" : "bg-bg"}`}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-48">
        <header className="flex items-start gap-24">
          <span className="font-mono text-[14px] text-accent">{index}</span>
          <div className="flex min-w-0 flex-1 flex-col gap-8">
            <p className="font-mono text-[11px] tracking-[1.2px] text-ink-muted">
              {kicker}
            </p>
            {title ? (
              <TitleTag className={`font-heading font-bold text-ink ${titleClassName}`}>
                {title}
              </TitleTag>
            ) : null}
          </div>
        </header>
        <div className="h-px w-full bg-line-subtle" />
        <div>{children}</div>
      </div>
    </motion.section>
  );
}
