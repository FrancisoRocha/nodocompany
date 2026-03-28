import { useRef, useState } from "react";
import { motion } from "framer-motion";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
  };

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsHovered(true);
    } else {
      video.pause();
      setIsHovered(false);
    }
  };

  return (
    <div className="relative z-10 pb-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-text transition-all duration-500 hover:scale-[1.008] hover:border-border-hover hover:shadow-[0_20px_60px_rgba(37,37,36,0.12),0_8px_24px_rgba(37,37,36,0.08)]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              className={`block w-full transition-all duration-500 ${
                isHovered
                  ? "brightness-[1.02] contrast-[1.02]"
                  : "brightness-[0.98]"
              }`}
            >
              <source src="/demo-nodo.mov" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div
              className={`pointer-events-none absolute inset-0 transition-all duration-500 ${
                isHovered ? "bg-transparent" : "bg-text/[0.04]"
              }`}
            />

            {/* Hover label */}
            <div
              className={`pointer-events-none absolute bottom-5 left-5 z-10 rounded-full bg-bg/90 px-3.5 py-1.5 text-[0.68rem] uppercase tracking-wide text-text-secondary backdrop-blur-xl transition-all duration-400 ${
                isHovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-1.5 opacity-0"
              }`}
            >
              ▶ ver demo de automatización
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
