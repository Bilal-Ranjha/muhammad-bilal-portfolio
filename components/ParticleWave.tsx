"use client";
import { useEffect, useRef, useState } from "react";
export function ParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0,
      height = 0,
      frame = 0,
      visible = true,
      last = 0,
      phase = 0;
    function draw() {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      const columns = width < 600 ? 56 : 96;
      const rows = width < 600 ? 30 : 48;
      for (let row = 0; row < rows; row++) {
        const z = 6 * (1 - row / (rows - 1));
        const perspective = 1 / (1 + z * 0.45);
        for (let column = 0; column < columns; column++) {
          const u = ((column + (row % 2) * 0.5) / (columns - 1) - 0.5) * 8;
          const elevation =
            Math.sin(u * 1.35 - z * 0.85 + phase) * 0.72 +
            Math.cos(u * 0.65 + z * 1.1 - phase * 0.65) * 0.3;
          const x = width * 0.64 +
            (u + Math.sin(z * 0.65 + phase * 0.25) * 0.55) *
              width * 0.3 * perspective;
          const y = height * 0.38 +
            (1.75 + elevation - u * 0.13) * height * 0.25 * perspective;
          const rightWeight = 0.3 + 0.7 * Math.max(0, Math.min(1, x / width));
          const opacity = (0.16 + perspective * 0.62) * rightWeight;
          context.fillStyle = `rgba(18,230,160,${opacity})`;
          context.beginPath();
          context.arc(x, y, 0.45 + perspective * 1.45, 0, Math.PI * 2);
          context.fill();
        }
      }
    }
    function tick(time: number) {
      if (time - last > 32) {
        phase += Math.min(time - last, 64) * 0.00035;
        draw();
        last = time;
      }
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      cancelAnimationFrame(frame);
      draw();
      if (visible && !document.hidden && !reduced.matches && !paused)
        frame = requestAnimationFrame(tick);
    }
    function resize() {
      if (!canvas) return;
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context?.setTransform(ratio, 0, 0, ratio, 0, 0);
      sync();
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(canvas);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    reduced.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      reduced.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);
  return (
    <>
      <canvas ref={canvasRef} className="particle-wave" aria-hidden="true" />
      <button
        type="button"
        className="motion-control"
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        {paused ? "Resume motion" : "Pause motion"}
      </button>
    </>
  );
}
