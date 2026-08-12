# PRD — Portafolio Deivid Del Carpio
`delcarpio-deivid.github.io`

**Versión:** 1.0 · **Fecha:** 12 ago 2026 · **Owner:** Deivid Jhon Del Carpio Vilca

---

## 1. Resumen ejecutivo

Portafolio personal, estático, publicado en GitHub Pages, que presenta el perfil profesional de Deivid como Desarrollador Fullstack (React/Laravel/.NET + integración de IA). El sitio debe verse cuidado (nivel "diseñado", no plantilla genérica), animado con criterio, y **construido sobre un sistema de secciones configurables**: agregar/quitar/reordenar secciones no debe requerir tocar el layout base, solo el archivo de contenido.

## 2. Objetivo del producto

- Conseguir entrevistas/oportunidades freelance mostrando experiencia real (CERV, BSG Institute, Fibertel) y proyectos (Luqa, Mistika) con evidencia concreta (métricas: -30% latencia, 100% disponibilidad, etc.).
- Comunicar en 5 segundos el "quién soy" (fullstack + IA) y en 30 segundos el "por qué contratarme" (stack + resultados medibles).
- Servir como plantilla viva: cada vez que Deivid termine un proyecto o certificación nueva, debe poder añadirla en minutos.

## 3. Usuarios objetivo

| Perfil | Qué busca | Prioridad |
|---|---|---|
| Reclutador técnico / HR | Scan rápido: stack, años de experiencia, contacto | Alta |
| Tech Lead / Hiring Manager | Profundidad técnica: arquitectura (Hexagonal, CQRS), decisiones de diseño | Alta |
| Cliente freelance | Proyectos terminados, capacidad de entrega end-to-end | Media |
| Deivid (self) | Panel de contenido fácil de mantener y extender | Alta (uso interno) |

## 4. Problema a resolver

Un CV en PDF es estático y poco memorable. Un portafolio "genérico de plantilla" no diferencia. Deivid necesita un sitio que (a) transmita cuidado por el detalle —coherente con su stock de skills de UI/animación/arquitectura— y (b) no se vuelva un sitio "congelado" a los 3 meses por ser difícil de actualizar.

## 5. Alcance

### V1 (MVP — lanzamiento)
- Secciones basadas 1:1 en el CV: Hero, Perfil, Habilidades técnicas, Experiencia laboral, Proyectos destacados, Formación, Idiomas, Certificaciones, Contacto.
- Sistema de contenido dirigido por datos (content-driven), no hardcodeado en el markup.
- Responsive completo (mobile-first).
- Animaciones de entrada/scroll y microinteracciones.
- Deploy automático a GitHub Pages vía CI.
- Formulario/CTA de contacto funcional (email directo o servicio de formularios estático, ver TRD).

### Fase 2 (post-lanzamiento)
- Blog / notas técnicas como tipo de sección nuevo (prueba de fuego del sistema extensible).
- Modo claro/oscuro.
- i18n ES/EN.
- Panel de edición visual (editor "casi-CMS" para no tocar JSON a mano).

### Fuera de alcance (por ahora)
- Backend propio con base de datos (GitHub Pages es estático).
- Autenticación de usuarios.

## 6. Requisitos funcionales por sección

| # | Sección | Contenido mínimo (del CV) | Notas |
|---|---|---|---|
| RF-01 | Hero | Nombre, título profesional, foto, CTA (contacto/CV descargable) | Foto ya provista en CV |
| RF-02 | Perfil profesional | Resumen del CV, reescrito para web (más corto que el PDF) | |
| RF-03 | Habilidades técnicas | Lenguajes, Frontend, Backend & IA, Bases de Datos, Herramientas/Metodologías | Agrupado por categoría, con nivel visual opcional |
| RF-04 | Experiencia laboral | CERV, BSG Institute, Fibertel Networks — cargo, fechas, bullets de logros | Orden cronológico descendente |
| RF-05 | Proyectos destacados | Luqa, Mistika — rol, stack, logros, (idealmente link/repo/demo si existen) | Campo `link` opcional en el dato |
| RF-06 | Formación académica | Tecsup — carrera, período, estado | |
| RF-07 | Idiomas y certificaciones | Español nativo, inglés intermedio, cursos 2023-2025 | |
| RF-08 | Contacto | Teléfono, email, LinkedIn, ubicación (Arequipa, Perú) | Con antispam básico |
| RF-09 | Descarga de CV | Botón para descargar el PDF actual | |
| RF-10 | **Motor de secciones** | El home se arma iterando un array de secciones definidas en un archivo de contenido (`content/sections.json` o `.ts`) | Ver TRD §3-4 |
| RF-11 | Añadir sección nueva | Debe poder agregarse un tipo de sección nuevo (ej. "Blog", "Testimonios") registrando un componente + una entrada de datos, sin reescribir el layout | Ver TRD §4 |
| RF-12 | Ocultar/reordenar sección | Cambiar `visible: false` u `order` en el JSON sin tocar código | |

## 7. Requisitos no funcionales

- **Performance:** Lighthouse ≥ 90 en Performance/Accesibilidad/SEO/Best Practices.
- **Accesibilidad:** WCAG 2.1 AA — contraste, `alt` en imágenes, navegación por teclado, `prefers-reduced-motion` respetado por las animaciones.
- **SEO:** meta tags, Open Graph (para compartir en LinkedIn), sitemap, `robots.txt`.
- **Responsive:** mobile (360px) → desktop (1440px+), sin scroll horizontal.
- **Mantenibilidad:** cualquier cambio de contenido = editar 1 archivo de datos, no HTML disperso.
- **Costo:** $0 — todo debe correr en el free tier de GitHub Pages + servicios gratuitos.

## 8. Métricas de éxito

- Lighthouse Performance ≥ 90 en mobile.
- Tiempo de "agregar una sección nueva" ≤ 15 min siguiendo la guía del TRD.
- Al menos 1 conversión medible (clic en "Contactar" o descarga de CV) rastreable con analítica simple (ej. Plausible/GoatCounter, opcional).

## 9. Riesgos y supuestos

- **Supuesto:** GitHub Pages no soporta backend, así que el formulario de contacto usará un servicio de terceros gratuito (Formspree, EmailJS o `mailto:`).
- **Riesgo:** exceso de animación puede afectar performance/accesibilidad — mitigar con `prefers-reduced-motion` y animaciones ligeras (transform/opacity).
- **Supuesto:** las herramientas/skills listadas por el usuario (Font Pair, Bklit UI, anime.js, motion.dev, Bruno, Manus.im, Ponytail, Headroom, Impeccable, Graphify, Engram, etc.) se usan una parte en el **producto final** (librerías runtime) y otra parte en el **proceso de desarrollo asistido por IA** (skills/MCP de Claude Code). El detalle de esta separación está en el TRD §5-6 y debe confirmarse con el usuario.

## 10. Roadmap

| Fase | Contenido | Duración estimada |
|---|---|---|
| 0 | PRD/TRD/UXTD (este set de docs) | Hecho |
| 1 | Diseño en pen.dev + tipografía/paleta | 1-2 días |
| 2 | Scaffold del proyecto + motor de secciones | 1 día |
| 3 | Maquetado de las 8 secciones con datos reales del CV | 2-3 días |
| 4 | Animaciones + responsive + accesibilidad | 1-2 días |
| 5 | CI/CD a GitHub Pages + QA | 0.5 día |
| 6 (Fase 2) | Sección Blog, dark mode, i18n | Backlog |
