# TRD — Portafolio Deivid Del Carpio
`delcarpio-deivid.github.io`

**Versión:** 1.0 · **Depende de:** PRD v1.0

---

## 1. Stack tecnológico propuesto

| Capa | Elección | Motivo |
|---|---|---|
| Framework | **React + TypeScript + Vite** | Necesitas un sistema de secciones dinámico (RF-10/11) → componentes + data es más limpio que HTML plano; Vite genera un build estático perfecto para GH Pages |
| Estilos | **Tailwind CSS** | Prototipado rápido, fácil de alinear con tokens de diseño que salgan de pen.dev |
| Animación | **motion.dev** (Motion, ex-Framer Motion) para transiciones de componentes/scroll; **anime.js** para animaciones puntuales tipo timeline/SVG (ej. líneas del timeline de experiencia) | Evita mezclar dos motores para lo mismo — cada uno cubre un caso distinto |
| UI kit base | **Bklit UI** | Base de componentes (botones, cards, badges) que luego se re-skinnean con el diseño de pen.dev |
| Tipografía | **Font Pair** | Herramienta de *elección* de fuentes (no es una librería runtime) — se usa en la fase de diseño para decidir la pareja heading/body, luego se importa vía Google Fonts/Fontsource |
| Assets/iconos | **Open Design** | Fuente de assets/iconografía libres para reforzar look editorial del sitio |
| Hosting | **GitHub Pages** | Requisito del usuario |
| CI/CD | **GitHub Actions** | Build + deploy automático a `gh-pages` en cada push a `main` |
| Formulario de contacto | **Formspree o EmailJS** (a definir) | GH Pages no tiene backend; ambos tienen free tier |
| Testing de APIs | **Bruno** | Para probar el endpoint del formulario de contacto (Formspree/EmailJS) y cualquier llamada externa (ej. si luego se añade un endpoint de IA) |
| Agente de investigación/contenido | **Manus.im** | Uso *de proceso*: research de referencias, redacción asistida de textos de proyectos, no es dependencia del sitio |

## 2. Arquitectura general

Sitio 100% estático (JAMstack): no hay servidor propio, todo el "backend" son servicios de terceros gratuitos.

```
Contenido (JSON/TS)  →  React components (registry)  →  Vite build  →  GitHub Actions  →  gh-pages branch  →  GitHub Pages CDN
```

Regla de oro: **el contenido nunca vive dentro de un componente**. Un componente de sección solo sabe renderizar la forma de sus datos; no conoce el texto real de Deivid.

## 3. Modelo de datos de contenido

Archivo único (o por sección) en `src/content/sections.ts`:

```ts
export type SectionType =
  | "hero"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "education"
  | "languages-certs"
  | "contact"
  | "blog";       // ejemplo de tipo agregado en Fase 2

export interface SectionConfig<T = unknown> {
  id: string;          // slug único, ej. "experience"
  type: SectionType;   // qué componente la renderiza
  order: number;        // posición en la página
  visible: boolean;     // on/off sin borrar datos
  title?: string;        // heading visible, ej. "Experiencia laboral"
  data: T;               // payload específico del tipo
}

export const sections: SectionConfig[] = [
  {
    id: "hero",
    type: "hero",
    order: 0,
    visible: true,
    data: {
      name: "Deivid Jhon Del Carpio Vilca",
      role: "Desarrollador de Software Fullstack",
      photo: "/assets/deivid.jpg",
      location: "Arequipa, Perú",
      cta: [{ label: "Contactar", href: "#contact" }, { label: "Descargar CV", href: "/cv.pdf" }],
    },
  },
  {
    id: "experience",
    type: "experience",
    order: 3,
    visible: true,
    title: "Experiencia laboral",
    data: {
      items: [
        {
          company: "CERV",
          role: "Programador Web",
          start: "2026-04",
          end: "2026-06",
          bullets: [
            "Implementé aplicaciones web escalables con TypeScript (React) y Laravel.",
            "Diseñé y desplegué APIs REST reduciendo la latencia de comunicación.",
          ],
        },
        // BSG Institute, Fibertel Networks ...
      ],
    },
  },
  // ...resto de secciones
];
```

## 4. Sistema de secciones extensible (registry pattern)

`src/components/sections/registry.tsx`:

```tsx
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { LanguagesCerts } from "./LanguagesCerts";
import { Contact } from "./Contact";
import type { SectionType } from "../../content/sections";
import type { ComponentType } from "react";

export const sectionRegistry: Record<SectionType, ComponentType<any>> = {
  hero: Hero,
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  education: Education,
  "languages-certs": LanguagesCerts,
  contact: Contact,
  // blog: Blog,  ← se agrega aquí cuando exista el componente
};
```

`src/App.tsx`:

