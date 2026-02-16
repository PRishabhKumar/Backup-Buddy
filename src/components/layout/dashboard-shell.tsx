"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { cn } from "@/lib/utils";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div 
        className={cn(
            "flex flex-1 flex-col overflow-hidden transition-all duration-300 ease-in-out",
            isSidebarOpen ? "ml-64" : "ml-20"
        )}
      >
        <Header />
        <main className="flex-1 overflow-y-auto px-6 py-8 scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  );
}
