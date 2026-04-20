import { useEffect, useRef, useCallback } from "react";

const GRID_SIZE = 40;
const HOVER_RADIUS = 90;
const BLUE_COLOR = { r: 59, g: 130, b: 246 }; // #3b82f6

/**
 * Fondo de grid animado que reacciona al mouse.
 * Canvas full-width detrás del contenido. No interfiere con clicks (pointer-events: none).
 */
export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    const { x: mx, y: my } = mouseRef.current;

    ctx.clearRect(0, 0, width, height);

    const cols = Math.ceil(width / GRID_SIZE) + 1;
    const rows = Math.ceil(height / GRID_SIZE) + 1;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cellX = col * GRID_SIZE;
        const cellY = row * GRID_SIZE;
        const centerX = cellX + GRID_SIZE / 2;
        const centerY = cellY + GRID_SIZE / 2;

        const dist = Math.sqrt((centerX - mx) ** 2 + (centerY - my) ** 2);

        // Base grid (muy sutil)
        ctx.strokeStyle = "rgba(37, 37, 36, 0.04)";
        ctx.lineWidth = 0.5;
        ctx.strokeRect(cellX, cellY, GRID_SIZE, GRID_SIZE);

        // Highlight cerca del cursor
        if (dist < HOVER_RADIUS) {
          const intensity = 1 - dist / HOVER_RADIUS;
          const eased = intensity * intensity * intensity;

          ctx.fillStyle = `rgba(${BLUE_COLOR.r}, ${BLUE_COLOR.g}, ${BLUE_COLOR.b}, ${eased * 0.28})`;
          ctx.fillRect(cellX + 1, cellY + 1, GRID_SIZE - 2, GRID_SIZE - 2);

          ctx.strokeStyle = `rgba(${BLUE_COLOR.r}, ${BLUE_COLOR.g}, ${BLUE_COLOR.b}, ${eased * 0.6})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(cellX + 0.5, cellY + 0.5, GRID_SIZE - 1, GRID_SIZE - 1);
        }
      }
    }

    rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = document.documentElement.scrollHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${document.documentElement.scrollHeight}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY,
      };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const observer = new ResizeObserver(resize);
    observer.observe(document.body);

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}
