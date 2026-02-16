"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Trash2, ZoomIn } from "lucide-react";

export function ComparisonCard() {
  const [selected, setSelected] = useState<"left" | "right" | null>(null);

  // Mock data would be passed in props
  const imageLeft = "/placeholder-1.jpg"; 
  const imageRight = "/placeholder-2.jpg";

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-medium text-foreground">Set #24: Burst Sequence</h3>
        <span className="text-xs text-muted-foreground">Captured at 10:42 AM</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Left Image */}
        <div className={`relative group rounded-lg overflow-hidden border-2 transition-all ${selected === "left" ? "border-emerald-500" : "border-transparent"}`}>
           <div className="aspect-[3/2] bg-muted relative">
                {/* Placeholder since we don't have real images yet */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-neutral-900">
                    Image A (24.2 MB)
                </div>
           </div>
           
           <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent">
             <div className="flex gap-2">
                 <Button 
                    size="sm" 
                    variant={selected === "left" ? "default" : "secondary"}
                    className={selected === "left" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                    onClick={() => setSelected("left")}
                 >
                    <Check className="mr-2 h-4 w-4" /> Keep
                 </Button>
                 <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                    <ZoomIn className="h-4 w-4" />
                 </Button>
             </div>
           </div>
        </div>

        {/* Right Image */}
        <div className={`relative group rounded-lg overflow-hidden border-2 transition-all ${selected === "right" ? "border-emerald-500" : "border-transparent"}`}>
           <div className="aspect-[3/2] bg-muted relative">
               <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-neutral-900">
                    Image B (24.1 MB)
                </div>
           </div>

           <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent">
             <div className="flex gap-2">
                 <Button 
                    size="sm" 
                    variant={selected === "right" ? "default" : "secondary"}
                    className={selected === "right" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                    onClick={() => setSelected("right")}
                 >
                    <Check className="mr-2 h-4 w-4" /> Keep
                 </Button>
                 <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                    <ZoomIn className="h-4 w-4" />
                 </Button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
