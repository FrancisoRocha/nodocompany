import { motion } from "framer-motion";
import { FloatingCard } from "./FloatingCard";
import { NeuralMesh } from "./NeuralMesh";
import {
  NodoGlyph,
  N8nGlyph,
  GptGlyph,
  ClaudeGlyph,
  WhatsappGlyph,
  VectorGlyph,
  WebhookGlyph,
  AgentGlyph,
  CodeGlyph,
} from "./glyphs";

/**
 * IsometricAI — Recuperando la estética Nodo con alto rendimiento.
 * Fondo hueso suave con gradientes de profundidad (estilo Chloe Harrison / Iconly).
 */
export function IsometricAI() {
  return (
    <div className="relative z-10 pb-12 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <motion.div
          className="relative overflow-hidden rounded-[24px] aspect-[4/5] sm:aspect-[16/11] md:aspect-[16/10]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            // Fondo hueso sutil
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #eff6ff 100%)",
            border: "1px solid rgba(37, 99, 235, 0.08)",
            boxShadow: "0 40px 100px -30px rgba(37, 99, 235, 0.12), 0 20px 40px -20px rgba(124, 58, 237, 0.05)",
          }}
        >
          {/* Tint gradiente sutil azul/violeta de profundidad */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(59, 130, 246, 0.12) 0%, rgba(124, 58, 237, 0.06) 40%, transparent 80%)",
            }}
          />

          {/* Dot grid sutil para textura */}
          <div
            className="absolute inset-0 opacity-[0.25] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #2563eb 0.5px, transparent 0.5px)",
              backgroundSize: "32px 32px",
              maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 90%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 90%)",
            }}
          />

          <NeuralMesh />

          <div className="absolute inset-0">
            {/* Nodo central — núcleo del sistema */}
            <FloatingCard
              label=".nodo"
              sublabel="core"
              icon={<NodoGlyph />}
              size="lg"
              variant="core"
              position={{ top: "50%", left: "50%" }}
              delay={0}
            />

            {/* Satélites en orquestación */}
            <FloatingCard
              label="gpt-4o"
              icon={<GptGlyph />}
              position={{ top: "26%", left: "34%" }}
              delay={0.2}
              variant="accent"
              floatOffset={2}
            />
            <FloatingCard
              label="claude"
              icon={<ClaudeGlyph />}
              position={{ top: "26%", left: "66%" }}
              delay={0.3}
              variant="accent"
              floatOffset={-2}
            />
            <FloatingCard
              label="n8n"
              icon={<N8nGlyph />}
              position={{ top: "50%", left: "22%" }}
              delay={0.4}
              floatOffset={3}
            />
            <FloatingCard
              label="whatsapp"
              icon={<WhatsappGlyph />}
              position={{ top: "50%", left: "78%" }}
              delay={0.5}
              floatOffset={-3}
            />
            <FloatingCard
              label="vectors"
              sublabel="rag"
              icon={<VectorGlyph />}
              position={{ top: "76%", left: "34%" }}
              delay={0.6}
              size="sm"
              floatOffset={2}
            />
            <FloatingCard
              label="webhook"
              icon={<WebhookGlyph />}
              position={{ top: "76%", left: "66%" }}
              delay={0.7}
              size="sm"
              floatOffset={-1}
            />
            <FloatingCard
              label="agent"
              icon={<AgentGlyph />}
              position={{ top: "14%", left: "50%" }}
              delay={0.8}
              size="sm"
              floatOffset={1}
            />
            <FloatingCard
              label="api"
              icon={<CodeGlyph />}
              position={{ top: "86%", left: "50%" }}
              delay={0.9}
              size="sm"
              floatOffset={-2}
            />
          </div>

          {/* Labels dinámicos */}
          <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 rounded-full px-4 py-1.5 backdrop-blur-xl border border-blue-500/10 bg-white/60 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-widest text-slate-500 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            Orquestación en Tiempo Real
          </div>
        </motion.div>
      </div>
    </div>
  );
}
