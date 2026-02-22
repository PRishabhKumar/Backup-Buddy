"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "premium";
}

export const MagneticButton = ({ children, className, variant = "primary", ...props }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] border border-transparent",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-white/5",
    outline: "bg-transparent border border-primary/20 text-primary hover:bg-primary/10",
    ghost: "bg-transparent hover:bg-white/5 text-foreground",
    premium: "bg-gradient-to-r from-amber-500 to-primary text-black font-bold hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] border-none",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative rounded-xl px-6 py-3 font-medium transition-all duration-300",
        "flex items-center justify-center gap-2",
        "active:scale-95",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 -z-0 rounded-xl bg-gradient-to-tr from-primary/0 via-white/20 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
    </motion.button>
  );
};
