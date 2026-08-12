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

export interface ProjectItem {
  index: string;
  name: string;
  description: string;
  stack: string[];
  bullets: string[];
  link?: { label: string; href: string };
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
          index: "01",
          name: "Luqa",
          description:
            "Plataforma de Educación Financiera con IA. Arquitectura Hexagonal + CQRS para separar comandos, consultas y dominio.",
          stack: ["Hexagonal", "CQRS", "LLMs"],
          bullets: [
            "Modelo de dominio desacoplado del transporte HTTP y de la UI.",
            "Consultas CQRS para lecturas de progreso sin bloquear comandos de estudio.",
          ],
        },
        {
          index: "02",
          name: "Mistika",
          description:
            "App de Impulso al Turismo. Angular en web, Swift en iOS y Firebase como backend en tiempo real.",
          stack: ["Angular", "Swift", "Firebase"],
          bullets: [
            "Experiencia nativa + web compartiendo autenticación y datos en Firebase.",
            "Flujos de descubrimiento turístico pensados para conversión, no solo catálogo.",
          ],
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
