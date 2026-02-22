import { PredictionChart } from "@/features/recommendations/components/PredictionChart";
import { DealsCarousel } from "@/features/recommendations/components/DealsCarousel";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AlertCircle, TrendingUp, HardDrive, Sparkles } from "lucide-react";

export default function RecommendationsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between rounded-2xl bg-black/20 border border-white/5 p-6 backdrop-blur-md">
         <div>
            <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                Predictive Intelligence <TrendingUp className="h-6 w-6 text-primary" />
            </h2>
            <p className="text-muted-foreground">AI-driven storage velocity and deals engine.</p>
         </div>
         <div className="hidden md:block text-right">
             <p className="text-xs text-muted-foreground">Current Velocity</p>
             <p className="text-xl font-bold text-white">45 GB / Day</p>
         </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Chart Column */}
        <SpotlightCard className="col-span-2 bg-black/40 backdrop-blur-xl border-white/10" spotlightColor="rgba(59, 130, 246, 0.15)">
          <div className="p-6">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Usage Trajectory</h3>
                <p className="text-sm text-muted-foreground">Projected consumption based on recent shoots.</p>
            </div>
            
            <PredictionChart />
            
            <div className="mt-6 flex items-center gap-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-amber-200">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                <span><span className="font-bold text-amber-400">Critical Insight:</span> You are on track to exhaust current capacity by Saturday afternoon. Suggest offloading 200GB immediately.</span>
            </div>
          </div>
        </SpotlightCard>

        {/* Info Column */}
        <SpotlightCard className="bg-black/40 backdrop-blur-xl border-white/10" spotlightColor="rgba(255, 215, 0, 0.15)">
            <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                    <HardDrive className="h-5 w-5 text-primary" /> Data Stats
                </h3>
                
                <div className="space-y-8 flex-1">
                    <div className="relative group">
                        <p className="text-sm text-muted-foreground mb-1">Average Daily Usage</p>
                        <p className="text-3xl font-bold text-white group-hover:text-primary transition-colors">45.2 GB</p>
                        <div className="absolute -left-3 top-0 bottom-0 w-[2px] bg-primary/20 group-hover:bg-primary transition-colors" />
                    </div>
                     <div className="relative group">
                        <p className="text-sm text-muted-foreground mb-1">Projected Zero-Day</p>
                        <p className="text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">Feb 18</p>
                        <div className="absolute -left-3 top-0 bottom-0 w-[2px] bg-amber-500/20 group-hover:bg-amber-400 transition-colors" />
                    </div>
                     <div className="relative group">
                        <p className="text-sm text-muted-foreground mb-1">Recoverable (Dupes)</p>
                        <p className="text-3xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">3.4 GB</p>
                         <div className="absolute -left-3 top-0 bottom-0 w-[2px] bg-emerald-500/20 group-hover:bg-emerald-400 transition-colors" />
                    </div>
                </div>
            </div>
        </SpotlightCard>
      </div>

      <div className="border-t border-white/5 pt-8">
        <h3 className="mb-6 text-xl font-semibold text-white flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" /> Recommended Upgrades
        </h3>
        <DealsCarousel />
      </div>
    </div>
  );
}
