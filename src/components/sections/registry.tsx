import type { ComponentType } from "react";
import type { SectionType } from "../../content/sections";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { LanguagesCerts } from "./LanguagesCerts";
import { Contact } from "./Contact";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sectionRegistry: Record<SectionType, ComponentType<any>> = {
  hero: Hero,
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  education: Education,
  "languages-certs": LanguagesCerts,
  contact: Contact,
};
