import { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionBlock } from "../ui/SectionBlock";
import type { HeroData, SectionConfig } from "../../content/sections";

export function Hero({ index, kicker, data }: SectionConfig<HeroData>) {
  const [photoOk, setPhotoOk] = useState(Boolean(data.photo));
  const contact = data.cta[0];
  const cv = data.cta[1];

  return (
    <SectionBlock
      id="hero"
      index={index}
      kicker={kicker}
      title={data.name}
      titleAs="h1"
      titleClassName="text-[32px] tracking-[-1.2px] md:text-[48px]"
    >
      <div className="flex flex-col items-stretch gap-32 md:flex-row md:items-center md:gap-64">
        <div className="flex flex-1 flex-col gap-24">
          <p className="font-heading text-[18px] font-medium text-ink md:text-[22px]">{data.role}</p>
          <p className="flex items-center gap-8 font-mono text-[12px] text-ink-secondary md:text-[13px]">
            <MapPin className="size-[14px] text-accent" aria-hidden />
            {data.location}
          </p>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
            {contact ? <Button href={contact.href}>{contact.label}</Button> : null}
            {cv ? (
              <Button href={cv.href} variant="ghost">
                {cv.label}
              </Button>
            ) : null}
          </div>
        </div>
        <figure className="flex w-full flex-col gap-12 md:w-[320px]">
          <div className="flex h-[280px] w-full flex-col items-center justify-center gap-8 border border-line bg-bg-alt md:h-[400px]">
            {photoOk && data.photo ? (
              <img
                src={data.photo}
                alt={`Retrato de ${data.name}`}
                className="h-full w-full object-cover"
                onError={() => setPhotoOk(false)}
              />
            ) : (
              <>
                <span className="font-heading text-[40px] font-bold tracking-[4px] text-ink md:text-[48px]">
                  DJDC
                </span>
                <span className="font-mono text-[11px] text-ink-muted">Foto de perfil</span>
              </>
            )}
          </div>
          <figcaption className="font-mono text-[11px] tracking-[1px] text-ink-muted">
            {data.availability}
          </figcaption>
        </figure>
      </div>
    </SectionBlock>
  );
}
