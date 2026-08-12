export type SectionType =
  | "hero"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "education"
  | "languages-certs"
  | "contact";

export interface Cta {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface HeroData {
  name: string;
  role: string;
  photo: string;
  location: string;
  tagline: string;
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
  start: string;
  end: string;
  bullets: string[];
}

export interface ExperienceData {
  items: ExperienceItem[];
}

export interface ProjectItem {
  name: string;
  description: string;
  role: string;
  stack: string[];
  bullets: string[];
  link?: string;
}

export interface ProjectsData {
  items: ProjectItem[];
}

export interface EducationData {
  institution: string;
  degree: string;
  period: string;
  status: string;
}

export interface LanguagesCertsData {
  languages: { name: string; level: string }[];
  certifications: { name: string; year: string }[];
}

export interface ContactData {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  /** Formspree form id — replace with your own at https://formspree.io */
  formspreeId: string;
}

export interface SectionConfig<T = unknown> {
  id: string;
  type: SectionType;
  order: number;
  visible: boolean;
  title?: string;
  data: T;
}

export const siteMeta = {
  title: "Deivid Del Carpio — Desarrollador Fullstack",
  cvPath: "/cv.pdf",
};

export const navLinks = [
  { label: "Perfil", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export const sections: SectionConfig[] = [
  {
    id: "hero",
    type: "hero",
    order: 0,
    visible: true,
    data: {
      name: "Deivid Jhon Del Carpio Vilca",
      role: "Desarrollador de Software Fullstack",
      photo: "/assets/deivid.svg",
      location: "Arequipa, Perú",
      tagline:
        "Ciclo completo web + integración de IA. React, Laravel y .NET con arquitecturas escalables.",
      cta: [
        { label: "Contactar", href: "#contact", variant: "primary" },
        { label: "Descargar CV", href: "/cv.pdf", variant: "secondary" },
      ],
    } satisfies HeroData,
  },
  {
    id: "about",
    type: "about",
    order: 1,
    visible: true,
    title: "Perfil profesional",
    data: {
      summary:
        "Egresado de Tecsup, especializado en desarrollo web de ciclo completo e integración de soluciones con IA. Experiencia en React/TypeScript y APIs REST con Laravel y .NET bajo Scrum, con foco en bases de datos relacionales y automatización con LLMs.",
      chips: ["Fullstack", "IA / LLMs", "Arquitectura escalable", "Scrum"],
    } satisfies AboutData,
  },
  {
    id: "skills",
    type: "skills",
    order: 2,
    visible: true,
    title: "Habilidades técnicas",
    data: {
      groups: [
        {
          category: "Lenguajes",
          items: [
            "JavaScript",
            "TypeScript",
            "Python / Flask",
            "C# / .NET",
            "T-SQL",
            "Java",
            "Swift",
          ],
        },
        {
          category: "Frontend",
          items: ["React", "React Native", "Angular", "HTML5", "CSS3"],
        },
        {
          category: "Backend & IA",
          items: [
            "Laravel",
            ".NET Core",
            "REST APIs",
            "Integración de LLMs",
            "Agentes de IA",
          ],
        },
        {
          category: "Bases de Datos",
          items: ["SQL Server", "PostgreSQL", "MySQL", "Oracle"],
        },
        {
          category: "Herramientas",
          items: [
            "Git / GitHub",
            "Azure",
            "Firebase",
            "Scrum",
            "Arquitectura Hexagonal",
            "CQRS",
          ],
        },
      ],
    } satisfies SkillsData,
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
            "Diseñé y desplegué APIs REST reduciendo la latencia de comunicación ~30%.",
            "Colaboré en arquitectura y entrega bajo metodologías ágiles.",
          ],
        },
        {
          company: "BSG Institute",
          role: "Auxiliar de Base de Datos",
          start: "2025-07",
          end: "2026-01",
          bullets: [
            "Optimicé consultas y procesos sobre bases relacionales para operaciones académicas.",
            "Mantuve disponibilidad y consistencia de datos en entornos de producción.",
            "Documenté procedimientos y apoyé a equipos de desarrollo en modelado SQL.",
          ],
        },
        {
          company: "Fibertel Networks S.A.C.",
          role: "Pasante de Diseño y Desarrollo",
          start: "2024-08",
          end: "2024-09",
          bullets: [
            "Participé en diseño y desarrollo de interfaces y flujos de producto.",
            "Apoyé en integración frontend/backend y pruebas de entrega.",
            "Apliqué buenas prácticas de control de versiones y trabajo en equipo.",
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
    title: "Proyectos destacados",
    data: {
      items: [
        {
          name: "Luqa",
          description: "Plataforma de educación financiera con IA",
          role: "Desarrollador Fullstack",
          stack: ["Arquitectura Hexagonal", "CQRS", "React", "APIs", "LLMs"],
          bullets: [
            "Diseñé módulos con separación de dominio (Hexagonal + CQRS).",
            "Integré capacidades de IA para acompañar el aprendizaje financiero.",
          ],
        },
        {
          name: "Mistika",
          description: "App de impulso al turismo",
          role: "Desarrollador",
          stack: ["Angular", "Swift", "Firebase"],
          bullets: [
            "Construí experiencias multiplataforma para descubrimiento turístico.",
            "Conecté frontend web/móvil con Firebase para datos y auth.",
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
    title: "Formación académica",
    data: {
      institution: "Tecsup",
      degree: "Bachiller en Diseño y Desarrollo de Software",
      period: "2022 — 2025",
      status: "En proceso de titulación",
    } satisfies EducationData,
  },
  {
    id: "languages-certs",
    type: "languages-certs",
    order: 6,
    visible: true,
    title: "Idiomas y certificaciones",
    data: {
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Intermedio (B1)" },
      ],
      certifications: [
        { name: "Cursos de desarrollo web y bases de datos", year: "2023–2025" },
        { name: "Formación continua en IA / LLMs", year: "2024–2025" },
      ],
    } satisfies LanguagesCertsData,
  },
  {
    id: "contact",
    type: "contact",
    order: 7,
    visible: true,
    title: "Contacto",
    data: {
      email: "deividdelcarpio.dev@gmail.com",
      phone: "+51 970 337 947",
      linkedin: "https://linkedin.com/in/deivid-jhon-del-carpio-vilca",
      location: "Arequipa, Perú",
      formspreeId: "YOUR_FORMSPREE_ID",
    } satisfies ContactData,
  },
];
