import { ComparisonCard } from "@/features/duplicates/components/ComparisonCard";
import { BulkDeleteBar } from "@/features/duplicates/components/BulkDeleteBar";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function DuplicatesPage() {
  return (
    <div className="space-y-6 pb-24">
      <div className="flex items-center justify-between">
        <div>
           <h2 className="text-3xl font-bold tracking-tight text-foreground">Duplicate Manager</h2>
           <p className="text-muted-foreground">Identify and clean up redundant shots to save space.</p>
        </div>
        <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter by Date
        </Button>
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
