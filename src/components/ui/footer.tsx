/*
 * Footer Component - Animated footer with background boxes effect
 * Features company branding and contact information with interactive hover effects
 */
"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
    <footer className="h-32 relative w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Subtle gradient blend from previous section */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-black/10 to-black/20 z-10 pointer-events-none" />
      
      {/* Additional subtle radial mask for grid visibility */}
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)] pointer-events-none" />

      {/* Animated background boxes */}
      
      <h1 className={cn("md:text-2xl text-lg text-white relative z-30 font-bold")}>
      
      {/* Footer Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 className={cn("md:text-4xl text-xl text-white font-bold tracking-tight mb-4")}>
          thelaunch.space
        </h1>
        <p className="text-center mt-2 text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
      <p className="text-center mt-1 text-neutral-300 relative z-30 text-sm md:text-base">
          <a 
            href="mailto:krishna@thelaunch.space" 
            className="text-blue-300 hover:text-blue-200 underline underline-offset-2 transition-colors duration-200"
          >
            krishna@thelaunch.space
          </a>{" "}
          for more details.
        </p>
      </div>
    </footer>
  );
}
  )
}