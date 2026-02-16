"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export const SpotlightCard = ({ children, className, spotlightColor = "rgba(255, 215, 0, 0.15)" }: SpotlightCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative border border-white/10 bg-card overflow-hidden rounded-xl",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
      
      {/* Tech/Circuit Ornaments */}
      <div className="absolute top-0 right-0 p-2 opacity-20 pointer-events-none">
        <div className="w-2 h-2 bg-primary/50 rounded-full" />
      </div>
      <div className="absolute bottom-0 left-0 p-2 opacity-20 pointer-events-none">
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </div>
  );
};
