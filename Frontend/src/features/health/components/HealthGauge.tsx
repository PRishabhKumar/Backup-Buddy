"use client";

import { motion } from "framer-motion";

interface HealthGaugeProps {
  value: number; // 0 to 100
  label?: string;
}

export function HealthGauge({ value, label = "Health" }: HealthGaugeProps) {
  // SVG properties
  const radius = 80;
  const stroke = 12;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  // Determine color based on value
  const getColor = (val: number) => {
    if (val > 80) return "#10b981"; // Emerald-500
    if (val > 50) return "#f59e0b"; // Amber-500
    return "#ef4444"; // Red-500
  };

  const color = getColor(value);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative h-40 w-40">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="rotate-[-90deg]"
        >
          {/* Background Circle */}
          <circle
            stroke="var(--muted)"
            strokeWidth={stroke}
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Progress Circle */}
          <motion.circle
            stroke={color}
            strokeWidth={stroke}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-bold text-foreground">{value}%</span>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{label}</span>
        </div>
      </div>
      
      <div className="mt-4 flex gap-8">
        <div className="text-center">
            <p className="text-xs text-muted-foreground">Est. Life</p>
            <p className="font-semibold text-foreground">2.4 Years</p>
        </div>
         <div className="text-center">
            <p className="text-xs text-muted-foreground">Writes</p>
            <p className="font-semibold text-foreground">12.5 TB</p>
        </div>
      </div>
    </div>
  );
}
