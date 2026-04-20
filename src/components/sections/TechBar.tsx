import { motion, type Variants } from "framer-motion";
import { TECHS } from "../../data/techs";

// Variantes centralizadas para orquestación eficiente
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

/**
 * TechBar — Optimizada para rendimiento y SEO.
 * Usa orquestación de Framer Motion para reducir el overhead de JS.
 */
export function TechBar() {
  return (
    <section className="relative z-10 border-y border-neutral-200/50 py-12 bg-white/30 backdrop-blur-sm">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <p className="mb-8 text-center text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold">
          NUESTRO STACK TECNOLÓGICO
        </p>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {TECHS.map((tech) => (
            <motion.span
              key={tech.name}
              variants={itemVariants}
              className="rounded-full border border-neutral-200 bg-white/80 px-4 py-1.5 text-[0.75rem] sm:text-sm font-medium text-neutral-600 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 cursor-default select-none shadow-sm"
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
