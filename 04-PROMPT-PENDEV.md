# Prompt para pen.dev — Portafolio Deivid Del Carpio

Copia y pega esto tal cual en pen.dev. Ajusta la paleta/tono si el primer resultado no te convence, pero mantén la estructura de secciones intacta (es la que sostiene el sistema editable del TRD).

---

```
Diseña un portafolio personal de una sola página (single page, scroll vertical) para un
Desarrollador de Software Fullstack. El tono visual debe ser técnico, limpio y editorial —
NO uses un template genérico de "landing SaaS con gradiente violeta y blobs". Piensa en la
estética de portafolios de developers senior: tipografía fuerte, mucho espacio en blanco,
un solo color de acento, microinteracciones sutiles, nada de relleno decorativo.

DATOS DEL PERFIL (usar textualmente o casi):
- Nombre: Deivid Jhon Del Carpio Vilca
- Rol: Desarrollador de Software Fullstack
- Ubicación: Arequipa, Perú
- Resumen: Egresado de Tecsup, especializado en ciclo completo de desarrollo web
  (Backend/Frontend) y en la integración de soluciones basadas en Inteligencia Artificial.
  Experiencia en React y JavaScript/TypeScript, y en el diseño de arquitecturas escalables
  y APIs REST con Laravel y .NET bajo metodologías ágiles (Scrum). Apasionado por la
  optimización de bases de datos relacionales y la automatización mediante agentes de IA
  y LLMs.
- Contacto: deividdelcarpio.dev@gmail.com · +51 970 337 947 · linkedin.com/in/deivid-jhon-del-carpio-vilca

SECCIONES A DISEÑAR (en este orden, cada una como bloque independiente y reutilizable):

1. HERO — foto de perfil, nombre, rol, ubicación, 2 CTAs ("Contactar" y "Descargar CV").
2. PERFIL — resumen corto (2-3 líneas) + 3-4 chips de especialidad
   (Fullstack, IA/LLMs, Arquitectura escalable, Scrum).
3. HABILIDADES TÉCNICAS — agrupadas por categoría en tarjetas o columnas:
   Lenguajes (JavaScript, TypeScript, Python/Flask, C#/.NET, T-SQL, Java, Swift),
   Frontend (React, React Native, Angular, HTML5, CSS3),
   Backend & IA (Laravel, .NET Core, REST APIs, Integración de LLMs, Agentes de IA),
   Bases de Datos (SQL Server, PostgreSQL, MySQL, Oracle),
   Herramientas (Git/GitHub, Azure, Firebase, Scrum, Arquitectura Hexagonal, CQRS).
4. EXPERIENCIA LABORAL — timeline vertical con 3 posiciones (más recientes arriba):
   - CERV, Programador Web, abril-junio 2026
   - BSG Institute, Auxiliar de Base de Datos, julio 2025 - enero 2026
   - Fibertel Networks S.A.C., Pasante de Diseño y Desarrollo, agosto-septiembre 2024
   Cada nodo con cargo, fechas y 2-3 logros con métricas (ej. "-30% tiempo de respuesta").
5. PROYECTOS DESTACADOS — 2 cards:
   - Luqa (Plataforma de Educación Financiera con IA) — Arquitectura Hexagonal + CQRS.
   - Mistika (App de Impulso al Turismo) — Angular + Swift + Firebase.
6. FORMACIÓN ACADÉMICA — Tecsup, Bachiller en Diseño y Desarrollo de Software, 2022-2025.
7. IDIOMAS Y CERTIFICACIONES — Español nativo, Inglés B1, cursos 2023-2025.
8. CONTACTO (footer) — email, teléfono, LinkedIn, formulario corto (nombre/email/mensaje).

REQUISITOS DE SISTEMA DE DISEÑO (importante, no es solo "una página bonita"):
- Cada sección debe diseñarse como un COMPONENTE independiente y con la MISMA estructura
  visual base (mismo padding vertical, mismo ancho de contenedor, mismo estilo de heading),
  de forma que en el futuro se puedan agregar secciones nuevas (ej. "Blog", "Testimonios")
  reutilizando ese mismo patrón sin rediseñar el resto del sitio.
- Define una escala de espaciado consistente (no valores sueltos).
- Define UNA sola paleta: fondo neutro (oscuro o claro, tu elección) + un único color de
  acento para CTAs, links y highlights.
- Elige una pareja tipográfica (heading + body) de alto contraste de peso pero de la misma
  familia visual o complementarias — legible, nada decorativo en el body.
- Navbar sticky que se oculta al hacer scroll hacia abajo y reaparece al subir.
- Microinteracciones sutiles en hover de botones y cards (elevación/escala leve), y
  animación de entrada tipo fade+slide al hacer scroll por cada sección.
- Diseña también el estado mobile (< 768px) de cada sección: todo a una columna,
  navbar con menú hamburguesa.

Entrega: sistema de componentes reutilizable, no solo una imagen estática de la página.
```

---

## Después de generar el diseño en pen.dev

1. Exporta/anota los tokens (colores hex, tipografías, espaciados) — van directo a `src/styles/tokens.css` según el TRD.
2. Si pen.dev te da componentes por sección, mapea cada uno 1:1 con los tipos definidos en `sectionRegistry` (Hero, About, Skills, Experience, Projects, Education, LanguagesCerts, Contact) — así el diseño entra sin fricción al sistema de secciones dinámico.
3. Si el resultado se siente genérico, vuelve a pedirle a pen.dev una variación cambiando solo la paleta y la tipografía, manteniendo la estructura de secciones — es más rápido iterar sobre tokens que sobre estructura.
