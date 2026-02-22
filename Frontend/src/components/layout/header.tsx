"use client";

import { Progress } from "@/components/ui/progress";

import { useDrive } from "@/context/drive-context";
import { formatSize } from "@/lib/utils";

export function Header() {
  const { selectedDrive } = useDrive();

  const used = selectedDrive?.used ?? 0;
  const total = selectedDrive?.total ?? 0;
  const percentage = selectedDrive?.percentage ?? 0;

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center border-b border-border bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full items-center justify-between gap-8">
        <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
        
        <div className="flex flex-1 items-center gap-4 md:max-w-md">
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Storage Used</span>
              <span className="font-medium text-foreground">
                {formatSize(used)} / {formatSize(total)}
              </span>
            </div>
            <Progress value={percentage} className="h-2" />
          </div>
        </div>
      </div>
    </header>
  );
}
