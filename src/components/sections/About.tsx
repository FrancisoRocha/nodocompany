import { motion } from "framer-motion";
import { STATS } from "../../data/stats";
import { EASE_OUT_EXPO } from "../../config/animations";

export function About() {
  return (
    <section id="nosotros" className="relative z-10 py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
          >
            <span className="mb-4 block text-[0.68rem] uppercase tracking-[0.15em] text-text-tertiary">
              nosotros
            </span>
            <h2 className="mb-3 text-[clamp(1.6rem,3.2vw,2.4rem)] font-normal leading-tight tracking-tighter">
              un equipo compacto con hambre de grandes resultados.
            </h2>
            <p className="mb-6 max-w-[480px] text-[0.88rem] leading-relaxed text-text-secondary">
              somos dos fundadores — ingeniería y operaciones — que
              construyen, venden y dan soporte directamente. sin
              intermediarios, hablas con quien escribe el código.
            </p>
            <p className="max-w-[480px] text-[0.88rem] leading-relaxed text-text-secondary">
              trabajamos 100% remoto desde ciudad de méxico. pensamos global,
              entregamos rápido, y nos quedamos para mantener lo que
              construimos.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: EASE_OUT_EXPO,
            }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[10px] border border-border bg-bg-card p-7 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-border-hover"
              >
                <div className="mb-1.5 text-[2rem] font-normal leading-none tracking-tighter">
                  {stat.num}
                </div>
                <div className="text-[0.72rem] tracking-wide text-text-tertiary">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
