import { motion } from "framer-motion";
import { fadeUpWithDelay } from "../../config/animations";
import { useScrollTo } from "../../hooks/useScrollTo";
import { Button } from "../ui/Button";
import { ArrowIcon } from "../ui/ArrowIcon";
import { CONTACT } from "../../config/site";

export function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-32 pb-16">
      <div className="mx-auto w-full max-w-[1100px]">
        <motion.div
          className="mb-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-widest text-text-secondary"
          variants={fadeUpWithDelay(0)}
          initial="hidden"
          animate="visible"
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
              boxShadow: "0 0 10px rgba(59,130,246,0.6)",
            }}
          />
          disponibles para nuevos proyectos
        </motion.div>

        <motion.h1
          className="mb-7 max-w-[820px] text-[clamp(2.4rem,5.5vw,4.2rem)] font-normal leading-[1.1] tracking-tighter"
          variants={fadeUpWithDelay(0.1)}
          initial="hidden"
          animate="visible"
        >
          tu negocio en
          <br />
          <span className="gradient-text">autopilot.</span>
        </motion.h1>

        <motion.p
          className="mb-10 max-w-[560px] text-[0.92rem] leading-relaxed text-text-secondary"
          variants={fadeUpWithDelay(0.2)}
          initial="hidden"
          animate="visible"
        >
          diseñamos agentes de ia y automatizaciones que conectan tus
          herramientas y trabajan por ti. para que dejes de operar y
          empieces a crecer.
        </motion.p>

        <motion.div
          className="flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          variants={fadeUpWithDelay(0.3)}
          initial="hidden"
          animate="visible"
        >
          <Button
            as="a"
            href={CONTACT.calendly}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            agenda una llamada
            <ArrowIcon />
          </Button>
          <Button onClick={() => scrollTo("servicios")} variant="secondary">
            ver servicios
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
