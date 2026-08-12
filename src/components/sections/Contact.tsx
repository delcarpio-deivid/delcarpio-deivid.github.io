import { FormEvent, useState, type ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionBlock } from "../ui/SectionBlock";
import { Toast, type ToastKind } from "../ui/Toast";
import type { ContactData, SectionConfig } from "../../content/sections";

const fields = [
  { name: "name", label: "Nombre", placeholder: "Tu nombre", type: "text" },
  { name: "email", label: "Email", placeholder: "tu@email.com", type: "email" },
] as const;

const AUTOREPLY = `Hola,

Recibí tu mensaje desde el portafolio. Pronto estaremos en comunicación.

— Deivid Jhon Del Carpio Vilca
Arequipa, Perú`;

export function Contact({ id, index, kicker, title, data }: SectionConfig<ContactData>) {
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ kind: ToastKind; title: string; body: string } | null>(null);
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID?.trim();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const honeypot = (form.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value;
    if (honeypot) return;

    const payload = new FormData(form);
    const visitorName = String(payload.get("name") ?? "").trim();
    const visitorEmail = String(payload.get("email") ?? "").trim();

    if (!formspreeId) {
      setToast({
        kind: "error",
        title: "Formulario no conectado",
        body: `Escríbeme directo a ${data.email} mientras tanto.`,
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });
      if (!res.ok) throw new Error("formspree");
      form.reset();
      setToast({
        kind: "success",
        title: "Mensaje enviado",
        body: `Gracias${visitorName ? `, ${visitorName}` : ""}. Te responderé a ${visitorEmail || "tu correo"} pronto.`,
      });
    } catch {
      setToast({
        kind: "error",
        title: "No se pudo enviar",
        body: `Inténtalo de nuevo o escríbeme a ${data.email}.`,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SectionBlock id={id} index={index} kicker={kicker} title={title}>
      <div className="flex flex-col gap-32 md:flex-row md:gap-64">
        <div className="flex flex-1 flex-col gap-24">
          <p className="font-body text-[16px] leading-[1.5] text-ink-secondary">{data.lead}</p>
          <ul className="flex flex-col gap-24">
            <ContactRow icon={<Mail className="size-[18px] text-accent" />} kind="Email" value={data.email} href={`mailto:${data.email}`} />
            <ContactRow icon={<Phone className="size-[18px] text-accent" />} kind="Teléfono" value={data.phone} href={`tel:${data.phone.replace(/\s/g, "")}`} />
            <ContactRow icon={<LinkedInIcon />} kind="LinkedIn" value={data.linkedin.label} href={data.linkedin.href} />
          </ul>
        </div>
        <form className="flex flex-1 flex-col gap-16" onSubmit={onSubmit}>
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <input type="hidden" name="_subject" value="Portafolio — nuevo mensaje" />
          <input type="hidden" name="_autoresponse" value={AUTOREPLY} />
          {fields.map((field) => (
            <label key={field.name} className="flex flex-col gap-8" htmlFor={field.name}>
              <span className="font-mono text-[11px] tracking-[0.8px] text-ink-muted">{field.label}</span>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required
                placeholder={field.placeholder}
                className="h-[44px] border border-line-subtle bg-bg px-16 font-body text-[14px] text-ink placeholder:text-ink-muted"
              />
            </label>
          ))}
          <label className="flex flex-col gap-8" htmlFor="message">
            <span className="font-mono text-[11px] tracking-[0.8px] text-ink-muted">Mensaje</span>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Cuéntame sobre el proyecto"
              className="min-h-[120px] border border-line-subtle bg-bg p-16 font-body text-[14px] text-ink placeholder:text-ink-muted"
            />
          </label>
          <Button type="submit" disabled={submitting}>
            {submitting ? "Enviando…" : "Enviar mensaje"}
          </Button>
        </form>
      </div>
      {toast ? (
        <Toast kind={toast.kind} title={toast.title} body={toast.body} onClose={() => setToast(null)} />
      ) : null}
    </SectionBlock>
  );
}

function LinkedInIcon() {
  return (
    <svg className="size-[18px] fill-accent" viewBox="0 0 24 24" aria-hidden>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.24 8.14h4.76V24H.24V8.14ZM8.43 8.14h4.56v2.16h.06c.64-1.2 2.2-2.47 4.53-2.47 4.84 0 5.73 3.19 5.73 7.33V24h-4.76v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24H8.43V8.14Z" />
    </svg>
  );
}

function ContactRow({
  icon,
  kind,
  value,
  href,
}: {
  icon: ReactNode;
  kind: string;
  value: string;
  href: string;
}) {
  return (
    <li className="flex items-center gap-12">
      {icon}
      <div className="flex min-w-0 flex-col gap-4">
        <p className="font-mono text-[11px] text-ink-muted">{kind}</p>
        <a href={href} className="break-all font-body text-[14px] text-ink hover:text-accent">
          {value}
        </a>
      </div>
    </li>
  );
}
