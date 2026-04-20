import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode | string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

/**
 * SectionHeader — Optimizada para SEO y animación.
 * Usa orquestación de hijos para una entrada fluida.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <motion.header
      className={`${isCentered ? "text-center mx-auto" : "text-left"} ${className}`.trim()}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.span 
        variants={itemVariants}
        className="mb-4 block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-blue-600 font-semibold"
      >
        {eyebrow}
      </motion.span>
      
      <motion.h2 
        variants={itemVariants}
        className="mb-5 text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.15] tracking-tight text-neutral-900"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={itemVariants}
          className={`text-[1rem] leading-relaxed text-neutral-500 max-w-[600px] ${isCentered ? "mx-auto" : ""}`.trim()}
        >
          {description}
        </motion.p>
      )}
    </motion.header>
  );
}
