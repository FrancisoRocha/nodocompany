import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-32 pb-16">
      <div className="mx-auto w-full max-w-[1100px]">
        <motion.div
          className="mb-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-widest text-text-secondary"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green" />
          disponibles para nuevos proyectos
        </motion.div>

        <motion.h1
          className="mb-7 max-w-[800px] text-[clamp(2.4rem,5.5vw,4.2rem)] font-normal leading-[1.1] tracking-tighter"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          tu negocio en
          <br />
          autopilot.
        </motion.h1>

        <motion.p
          className="mb-10 max-w-[500px] text-[0.92rem] leading-relaxed text-text-secondary"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          automatizamos procesos, construimos sitios web y gestionamos tu
          atención al cliente — para que tú te enfoques en crecer.
        </motion.p>

        <motion.div
          className="flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <button
            onClick={() => scrollTo("contacto")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-md border-none bg-text px-6 py-2.5 text-[0.82rem] text-bg transition-all hover:-translate-y-0.5 hover:opacity-80 font-mono"
          >
            agenda una llamada
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => scrollTo("servicios")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-transparent px-6 py-2.5 text-[0.82rem] text-text-secondary transition-all hover:border-border-hover hover:text-text font-mono"
          >
            ver servicios
          </button>
        </motion.div>
      </div>
    </section>
  );
}
