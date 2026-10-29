"use client";

import { motion } from "framer-motion";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
  borderRadius?: number;
  className?: string;
}

export function BorderBeam({
  size = 130,
  duration = 4,
  colorFrom = "#38BDF8",
  colorTo = "#FFFFFF",
  borderWidth = 1.5,
  borderRadius = 16,
  className = "",
}: BorderBeamProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden z-20 ${className}`}
      style={{
        padding: borderWidth,
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "exclude",
        WebkitMaskComposite: "xor",
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      <motion.div
        className="absolute aspect-square"
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${borderRadius}px)`,
            background: `linear-gradient(to left, ${colorTo}, ${colorFrom}, transparent)`,
            boxShadow: `0 0 12px 2px ${colorFrom}`,
            willChange: "offset-distance, transform",
            transform: "translateZ(0)",
          } as React.CSSProperties
        }
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
      />
    </div>
  );
}
