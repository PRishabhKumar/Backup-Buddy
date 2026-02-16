import { ComparisonCard } from "@/features/duplicates/components/ComparisonCard";
import { BulkDeleteBar } from "@/features/duplicates/components/BulkDeleteBar";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Filter, Trash2 } from "lucide-react";

export default function DuplicatesPage() {
  return (
    <div className="space-y-8 pb-24">
      <div className="flex items-center justify-between rounded-2xl bg-black/20 border border-white/5 p-6 backdrop-blur-md">
        <div>
           <h2 className="text-3xl font-bold tracking-tight text-white">Duplicate Matrix</h2>
           <p className="text-muted-foreground">AI-clustered redundant shots. <span className="text-primary">1.2 GB recoverable.</span></p>
        </div>
        <div className="flex gap-3">
            <MagneticButton variant="outline" className="border-white/10 hover:bg-white/5">
                <Filter className="mr-2 h-4 w-4" /> Filter by Date
            </MagneticButton>
            <MagneticButton variant="secondary" className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20">
                <Trash2 className="mr-2 h-4 w-4" /> Purge All (AI Confirmed)
            </MagneticButton>
        </div>
      </div>

      <div className="grid gap-6">
          <ComparisonCard />
          <ComparisonCard />
          <ComparisonCard />
      </div>

      <BulkDeleteBar />
    </div>
  );
}
