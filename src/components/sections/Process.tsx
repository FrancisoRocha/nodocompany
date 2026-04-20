import { motion } from "framer-motion";
import { PROCESS_STEPS } from "../../data/process";
import { EASE_OUT_EXPO } from "../../config/animations";
import { SectionHeader } from "../ui/SectionHeader";

export function Process() {
  return (
    <section
      id="proceso"
      className="relative z-10 border-y border-border py-24"
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionHeader
          className="mb-16"
          align="center"
          eyebrow="proceso"
          title="simple. rápido. sin rodeos."
          description="de la primera llamada a resultados reales en menos de lo que crees."
        />

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT_EXPO }}
        >
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-border-hover text-[0.85rem] font-medium">
                {step.num}
              </div>
              <h4 className="mb-1 text-[0.9rem] font-medium">{step.title}</h4>
              {step.duration && (
                <p className="mb-2 text-[0.65rem] uppercase tracking-widest text-accent">
                  {step.duration}
                </p>
              )}
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
