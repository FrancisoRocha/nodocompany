import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "escuchamos",
    desc: "entendemos tu operación, tus dolores y qué te quita tiempo cada día.",
  },
  {
    num: "02",
    title: "diseñamos",
    desc: "proponemos la solución más eficiente. sin sobre-ingeniería.",
  },
  {
    num: "03",
    title: "construimos",
    desc: "desarrollamos, probamos y entregamos. ves el progreso en tiempo real.",
  },
  {
    num: "04",
    title: "iteramos",
    desc: "medimos resultados y ajustamos. tu negocio evoluciona, nosotros también.",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative z-10 border-y border-border py-24"
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 block text-[0.68rem] uppercase tracking-[0.15em] text-text-tertiary">
            proceso
          </span>
          <h2 className="mb-3 text-[clamp(1.6rem,3.2vw,2.4rem)] font-normal leading-tight tracking-tighter">
            simple. rápido. sin rodeos.
          </h2>
          <p className="mx-auto max-w-[480px] text-[0.88rem] leading-relaxed text-text-secondary">
            de la primera llamada a resultados reales en menos de lo que crees.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {STEPS.map((step) => (
            <div key={step.num} className="text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-border-hover text-[0.85rem] font-medium">
                {step.num}
              </div>
              <h4 className="mb-2 text-[0.9rem] font-medium">{step.title}</h4>
              <p className="text-[0.78rem] leading-relaxed text-text-secondary">
                {step.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
