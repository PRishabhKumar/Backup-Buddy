import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Use Outfit for tech/premium feel
import "./globals.css";
import { cn } from "@/lib/utils";
import { CustomCursor } from "@/components/ui/custom-cursor";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"] 
});

export const metadata: Metadata = {
  title: "Backup Buddy | Intelligent Data Management",
  description: "AI-Powered Data Manager for Everyone. Secure, fast, and intelligent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={cn("min-h-screen bg-background font-sans text-foreground antialiased overflow-x-hidden cursor-none", outfit.variable)}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
