import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "../../config/animations";
import { TECHS } from "../../data/techs";

export function TechBar() {
  return (
    <motion.section
      className="relative z-10 border-y border-border py-16"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.p
          className="mb-8 text-center text-xs uppercase tracking-widest text-text-tertiary"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT_EXPO }}
        >
          el stack con el que construimos tu área de ia
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {TECHS.map((tech, i) => (
            <motion.span
              key={tech.name}
              className="rounded-full border border-border bg-bg-card px-5 py-2 text-sm font-medium tracking-wide text-text-secondary transition-colors duration-200 hover:border-border-hover hover:text-text"
              initial={{ opacity: 0, y: 24, scale: 0.88 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.08,
                ease: EASE_OUT_EXPO,
              }}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
