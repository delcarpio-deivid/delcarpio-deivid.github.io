import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { navLinks } from "../content/sections";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 64);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-64 border-b border-line-subtle bg-bg transition-transform duration-300 ${hidden && !open ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-24 md:px-[120px]">
          <a href="#hero" className="font-mono text-[14px] font-semibold tracking-[1.4px] text-ink">
            DJDC
          </a>
          <nav className="hidden items-center gap-32 md:flex" aria-label="Secciones">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[13px] text-ink-secondary transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-12 md:flex">
            <Button href="/cv.pdf" variant="ghost" className="!px-24 !py-12 text-[12px]">
              CV
            </Button>
            <Button href="#contact" className="!px-24 !py-12 text-[12px]">
              Contactar
            </Button>
          </div>
          <button
            type="button"
            className="md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="size-[22px] text-ink" />
            ) : (
              <Menu className="size-[22px] text-ink" />
            )}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col bg-bg pt-64 md:hidden">
          <nav className="flex flex-1 flex-col px-24 pt-32" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center justify-between border-b border-line-subtle py-16 font-heading text-[22px] font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
                <span className="font-mono text-accent" aria-hidden>
                  ↗
                </span>
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-8 px-24 pb-32">
            <Button href="#contact" className="w-full" onClick={() => setOpen(false)}>
              Contactar
            </Button>
            <Button href="/cv.pdf" variant="ghost" className="w-full">
              Descargar CV
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
