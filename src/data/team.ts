import type { Member } from "../types";

export const TEAM: Member[] = [
  {
    initials: "FR",
    name: "Francisco Rocha",
    role: "Co-fundador · Engineering",
    tags: ["react", "typescript", "n8n", "ia"],
    // Azul eléctrico → cyan → indigo (tech / engineering)
    gradient:
      "conic-gradient(from 0deg, #2563eb, #06b6d4, #3b82f6, #1e40af, #60a5fa, #2563eb)",
    glow: "rgba(37, 99, 235, 0.35)",
  },
  {
    initials: "AH",
    name: "Abraham Hernández",
    role: "Co-fundador · Operaciones & CX",
    tags: ["ventas", "cx", "ops", "ia"],
    // Violeta → fucsia → magenta (CX / relacional)
    gradient:
      "conic-gradient(from 0deg, #7c3aed, #d946ef, #ec4899, #a78bfa, #c084fc, #7c3aed)",
    glow: "rgba(217, 70, 239, 0.35)",
  },
];
