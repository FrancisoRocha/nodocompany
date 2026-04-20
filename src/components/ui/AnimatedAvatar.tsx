import { motion } from "framer-motion";

interface AnimatedAvatarProps {
  initials: string;
  gradient: string;
  glow: string;
  size?: number;
}

/**
 * Avatar circular con gradiente cónico animado.
 * Cada persona pasa su propio gradient para diferenciarse.
 */
export function AnimatedAvatar({
  initials,
  gradient,
  glow,
  size = 64,
}: AnimatedAvatarProps) {
  return (
    <div
      className="relative mx-auto mb-5 overflow-hidden rounded-full"
      style={{
        width: size,
        height: size,
        boxShadow: `0 12px 30px ${glow}, 0 0 0 1px rgba(255, 255, 255, 0.5) inset`,
      }}
    >
      {/* Gradiente rotatorio */}
      <motion.div
        className="absolute"
        style={{
          inset: "-50%",
          background: gradient,
          filter: "blur(2px)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glow interno pulsante */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)",
        }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Overlay sutil para legibilidad de iniciales */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Iniciales */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-mono text-[0.95rem] font-medium text-white tracking-wide"
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.25)",
          }}
        >
          {initials}
        </span>
      </div>
    </div>
  );
}
