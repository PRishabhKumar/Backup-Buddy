"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Activity, 
  Copy, 
  Image as ImageIcon, 
  Mic, 
  Zap, 
  HardDrive, 
  Save 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: Activity },
  { name: "Health Monitor", href: "/dashboard/health", icon: Activity },
  { name: "Duplicates", href: "/dashboard/duplicates", icon: Copy },
  { name: "Image Analyzer", href: "/dashboard/analyzer", icon: ImageIcon },
  { name: "Voice Control", href: "/dashboard/voice", icon: Mic },
  { name: "Recommendations", href: "/dashboard/recommendations", icon: Zap },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card/50 backdrop-blur-xl">
      <div className="flex h-full flex-col px-4 py-6">
        {/* Logo / Brand */}
        <div className="mb-8 flex items-center gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <HardDrive className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Backup Buddy
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-accent-foreground"
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* SD Card Status & Quick Backup */}
        <div className="mt-auto space-y-4">
          <div className="rounded-xl border border-border bg-background/50 p-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-sm font-medium text-foreground">
                SD Card Connected
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Sony Tough G (128GB)
            </p>
          </div>

          <Button className="cursor-pointer w-full gap-2 font-semibold" variant="premium">
            <Save className="h-4 w-4" />
            Quick Backup
          </Button>
        </div>
      </div>
    </aside>
  );
}
