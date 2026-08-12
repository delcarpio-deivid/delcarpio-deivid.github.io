import { motion, useReducedMotion } from "motion/react";
import type { SectionConfig, HeroData } from "../../content/sections";
import { Button } from "../ui/Button";

type Props = SectionConfig<HeroData>;

export function Hero({ data }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden pt-16"
      aria-label="Inicio"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(13 115 119 / 0.12) 0%, transparent 42%), linear-gradient(180deg, transparent 55%, rgb(244 247 249 / 0.95) 100%), repeating-linear-gradient(90deg, transparent, transparent 47px, rgb(12 21 32 / 0.03) 48px)",
        }}
      />

      <div className="container-page relative grid min-h-[calc(100svh-4rem)] items-center gap-10 py-12 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:py-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm font-medium tracking-wide text-accent">
            {data.location}
          </p>
          <h1 className="font-display text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.05] text-ink">
            {data.name}
          </h1>
          <p className="mt-4 font-display text-xl font-medium text-ink-soft md:text-2xl">
            {data.role}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {data.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {data.cta.map((cta) => (
              <Button
                key={cta.label}
                href={cta.href}
                variant={cta.variant ?? "primary"}
                download={cta.href.endsWith(".pdf") ? true : undefined}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm md:max-w-none"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[8px] border border-border bg-bg-muted shadow-[0_24px_60px_-28px_rgb(12_21_32/0.35)]">
            <img
              src={data.photo}
              alt={`Foto de ${data.name}`}
              className="h-full w-full object-cover"
              width={640}
              height={800}
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = "none";
                const fallback = el.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.hidden = false;
              }}
            />
            <div
              hidden
              className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent-soft to-bg-muted p-8 text-center"
              aria-hidden
            >
              <span className="font-display text-5xl font-bold text-accent">DD</span>
              <span className="text-sm text-ink-muted">Añade tu foto en public/assets/deivid.jpg</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
