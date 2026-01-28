"use client";

import { useEffect, useRef } from "react";

// ===== CONFIG =====
const BASE_SIZE = 340;
const FOLLOW_SPEED = 0.14;

const OUTER_ROTATE = 0.35;
const INNER_ROTATE = -0.9;

const OUTER_BLUR = 120;
const INNER_BLUR = 90;
// ==================

export function GlowCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const angleOuter = useRef(0);
  const angleInner = useRef(0);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      !document.documentElement.classList.contains("dark")
    )
      return;

    const size = BASE_SIZE;
    const wrapper = wrapperRef.current!;
    let raf: number;

    const move = (e: MouseEvent) => {
      target.current.x = e.clientX - size / 2;
      target.current.y = e.clientY - size / 2;
    };

    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * FOLLOW_SPEED;
      pos.current.y += (target.current.y - pos.current.y) * FOLLOW_SPEED;

      angleOuter.current += OUTER_ROTATE;
      angleInner.current += INNER_ROTATE;

      wrapper.style.transform = `
        translate3d(${pos.current.x}px, ${pos.current.y}px, 0)
      `;

      outerRef.current!.style.transform = `
        rotate(${angleOuter.current}deg)
      `;

      innerRef.current!.style.transform = `
        rotate(${angleInner.current}deg) scale(0.65)
      `;

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        hidden
        dark:block
        will-change-transform
      "
      style={{ width: BASE_SIZE, height: BASE_SIZE }}
    >
      {/* OUTER SPIRAL */}
      <div
        ref={outerRef}
        className="absolute inset-0 mix-blend-screen"
        style={{
          filter: `blur(${OUTER_BLUR}px)`,
          background: `
            conic-gradient(
              transparent,
              rgba(99,102,241,0.4),
              rgba(168,85,247,0.35),
              transparent
            )
          `,
          WebkitMaskImage:
            "radial-gradient(circle, black 40%, transparent 75%)",
          maskImage:
            "radial-gradient(circle, black 40%, transparent 75%)",
        }}
      />

      {/* INNER SPIRAL */}
      <div
        ref={innerRef}
        className="absolute inset-0 mix-blend-screen"
        style={{
          filter: `blur(${INNER_BLUR}px)`,
          background: `
            conic-gradient(
              transparent,
              rgba(139,92,246,0.5),
              rgba(99,102,241,0.45),
              transparent
            )
          `,
          WebkitMaskImage:
            "radial-gradient(circle, black 35%, transparent 70%)",
          maskImage:
            "radial-gradient(circle, black 35%, transparent 70%)",
        }}
      />
    </div>
  );
}
