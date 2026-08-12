import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type SectionShellProps = {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted";
};

export function SectionShell({
  id,
  title,
  children,
  className = "",
  tone = "default",
}: SectionShellProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`section-pad scroll-mt-[72px] ${tone === "muted" ? "bg-bg-muted/50" : ""} ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-page">
        {title ? (
          <h2 className="mb-8 max-w-2xl font-display text-3xl font-semibold text-ink md:text-4xl">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </motion.section>
  );
}
