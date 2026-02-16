"use client";

import { VoiceWaveform } from "@/features/voice/components/VoiceWaveform";
import { CommandTooltip } from "@/features/voice/components/CommandTooltip";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { useState } from "react";

export default function VoicePage() {
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col items-center justify-center space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Voice Command Center</h2>
        <p className="text-muted-foreground">Manage your workflow hands-free while you shoot.</p>
      </div>

      <div className="relative">
        <div className={`absolute inset-0 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 ${isListening ? "opacity-100" : "opacity-0"}`} />
        
        <div className="relative z-10 rounded-3xl border border-border bg-card/50 p-8 shadow-2xl backdrop-blur-xl">
             <div className="mb-8 flex justify-center">
                 <Button 
                    size="icon" 
                    className={`h-24 w-24 rounded-full transition-all duration-300 ${isListening ? "bg-red-500 hover:bg-red-600 shadow-[0_0_40px_rgba(239,68,68,0.4)]" : "bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(212,175,55,0.4)]"}`}
                    onClick={() => setIsListening(!isListening)}
                 >
                    {isListening ? <MicOff className="h-10 w-10 text-white" /> : <Mic className="h-10 w-10 text-black" />}
                 </Button>
             </div>

             <div className="h-32 w-80">
                {isListening ? (
                    <VoiceWaveform />
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground italic">
                        Tap microphone to start listening...
                    </div>
                )}
             </div>
        </div>
      </div>

      <div className="space-y-4 text-center">
        <p className="text-sm font-medium text-foreground">Try saying:</p>
        <CommandTooltip />
      </div>
    </div>
  );
}
