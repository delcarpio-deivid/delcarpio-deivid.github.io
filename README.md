# delcarpio-deivid.github.io

Portafolio personal de **Deivid Jhon Del Carpio Vilca** — Desarrollador de Software Fullstack.

Sitio estático (React + Vite + Tailwind) en GitHub Pages. El contenido se edita en `src/content/sections.ts`.

## Desarrollo

```bash
npm install
npm run dev
```

Build: `npm run build`. Preview: `npm run preview`.

## Contenido

- Textos y visibilidad de secciones: `src/content/sections.ts`
- Foto: `public/assets/deivid.jpeg`
- CV: `public/cv.pdf`

## Contacto

El formulario envía a Formspree (sin abrir Outlook). Si el envío sale bien, aparece un aviso en pantalla.

1. Crea una cuenta en [formspree.io](https://formspree.io) con `deividdelcarpio.dev@gmail.com`.
2. New form → copia el ID de la URL (`https://formspree.io/forms/XXXXXX` → `XXXXXX`).
3. Local: `.env` con `VITE_FORMSPREE_ID=XXXXXX` (parte de `.env.example`).
4. GitHub: Settings → Secrets → Actions → `VITE_FORMSPREE_ID`.
5. Confirmación al visitante: en el form, pestaña **Workflow → Auto Response** (plan Professional). Texto sugerido: *Recibí tu mensaje. Pronto estaremos en comunicación. — Deivid*.
