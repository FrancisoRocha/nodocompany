import type { Tech } from "../types";

/**
 * Stack técnico visible en la landing.
 * Organizado por categoría para que la TechBar pueda filtrar/renderizar agrupado si hace falta.
 */
export const TECHS: Tech[] = [
  { name: "n8n", category: "automation" },
  { name: "OpenAI", category: "ai" },
  { name: "Anthropic", category: "ai" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
];
