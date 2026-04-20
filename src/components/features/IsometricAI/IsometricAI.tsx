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
import { EASE_OUT_EXPO } from "../../../config/animations";

/**
 * Neural Mesh — hero visual en modo claro glassmorphic.
 * Fondo blanco con tint sutil azul/violeta. Card .nodo centrada como foco.
 * Estilo Chloe Harrison / Iconly en light mode.
 */
export function IsometricAI() {
  return (
    <div className="relative z-10 pb-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div
          className="relative overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          style={{
            aspectRatio: "16 / 10",
            background:
              "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #eff6ff 100%)",
            border: "1px solid rgba(37, 99, 235, 0.08)",
            boxShadow:
              "0 40px 80px -30px rgba(37, 99, 235, 0.15), 0 20px 40px -20px rgba(124, 58, 237, 0.08)",
          }}
        >
          {/* Tint gradiente sutil esquina superior derecha (tipo Chloe) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 85% 15%, rgba(59, 130, 246, 0.15) 0%, rgba(124, 58, 237, 0.08) 35%, transparent 70%)",
            }}
          />

          {/* Tint inferior izquierdo cyan */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 15% 85%, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",
            }}
          />

          {/* Dot grid sutil */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(37, 99, 235, 0.18) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage:
                "radial-gradient(ellipse 75% 70% at 50% 50%, black 0%, black 50%, transparent 90%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 70% at 50% 50%, black 0%, black 50%, transparent 90%)",
            }}
          />

          {/* Conexiones animadas */}
          <NeuralMesh />

          {/* Cards flotantes */}
          <div className="absolute inset-0">
            {/* Nodo central — el core, más prominente */}
            <FloatingCard
              label=".nodo"
              sublabel="core"
              icon={<NodoGlyph />}
              size="lg"
              variant="core"
              position={{ top: "50%", left: "50%" }}
              delay={0}
            />

            {/* Satélites — composición centrípeta alrededor del core */}
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

          {/* Label flotante inferior */}
          <div
            className="pointer-events-none absolute bottom-5 left-5 z-20 flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.65rem] uppercase tracking-[0.18em] backdrop-blur-xl"
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              border: "1px solid rgba(37, 99, 235, 0.12)",
              color: "#475569",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)",
              }}
            />
            orquestación ia · tiempo real
          </div>

          {/* Label flotante superior derecho */}
          <div
            className="pointer-events-none absolute top-5 right-5 z-20 rounded-full px-3 py-1 text-[0.6rem] font-mono tracking-wider backdrop-blur-xl"
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              border: "1px solid rgba(37, 99, 235, 0.12)",
              color: "#64748b",
            }}
          >
            v1.0 · mesh
          </div>
        </motion.div>
      </div>
    </div>
  );
}
