import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export function BulkDeleteBar() {
  return (
    <div className="fixed bottom-6 left-[calc(16rem+1.5rem)] right-6 mx-auto max-w-4xl rounded-full border border-border bg-card/90 px-6 py-3 shadow-2xl backdrop-blur-md flex items-center justify-between z-50">
      <div className="flex items-center gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
            12
        </div>
        <span className="text-sm font-medium text-foreground">Duplicates selected</span>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button variant="destructive" size="sm" className="gap-2">
            <Trash2 className="h-4 w-4" />
            Delete All Selected
        </Button>
      </div>
    </div>
  );
}
