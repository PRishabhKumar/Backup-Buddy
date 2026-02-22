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
  Save,
  PanelLeftClose,
  PanelLeftOpen,
  Home,
  LogOut
} from "lucide-react";
import { cn, formatSize } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

import { useDrive } from "@/context/drive-context";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: Activity },
  { name: "Health Monitor", href: "/dashboard/health", icon: Activity },
  { name: "Duplicates", href: "/dashboard/duplicates", icon: Copy },
  { name: "Image Analyzer", href: "/dashboard/analyzer", icon: ImageIcon },
  { name: "Voice Control", href: "/dashboard/voice", icon: Mic },
  { name: "Recommendations", href: "/dashboard/recommendations", icon: Zap },
];

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  const { drives, selectedDrive, setSelectedDrive } = useDrive();

  return (
    <aside 
        className={cn(
            "fixed left-0 top-0 z-40 h-screen border-r border-border bg-card/50 backdrop-blur-xl transition-all duration-300 ease-in-out flex flex-col",
            isOpen ? "w-72" : "w-20"
        )}
    >
      {/* Sidebar Header: Logo + Toggle */}
      <div className="flex items-center justify-between p-4 h-20 border-b border-border/50">
         <div className={cn("flex items-center gap-3 overflow-hidden transition-all", isOpen ? "w-auto" : "w-0 opacity-0")}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <HardDrive className="h-6 w-6" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground whitespace-nowrap">
                Backup Buddy
            </span>
         </div>
         
         <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className={cn("shrink-0 transition-transform", !isOpen && "mx-auto")}
            title={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
         >
             {isOpen ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeftOpen className="h-5 w-5" />}
         </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4 overflow-y-auto scrollbar-hide">
          <div className="mb-6">
             <Link
                href="/"
                className={cn(
                  "group flex items-center rounded-xl px-3 py-3 text-sm font-medium transition-all text-muted-foreground hover:bg-primary/10 hover:text-primary",
                   isOpen ? "justify-start gap-3" : "justify-center"
                )}
                title="Back to Home"
              >
                <div className="h-5 w-5 shrink-0 flex items-center justify-center">
                    <Home className="h-5 w-5" />
                </div>
                {isOpen && <span>Back to Home</span>}
              </Link>
          </div>

          <div className="space-y-1 mb-6">
             <p className={cn("text-xs font-semibold text-muted-foreground mb-2 px-3 uppercase tracking-wider", !isOpen && "hidden")}>
                Menu
             </p>
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                    "group flex items-center rounded-xl px-3 py-3 text-sm font-medium transition-all",
                    isActive
                        ? "bg-primary/10 text-primary shadow-[0_0_15px_rgba(255,215,0,0.1)]"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    isOpen ? "justify-start gap-3" : "justify-center"
                    )}
                    title={!isOpen ? item.name : undefined}
                >
                    <Icon
                    className={cn(
                        "h-5 w-5 shrink-0 transition-colors",
                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-accent-foreground"
                    )}
                    />
                    {isOpen && <span>{item.name}</span>}
                </Link>
                );
            })}
          </div>

          {/* Detected Drives Section */}
          {drives.length > 0 && (
            <div className="space-y-1">
              <p className={cn("text-xs font-semibold text-muted-foreground mb-2 px-3 uppercase tracking-wider", !isOpen && "hidden")}>
                Detected Devices
              </p>
              {drives.map((drive) => (
                <button
                  key={drive.device}
                  onClick={() => setSelectedDrive(drive)}
                  className={cn(
                    "w-full group flex items-center rounded-xl px-3 py-3 text-sm font-medium transition-all",
                    selectedDrive?.device === drive.device
                      ? "bg-emerald-500/10 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    isOpen ? "justify-start gap-3" : "justify-center"
                  )}
                  title={!isOpen ? `Drive: ${drive.mountpoint}` : undefined}
                >
                  <HardDrive
                    className={cn(
                      "h-5 w-5 shrink-0 transition-colors",
                      selectedDrive?.device === drive.device ? "text-emerald-500" : "text-muted-foreground group-hover:text-accent-foreground"
                    )}
                  />
                  {isOpen && <span className="truncate">{drive.mountpoint.split('/').pop() || drive.device}</span>}
                </button>
              ))}
            </div>
          )}
      </nav>

      {/* Footer / Status */}
      <div className="p-4 border-t border-border/50 bg-black/10">
          {isOpen ? (
             <div className="space-y-4">
                 <div className="rounded-xl border border-white/10 bg-white/5 p-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="relative flex h-2 w-2">
                            <span className={cn(
                                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                                selectedDrive ? "bg-emerald-400" : "bg-red-400"
                            )}></span>
                            <span className={cn(
                                "relative inline-flex h-2 w-2 rounded-full",
                                selectedDrive ? "bg-emerald-500" : "bg-red-500"
                            )}></span>
                        </div>
                        <span className="text-sm font-medium text-foreground">
                            {selectedDrive ? "Connected" : "Disconnected"}
                        </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {selectedDrive 
                            ? `${selectedDrive.mountpoint.split('/').pop() || selectedDrive.device} (${formatSize(selectedDrive.total)})`
                            : "No Drive Detected"}
                    </p>
                </div>
                <MagneticButton className="w-full gap-2 font-bold shadow-lg shadow-primary/20" variant="premium">
                    <Save className="h-4 w-4" />
                    Quick Backup
                </MagneticButton>
             </div>
          ) : (
             <div className="flex flex-col items-center gap-4">
                 <div 
                    className={cn(
                        "h-2 w-2 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-colors",
                        selectedDrive ? "bg-emerald-500 shadow-emerald-500/50" : "bg-red-500 shadow-red-500/50"
                    )} 
                    title={selectedDrive ? "Connected" : "Disconnected"} 
                 />
                 <Button size="icon" variant="ghost" title="Quick Backup">
                    <Save className="h-5 w-5" />
                 </Button>
             </div>
          )}
      </div>
    </aside>
  );
}
