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
  size = 120,
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
      }}
    >
      <motion.div
        className="absolute aspect-square"
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${borderRadius}px)`,
            background: `linear-gradient(to left, ${colorTo}, ${colorFrom}, transparent)`,
            filter: `drop-shadow(0 0 8px ${colorFrom}) drop-shadow(0 0 14px ${colorFrom})`,
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
