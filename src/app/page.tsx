"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Copy, HardDrive, Mic, Zap, BarChart3 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
      
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-black">
              <HardDrive className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Backup Buddy</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Features</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Pricing</Link>
            <Link href="/dashboard">
              <Button variant="premium" className="cursor-pointer h-9 px-4">
                Launch Dashboard
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

          <div className="container relative mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
                Your Photography Workflow,<br />
                <span className="bg-gradient-to-r from-primary to-amber-200 bg-clip-text text-transparent">Reimagined by AI.</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                Automate your backups, cull duplicates instantly, and get health insights for your SD cards. 
                Built for professionals who can't afford to lose a shot.
              </p>
              
              <div className="flex items-center justify-center gap-4">
                 <Link href="/dashboard">
                    <Button size="lg" className=" cursor-pointer h-12 border-primary bg-primary text-black hover:bg-primary/90 px-8 text-base font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                 </Link>
                 <Button size="lg" variant="outline" className="cursor-pointer h-12 border-white/10 bg-white/5 text-white hover:bg-white/10 px-8 text-base">
                    View Demo
                 </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 md:grid-cols-3">
               <motion.div 
                 whileHover={{ y: -5 }}
                 className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-8 transition-all hover:border-primary/50"
               >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Health Monitor</h3>
                  <p className="text-muted-foreground">Real-time analysis of your SD card's physical sectors to prevent corruption before it happens.</p>
               </motion.div>

               <motion.div 
                 whileHover={{ y: -5 }}
                 className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-8 transition-all hover:border-primary/50"
               >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                    <Copy className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Duplicate Manager</h3>
                  <p className="text-muted-foreground">Smart side-by-side comparison to instantly identify and remove redundant burst shots.</p>
               </motion.div>

               <motion.div 
                 whileHover={{ y: -5 }}
                 className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-8 transition-all hover:border-primary/50"
               >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                    <Mic className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Voice Control</h3>
                  <p className="text-muted-foreground">Hands-free management. "Backup my recent photos" works while you keep shooting.</p>
               </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-white/5 bg-background py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
            © 2026 Backup Buddy. Built for the Hackathon.
        </div>
      </footer>
    </div>
  );
}
