"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageItem {
  id: string;
  url: string;
  score: number;
}

export function ImageGrid() {
  const images: ImageItem[] = [
    { id: "1", url: "/placeholder-1.jpg", score: 9.2 },
    { id: "2", url: "/placeholder-2.jpg", score: 8.5 },
    { id: "3", url: "/placeholder-3.jpg", score: 6.1 },
    { id: "4", url: "/placeholder-4.jpg", score: 7.8 },
    { id: "5", url: "/placeholder-5.jpg", score: 9.8 },
    { id: "6", url: "/placeholder-6.jpg", score: 4.5 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-muted"
        >
          {/* Placeholder for actual image */}
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-muted-foreground">
            Image {image.id}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Score Badge */}
          <div className={cn(
            "absolute top-2 right-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold shadow-lg backdrop-blur-md",
            image.score >= 9 ? "bg-emerald-500 text-white" :
            image.score >= 7 ? "bg-amber-500 text-white" :
            "bg-red-500 text-white"
          )}>
            <Star className="h-3 w-3 fill-current" />
            {image.score}
          </div>

          {/* Metadata on Hover */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
            <p className="font-semibold text-white">DSC049{image.id}.ARW</p>
            <p className="text-xs text-neutral-300">ISO 100 • f/2.8 • 1/400s</p>
          </div>
          
          {/* Selection Ring */}
           <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-colors hover:border-primary/50" />
        </motion.div>
      ))}
    </div>
  );
}
