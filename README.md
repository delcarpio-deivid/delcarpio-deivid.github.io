# delcarpio-deivid.github.io

Portafolio personal de **Deivid Jhon Del Carpio Vilca** — Desarrollador de Software Fullstack.

## Stack

React + TypeScript + Vite · Tailwind CSS · Motion · anime.js · GitHub Pages

## Desarrollo

```bash
npm install
npm run dev
```

## Contenido

Edita un solo archivo: [`src/content/sections.ts`](src/content/sections.ts).

- Ocultar sección: `visible: false`
- Reordenar: cambia `order`
- Sección nueva: componente en `src/components/sections/` + registro en `registry.tsx` + entrada en `sections.ts`

## Antes de publicar

1. Añade tu foto en `public/assets/deivid.jpg`
2. Añade el CV en `public/cv.pdf`
3. Sustituye `formspreeId` en `sections.ts` por tu ID de [Formspree](https://formspree.io) (si no, el formulario usa `mailto:`)
4. En el repo de GitHub: **Settings → Pages → Source = GitHub Actions**

## Docs de diseño (temporal)

| Archivo | Contenido |
|---------|-----------|
| `01-PRD.md` | Product Requirements |
| `02-TRD.md` | Technical Requirements |
| `03-UXTD.md` | UX / UI direction |
| `04-PROMPT-PENDEV.md` | Prompt para diseñar en pen.dev |

Cuando el diseño en Pencil esté listo, exporta tokens a `src/styles/tokens.css` y elimina estos markdowns.

## MCP (Engram + pen.dev)

Config en [`.cursor/mcp.json`](.cursor/mcp.json). Guía paso a paso: [`docs/MCP-SETUP.md`](docs/MCP-SETUP.md).

- **Engram** — memoria persistente del agente (`engram` en PATH)
- **Pencil / pen.dev** — diseño `.pen` en tu PC (local; no disponible en Cloud Agents)
