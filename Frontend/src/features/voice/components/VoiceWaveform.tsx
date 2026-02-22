"use client";

import { motion } from "framer-motion";

export function VoiceWaveform() {
  const bars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <div className="flex h-32 items-center justify-center gap-1 rounded-xl bg-background/50 backdrop-blur-sm p-8">
      {bars.map((item, index) => (
        <motion.div
          key={index}
          className="w-2 rounded-full bg-primary"
          animate={{
            height: [
              10 + Math.random() * 10,
              40 + Math.random() * 60,
              10 + Math.random() * 10,
            ],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
