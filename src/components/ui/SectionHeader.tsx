import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "../../config/animations";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Encabezado reutilizable para secciones (eyebrow + título + descripción).
 * Se usa en Services, Process, About, Team, CTA, etc.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const descMax = align === "center" ? "mx-auto" : "";

  return (
    <motion.div
      className={`${alignment} ${className}`.trim()}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <span className="mb-4 block text-[0.68rem] uppercase tracking-[0.15em] text-text-tertiary">
        {eyebrow}
      </span>
      <h2 className="mb-3 text-[clamp(1.6rem,3.2vw,2.4rem)] font-normal leading-tight tracking-tighter">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-[480px] text-[0.88rem] leading-relaxed text-text-secondary ${descMax}`.trim()}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
