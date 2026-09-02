export type SectionType =
  | "hero"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "education"
  | "languages-certs"
  | "contact"
  | "blog";

export interface Cta {
  label: string;
  href: string;
}

export interface HeroData {
  name: string;
  role: string;
  photo?: string;
  location: string;
  availability: string;
  cta: Cta[];
}

export interface AboutData {
  summary: string;
  chips: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface SkillsData {
  groups: SkillGroup[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  startLabel: string;
  endLabel: string;
  bullets: string[];
}

export interface ExperienceData {
  items: ExperienceItem[];
}

export type ProjectStatus = "production" | "demo" | "development" | "paused";

export interface ProjectItem {
  slug: string;
  index: string;
  name: string;
  description: string;
  stack: string[];
  bullets: string[];
  status: ProjectStatus;
  problem?: string;
  features?: string[];
  decisions?: string[];
  diagram?: string;
  diagramInteractive?: string;
  poster?: string;
  screenshots?: { src: string; alt: string }[];
  demoUrl?: string;
  embeddable?: boolean;
  repoUrl?: string;
  repoNote?: string;
  docsUrl?: string;
  screenshotsNote?: string;
  previewNote?: string;
  screenshotGroups?: {
    label: string;
    note?: string;
    items: { src: string; alt: string }[];
  }[];
}

export interface ProjectsData {
  items: ProjectItem[];
}

export interface EducationData {
  school: string;
  degree: string;
  period: string;
  status: string;
  note: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface CertItem {
  year: string;
  title: string;
}

export interface LanguagesCertsData {
  languages: LanguageItem[];
  certs: CertItem[];
}

export interface ContactData {
  lead: string;
  email: string;
  phone: string;
  linkedin: { label: string; href: string };
  location: string;
}

export interface SectionConfig<T = unknown> {
  id: string;
  type: SectionType;
  order: number;
  visible: boolean;
  index: string;
  kicker: string;
  title?: string;
  alt?: boolean;
  data: T;
}

export const navLinks = [
  { label: "Perfil", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
] as const;

export const sections: SectionConfig[] = [
  {
    id: "hero",
    type: "hero",
    order: 0,
    visible: true,
    index: "00",
    kicker: "INTRODUCCIÓN",
    data: {
      name: "Deivid Jhon Del Carpio Vilca",
      role: "Desarrollador de Software Fullstack",
      photo: "/assets/deivid.jpeg",
      location: "Arequipa, Perú",
      availability: "AREQUIPA · PE — DISPONIBLE",
      cta: [
        { label: "Contactar", href: "#contact" },
        { label: "Descargar CV", href: "/cv.pdf" },
      ],
    } satisfies HeroData,
  },
  {
    id: "about",
    type: "about",
    order: 1,
    visible: true,
    index: "01",
    kicker: "PERFIL PROFESIONAL",
    title: "Ciclo completo, de la API al agente",
    data: {
      summary:
        "Egresado de Tecsup, especializado en ciclo completo de desarrollo web (Backend/Frontend) y en la integración de soluciones basadas en Inteligencia Artificial. Experiencia en React y JavaScript/TypeScript, y en el diseño de arquitecturas escalables y APIs REST con Laravel y .NET bajo metodologías ágiles (Scrum). Apasionado por la optimización de bases de datos relacionales y la automatización mediante agentes de IA y LLMs.",
      chips: ["Fullstack", "IA/LLMs", "Arquitectura escalable", "Scrum"],
    } satisfies AboutData,
  },
  {
    id: "skills",
    type: "skills",
    order: 2,
    visible: true,
    index: "02",
    kicker: "HABILIDADES TÉCNICAS",
    title: "Stack agrupado por capa",
    alt: true,
    data: {
      groups: [
        {
          category: "Lenguajes",
          items: ["JavaScript", "TypeScript", "Python/Flask", "C#/.NET", "T-SQL", "Java", "Swift"],
        },
        {
          category: "Frontend",
          items: ["React", "React Native", "Angular", "HTML5", "CSS3"],
        },
        {
          category: "Backend & IA",
          items: ["Laravel", ".NET Core", "REST APIs", "LLMs", "Agentes de IA"],
        },
        {
          category: "Bases de Datos",
          items: ["SQL Server", "PostgreSQL", "MySQL", "Oracle"],
        },
        {
          category: "Herramientas",
          items: ["Git/GitHub", "Azure", "Firebase", "Scrum", "Hexagonal", "CQRS"],
        },
      ],
    } satisfies SkillsData,
  },
  {
    id: "experience",
    type: "experience",
    order: 3,
    visible: true,
    index: "03",
    kicker: "EXPERIENCIA LABORAL",
    title: "Resultados medibles, no solo cargos",
    data: {
      items: [
        {
          company: "CERV",
          role: "Programador Web",
          startLabel: "Abr 2026",
          endLabel: "Jun 2026",
          bullets: [
            "Implementé aplicaciones web escalables con TypeScript (React) y Laravel.",
            "Diseñé APIs REST que redujeron la latencia de comunicación en ~30%.",
            "Integré flujos de IA en el ciclo de desarrollo bajo Scrum.",
          ],
        },
        {
          company: "BSG Institute",
          role: "Auxiliar de Base de Datos",
          startLabel: "Jul 2025",
          endLabel: "Ene 2026",
          bullets: [
            "Optimicé consultas T-SQL y reduje el tiempo de reportes recurrentes en ~40%.",
            "Mantuve esquemas relacionales con 100% de disponibilidad en el entorno académico.",
            "Documenté procedimientos de respaldo y normalización para el equipo.",
          ],
        },
        {
          company: "Fibertel Networks S.A.C.",
          role: "Pasante de Diseño y Desarrollo",
          startLabel: "Ago 2024",
          endLabel: "Sep 2024",
          bullets: [
            "Apoyé el diseño y desarrollo de interfaces internas en sprints cortos.",
            "Implementé componentes frontend reutilizables que acortaron el tiempo de entrega.",
            "Colaboré en el flujo Scrum de un equipo de producto de telecomunicaciones.",
          ],
        },
      ],
    } satisfies ExperienceData,
  },
  {
    id: "projects",
    type: "projects",
    order: 4,
    visible: true,
    index: "04",
    kicker: "PROYECTOS DESTACADOS",
    title: "Arquitectura que se puede defender",
    alt: true,
    data: {
      items: [
        {
          slug: "ariq-labs",
          index: "01",
          name: "ARIQ Labs",
          status: "development",
          description:
            "Landing B2B para pymes de Arequipa: precios en soles, WhatsApp como canal y un bot que califica el lead.",
          stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Motion", "Playwright"],
          bullets: [
            "Conversión por WhatsApp con mensaje prearmado según paquete; sin checkout ni login.",
            "Precios como datos tipados (PACKAGES); la tabla escala sin reescribir componentes.",
            "CI con lint, typecheck, build, e2e (3 browsers) y contrato API con Bruno.",
          ],
          problem:
            "Sin un sitio claro, el primer contacto no transmite precios en soles, plazo de 10 días ni un canal de conversación. El modelo comercial cierra por WhatsApp (50% / 50%), no con checkout.",
          features: [
            "Landing de una URL: Hero, Servicios, Cómo funciona, Precios, FAQ, Footer y widget ARIQ Bot.",
            "Deep links wa.me con mensaje según paquete o intención (genérico, demo, auditoría).",
            "POST /api/lead con Zod, sanitizado y rate limit, listo para CRM (sin persistencia ni formulario en UI).",
            "SEO: metadata, JSON-LD LocalBusiness, robots, sitemap, OG e iconos generados.",
            "Marca cerrada en @theme e isotipo SVG; a11y con skip link, FAQ en details y chat con diálogo.",
          ],
          decisions: [
            "Next.js 16 App Router + SSG: landing estática sin login ni catálogo dinámico.",
            "Tailwind v4 con tokens en @theme — paleta y fuentes fijas, sin tailwind.config.js.",
            "Conversión 100% wa.me; la API de leads existe para integración futura, no para formulario visible.",
            "CSP estricta en prod y X-Frame-Options DENY — el preview del portafolio abre en pestaña nueva.",
          ],
          diagram: "/assets/projects/ariq-labs/ariq-web.architecture.svg",
          diagramInteractive: "/assets/projects/ariq-labs/ariq-web.architecture.html",
          poster: "/assets/projects/ariq-labs/image.png",
          screenshots: [
            {
              src: "/assets/projects/ariq-labs/image.png",
              alt: "Hero en móvil: H1, precios en soles, Arequipa, CTA WhatsApp y ancla a precios",
            },
            {
              src: "/assets/projects/ariq-labs/image2.png",
              alt: "Precios: tabla de paquetes, mensualidad, badge Socios Fundadores, CTA Elegir Pro y widget ARIQ Bot",
            },
          ],
          demoUrl: "https://ariq-web.vercel.app/",
          embeddable: false,
          repoUrl: "https://github.com/delcarpio-deivid/ariq-web",
        },
        {
          slug: "michimimos-theme",
          index: "02",
          name: "Michimimos",
          status: "development",
          description:
            "Tema Shopify custom para bienestar felino: identidad propia, SEO estructural y motion con propósito — no un skin de Dawn.",
          stack: ["Shopify OS 2.0", "Liquid", "CSS tokens", "JS vanilla", "Shopify CLI"],
          bullets: [
            "Hub Productos en bento 6×6 con prioridad visual en Rascadores y Camas.",
            "PDP con FAQ accesible y paridad SEO vs Dawn sin heredar su estética.",
            "Loader de marca con prefers-reduced-motion y design system documentado.",
          ],
          problem:
            "Los temas stock (Dawn y clones) no comunican un hogar calmado ni diferencian la marca. Sin Git, el editor de Shopify es frágil; el canal orgánico exige H1, FAQ, meta y CWV tanto como el look.",
          features: [
            "Scaffold OS 2.0 propio: secciones, snippets, templates JSON y CSS custom properties.",
            "Superficies: home, hub Productos, colección, PDP, carrito, búsqueda, blog, About y 404.",
            "Imágenes con image_url + widths; LCP eager y lazy bajo el fold.",
            "FAQ con button + aria-expanded para long-tail SEO.",
            "Flujo Git feat/* → dev (preview) → main; publish siempre humano.",
          ],
          decisions: [
            "Tema custom vs Dawn: Dawn como checklist técnica (markup, lazy images, schema), no como skin.",
            "Tokens de marca — bosque #2B4034, piedra, terracota puntual; Outfit + Source Sans 3.",
            "Motion con CSS/WAAPI y presupuesto de animación; fuera de alcance Hydrogen y libs pesadas.",
            "Próximo paso: seed de catálogo Admin + Lighthouse móvil en home y PDP.",
          ],
          diagram: "/assets/projects/michimimos-theme/michimimos-theme.svg",
          poster: "/assets/projects/michimimos-theme/image.png",
          screenshots: [
            {
              src: "/assets/projects/michimimos-theme/image.png",
              alt: "Home: hero de una composición, identidad calmada y un H1 por plantilla",
            },
            {
              src: "/assets/projects/michimimos-theme/image2.png",
              alt: "Hub Productos: bento 6×6 con prioridad en Rascadores y Camas",
            },
            {
              src: "/assets/projects/michimimos-theme/image3.png",
              alt: "PDP: ficha de producto con FAQ accesible y tokens de marca",
            },
          ],
          demoUrl: "https://www.michimimos.com/",
          embeddable: false,
          repoUrl: "https://github.com/delcarpio-deivid/michimimos-theme",
        },
        {
          slug: "tubescan",
          index: "03",
          name: "TubeScan",
          status: "development",
          description:
            "App móvil de campo: operadores cuentan tubos PVC en el carrito; la oficina revisa cantidades, peso y la jornada en KOTSCAN.",
          stack: ["Expo 54", "React Native", "TF.js YOLOv8n", "TanStack Query", "Zod", "SQLite"],
          bullets: [
            "Conteo on-device (YOLOv8n → TF.js); la persona corrige y el backend guarda detectado vs. final.",
            "Peso neto con tara snapshot del catálogo; el registro no se rompe si cambia el carrito.",
            "Cola offline en SQLite + client_scan_id: registrar sin señal sin duplicar al sync.",
          ],
          problem:
            "En planta hay que contar tubos en un carrito, pesar y dejar un registro que oficina pueda revisar el mismo día. El conteo a mano es lento y se corrige después, a veces sin red.",
          features: [
            "TubeScan (Expo): login, inicio con sede/turno, captura por cámara o galería, reportes según capacidad.",
            "Detección en el teléfono (640 px, umbral 0.4) para no depender de red al disparar.",
            "Cantidad editable, peso neto = bruto − tara; idempotencia con (operator_id, device_id, client_scan_id).",
            "Permisos y tabs los define la API; el móvil no mapea roles en cliente.",
            "Sync al reconectar tras bootstrap; fotos firmadas a Cloudinary cuando está configurado.",
          ],
          decisions: [
            "Foco de esta ficha: app móvil; admin Angular y API Go comparten la misma fuente de verdad.",
            "IA en dispositivo vs. nube: latencia cero al contar y corrección humana antes del submit.",
            "Sin URL pública ni release: producto en rama develop; main aún en commit inicial.",
            "Próximo paso: confirmación de guardado en develop + build EAS con entorno real.",
          ],
          diagram: "/assets/projects/kotscan/kotscan-architecture.svg",
          diagramInteractive: "/assets/projects/kotscan/kotscan-architecture.html",
          poster: "/assets/projects/kotscan/image3.png",
          screenshotsNote:
            "Capturas con datos de demo. Sin rostros ni identificadores de planta.",
          screenshotGroups: [
            {
              label: "MÓVIL · TUBESCAN",
              items: [
                {
                  src: "/assets/projects/kotscan/image.png",
                  alt: "Inicio de sesión: acceso del operador al flujo de campo",
                },
                {
                  src: "/assets/projects/kotscan/image2.png",
                  alt: "Inicio: resumen de producción, sede y turno activo",
                },
                {
                  src: "/assets/projects/kotscan/image3.png",
                  alt: "Captura: foto del carrito, conteo del modelo YOLOv8n, cantidad editable y peso neto",
                },
              ],
            },
            {
              label: "ADMIN · KOTSCAN",
              note: "Recorte confidencial: números y estados de demo, no datos de cliente.",
              items: [
                {
                  src: "/assets/projects/kotscan/imagefrontend.png",
                  alt: "Inicio de sesión del panel administrador KOTSCAN",
                },
                {
                  src: "/assets/projects/kotscan/imagefrontend2.png",
                  alt: "Dashboard de escaneos generales: control TS-…, estados y acciones revisar o rechazar",
                },
              ],
            },
          ],
          previewNote:
            "Sin demo pública. Producto en develop, no desplegado en producción.",
          repoNote:
            "Repositorio privado en GitLab (fcode-tech/tube-scan). Código disponible bajo solicitud por confidencialidad del cliente.",
        },
        {
          slug: "predictive-maintenance-system",
          index: "04",
          name: "Mantenimiento predictivo",
          status: "development",
          description:
            "Dashboard de campo para planta: semáforo de salud, telemetría en vivo y órdenes, con FastAPI y un simulador IoT.",
          stack: [
            "FastAPI",
            "TimescaleDB",
            "Redis",
            "React 18",
            "Vite",
            "Tailwind",
            "scikit-learn",
          ],
          bullets: [
            "Un solo Postgres (Timescale) para inventario y series, sin TSDB aparte.",
            "Telemetría en vivo por WebSocket autenticado; señal suavizada antes de pintar.",
            "Grafo de impacto entre componentes en el detalle del activo, no como quinta pestaña.",
          ],
          problem:
            "En planta pequeña el mantenimiento sigue siendo reactivo: se repara cuando ya falló. El técnico no ve qué activo atender ni por qué; el supervisor no ve cómo una falla se propaga entre componentes.",
          features: [
            "Tabs Activos, Salud, Órdenes y Reportes con tema oscuro fijo para taller.",
            "Salud: Gauge + Live Line con ingest del simulador IoT (vibración, temperatura, corriente).",
            "Toggle Propagación de fallas en la misma ruta de Salud — grafo NetworkX sobre PostgreSQL.",
            "Órdenes: alta, transición y cierre en una pantalla; RBAC definido en la API.",
            "ML: inferencia con joblib activo o umbral sobre señal suavizada; pipeline de entrenamiento aparte.",
          ],
          decisions: [
            "ADR-0001: TimescaleDB en el mismo motor que el catálogo; se descartó InfluxDB y el loop Ruflo (ADR-0002).",
            "Familias de color separadas: semáforo de salud ≠ KPIs de reportes ≠ badges de órdenes.",
            "Carga API en laboratorio (Locust Fase 4): p95 120 ms, 0 fallos HTTP — JWT compartido, no es producción.",
            "Proyecto de tesis en elaboración; código usable en ramas feature, main solo README de producto.",
          ],
          diagram: "/assets/projects/predictive-maintenance-system/sistema-mantenimiento-predictivo.svg",
          diagramInteractive:
            "/assets/projects/predictive-maintenance-system/sistema-mantenimiento-predictivo.html",
          poster: "/assets/projects/predictive-maintenance-system/image2.png",
          screenshotsNote:
            "Proyecto confidencial en elaboración. Capturas locales con simulador; sin credenciales ni datos de cliente.",
          screenshots: [
            {
              src: "/assets/projects/predictive-maintenance-system/image2.png",
              alt: "Activos: tarjetas con semáforo de salud ordenadas por severidad",
            },
            {
              src: "/assets/projects/predictive-maintenance-system/image3.png",
              alt: "Órdenes: filtros, badges de prioridad y estado, ciclo alta → transición → cierre",
            },
            {
              src: "/assets/projects/predictive-maintenance-system/image.png",
              alt: "Inicio de sesión: acceso JWT al dashboard (sin credenciales visibles)",
            },
          ],
          previewNote:
            "Sin demo pública. Corre en local con Docker Compose (localhost:3000). Proyecto en pulido.",
          repoNote:
            "Repositorio privado en GitHub (predictive-maintenance-system). Disponible bajo solicitud — tesis en elaboración.",
        },
      ],
    } satisfies ProjectsData,
  },
  {
    id: "education",
    type: "education",
    order: 5,
    visible: true,
    index: "05",
    kicker: "FORMACIÓN ACADÉMICA",
    title: "Base técnica, no solo títulos",
    data: {
      school: "Tecsup",
      degree: "Bachiller en Diseño y Desarrollo de Software",
      period: "2022 — 2025",
      status: "En proceso de titulación",
      note: "Formación centrada en ciclo completo: diseño de software, desarrollo web y fundamentos de arquitectura.",
    } satisfies EducationData,
  },
  {
    id: "languages-certs",
    type: "languages-certs",
    order: 6,
    visible: true,
    index: "06",
    kicker: "IDIOMAS Y CERTIFICACIONES",
    title: "Comunicación y formación continua",
    alt: true,
    data: {
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B1 — Intermedio" },
      ],
      certs: [
        { year: "2023", title: "Desarrollo web fullstack" },
        { year: "2024", title: "Fundamentos de Scrum y entrega ágil" },
        { year: "2025", title: "Bases de datos relacionales y T-SQL" },
      ],
    } satisfies LanguagesCertsData,
  },
  {
    id: "contact",
    type: "contact",
    order: 7,
    visible: true,
    index: "07",
    kicker: "CONTACTO",
    title: "Hablemos del siguiente sistema",
    data: {
      lead: "Arequipa, Perú. Respuesta habitual en menos de 24 h.",
      email: "deividdelcarpio.dev@gmail.com",
      phone: "+51 970 337 947",
      linkedin: {
        label: "linkedin.com/in/deivid-jhon-del-carpio-vilca",
        href: "https://linkedin.com/in/deivid-jhon-del-carpio-vilca",
      },
      location: "Arequipa, Perú",
    } satisfies ContactData,
  },
];