```tsx
import { sections } from "./content/sections";
import { sectionRegistry } from "./components/sections/registry";

export default function App() {
  const visibleSections = sections
    .filter((s) => s.visible)
    .sort((a, b) => a.order - b.order);

  return (
    <main>
      {visibleSections.map((section) => {
        const Component = sectionRegistry[section.type];
        if (!Component) return null; // fallback silencioso si falta el registro
        return <Component key={section.id} {...section} />;
      })}
    </main>
  );
}
```

### Cómo añadir una sección nueva (checklist para Deivid)

1. Crear `src/components/sections/Testimonials.tsx` (recibe `title` y `data` como props).
2. Registrarlo en `sectionRegistry` con su `type`.
3. Agregar la entrada correspondiente en `content/sections.ts` con `order` y `visible: true`.
4. Listo — no se toca `App.tsx` ni el resto de secciones.

Esto es exactamente lo que pediste ("poder añadir más secciones fácilmente"): el costo de una sección nueva es 1 componente + 1 entrada de datos.

## 5. Herramientas del producto (runtime / diseño) — mapeo de uso

| Herramienta | Rol en el proyecto | Tipo |
|---|---|---|
| Font Pair | Elegir pareja tipográfica en fase de diseño | Diseño (no runtime) |
| Open Design | Banco de assets/iconos libres | Diseño / assets |
| anime.js | Animaciones puntuales (timeline de experiencia, reveal de skills) | Runtime |
| motion.dev | Transiciones de página/scroll, microinteracciones de componentes | Runtime |
| Bklit UI | Base de componentes UI a personalizar | Runtime |
| Manus.im | Investigación y redacción asistida de copys/proyectos | Proceso (no runtime) |
| Bruno | Testing del endpoint de contacto y cualquier API externa | QA / desarrollo |

## 6. Skills / MCP para el flujo de desarrollo asistido por IA

> Nota: estas herramientas viven en tu entorno de desarrollo (Claude Code / agentes), **no se despliegan en el sitio**. Confirmar con el usuario el propósito exacto de cada una si difiere de lo asumido aquí.

| Skill | Rol asumido en el desarrollo |
|---|---|
| Engram (github.com/Gentleman-Programming/engram) | Memoria persistente del agente de IA entre sesiones de trabajo en el repo (evita re-explicar contexto del proyecto cada vez) |
| Codebase-memory-mcp | Memoria/índice del código para que el agente entienda la estructura sin releer todo cada vez |
| Ponytail | Skill de soporte al flujo de trabajo del agente (a confirmar alcance exacto) |
| Headroom | Referencia/patrón de UI (ej. header que se oculta al hacer scroll — patrón "headroom.js") a aplicar en la navbar |
| Ruflo (github.com/ruvnet/ruflo) | Orquestación de tareas/agentes durante el desarrollo |
| Impeccable (pbakaus/impeccable) | Sistema de tokens de spacing/tipografía "pixel-perfect" — usarlo para afinar el sistema de diseño antes de codear |
| Emil Kowalsky — animaciones | Referencia de estilo de microinteracciones/animación a imitar con motion.dev/anime.js |
| Taste Skill | Criterio estético del agente al proponer UI (evita defaults genéricos) |
| Patrones de Diseño - SOLID | Checklist de arquitectura de código limpio al construir los componentes de sección |
| Graphify | Posible uso para visualizar datos (ej. gráfico de nivel de skills) si se decide incluirlo en la sección de Habilidades |

## 7. Estructura de carpetas

```
delcarpio-deivid.github.io/
├── public/
│   ├── cv.pdf
│   └── assets/
├── src/
│   ├── content/
│   │   └── sections.ts        ← ÚNICO lugar que Deivid edita para contenido
│   ├── components/
│   │   ├── sections/           ← Hero, About, Skills, Experience, Projects...
│   │   │   └── registry.tsx
│   │   └── ui/                 ← botones, badges, cards (Bklit UI + tokens propios)
│   ├── styles/
│   │   └── tokens.css          ← paleta, spacing (basado en Impeccable), tipografía
│   ├── App.tsx
│   └── main.tsx
├── .github/workflows/deploy.yml
├── index.html
├── vite.config.ts
└── tailwind.config.ts
```

## 8. CI/CD

`.github/workflows/deploy.yml` (resumen):

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Al ser un repo `<usuario>.github.io`, GitHub Pages sirve directo desde `gh-pages` (o `main` si se prefiere sin build step, pero con Vite conviene rama de build separada).

## 9. Testing

- **Bruno:** colección con el request POST al servicio de formulario (Formspree/EmailJS), casos: éxito, campo faltante, rate-limit.
- **Lighthouse CI** (GitHub Action opcional) para no regresar performance/accesibilidad en cada PR.
- **Revisión visual manual** en breakpoints 360/768/1024/1440.

## 10. Seguridad y consideraciones

- Sin backend propio → sin datos sensibles que proteger, pero el formulario debe tener honeypot o reCAPTCHA básico para evitar spam.
- No exponer API keys en el cliente; Formspree/EmailJS usan claves públicas pensadas para uso client-side.
- Imágenes optimizadas (WebP) para no penalizar performance en mobile.
