import { useScrollTo } from "../../hooks/useScrollTo";
import { FOOTER_LINKS, SITE } from "../../config/site";

export function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className="relative z-10 border-t border-border py-10">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-5 px-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-7">
          <a
            href="#"
            className="flex items-center gap-1.5 text-[0.88rem] font-medium text-text no-underline"
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
              }}
            />
            {SITE.name}
          </a>
          <span className="text-[0.7rem] text-text-tertiary">
            © {SITE.year} {SITE.name}. {SITE.locations}.
          </span>
        </div>

        <ul className="flex gap-6" style={{ listStyle: "none" }}>
          {FOOTER_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className="cursor-pointer border-none bg-transparent text-[0.72rem] text-text-secondary transition-colors hover:text-text font-mono"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
