"use client";
import React, { useEffect, useRef, useState } from "react";

export default function InteractiveCursorEffect() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hue, setHue] = useState(200);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Change hue based on position
      const newHue =
        (e.clientX / window.innerWidth) * 360 +
        Math.sin(Date.now() * 0.001) * 60;
      setHue(newHue);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        ref={circleRef}
        className="absolute w-[420px] h-w-[420px] rounded-full transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: `radial-gradient(circle, hsla(${hue}, 70%, 60%, 0.1) 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
