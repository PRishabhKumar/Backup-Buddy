"use client";

import { VoiceWaveform } from "@/features/voice/components/VoiceWaveform";
import { CommandTooltip } from "@/features/voice/components/CommandTooltip";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button"; // Suggesting replacement if possible, keeping consistency
import { Mic, MicOff, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VoicePage() {
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center space-y-12 relative py-12">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      <div className="text-center space-y-2 z-10">
        <h2 className="text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
             Voice Command <span className="text-primary">Protocol</span>
        </h2>
        <p className="text-muted-foreground text-lg">Hands-free workflow management system.</p>
      </div>

      <div className="relative z-10 group">
        <div className={`absolute inset-0 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 ${isListening ? "opacity-100 scale-150" : "opacity-0 scale-100"}`} />
        
        <div className="relative z-10 rounded-[3rem] border border-white/10 bg-black/40 p-12 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-primary/30">
             <div className="mb-10 flex justify-center">
                 <button
                    className={`h-32 w-32 rounded-full transition-all duration-300 flex items-center justify-center border-4 ${
                        isListening 
                        ? "bg-red-500 border-red-400 shadow-[0_0_60px_rgba(239,68,68,0.5)] animate-pulse" 
                        : "bg-black border-primary/50 text-primary shadow-[0_0_30px_rgba(255,215,0,0.2)] hover:bg-primary hover:text-black hover:scale-105"
                    }`}
                    onClick={() => setIsListening(!isListening)}
                 >
                    {isListening ? <MicOff className="h-12 w-12 text-white" /> : <Mic className="h-12 w-12" />}
                 </button>
             </div>

             <div className="h-32 w-96 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {isListening ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="w-full"
                        >
                             <VoiceWaveform />
                             <p className="text-center text-primary mt-4 font-mono text-sm tracking-widest animate-pulse">LISTENING...</p>
                        </motion.div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center space-y-2"
                        >
                            <p className="text-muted-foreground italic text-lg">"Backup my layout"</p>
                            <p className="text-xs text-white/20 uppercase tracking-widest">Tap to Initialize</p>
                        </motion.div>
                    )}
                </AnimatePresence>
             </div>
        </div>
      </div>

      <div className="space-y-6 text-center z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-muted-foreground">
            <Sparkles className="h-3 w-3 text-primary" /> 
            <span>Supported Commands</span>
        </div>
        <CommandTooltip />
      </div>
    </div>
  );
}
