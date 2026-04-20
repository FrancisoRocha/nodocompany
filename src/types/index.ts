/**
 * Tipos compartidos de la landing de Nodo.
 * Todo lo que use más de un componente va acá.
 */

export interface Service {
  num: string;
  title: string;
  description: string;
  benefits: string[];
}

export interface Member {
  initials: string;
  name: string;
  role: string;
  tags: string[];
  linkedin?: string;
  /** Gradient único para el avatar animado (CSS value). */
  gradient: string;
  /** Color rgba para la sombra/glow del avatar. */
  glow: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  duration?: string;
}

export interface Tech {
  name: string;
  category?: "ai" | "automation" | "frontend" | "backend" | "infra";
}

export interface NavLink {
  id: string;
  label: string;
}
