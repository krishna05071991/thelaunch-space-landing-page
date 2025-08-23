/*
 * Sparkles CTA Button Component - Combines sparkles and underline effects
 * Used in hero, CTA sections, and pricing sections for interactive call-to-action buttons
 */
"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { SparklesCore } from "./sparkles";
import { cn } from "@/lib/utils";

interface SparklesButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export function SparklesButton({
  children,
  className,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
}: SparklesButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-white text-neutral-950 hover:bg-neutral-100",
    secondary: "bg-transparent border border-white/20 text-white hover:border-white/40",
  };

  return (
    <motion.button
      className={cn(
        "relative overflow-hidden rounded-lg font-semibold transition-all duration-300 group",
        sizeClasses[size],
        variantClasses[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      disabled={disabled}
    >
      {/* Sparkles Effect - Only on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={50}
          className="w-full h-full"
          particleColor={variant === "primary" ? "#6366f1" : "#ffffff"}
          speed={2}
        />
      </motion.div>

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Underline Effects - Animated on hover */}
      <motion.div
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Primary underline */}
        <div className="relative w-full">
          <div className="absolute inset-x-4 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-4 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          
          {/* Secondary underline */}
          <div className="absolute inset-x-8 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-1/2 blur-sm" />
          <div className="absolute inset-x-8 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />
        </div>
      </motion.div>

      {/* Radial mask for sparkles */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(200px_100px_at_center,transparent_20%,white)]" />
    </motion.button>
  );
}