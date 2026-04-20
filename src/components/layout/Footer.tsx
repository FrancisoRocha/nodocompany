import { useScrollTo } from "../../hooks/useScrollTo";
import { FOOTER_LINKS, SITE } from "../../config/site";

/**
 * Footer — Optimizado para accesibilidad y SEO.
 * Mejora el contraste y la navegación semántica.
 */
export function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className="relative z-10 border-t border-slate-200/60 py-10 bg-[#f8fafc]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-opacity hover:opacity-70"
            aria-label="Volver al inicio de la página"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600" />
            {SITE.name}
          </button>
          
          <span className="text-xs text-neutral-500 font-medium">
            © {SITE.year} {SITE.name}. {SITE.locations}.
          </span>
        </div>

        <nav aria-label="Navegación secundaria del pie de página">
          <ul className="flex flex-wrap justify-center gap-6 list-none m-0 p-0">
            {FOOTER_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-xs text-neutral-500 font-mono tracking-tight hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
