import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { HealthGauge } from "@/features/health/components/HealthGauge";
import { BadSectorTable } from "@/features/health/components/BadSectorTable";
import { ShieldCheck, AlertTriangle, Activity } from "lucide-react";

export default function HealthPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between rounded-2xl bg-black/20 border border-white/5 p-6 backdrop-blur-md">
        <div>
           <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              Storage Health <Activity className="h-6 w-6 text-emerald-500 animate-pulse" />
           </h2>
           <p className="text-muted-foreground">Real-time physical sector analysis protocols active.</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="h-4 w-4" />
            <span>Optimal Integrity</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:h-[600px]">
         {/* Left Column: Gauge */}
         <SpotlightCard className="flex flex-col items-center justify-center p-8 bg-black/40 backdrop-blur-xl border-white/10" spotlightColor="rgba(16, 185, 129, 0.2)">
             <div className="w-full pb-6 text-center border-b border-white/5 mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Wear Level Estimator</h3>
                <p className="text-muted-foreground text-sm">Lifespan projection based on 45TB total writes.</p>
             </div>
             <div className="flex flex-1 items-center justify-center w-full">
                 <div className="scale-125 transform">
                    <HealthGauge value={92} label="Health" />
                 </div>
             </div>
             <div className="mt-8 grid grid-cols-2 gap-4 w-full text-center">
                 <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <p className="text-xs text-muted-foreground">Est. Remaining</p>
                    <p className="text-lg font-bold text-white">4.2 Years</p>
                 </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <p className="text-xs text-muted-foreground">Temp</p>
                    <p className="text-lg font-bold text-emerald-400">34°C</p>
                 </div>
             </div>
         </SpotlightCard>

         {/* Right Column: Bad Sectors */}
         <SpotlightCard className="flex flex-col bg-black/40 backdrop-blur-xl border-white/10" spotlightColor="rgba(245, 158, 11, 0.2)">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold text-white">Sector Analysis</h3>
                    <p className="text-muted-foreground text-sm">Deep-scan error logs.</p>
                </div>
                <AlertTriangle className="h-5 w-5 text-amber-500" />
            </div>
             <div className="p-6 flex-1 overflow-auto">
                 <BadSectorTable />
             </div>
         </SpotlightCard>
      </div>
    </div>
  );
}
