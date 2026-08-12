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

El formulario **ya funciona sin configurar nada**: al enviar, abre el cliente de correo (`mailto:`) con el mensaje listo.

Formspree es opcional, para que el mensaje llegue a Gmail *sin* abrir Outlook/Mail. No hace falta para publicar el sitio.

Tras el primer push a `main`, GitHub Actions publica el build. En **Settings → Pages** la fuente debe ser **GitHub Actions** (en repos `*.github.io` no se puede servir desde la rama `gh-pages`).
