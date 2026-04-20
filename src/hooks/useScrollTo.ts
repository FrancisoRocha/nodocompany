/**
 * Hook para hacer scroll suave a una sección de la landing por id.
 * Mejorado con gestión de focus (A11y) y actualización de URL.
 */

import { useCallback } from "react";

export function useScrollTo() {
  return useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Scroll suave a la vista
    el.scrollIntoView({ behavior: "smooth" });

    // Actualiza la URL para permitir compartir links (SEO/UX) y navegar con el botón "Atrás"
    window.history.pushState(null, "", `#${id}`);

    // Gestión de accesibilidad: mover el foco al elemento destino
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true }); // preventScroll evita saltos bruscos antes de la animación
  }, []);
}
