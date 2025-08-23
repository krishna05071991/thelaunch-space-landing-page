/*
 * Hero Section Component - Main landing page hero with headline and CTA
 * Features responsive typography, vapor effect on "21 days", and engaging call-to-action
 */
import { SparklesButton } from "@/components/ui/sparkles-button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Vapour21Days } from "@/components/ui/vapour-21-days";

export function HeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          
          {/* Main Headline */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-tight">
              <div className="mb-2">
                Your{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  <em>idea</em>
                </span>{" "}
                to{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  <em>product</em>
                </span>{" "}
                - live
              </div>
              <div className="flex justify-center">
                <Vapour21Days className="flex-shrink-0" />
              </div>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/80 tracking-tight leading-relaxed mb-8 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            While your competitors are still planning, you'll be talking to real users
          </motion.h2>

          {/* Primary CTA */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <SparklesButton
              variant="primary"
              size="lg"
              onClick={() => console.log("Start Moving CTA clicked")}
              className="text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-6"
            >
              Start Moving
              <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 ml-2" />
            </SparklesButton>
          </motion.div>

          {/* Social Proof Bar */}
          <motion.div 
            className="mb-12 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-white/60 text-sm lg:text-base mb-6 text-center font-medium tracking-wide">
              Trusted by founders who move fast:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-white/70 text-xs lg:text-sm">MVPs in 6 months</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">$15k</div>
                <div className="text-white/70 text-xs lg:text-sm">revenue generated</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">3-4</div>
                <div className="text-white/70 text-xs lg:text-sm">week avg delivery</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">40-70%</div>
                <div className="text-white/70 text-xs lg:text-sm">efficiency gains</div>
              </div>
            </div>
          </motion.div>
          {/* Secondary Text */}
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-white/50 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Next available slot: September 2025
          </motion.p>

        </div>
      </div>
    </section>
  );
}