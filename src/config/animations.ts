/**
 * Variants de framer-motion reutilizables.
 * Mantener constantes de animación acá evita que cada componente redeclare lo mismo.
 */

import type { Variants } from "framer-motion";

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT_EXPO },
  },
};

export const fadeUpWithDelay = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT_EXPO },
  },
});

export const viewportOnce = { once: true, amount: 0.12 } as const;
