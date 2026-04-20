import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import type { ReactNode } from "react";

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
 * FloatingCard — Glassmorphism Premium restaurado.
 * Estética de alta calidad con optimización de rendimiento.
 */
export const FloatingCard = memo(function FloatingCard({
  label,
  sublabel,
  icon,
  position,
  delay = 0,
  size = "md",
  variant = "default",
  floatOffset = 0,
}: FloatingCardProps) {
  
  const config = useMemo(() => ({
    sizeClass: SIZES[size],
    labelSize: LABEL_SIZES[size],
    iconScale: ICON_SCALES[size]
  }), [size]);

  const isCore = variant === "core";
  const isAccent = variant === "accent";

  return (
    <motion.div
      className="absolute z-10 will-change-transform"
      style={{
        top: position.top,
        left: position.left,
        x: "-50%",
        y: "-50%",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div 
        className="floating-anim"
        style={{ 
          animationDelay: `${delay}s`,
          "--float-dist": `${-8 + floatOffset}px` 
        } as any}
      >
        <div
          className={`relative ${config.sizeClass} rounded-2xl flex flex-col items-center justify-center gap-1.5 backdrop-blur-xl transition-all duration-500`}
          style={
            isCore
              ? {
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 24px 56px -18px rgba(99, 102, 241, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                }
              : isAccent
                ? {
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(219, 234, 254, 0.8) 100%)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    boxShadow: "0 18px 40px -15px rgba(37, 99, 235, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
                  }
                : {
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(241, 245, 249, 0.9) 100%)",
                    border: "1px solid rgba(37, 99, 235, 0.15)",
                    boxShadow: "0 18px 40px -15px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
                  }
          }
        >
          <div className={`flex flex-col items-center justify-center gap-1.5 ${config.iconScale}`}>
            {icon}
            <span
              className={`${config.labelSize} font-mono tracking-wider font-medium ${
                isCore ? "text-white" : isAccent ? "text-blue-700" : "text-slate-600"
              }`}
            >
              {label}
            </span>
            {sublabel && (
              <span className={`text-[0.42rem] sm:text-[0.5rem] font-mono tracking-wider ${isCore ? "text-white/70" : "text-slate-400"}`}>
                {sublabel}
              </span>
            )}
          </div>

          {isCore && (
            <div className="absolute inset-0 rounded-2xl animate-pulse-slow border-2 border-white/20 pointer-events-none" />
          )}
        </div>
      </div>

      <style>{`
        .floating-anim {
          animation: float-card 6s infinite ease-in-out;
          will-change: transform;
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(var(--float-dist, -10px)); }
        }
        .animate-pulse-slow {
          animation: core-ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes core-ping {
          75%, 100% { transform: scale(1.3); opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
});
