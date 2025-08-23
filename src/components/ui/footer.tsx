/*
 * Footer Component - Thin footer that blends with continuous scroll background
 * Features animated background boxes with subtle integration
 */
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";

export function Footer() {
  return (
    <footer className="relative h-32 overflow-hidden flex items-center justify-center">
      {/* Subtle gradient overlay for blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 pointer-events-none z-10" />
      
      {/* Radial mask for subtle grid visibility */}
      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,transparent_20%,white_70%)] pointer-events-none z-20" />

      {/* Background boxes with reduced opacity */}
      <Boxes />
      
      <div className="relative z-30 text-center px-4">
        <h2 className="md:text-2xl text-lg font-bold text-white mb-1">
          thelaunch.space
        </h2>
        <p className="text-sm md:text-base text-white/80 leading-relaxed">
          Serving founders who refuse to go slow. Contact at{" "}
          <a 
            href="mailto:krishna@thelaunch.space" 
            className="text-blue-300 hover:text-blue-200 transition-colors duration-300"
          >
            krishna@thelaunch.space
          </a>{" "}
          for more details.
        </p>
      </div>
    </footer>
  );
}