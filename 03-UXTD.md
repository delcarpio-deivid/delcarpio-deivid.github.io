# UXTD — Portafolio Deivid Del Carpio
`delcarpio-deivid.github.io`

**Versión:** 1.0 · **Depende de:** PRD v1.0, TRD v1.0

---

## 1. Principios de diseño

1. **Taste sobre plantilla.** Nada de "hero genérico con gradiente violeta". El diseño debe reflejar precisión técnica (Arquitectura Hexagonal, CQRS, optimización SQL) con un lenguaje visual limpio, casi editorial/técnico — piensa "developer portfolio serio", no "landing de SaaS".
2. **Spacing con intención (Impeccable).** Escala de espaciado consistente (ej. 4/8/12/16/24/32/48/64/96px) aplicada sin excepciones — nada de valores sueltos.
3. **Movimiento con propósito.** Cada animación comunica jerarquía o estado (aparece, se reordena, responde al hover) — nunca decorativa porque sí. Referencia de calidad: el estilo de microinteracciones de Emil Kowalsky.
4. **Accesible por defecto.** `prefers-reduced-motion` desactiva/reduce animaciones; contraste AA; foco visible en teclado.
5. **Contenido primero.** El sistema de secciones (ver TRD §3-4) existe para que el diseño nunca sea el cuello de botella cuando Deivid quiera agregar un proyecto nuevo.

## 2. Mapa de navegación (single page, scroll + anchors)

```
Hero
 └─ Perfil profesional
     └─ Habilidades técnicas
         └─ Experiencia laboral
             └─ Proyectos destacados
                 └─ Formación académica
                     └─ Idiomas & Certificaciones
                         └─ Contacto (footer)
```

- Navbar sticky con **efecto headroom** (se oculta al bajar, reaparece al subir) — mapea directo al skill "Headroom" listado.
- Navbar con anchors a cada sección + botón CTA fijo "Contactar" / "Descargar CV".
- Sin rutas múltiples en V1 (todo en `/`); Fase 2 (Blog) sí necesitaría rutas con React Router o Vite multi-page.

## 3. Estructura por sección (wireframe textual)

### Hero
- Foto (circular o con marco geométrico sutil), nombre grande, rol ("Desarrollador de Software Fullstack"), ubicación, 2 CTAs (Contactar / Descargar CV).
- Micro-animación de entrada (fade + slide, motion.dev), sin looping infinito que distraiga.

### Perfil profesional
- Texto del CV reescrito más corto para web (2-3 líneas, no el párrafo completo del PDF).
- Puede acompañarse de 3-4 "chips" destacando: Fullstack, IA/LLMs, Arquitectura escalable, Scrum.

### Habilidades técnicas
- Agrupado por categoría (Lenguajes / Frontend / Backend & IA / Bases de Datos / Herramientas) como en el CV.
- Visual: grid de badges o barras de familiaridad — evitar "estrellas" genéricas; mejor agrupación clara + iconos (Open Design).
- Animación: reveal escalonado (stagger) al entrar en viewport.

### Experiencia laboral
- Timeline vertical (línea + nodos) con CERV → BSG Institute → Fibertel Networks, orden descendente.
- Cada nodo: empresa, cargo, fechas, 2-3 bullets de logro (con métrica cuando exista: -30%, 100%, etc.).
- La línea del timeline es buen candidato para anime.js (dibujo progresivo tipo SVG path al hacer scroll).

### Proyectos destacados
- Cards para Luqa y Mistika: nombre, rol, stack (badges), 2 bullets de logro, link si existe.
- Hover con leve elevación/scale (motion.dev), no rotaciones exageradas.

### Formación académica
- Bloque simple: institución, título, período, estado ("En proceso de titulación" visible pero no como bandera de alerta — tono neutral).

### Idiomas & Certificaciones
- Dos columnas o dos listas cortas; certificaciones con año.

### Contacto (footer)
- Email, teléfono, LinkedIn, ubicación, formulario corto (nombre/email/mensaje) vía Formspree/EmailJS.
- Honeypot invisible anti-spam.

## 4. Sistema de diseño

| Token | Definición |
|---|---|
| Tipografía | Par heading/body elegido en Font Pair (ver prompt en archivo 04) — sugerido: sans geométrica para headings + sans neutra de alta legibilidad para body |
| Color | Paleta oscura/neutra de base (grises fríos) + 1 color de acento técnico (ej. azul eléctrico o verde terminal) para CTAs y highlights de código/skills |
| Spacing | Escala Impeccable: 4-8-12-16-24-32-48-64-96 |
| Radios | Consistentes (ej. 8px cards, 999px badges/pills) |
| Iconografía | Open Design (set único, no mezclar 3 estilos de íconos distintos) |
| Elevación | Sombras sutiles, solo en hover/focus, nunca "flat + shadow" por defecto |

## 5. Animación y microinteracciones

| Elemento | Librería | Comportamiento |
|---|---|---|
| Navbar | CSS + motion.dev | Ocultar/mostrar en scroll (headroom pattern) |
| Entrada de secciones | motion.dev | Fade + slide-up al entrar en viewport (`whileInView`) |
| Timeline de experiencia | anime.js | Línea que se "dibuja" progresivamente con el scroll |
| Skills | motion.dev | Stagger de badges al revelarse |
| Cards de proyecto | motion.dev | Hover: elevación + escala sutil (1.02) |
| Botones/CTA | CSS transitions | Estado hover/active/focus consistente |

Regla: toda animación debe respetar `prefers-reduced-motion: reduce` (fallback: aparición instantánea, sin movimiento).

## 6. Responsive

| Breakpoint | Comportamiento clave |
|---|---|
| ≥1280px (desktop) | Timeline y grids a 2-3 columnas, navbar horizontal completa |
| 768–1279px (tablet) | Grids a 2 columnas, navbar puede colapsar CTAs secundarios |
| <768px (mobile) | Todo a 1 columna, navbar con menú hamburguesa, CTAs apilados, timeline vertical simplificado |

## 7. Accesibilidad

- Jerarquía de headings correcta (`h1` único en Hero, `h2` por sección).
- Contraste mínimo 4.5:1 en texto sobre fondo.
- Todo elemento interactivo navegable y operable por teclado (`Tab`/`Enter`), con `:focus-visible` claro.
- Imágenes con `alt` descriptivo (la foto de perfil, íconos decorativos con `aria-hidden`).
- Formulario de contacto con `label` asociado a cada campo y mensajes de error anunciados.

## 8. Flujo de edición de contenido (para Deivid)

1. Abrir `src/content/sections.ts`.
2. Editar el `data` de la sección que corresponda (texto, fechas, bullets) — no requiere tocar componentes.
3. Para **ocultar** una sección temporalmente: `visible: false`.
4. Para **reordenar**: cambiar el número de `order`.
5. Para **una sección totalmente nueva**: seguir el checklist del TRD §4 (crear componente + registrar + agregar entrada).
6. Commit + push a `main` → GitHub Actions publica automáticamente (TRD §8).

Fase 2 (opcional): envolver este flujo en un panel visual tipo mini-CMS (formularios en vez de editar JSON a mano), pero el modelo de datos ya queda listo para eso desde V1.
