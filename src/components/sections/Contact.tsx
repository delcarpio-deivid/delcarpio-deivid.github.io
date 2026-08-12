import { FormEvent, useState, type ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionBlock } from "../ui/SectionBlock";
import type { ContactData, SectionConfig } from "../../content/sections";

const fields = [
  { name: "name", label: "Nombre", placeholder: "Tu nombre", type: "text" },
  { name: "email", label: "Email", placeholder: "tu@email.com", type: "email" },
] as const;

export function Contact({ id, index, kicker, title, data }: SectionConfig<ContactData>) {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const honeypot = (form.elements.namedItem("company") as HTMLInputElement | null)?.value;
    if (honeypot) return;

    const payload = new FormData(form);

    if (!formspreeId) {
      const name = String(payload.get("name") ?? "");
      const email = String(payload.get("email") ?? "");
      const message = String(payload.get("message") ?? "");
      window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(`Contacto — ${name}`)}&body=${encodeURIComponent(`${message}\n\n${email}`)}`;
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
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
        <form className="flex flex-1 flex-col gap-16" onSubmit={onSubmit} noValidate>
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          {fields.map((field) => (
            <label key={field.name} className="flex flex-col gap-8">
              <span className="font-mono text-[11px] tracking-[0.8px] text-ink-muted">{field.label}</span>
              <input
                name={field.name}
                type={field.type}
                required
                placeholder={field.placeholder}
                className="h-[44px] border border-line-subtle bg-bg px-16 font-body text-[14px] text-ink placeholder:text-ink-muted"
              />
            </label>
          ))}
          <label className="flex flex-col gap-8">
            <span className="font-mono text-[11px] tracking-[0.8px] text-ink-muted">Mensaje</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Cuéntame sobre el proyecto"
              className="min-h-[120px] border border-line-subtle bg-bg p-16 font-body text-[14px] text-ink placeholder:text-ink-muted"
            />
          </label>
          <Button type="submit">Enviar mensaje</Button>
          {status === "sent" ? (
            <p className="font-mono text-[12px] text-accent" role="status">
              Mensaje enviado.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="font-mono text-[12px] text-ink-secondary" role="alert">
              No se pudo enviar. Escríbeme a {data.email}.
            </p>
          ) : null}
        </form>
      </div>
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
