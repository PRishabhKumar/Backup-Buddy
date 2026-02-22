"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Activity, AlertTriangle, CheckCircle2, Copy, HardDrive, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import Link from "next/link";

export default function DashboardPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8 p-8"
    >
      <div className="flex items-center justify-between">
        <div>
            <h2 className="text-4xl font-bold tracking-tight text-white mb-2">Command Center</h2>
            <p className="text-muted-foreground">System Status: <span className="text-emerald-500 font-medium">Optimal</span></p>
        </div>
        <div className="flex gap-4">
            <MagneticButton variant="outline" className="border-white/10 hover:bg-white/5">
                System Log
            </MagneticButton>
            <Link href="/dashboard/analyzer">
                <MagneticButton className="shadow-lg shadow-primary/20">
                    <Zap className="mr-2 h-4 w-4" /> Quick Analysis
                </MagneticButton>
            </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <motion.div variants={item}>
            <SpotlightCard className="bg-black/40 backdrop-blur-xl border-white/10" spotlightColor="rgba(245, 158, 11, 0.3)">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-amber-500">Action Required</span>
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">128 Files</div>
                <p className="text-xs text-muted-foreground">Pending Backup form SD Card</p>
                
                <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-3/4 animate-pulse" />
                </div>
            </div>
            </SpotlightCard>
        </motion.div>
        
        <motion.div variants={item}>
            <SpotlightCard className="bg-black/40 backdrop-blur-xl border-white/10" spotlightColor="rgba(16, 185, 129, 0.3)">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-emerald-500">Storage Health</span>
                    <Activity className="h-4 w-4 text-emerald-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <p className="text-xs text-muted-foreground">Sony Tough G • Excellent</p>

                <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[98%]" />
                </div>
            </div>
            </SpotlightCard>
        </motion.div>

        <motion.div variants={item}>
            <SpotlightCard className="bg-black/40 backdrop-blur-xl border-white/10" spotlightColor="rgba(59, 130, 246, 0.3)">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-500">Redundancy</span>
                    <Copy className="h-4 w-4 text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">1.2 GB</div>
                <p className="text-xs text-muted-foreground">Duplicates Identified</p>

                <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-1/2" />
                </div>
            </div>
            </SpotlightCard>
        </motion.div>

        <motion.div variants={item}>
            <SpotlightCard className="bg-black/40 backdrop-blur-xl border-white/10" spotlightColor="rgba(255, 215, 0, 0.3)">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary">Last Backup</span>
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">2h ago</div>
                <p className="text-xs text-muted-foreground">To External SSD 1</p>

                 <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full" />
                </div>
            </div>
            </SpotlightCard>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 ">
        {/* Recent Activity */}
        <motion.div variants={item} className="col-span-4 rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-6">
             <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-white flex items-center gap-2">
                    <Activity className="h-4 w-4 text-primary" /> Activity Log
                </h3>
                <span className="text-xs text-muted-foreground px-2 py-1 bg-white/5 rounded-md border border-white/5">Real-time</span>
             </div>
             
             <div className="space-y-4">
                {[
                    { icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/10", title: "Backup Completed", desc: "Moved 450 RAW files to External SSD", time: "2h ago" },
                    { icon: Copy, color: "text-blue-500", bg: "bg-blue-500/10", title: "Duplicates Cleanup", desc: "Removed 12 similar shots (240 MB saved)", time: "5h ago" },
                    { icon: HardDrive, color: "text-amber-500", bg: "bg-amber-500/10", title: "SD Card Connected", desc: "Sony Tough G 128GB detected", time: "1d ago" },
                ].map((log, i) => (
                    <div key={i} className="flex items-center gap-4 rounded-lg border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10 group">
                        <div className={`h-10 w-10 rounded-full ${log.bg} flex items-center justify-center ${log.color} ring-1 ring-inset ring-white/10 group-hover:scale-110 transition-transform`}>
                            <log.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-white">{log.title}</p>
                            <p className="text-xs text-muted-foreground">{log.desc}</p>
                        </div>
                        <div className="text-xs text-muted-foreground font-mono">{log.time}</div>
                    </div>
                ))}
            </div>
        </motion.div>
        
        {/* Quick Actions */}
        <motion.div variants={item} className="col-span-3 rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-6">
            <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" /> Quick Protocols
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
                {[
                    { icon: HardDrive, label: "Eject Card" },
                    { icon: Copy, label: "Scan Duplicates" },
                    { icon: Activity, label: "Check Health" },
                    { icon: ShieldCheck, label: "Verify Backup" },
                ].map((action, i) => (
                    <button key={i} className="flex flex-col items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/5 p-6 text-center transition-all hover:bg-primary/10 hover:border-primary/30 hover:scale-105 active:scale-95 group">
                        <action.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">{action.label}</span>
                    </button>
                ))}
            </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
