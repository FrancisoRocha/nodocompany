import { motion } from "framer-motion";
import type { Service } from "../../types";
import { SERVICES } from "../../data/services";
import { SectionHeader } from "../ui/SectionHeader";
import { ArrowIcon } from "../ui/ArrowIcon";

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group bg-white p-8 sm:p-10 transition-all duration-500 hover:bg-neutral-50 flex flex-col h-full">
      <header>
        <span className="mb-6 block font-mono text-[0.65rem] tracking-[0.2em] text-blue-600 font-semibold uppercase">
          {service.num}
        </span>
        <h3 className="mb-4 text-xl font-semibold tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </h3>
      </header>
      
      <p className="mb-8 text-[0.9rem] leading-relaxed text-neutral-600">
        {service.description}
      </p>

      <footer className="mt-auto">
        <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
          {service.benefits.map((benefit, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[0.8rem] leading-snug text-neutral-500 font-medium"
            >
              <ArrowIcon className="mt-1 w-3.5 h-3.5 text-blue-500/70 shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}

/**
 * Services — Optimizada para SEO y accesibilidad.
 * Usa marcado semántico avanzado y grid optimizado.
 */
export function Services() {
  return (
    <section id="servicios" className="relative z-10 py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Nuestros Servicios"
          title="Soluciones de IA que funcionan desde el primer día"
          description="Entregamos herramientas reales que ahorran tiempo y automatizan procesos complejos. Sin tecnicismos vacíos."
          align="center"
        />

        <motion.div
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 md:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.num} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
