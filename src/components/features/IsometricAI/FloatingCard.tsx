import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT_EXPO } from "../../../config/animations";

interface FloatingCardProps {
  label: string;
  sublabel?: string;
  icon: ReactNode;
  position: { top: string; left: string };
  delay?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "core" | "accent";
  floatOffset?: number;
}

const SIZES: Record<NonNullable<FloatingCardProps["size"]>, string> = {
  sm: "h-[44px] w-[44px] sm:h-[54px] sm:w-[54px] md:h-[64px] md:w-[64px]",
  md: "h-[58px] w-[58px] sm:h-[72px] sm:w-[72px] md:h-[86px] md:w-[86px]",
  lg: "h-[92px] w-[92px] sm:h-[114px] sm:w-[114px] md:h-[140px] md:w-[140px]",
};

const LABEL_SIZES: Record<NonNullable<FloatingCardProps["size"]>, string> = {
  sm: "text-[0.42rem] sm:text-[0.48rem] md:text-[0.52rem]",
  md: "text-[0.46rem] sm:text-[0.52rem] md:text-[0.58rem]",
  lg: "text-[0.58rem] sm:text-[0.66rem] md:text-[0.75rem]",
};

const ICON_SCALES: Record<NonNullable<FloatingCardProps["size"]>, string> = {
  sm: "scale-[0.7] sm:scale-[0.85] md:scale-100",
  md: "scale-[0.7] sm:scale-[0.85] md:scale-100",
  lg: "scale-[0.65] sm:scale-[0.82] md:scale-100",
};

/**
 * Glassmorphic card en modo claro (estilo Chloe Harrison).
 * Base blanca semi-transparente con borde sutil azul y tint interior.
 */
export function FloatingCard({
  label,
  sublabel,
  icon,
  position,
  delay = 0,
  size = "md",
  variant = "default",
  floatOffset = 0,
}: FloatingCardProps) {
  const sizeClass = SIZES[size];
  const labelSize = LABEL_SIZES[size];
  const iconScale = ICON_SCALES[size];

  const isCore = variant === "core";
  const isAccent = variant === "accent";

  return (
    <motion.div
      className="absolute z-10"
      style={{
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0.6, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: EASE_OUT_EXPO }}
    >
      <motion.div
        animate={{
          y: [0, -8 + floatOffset, 0],
        }}
        transition={{
          duration: 5 + delay * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className={`relative ${sizeClass} rounded-2xl flex flex-col items-center justify-center gap-1.5 backdrop-blur-xl`}
          style={
            isCore
              ? {
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.35)",
                  boxShadow:
                    "0 24px 56px -18px rgba(99, 102, 241, 0.4), 0 0 32px rgba(139, 92, 246, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
                }
              : isAccent
                ? {
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(219, 234, 254, 0.7) 100%)",
                    border: "1px solid rgba(59, 130, 246, 0.25)",
                    boxShadow:
                      "0 18px 40px -15px rgba(37, 99, 235, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                  }
                : {
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.8) 100%)",
                    border: "1px solid rgba(37, 99, 235, 0.12)",
                    boxShadow:
                      "0 18px 40px -15px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                  }
          }
        >
          <div
            className={`flex flex-col items-center justify-center gap-1.5 ${iconScale}`}
          >
            {icon}
            <span
              className={`${labelSize} font-mono tracking-wider ${
                isCore
                  ? "text-white font-medium"
                  : isAccent
                    ? "text-blue-700"
                    : "text-slate-600"
              }`}
            >
              {label}
            </span>
            {sublabel && (
              <span
                className={`text-[0.38rem] sm:text-[0.42rem] md:text-[0.48rem] font-mono tracking-wider ${
                  isCore ? "text-white/70" : "text-slate-400"
                }`}
              >
                {sublabel}
              </span>
            )}
          </div>

          {/* Pulse halo solo en el core */}
          {isCore && (
            <>
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: "1.5px solid rgba(129, 140, 248, 0.45)",
                }}
                animate={{
                  scale: [1, 1.18, 1.35],
                  opacity: [0.6, 0.15, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: "1.5px solid rgba(167, 139, 250, 0.35)",
                }}
                animate={{
                  scale: [1, 1.18, 1.35],
                  opacity: [0.5, 0.12, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1.4,
                }}
              />
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
