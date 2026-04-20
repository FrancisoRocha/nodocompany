import { useState } from "react";
import { useScrollTo } from "../../hooks/useScrollTo";
import { NAV_LINKS } from "../../config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();

  const handleClick = (id: string) => {
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border px-6 py-3 backdrop-blur-[30px] bg-bg/80">
      <a
        href="#"
        className="flex items-center gap-1.5 text-base font-medium tracking-tight text-text no-underline"
      >
        <span
          className="inline-block h-[7px] w-[7px] rounded-full"
          style={{
            background:
              "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
          }}
        />
        nodo
      </a>

      {/* Desktop */}
      <ul
        className="hidden items-center gap-9 md:flex"
        style={{ listStyle: "none" }}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => handleClick(link.id)}
              className="cursor-pointer border-none bg-transparent text-[0.8rem] tracking-wide text-text-secondary transition-colors hover:text-text font-mono"
            >
              {link.label}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handleClick("contacto")}
            className="cursor-pointer rounded-md bg-text px-4 py-1.5 text-[0.78rem] text-bg transition-all hover:-translate-y-0.5 hover:opacity-85 font-mono border-none"
          >
            cotizar proyecto
          </button>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        className="flex flex-col gap-1 md:hidden bg-transparent border-none cursor-pointer p-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menú"
      >
        <span className="block h-[1.5px] w-5 bg-text" />
        <span className="block h-[1.5px] w-5 bg-text" />
        <span className="block h-[1.5px] w-5 bg-text" />
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-border bg-bg/95 backdrop-blur-xl p-6 flex flex-col gap-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className="cursor-pointer border-none bg-transparent text-left text-sm text-text-secondary hover:text-text font-mono"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("contacto")}
            className="cursor-pointer rounded-md bg-text px-4 py-2 text-sm text-bg font-mono border-none"
          >
            cotizar proyecto
          </button>
        </div>
      )}
    </nav>
  );
}
