import { motion } from "framer-motion";
import { memo } from "react";

const CORE = { x: 50, y: 50 };

const SATELLITES = [
  { x: 34, y: 26, delay: 0 },
  { x: 66, y: 26, delay: 0.3 },
  { x: 22, y: 50, delay: 0.6 },
  { x: 78, y: 50, delay: 0.9 },
  { x: 34, y: 76, delay: 1.2 },
  { x: 66, y: 76, delay: 1.5 },
  { x: 50, y: 14, delay: 1.8 },
  { x: 50, y: 86, delay: 2.1 },
];

/**
 * NeuralMesh — Minimalista Premium.
 * Usa estelas de luz (streaks) en lugar de puntos sólidos.
 */
export const NeuralMesh = memo(function NeuralMesh() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
        </linearGradient>

        {/* Gradiente para el rastro de luz minimalista */}
        <radialGradient id="pulse-gradient">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>

      {SATELLITES.map((sat, i) => (
        <g key={i}>
          {/* Línea de conexión minimalista */}
          <line
            x1={CORE.x}
            y1={CORE.y}
            x2={sat.x}
            y2={sat.y}
            stroke="url(#line-gradient)"
            strokeDasharray="1 2"
            vectorEffect="non-scaling-stroke"
            strokeWidth="0.6"
          />

          {/* Rastro de luz (Streak) - Mucho más sofisticado */}
          <motion.circle
            r="1.2"
            fill="url(#pulse-gradient)"
            initial={{ cx: CORE.x, cy: CORE.y, opacity: 0 }}
            animate={{
              cx: [CORE.x, sat.x, CORE.x],
              cy: [CORE.y, sat.y, CORE.y],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: sat.delay,
              ease: "easeInOut",
            }}
          />
        </g>
      ))}
    </svg>
  );
});
