import { motion } from "framer-motion";

export function CTA() {
  return (
    <section
      id="contacto"
      className="relative z-10 border-t border-border py-24 text-center"
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 block text-[0.68rem] uppercase tracking-[0.15em] text-text-tertiary">
            empezar
          </span>
          <h2 className="mx-auto mb-3 max-w-[600px] text-[clamp(1.6rem,3.2vw,2.4rem)] font-normal leading-tight tracking-tighter">
            ¿listo para automatizar
            <br />
            tu negocio?
          </h2>
          <p className="mx-auto mb-9 max-w-[480px] text-[0.88rem] leading-relaxed text-text-secondary">
            agenda una llamada de 15 minutos. sin compromiso, sin letra chica.
          </p>
          <a
            href="mailto:nodoautomationmxar@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-text px-6 py-2.5 text-[0.82rem] text-bg no-underline transition-all hover:-translate-y-0.5 hover:opacity-80"
          >
            nodoautomationmxar@gmail.com
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
