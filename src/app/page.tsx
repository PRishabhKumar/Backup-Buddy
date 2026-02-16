"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Copy, HardDrive, Mic, Zap, BarChart3 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
      
      {/* Navigation */}
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border border-white/10 bg-black/50 backdrop-blur-xl transition-all duration-300 hover:border-primary/30">
        <div className="flex h-14 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-amber-600 text-black shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <HardDrive className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Backup Buddy</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {["Features", "Pricing", "About"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`}>
                <div className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary relative group cursor-pointer">
                    {item}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-1/2" />
                </div>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
             <Link href="/dashboard">
                <MagneticButton variant="primary" className="h-9 px-6 text-sm bg-primary text-black font-bold">
                    Launch
                </MagneticButton>
             </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--obsidian)_0%,_var(--background)_100%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[100px] opacity-20 animate-pulse-slow" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

          <div className="container relative mx-auto px-6 text-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium"
            >
              ✨ The Future of Data Management
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-6xl md:text-8xl font-bold tracking-tighter text-white"
            >
              Secure. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-200 to-primary animate-shimmer bg-[length:200%_100%]">Intelligent.</span><br />
              Immortal.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
            >
              Don't let corrupted storage cost you your memories. Backup Buddy uses AI to predict failures, 
              instantly cull duplicates, and secure your digital life.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
               <Link href="/dashboard">
                  <MagneticButton className="h-14 px-10 text-lg shadow-[0_0_40px_rgba(255,215,0,0.3)] hover:shadow-[0_0_60px_rgba(255,215,0,0.5)] transition-shadow">
                      Start Workflow <ArrowRight className="ml-2 h-5 w-5" />
                  </MagneticButton>
               </Link>
               <MagneticButton variant="outline" className="h-14 px-10 text-lg border-white/10 hover:bg-white/5">
                  Watch The Film
               </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* Features Grid ("The Storage Core") */}
        <section id="features" className="py-32 relative bg-black/40">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary)_0%,_transparent_70%)] opacity-5" />
           
           <div className="container mx-auto px-6">
             <div className="mb-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Storage Core</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Powered by advanced algorithms to ensure your data survives the harshest conditions.
                </p>
             </div>

             <div className="grid gap-6 md:grid-cols-3">
                <SpotlightCard className="p-8 h-full bg-black/40 backdrop-blur-md">
                   <div className="mb-6 h-14 w-14 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-500/0 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                     <BarChart3 className="h-7 w-7" />
                   </div>
                   <h3 className="mb-3 text-2xl font-bold text-white">Sector Analysis</h3>
                   <p className="text-muted-foreground leading-relaxed">
                     Deep-scan technology reads physical sectors of your storage to predict corruption vectors before they become permanent.
                   </p>
                </SpotlightCard>

                <SpotlightCard className="p-8 h-full bg-black/40 backdrop-blur-md" spotlightColor="rgba(59, 130, 246, 0.2)">
                   <div className="mb-6 h-14 w-14 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/0 border border-blue-500/20 flex items-center justify-center text-blue-400">
                     <Copy className="h-7 w-7" />
                   </div>
                   <h3 className="mb-3 text-2xl font-bold text-white">Burst Logic</h3>
                   <p className="text-muted-foreground leading-relaxed">
                     Our AI groups similar files and intelligently suggests the best version, allowing you to clear gigabytes of clutter in seconds.
                   </p>
                </SpotlightCard>

                <SpotlightCard className="p-8 h-full bg-black/40 backdrop-blur-md" spotlightColor="rgba(245, 158, 11, 0.2)">
                   <div className="mb-6 h-14 w-14 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-500/0 border border-amber-500/20 flex items-center justify-center text-amber-400">
                     <Mic className="h-7 w-7" />
                   </div>
                   <h3 className="mb-3 text-2xl font-bold text-white">Voice Command</h3>
                   <p className="text-muted-foreground leading-relaxed">
                     "Backup Buddy, offload Drive 1 to SSD." Manage your entire workflow hands-free while you focus on what matters.
                   </p>
                </SpotlightCard>
             </div>
           </div>
        </section>
      </main>
      
      <footer className="border-t border-white/5 bg-black py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
                <HardDrive className="text-muted-foreground h-5 w-5" /> 
                <span className="text-muted-foreground font-medium">Backup Buddy System</span>
            </div>
            <div className="text-sm text-muted-foreground/60">
                System Status: <span className="text-emerald-500">Online</span>
            </div>
        </div>
      </footer>
    </div>
  );
}
