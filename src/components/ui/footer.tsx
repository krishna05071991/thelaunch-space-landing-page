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
      {/* Radial gradient mask overlay */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Animated background boxes */}
      <Boxes />
      
      {/* Footer Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 className={cn("md:text-4xl text-xl text-white font-bold tracking-tight mb-4")}>
          thelaunch.space
        </h1>
        <p className="text-center mt-2 text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Serving founders who refuse to go slow. Contact at{" "}
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