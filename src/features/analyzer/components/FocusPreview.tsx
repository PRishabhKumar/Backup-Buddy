"use client";

import { Scan } from "lucide-react";

export function FocusPreview() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-xl">
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-lg bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
        <Scan className="h-3 w-3 text-primary" />
        Focus Peaking: ON
      </div>
      
      <div className="aspect-video bg-muted relative">
         {/* Placeholder for main preview */}
         <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-muted-foreground">
            Selected Image Preview
         </div>

         {/* Focus Box Overlay */}
         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-32 w-32 border-2 border-primary/80 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <div className="absolute -top-1 -left-1 h-2 w-2 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-1 -right-1 h-2 w-2 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-primary" />
            
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold text-black">
                Sharpness: 98%
            </div>
         </div>
      </div>
    </div>
  );
}
