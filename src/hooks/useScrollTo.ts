/**
 * Hook para hacer scroll suave a una sección de la landing por id.
 * Evita duplicar la lógica en Navbar, Hero, Footer, etc.
 */

import { useCallback } from "react";

export function useScrollTo() {
  return useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);
}
