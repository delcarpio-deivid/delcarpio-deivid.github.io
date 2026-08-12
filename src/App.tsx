import { Navbar } from "./components/Navbar";
import { sectionRegistry } from "./components/sections/registry";
import { sections } from "./content/sections";

export default function App() {
  const visible = sections.filter((section) => section.visible).sort((a, b) => a.order - b.order);

  return (
    <>
      <Navbar />
      <main className="pt-64">
        {visible.map((section) => {
          const Component = sectionRegistry[section.type];
          if (!Component) return null;
          return <Component key={section.id} {...section} />;
        })}
      </main>
      <footer className="flex flex-col gap-8 border-t border-line-subtle px-24 py-24 pb-48 md:flex-row md:items-center md:justify-between md:px-[120px]">
        <p className="font-mono text-[11px] text-ink-muted">© 2026 Deivid Jhon Del Carpio Vilca</p>
        <p className="font-mono text-[11px] text-ink-muted">Arequipa, Perú</p>
      </footer>
    </>
  );
}
