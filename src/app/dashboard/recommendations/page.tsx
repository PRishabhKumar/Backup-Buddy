import { PredictionChart } from "@/features/recommendations/components/PredictionChart";
import { DealsCarousel } from "@/features/recommendations/components/DealsCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function RecommendationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Storage Intelligence</h2>
        <p className="text-muted-foreground">AI-driven insights to keep you shooting without interruption.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Chart Column */}
        <Card className="col-span-2 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Storage Usage Prediction</CardTitle>
            <CardDescription>Based on your current shooting velocity (avg. 45GB/day).</CardDescription>
          </CardHeader>
          <CardContent>
            <PredictionChart />
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 p-3 text-sm text-amber-500">
                <AlertCircle className="h-4 w-4" />
                <span><span className="font-bold">Alert:</span> You will likely run out of storage by Saturday afternoon.</span>
            </div>
          </CardContent>
        </Card>

        {/* Info Column */}
        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <p className="text-sm text-muted-foreground">Average Daily Usage</p>
                    <p className="text-2xl font-bold text-foreground">45.2 GB</p>
                </div>
                 <div>
                    <p className="text-sm text-muted-foreground">Projected Full Date</p>
                    <p className="text-2xl font-bold text-foreground">Feb 18, 2026</p>
                </div>
                 <div>
                    <p className="text-sm text-muted-foreground">Wasted Space (Dupes)</p>
                    <p className="text-2xl font-bold text-red-500">3.4 GB</p>
                </div>
            </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold text-foreground">Suggested Upgrades</h3>
        <DealsCarousel />
      </div>
    </div>
  );
}
