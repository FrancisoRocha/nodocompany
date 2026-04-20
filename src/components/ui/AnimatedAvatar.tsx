import { memo } from "react";

interface AnimatedAvatarProps {
  initials: string;
  gradient: string;
  glow: string;
  size?: number;
}

/**
 * AnimatedAvatar — Versión de alto rendimiento.
 * Usa animaciones CSS para bucles infinitos y libera la GPU.
 */
export const AnimatedAvatar = memo(function AnimatedAvatar({
  initials,
  gradient,
  glow,
  size = 64,
}: AnimatedAvatarProps) {
  return (
    <div
      className="relative mx-auto mb-5 overflow-hidden rounded-full will-change-transform"
      style={{
        width: size,
        height: size,
        boxShadow: `0 8px 20px ${glow}44, inset 0 0 0 1px rgba(255, 255, 255, 0.2)`,
      }}
    >
      {/* Gradiente rotatorio en CSS puro (Cero impacto en el hilo de JS) */}
      <div
        className="absolute inset-[-50%] animate-spin-slow opacity-80"
        style={{
          background: gradient,
          animationDuration: '10s',
        }}
      />

      {/* Overlay de cristal sutil para profundidad */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] rounded-full" />

      {/* Iniciales */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-sm font-semibold text-white tracking-widest drop-shadow-md">
          {initials}
        </span>
      </div>

      <style>{`
        @keyframes avatar-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: avatar-spin linear infinite;
        }
      `}</style>
    </div>
  );
});
