import type { ComponentType } from "react";
import type { SectionType } from "../../content/sections";
import { About } from "./About";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Hero } from "./Hero";
import { LanguagesCerts } from "./LanguagesCerts";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const sectionRegistry: Partial<Record<SectionType, ComponentType<any>>> = {
  hero: Hero,
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  education: Education,
  "languages-certs": LanguagesCerts,
  contact: Contact,
};
