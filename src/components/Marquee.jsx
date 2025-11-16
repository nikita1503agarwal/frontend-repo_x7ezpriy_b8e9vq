import { useEffect, useRef } from "react";

export default function Marquee({ children, speed = 40 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = performance.now();

    const step = (now) => {
      const delta = now - start;
      start = now;
      const x = (parseFloat(el.style.getPropertyValue("--x") || "0") - (delta * speed) / 1000) % 100;
      el.style.setProperty("--x", String(x));
      requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [speed]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={ref}
        className="flex gap-10 whitespace-nowrap [transform:translate3d(var(--x,0)%,0,0)] will-change-transform"
      >
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
