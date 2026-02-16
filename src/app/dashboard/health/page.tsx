import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HealthGauge } from "@/features/health/components/HealthGauge";
import { BadSectorTable } from "@/features/health/components/BadSectorTable";
import { ShieldCheck, AlertTriangle } from "lucide-react";

export default function HealthPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
           <h2 className="text-3xl font-bold tracking-tight text-foreground">Health Monitor</h2>
           <p className="text-muted-foreground">Real-time analysis of your SD card's physical condition.</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-500">
            <ShieldCheck className="h-4 w-4" />
            <span>System Healthy</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
         {/* Left Column: Gauge */}
         <Card className="flex flex-col items-center justify-center p-6 bg-card/50 backdrop-blur-sm">
            <CardHeader className="w-full pb-2">
                <CardTitle>Wear Level</CardTitle>
                <CardDescription>Estimated lifespan based on write cycles.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 items-center justify-center pb-6">
                 <HealthGauge value={92} label="Health" />
            </CardContent>
         </Card>

         {/* Right Column: Bad Sectors */}
         <Card className="flex flex-col bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle>Sector Analysis</CardTitle>
                        <CardDescription>Recent read/write errors detected.</CardDescription>
                    </div>
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                </div>
            </CardHeader>
             <CardContent>
                 <BadSectorTable />
             </CardContent>
         </Card>
      </div>
    </div>
  );
}
