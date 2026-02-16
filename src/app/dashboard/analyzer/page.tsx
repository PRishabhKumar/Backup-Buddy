import { ImageGrid } from "@/features/analyzer/components/ImageGrid";
import { FocusPreview } from "@/features/analyzer/components/FocusPreview";
// import { Button } from "@/components/ui/button"; // Replaced by MagneticButton
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SlidersHorizontal, Wand2, Zap } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export default function AnalyzerPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col gap-6 lg:flex-row">
      {/* Main Gallery Area */}
      <div className="flex-1 space-y-6 overflow-y-auto pr-2">
         <div className="flex items-center justify-between rounded-2xl bg-black/20 border border-white/5 p-6 backdrop-blur-md">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-white">AI Inspector</h2>
                <p className="text-muted-foreground">Neural analysis of focus, composition, and exposure.</p>
            </div>
            <div className="flex gap-3">
                <MagneticButton variant="ghost" className="border border-white/10 text-muted-foreground hover:text-white">
                    <SlidersHorizontal className="mr-2 h-4 w-4" /> Filter
                </MagneticButton>
                 <MagneticButton variant="primary" className="shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                    <Wand2 className="mr-2 h-4 w-4" /> Start Analysis
                </MagneticButton>
            </div>
         </div>
         
         <div className="rounded-2xl border border-white/5 bg-black/20 p-4 min-h-[500px]">
             <ImageGrid />
         </div>
      </div>

      {/* Right Sidebar / Preview Panel */}
      <SpotlightCard className="w-full lg:w-96 flex-shrink-0 rounded-2xl bg-black/40 border-white/10 backdrop-blur-md flex flex-col" spotlightColor="rgba(16, 185, 129, 0.1)">
        <div className="p-6 border-b border-white/5">
             <h3 className="font-semibold text-white flex items-center gap-2">
                <Wand2 className="h-4 w-4 text-primary" /> Detailed Analysis
             </h3>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <FocusPreview />
            </div>
            
            <div className="space-y-6">
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Focus Integrity</span>
                        <span className="font-bold text-emerald-400">9.8/10</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[98%] shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                    </div>
                </div>
                 <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Composition</span>
                        <span className="font-bold text-primary">8.5/10</span>
                    </div>
                     <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-600 to-primary w-[85%] shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
                    </div>
                </div>
                 <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Exposure</span>
                        <span className="font-bold text-blue-400">7.0/10</span>
                    </div>
                     <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                         <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-[70%] shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                    </div>
                </div>
            </div>

            <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 text-sm text-muted-foreground relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <p className="font-medium text-primary mb-2 flex items-center gap-2"><Zap className="h-3 w-3" /> AI Insight</p>
                <p className="leading-relaxed">"Excellent sharpness on the subject's eye. Rule of thirds is well observed, though shadows are slightly crushed. Recommend +0.3 EV exposure lift."</p>
            </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
