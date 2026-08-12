import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { navLinks } from "../content/sections";
import { Button } from "./ui/Button";
import { useHeadroom } from "../hooks/useHeadroom";

export function Navbar() {
  const { hidden, scrolled } = useHeadroom();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border/80 bg-bg/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      ].join(" ")}
      animate={
        reduceMotion
          ? undefined
          : { y: hidden && !open ? "-100%" : "0%" }
      }
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#hero"
          className="font-display text-sm font-semibold tracking-tight text-ink"
        >
          Deivid Del Carpio
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="!py-2 !text-xs">
            Contactar
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-border bg-bg-elevated md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <span aria-hidden className="flex w-4 flex-col gap-1">
            <span className={`h-0.5 bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            className="border-t border-border bg-bg-elevated md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            aria-label="Móvil"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-[8px] px-3 py-2.5 text-sm text-ink-soft hover:bg-bg-muted hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                href="#contact"
                variant="primary"
                className="mt-2"
                onClick={() => setOpen(false)}
              >
                Contactar
              </Button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
