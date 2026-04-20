import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "../../config/animations";
import { CONTACT } from "../../config/site";
import { Button } from "../ui/Button";
import { ArrowIcon } from "../ui/ArrowIcon";

export function CTA() {
  return (
    <section
      id="contacto"
      className="relative z-10 border-t border-border py-16 sm:py-20 md:py-24 text-center"
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
        >
          <span className="mb-4 block text-[0.68rem] uppercase tracking-[0.15em] text-text-tertiary">
            empezar
          </span>
          <h2 className="mx-auto mb-3 max-w-[600px] text-[clamp(1.6rem,3.2vw,2.4rem)] font-normal leading-tight tracking-tighter">
            ¿listo para automatizar
            <br />
            tu negocio con ia?
          </h2>
          <p className="mx-auto mb-8 sm:mb-9 max-w-[480px] text-[0.85rem] sm:text-[0.88rem] leading-relaxed text-text-secondary">
            agenda una llamada de 20 minutos. sin compromiso, sin letra chica.
            te mostramos qué podemos automatizar y cuánto te ahorrarías.
          </p>

          <div className="flex flex-col items-stretch sm:items-center justify-center gap-3 sm:flex-row">
            <Button
              as="a"
              href={CONTACT.calendly}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              agendar llamada
              <ArrowIcon />
            </Button>
            <Button
              as="a"
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              escribir por whatsapp
            </Button>
          </div>

          <p className="mt-6 text-[0.72rem] text-text-tertiary">
            o escríbenos a{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-text-secondary no-underline hover:text-text"
            >
              {CONTACT.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
