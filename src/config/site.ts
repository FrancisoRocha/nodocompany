/**
 * Metadatos y configuración global del sitio.
 * Todo lo que cambie cuando arranquen dominio/emails/contacto, se edita acá.
 */

import type { NavLink } from "../types";

export const SITE = {
  name: "nodo",
  tagline: "tu negocio en autopilot",
  description:
    "nodo — agencia de IA y automatización para PYMES. agentes de IA, integraciones n8n, sitios web y software a medida. CDMX y Argentina.",
  locations: "Ciudad de México · Argentina",
  year: 2026,
} as const;

export const CONTACT = {
  email: "nodoautomationmxar@gmail.com",
  // TODO: cuando compren dominio, cambiar a hola@nodo.mx o similar.
  whatsapp: "https://wa.me/5215555555555?text=hola%20nodo%2C%20me%20interesa%20una%20automatizaci%C3%B3n",
  // TODO: reemplazar con el número real de WhatsApp de Nodo.
  calendly: "https://calendly.com/nodo/primera-llamada",
  // TODO: crear el Calendly real y pegar el link.
  linkedin: "https://www.linkedin.com/company/nodo",
  instagram: "https://www.instagram.com/nodo",
} as const;

export const NAV_LINKS: NavLink[] = [
  { id: "servicios", label: "servicios" },
  { id: "proceso", label: "proceso" },
  { id: "nosotros", label: "nosotros" },
  { id: "equipo", label: "equipo" },
];

export const FOOTER_LINKS: NavLink[] = [
  { id: "servicios", label: "servicios" },
  { id: "proceso", label: "proceso" },
  { id: "equipo", label: "equipo" },
  { id: "contacto", label: "contacto" },
];
