import { useEffect, useRef, memo } from "react";

const GRID_SIZE = 48; // Grid un poco más abierto para un aire más limpio
const HOVER_RADIUS_SQ = 140 * 140;

export const GridBackground = memo(function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let rafId: number;
    let width: number;
    let height: number;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      // Usamos el fondo Slate-50 (#f8fafc) para que todo sea cohesivo
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, width, height);

      const { x: mx, y: my, active } = mouseRef.current;
      
      ctx.beginPath();
      // Líneas Slate-200 súper tenues
      ctx.strokeStyle = "rgba(148, 163, 184, 0.08)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += GRID_SIZE) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += GRID_SIZE) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      if (active) {
        const startX = Math.floor((mx - 150) / GRID_SIZE) * GRID_SIZE;
        const endX = Math.ceil((mx + 150) / GRID_SIZE) * GRID_SIZE;
        const startY = Math.floor((my - 150) / GRID_SIZE) * GRID_SIZE;
        const endY = Math.ceil((my + 150) / GRID_SIZE) * GRID_SIZE;

        for (let x = startX; x < endX; x += GRID_SIZE) {
          for (let y = startY; y < endY; y += GRID_SIZE) {
            const dx = x + GRID_SIZE / 2 - mx;
            const dy = y + GRID_SIZE / 2 - my;
            const distSq = dx * dx + dy * dy;

            if (distSq < HOVER_RADIUS_SQ) {
              const intensity = 1 - Math.sqrt(distSq) / 140;
              // Usamos un azul real para la interacción
              ctx.fillStyle = `rgba(37, 99, 235, ${intensity * 0.08})`;
              ctx.fillRect(x + 1, y + 1, GRID_SIZE - 2, GRID_SIZE - 2);
            }
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      mouseRef.current = { x: clientX, y: clientY, active: true };
    };

    const handleLeave = () => { mouseRef.current.active = false; };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("touchstart", handleMove, { passive: true });
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("touchend", handleLeave);

    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("touchstart", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 h-full w-full" aria-hidden="true" />
  );
});
