import { sections } from "./content/sections";
import { sectionRegistry } from "./components/sections/registry";
import { Navbar } from "./components/Navbar";

export default function App() {
  const visibleSections = sections
    .filter((section) => section.visible)
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[8px] focus:bg-accent focus:px-3 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        {visibleSections.map((section) => {
          const Component = sectionRegistry[section.type];
          if (!Component) return null;
          return <Component key={section.id} {...section} />;
        })}
      </main>
    </>
  );
}
