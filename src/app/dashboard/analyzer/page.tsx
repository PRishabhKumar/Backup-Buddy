import { ImageGrid } from "@/features/analyzer/components/ImageGrid";
import { FocusPreview } from "@/features/analyzer/components/FocusPreview";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Wand2 } from "lucide-react";

export default function AnalyzerPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col gap-6 lg:flex-row">
      {/* Main Gallery Area */}
      <div className="flex-1 space-y-6 overflow-y-auto pr-2">
         <div className="flex items-center justify-between">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">AI Analyzer</h2>
                <p className="text-muted-foreground">Scoring your shots based on composition and focus.</p>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" size="sm">
                    <SlidersHorizontal className="mr-2 h-4 w-4" /> Filter
                </Button>
                 <Button variant="premium" size="sm">
                    <Wand2 className="mr-2 h-4 w-4" /> Start Analysis
                </Button>
            </div>
         </div>
         
         <ImageGrid />
      </div>

      {/* Right Sidebar / Preview Panel */}
      <div className="w-full lg:w-80 flex-shrink-0 space-y-6 rounded-xl bg-card/30 p-4 backdrop-blur-sm lg:h-full lg:overflow-y-auto border-l border-border/50">
        <h3 className="font-semibold text-foreground">Detailed Inspector</h3>
        <FocusPreview />
        
        <div className="space-y-4">
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Focus Score</span>
                    <span className="font-bold text-emerald-500">9.8/10</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[98%]" />
                </div>
            </div>
             <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Composition</span>
                    <span className="font-bold text-primary">8.5/10</span>
                </div>
                 <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full bg-primary w-[85%]" />
                </div>
            </div>
             <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Exposure</span>
                    <span className="font-bold text-foreground">7.0/10</span>
                </div>
                 <div className="h-2 rounded-full bg-secondary overflow-hidden">
                     <div className="h-full bg-foreground w-[70%]" />
                </div>
            </div>
        </div>

        <div className="rounded-lg bg-accent/50 p-3 text-xs text-muted-foreground">
            <p className="font-medium text-foreground mb-1">AI Insight:</p>
            "Excellent sharpness on the subject's eye. Rule of thirds is well observed. Slight underexposure in shadows."
        </div>
      </div>
    </div>
  );
}
