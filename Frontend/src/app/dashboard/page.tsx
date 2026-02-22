"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Activity, AlertTriangle, CheckCircle2, Copy, HardDrive, ArrowUpRight, ShieldCheck, Zap, RefreshCw, Smartphone, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import Link from "next/link";
import { useDrive } from "@/context/drive-context";
import { formatSize } from "@/lib/utils";

export default function DashboardPage() {
  const { drives, selectedDrive, loading, error, scanDrives } = useDrive();

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
            <p className="text-muted-foreground">
                System Status: {selectedDrive ? <span className="text-emerald-500 font-medium">Drive Connected</span> : <span className="text-amber-500 font-medium">Waiting for Input</span>}
            </p>
        </div>
        <div className="flex gap-4">
            <MagneticButton 
                variant="outline" 
                className="border-white/10 hover:bg-white/5"
                onClick={scanDrives}
                disabled={loading}
            >
                {loading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
                Scan for Drives
            </MagneticButton>
            <Link href="/dashboard/analyzer">
                <MagneticButton className="shadow-lg shadow-primary/20">
                    <Zap className="mr-2 h-4 w-4" /> Quick Analysis
                </MagneticButton>
            </Link>
        </div>
      </div>

      <AnimatePresence>
        {loading && !selectedDrive ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-16 text-center"
          >
            <div className="flex flex-col items-center gap-4">
              <RefreshCw className="h-12 w-12 text-primary animate-spin" />
              <p className="text-white font-medium">Scanning for hardware...</p>
            </div>
          </motion.div>
        ) : error ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="rounded-xl border border-red-500/20 bg-red-500/5 p-8 text-center"
          >
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Connection Error</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">{error}</p>
            <MagneticButton 
                variant="outline" 
                className="border-red-500/20 hover:bg-red-500/10 text-red-500"
                onClick={scanDrives}
            >
                Retry Connection
            </MagneticButton>
          </motion.div>
        ) : !selectedDrive ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-16 text-center"
          >
            <div className="relative inline-block mb-6">
                <HardDrive className="h-20 w-20 text-muted-foreground opacity-20" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No Drives Detected</h3>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                Connect a removable drive (SD Card, USB, External SSD) and click scan to start managing your backups.
            </p>
            <MagneticButton 
                className="shadow-xl shadow-primary/20 px-8"
                onClick={scanDrives}
                disabled={loading}
            >
                Initialize Scan
            </MagneticButton>
          </motion.div>
        ) : (
          <motion.div
            key={`dashboard-${selectedDrive.device}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <motion.div variants={item}>
                  <SpotlightCard className="bg-black/40 backdrop-blur-xl border-white/10" spotlightColor="rgba(245, 158, 11, 0.3)">
                  <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-medium text-amber-500">Storage Capacity</span>
                          <HardDrive className="h-4 w-4 text-amber-500" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{formatSize(selectedDrive.total)}</div>
                      <p className="text-xs text-muted-foreground">Total Drive Volume</p>
                      
                      <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 w-full" />
                      </div>
                  </div>
                  </SpotlightCard>
              </motion.div>
              
              <motion.div variants={item}>
                  <SpotlightCard className="bg-black/40 backdrop-blur-xl border-white/10" spotlightColor="rgba(16, 185, 129, 0.3)">
                  <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-medium text-emerald-500">Free Space</span>
                          <Activity className="h-4 w-4 text-emerald-500" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{formatSize(selectedDrive.free)}</div>
                      <p className="text-xs text-muted-foreground">{(100 - selectedDrive.percentage).toFixed(0)}% Available</p>

                      <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: `${100 - selectedDrive.percentage}%` }} />
                      </div>
                  </div>
                  </SpotlightCard>
              </motion.div>

              <motion.div variants={item}>
                  <SpotlightCard className="bg-black/40 backdrop-blur-xl border-white/10" spotlightColor="rgba(59, 130, 246, 0.3)">
                  <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-medium text-blue-500">Used Storage</span>
                          <Copy className="h-4 w-4 text-blue-500" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{formatSize(selectedDrive.used)}</div>
                      <p className="text-xs text-muted-foreground">{selectedDrive.percentage.toFixed(1)}% Utilized</p>

                      <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: `${selectedDrive.percentage}%` }} />
                      </div>
                  </div>
                  </SpotlightCard>
              </motion.div>

              <motion.div variants={item}>
                  <SpotlightCard className="bg-black/40 backdrop-blur-xl border-white/10" spotlightColor="rgba(255, 215, 0, 0.3)">
                  <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-medium text-primary">Device Path</span>
                          <ShieldCheck className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-xl font-mono font-bold text-white mb-1 truncate">{selectedDrive.device}</div>
                      <p className="text-xs text-muted-foreground">Mount: {selectedDrive.mountpoint}</p>

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
                          <Activity className="h-4 w-4 text-primary" /> Drive Information
                      </h3>
                      <span className="text-xs text-muted-foreground px-2 py-1 bg-white/5 rounded-md border border-white/5">Details</span>
                  </div>
                  
                  <div className="space-y-4">
                      {[
                        { label: "Device Identifier", value: selectedDrive.device },
                        { label: "Mount Point", value: selectedDrive.mountpoint },
                        { label: "Storage Health", value: "Optimal", color: "text-emerald-500" },
                        { label: "Last Scanned", value: new Date().toLocaleTimeString() },
                      ].map((info, i) => (
                          <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                              <span className="text-sm text-muted-foreground">{info.label}</span>
                              <span className={`text-sm font-mono font-medium ${info.color || "text-white"}`}>{info.value}</span>
                          </div>
                      ))}
                  </div>
              </motion.div>
              
              {/* Quick Actions */}
              <motion.div variants={item} className="col-span-3 rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-6">
                  <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" /> Drive Protocols
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                      {[
                          { icon: HardDrive, label: "Eject Drive" },
                          { icon: Copy, label: "Scan Duplicates" },
                          { icon: Activity, label: "Deep Health Check" },
                          { icon: ShieldCheck, label: "Verify Integrity" },
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
        )}
      </AnimatePresence>
    </motion.div>
  );
}
