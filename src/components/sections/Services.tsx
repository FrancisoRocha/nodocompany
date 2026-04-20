import { motion } from "framer-motion";
import type { Service } from "../../types";
import { SERVICES } from "../../data/services";
import { EASE_OUT_EXPO } from "../../config/animations";
import { SectionHeader } from "../ui/SectionHeader";

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-bg p-6 sm:p-7 md:p-8 transition-colors duration-300 hover:bg-bg-card">
      <span className="mb-5 sm:mb-6 block text-[0.62rem] sm:text-[0.65rem] tracking-widest text-text-tertiary">
        {service.num}
      </span>
      <h3 className="mb-3 sm:mb-4 text-[1rem] sm:text-[1.05rem] font-medium tracking-tight">
        {service.title}
      </h3>
      <p className="mb-4 sm:mb-5 text-[0.8rem] sm:text-[0.82rem] leading-relaxed text-text-secondary">
        {service.description}
      </p>
      <ul className="flex flex-col gap-2" style={{ listStyle: "none" }}>
        {service.benefits.map((benefit, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[0.75rem] leading-normal text-text-secondary"
          >
            <span className="mt-0.5 shrink-0 text-accent">→</span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="relative z-10 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <SectionHeader
          className="mb-10 sm:mb-12 md:mb-14"
          eyebrow="servicios"
          title={
            <>
              soluciones que funcionan
              <br />
              desde el día uno.
            </>
          }
          description="no vendemos promesas. entregamos herramientas con ia que ahorran tiempo, reducen errores y escalan contigo."
        />

        <motion.div
          className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-border bg-border md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT_EXPO }}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.num} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
