/**
 * Glyphs de IsometricAI — SVGs minimalistas adaptados a modo claro.
 * Stroke/fill azul slate (#334155 con tints) para cards glassmorphic claros.
 * El NodoGlyph usa blanco porque va sobre la card core con gradient oscuro.
 */

const INK = "#334155"; // slate-700 para cards claros
const INK_ACCENT = "#2563eb"; // blue-600

export function NodoGlyph() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-10 w-10">
      <defs>
        <linearGradient id="nodo-core-glyph" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="5" fill="url(#nodo-core-glyph)" />
      <circle
        cx="16"
        cy="16"
        r="9"
        stroke="#ffffff"
        strokeOpacity="0.55"
        strokeWidth="0.9"
      />
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke="#ffffff"
        strokeOpacity="0.3"
        strokeWidth="0.7"
      />
    </svg>
  );
}

export function N8nGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="5" cy="12" r="2" fill={INK} />
      <circle cx="12" cy="6" r="2" fill={INK} />
      <circle cx="19" cy="12" r="2" fill={INK} />
      <circle cx="12" cy="18" r="2" fill={INK} />
      <path
        d="M7 12L10 7M14 7L17 12M17 12L14 17M10 17L7 12"
        stroke={INK}
        strokeOpacity="0.55"
        strokeWidth="1"
      />
    </svg>
  );
}

export function GptGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 3L13.7 8.5L19 10L13.7 11.5L12 17L10.3 11.5L5 10L10.3 8.5L12 3Z"
        fill={INK_ACCENT}
      />
      <path
        d="M18 16L18.6 18L20.5 18.5L18.6 19L18 21L17.4 19L15.5 18.5L17.4 18L18 16Z"
        fill={INK_ACCENT}
        fillOpacity="0.7"
      />
    </svg>
  );
}

export function ClaudeGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 4C9 4 7 6 7 9C7 10.5 7.5 11.7 8.5 12.5C7.5 13.3 7 14.5 7 16C7 19 9 21 12 21"
        stroke={INK_ACCENT}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 4C15 4 17 6 17 9C17 10.5 16.5 11.7 15.5 12.5C16.5 13.3 17 14.5 17 16C17 19 15 21 12 21"
        stroke={INK_ACCENT}
        strokeOpacity="0.5"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhatsappGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M4 20L5.3 16.1C4.5 14.8 4 13.2 4 11.5C4 6.8 7.8 3 12.5 3C17.2 3 21 6.8 21 11.5C21 16.2 17.2 20 12.5 20C10.9 20 9.4 19.6 8.2 18.8L4 20Z"
        stroke={INK}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9 9.5C9 10.5 9.5 11.5 10.3 12.3C11.1 13.1 12.1 13.6 13 13.6"
        stroke={INK}
        strokeOpacity="0.65"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function VectorGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <ellipse
        cx="12"
        cy="6"
        rx="7"
        ry="2.5"
        stroke={INK}
        strokeWidth="1.3"
      />
      <path
        d="M5 6V12C5 13.4 8.1 14.5 12 14.5C15.9 14.5 19 13.4 19 12V6"
        stroke={INK}
        strokeOpacity="0.7"
        strokeWidth="1.3"
      />
      <path
        d="M5 12V18C5 19.4 8.1 20.5 12 20.5C15.9 20.5 19 19.4 19 18V12"
        stroke={INK}
        strokeOpacity="0.4"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function WebhookGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M8 8C8 6 9.5 4.5 11.5 4.5C13.5 4.5 15 6 15 8"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="6" cy="17" r="2" fill={INK} />
      <circle cx="18" cy="17" r="2" fill={INK} />
      <circle cx="12" cy="9" r="2" fill={INK} />
      <path
        d="M7 16L11 9M13 9L17 16"
        stroke={INK}
        strokeOpacity="0.6"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function AgentGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect
        x="5"
        y="7"
        width="14"
        height="11"
        rx="3"
        stroke={INK}
        strokeWidth="1.4"
      />
      <circle cx="9.5" cy="12.5" r="1" fill={INK} />
      <circle cx="14.5" cy="12.5" r="1" fill={INK} />
      <path d="M12 3V7" stroke={INK} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="2.5" r="1" fill={INK_ACCENT} />
      <path
        d="M5 13H3M21 13H19"
        stroke={INK}
        strokeOpacity="0.55"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CodeGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M9 7L4 12L9 17"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7L20 12L15 17"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 5L11 19"
        stroke={INK_ACCENT}
        strokeOpacity="0.7"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
