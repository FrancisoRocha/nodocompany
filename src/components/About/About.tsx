import { motion } from "framer-motion";

const STATS = [
  { num: "5", label: "especialistas" },
  { num: "3", label: "áreas de servicio" },
  { num: "2", label: "países" },
  { num: "∞", label: "café consumido" },
];

export function About() {
  return (
    <section id="nosotros" className="relative z-10 py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 block text-[0.68rem] uppercase tracking-[0.15em] text-text-tertiary">
              nosotros
            </span>
            <h2 className="mb-3 text-[clamp(1.6rem,3.2vw,2.4rem)] font-normal leading-tight tracking-tighter">
              un equipo pequeño con hambre de grandes resultados.
            </h2>
            <p className="mb-6 max-w-[480px] text-[0.88rem] leading-relaxed text-text-secondary">
              somos desarrolladores, diseñadores y especialistas en atención al
              cliente. no somos una agencia gigante — somos un equipo compacto
              que se mueve rápido y entrega calidad.
            </p>
            <p className="max-w-[480px] text-[0.88rem] leading-relaxed text-text-secondary">
              nacimos en ciudad de méxico con presencia en argentina. trabajamos
              remoto, pensamos global, ejecutamos local.
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
              ease: [0.16, 1, 0.3, 1],
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
