/**
 * Conexiones SVG entre el nodo central y los satélites.
 * Viewbox 100x100 con preserveAspectRatio="none" para que matcheen
 * los porcentajes de las cards.
 *
 * Modo claro: líneas blue suaves + pulsos azul eléctrico.
 */

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

export function NeuralMesh() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {SATELLITES.map((sat, i) => (
        <g key={i}>
          {/* Línea base sutil */}
          <line
            x1={CORE.x}
            y1={CORE.y}
            x2={sat.x}
            y2={sat.y}
            stroke="url(#line-gradient)"
            strokeDasharray="0.8 0.8"
            vectorEffect="non-scaling-stroke"
            style={{ strokeWidth: "1" }}
          />

          {/* Pulso animado viajando desde el core hacia el satélite */}
          <circle r="0.7" fill="#6366f1" opacity="0.85">
            <animate
              attributeName="cx"
              values={`${CORE.x};${sat.x};${CORE.x}`}
              dur="3.5s"
              begin={`${sat.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values={`${CORE.y};${sat.y};${CORE.y}`}
              dur="3.5s"
              begin={`${sat.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur="3.5s"
              begin={`${sat.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}
