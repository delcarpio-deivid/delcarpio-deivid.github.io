import { useState, type FormEvent } from "react";
import type { SectionConfig, ContactData } from "../../content/sections";
import { Button } from "../ui/Button";
import { SectionShell } from "../ui/SectionShell";

type Props = SectionConfig<ContactData>;

type Status = "idle" | "sending" | "success" | "error";

export function Contact({ id, title, data }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const formConfigured = data.formspreeId && data.formspreeId !== "YOUR_FORMSPREE_ID";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot
    if (String(formData.get("company") || "").trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!formConfigured) {
      window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(
        `Contacto desde portafolio — ${String(formData.get("name") || "")}`,
      )}&body=${encodeURIComponent(String(formData.get("message") || ""))}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${data.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <SectionShell id={id} title={title} tone="muted" className="pb-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="max-w-md text-ink-soft">
            ¿Tienes un proyecto, una vacante o quieres conversar? Escríbeme.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a className="text-accent hover:underline" href={`mailto:${data.email}`}>
                {data.email}
              </a>
            </li>
            <li>
              <a className="text-ink-soft hover:text-accent" href={`tel:${data.phone.replace(/\s/g, "")}`}>
                {data.phone}
              </a>
            </li>
            <li>
              <a
                className="text-ink-soft hover:text-accent"
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="text-ink-muted">{data.location}</li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid gap-4"
          noValidate
        >
          <div className="absolute -left-[9999px]" aria-hidden>
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-ink">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              required
              className="rounded-[8px] border border-border bg-bg-elevated px-3 py-2.5 text-ink outline-none focus:border-accent"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-[8px] border border-border bg-bg-elevated px-3 py-2.5 text-ink outline-none focus:border-accent"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium text-ink">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="resize-y rounded-[8px] border border-border bg-bg-elevated px-3 py-2.5 text-ink outline-none focus:border-accent"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Enviando…" : "Enviar mensaje"}
            </Button>
            {status === "success" ? (
              <p role="status" className="text-sm text-accent">
                Mensaje enviado. Gracias.
              </p>
            ) : null}
            {status === "error" ? (
              <p role="alert" className="text-sm text-red-700">
                No se pudo enviar. Intenta por email directo.
              </p>
            ) : null}
            {!formConfigured ? (
              <p className="text-xs text-ink-muted">
                Formspree no configurado: el botón abre tu cliente de correo.
              </p>
            ) : null}
          </div>
        </form>
      </div>

      <footer className="mt-16 border-t border-border pt-6 text-sm text-ink-muted">
        © {new Date().getFullYear()} Deivid Jhon Del Carpio Vilca
      </footer>
    </SectionShell>
  );
}
