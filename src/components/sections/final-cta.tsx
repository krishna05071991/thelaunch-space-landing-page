/*
 * Final CTA Section Component - Last call-to-action before footer
 * Features compelling copy, social proof, and clear next steps
 */
import { forwardRef } from 'react';
import { motion } from "motion/react";
import { SparklesButton } from "@/components/ui/sparkles-button";
import { ArrowRight } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { scrollToBooking } from "@/lib/utils";

export const FinalCTASection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className="relative z-10 min-h-screen flex items-center py-8 lg:py-16" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Content Container */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 xl:p-16 shadow-2xl text-center">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6 lg:space-y-8">
              
              {/* Main Headline */}
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Stop Planning.{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  Start Shipping.
                </span>
              </motion.h2>

              {/* Urgency Description */}
              <motion.div
                className="space-y-4 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-medium">
                  Your competitors aren't waiting. Your market isn't waiting. Your opportunities aren't waiting.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed">
                  Get your MVP live in{" "}
                  <span className="text-green-300 font-semibold">3-4 weeks</span>{" "}
                  and start learning what actually works.
                </p>
              </motion.div>

              {/* Primary CTA Button */}
              <motion.div
                className="pt-4 lg:pt-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <SparklesButton
                  variant="primary"
                  size="lg"
                  onClick={scrollToBooking}
                  className="text-xl lg:text-2xl px-8 lg:px-12 py-4 lg:py-6"
                >
                  Get Your Launch Roadmap
                  <ArrowRight className="w-6 h-6 lg:w-7 lg:h-7 ml-3" />
                </SparklesButton>
              </motion.div>

              {/* Supporting Text */}
              <motion.p
                className="text-sm sm:text-base lg:text-lg text-white/60 italic leading-relaxed max-w-2xl mx-auto pt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Book a 15-minute call to discuss your project. No pitch, just straight talk about what's possible.
              </motion.p>

              {/* FAQ Section */}
              <FAQAccordion />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
});

FinalCTASection.displayName = 'FinalCTASection';