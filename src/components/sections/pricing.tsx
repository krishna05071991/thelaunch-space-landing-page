/*
 * Pricing Section Component - Service pricing and packages
 * Features tiered pricing, feature comparisons, and call-to-action buttons
 */
import { forwardRef } from 'react';
import { motion } from "motion/react";
import { PricingCard } from "@/components/ui/dark-gradient-pricing";

export const PricingSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className="relative z-10 py-8 lg:py-16 min-h-screen flex items-center" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div id="pricing"></div>
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4 lg:mb-6">
             What You Get in{" "}
             <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
               3-4 Weeks
             </span>
            </h2>
            <p className="text-base lg:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
             Fast, focused delivery that gets you to market while your competitors are still planning.
            </p>
          </motion.div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <PricingCard
             tier="Landing Pages"
             price="$499"
             bestFor="Perfect for demo days and launches"
             CTA="Get Your Launch Roadmap"
              benefits={[
               { text: "Conversion-optimized for your audience", checked: true },
               { text: "Perfect for demo days and launches", checked: true },
               { text: "AI-enhanced user experiences", checked: true },
               { text: "Multiple levels of complexity handled", checked: true },
              ]}
            />
            <PricingCard
             tier="MVP Launch"
             price="$1,499"
             bestFor="Live product your customers can actually use"
             CTA="Get Your Launch Roadmap"
              isPopular={true}
              benefits={[
               { text: "Live product your customers can actually use", checked: true },
               { text: "AI-powered features from day one", checked: true },
               { text: "Built for rapid iteration and scaling", checked: true },
               { text: "Ready for real user feedback", checked: true },
              ]}
            />
            <PricingCard
             tier="Ongoing Partnership"
             price="$1,999"
             bestFor="Think like your technical co-founder"
             CTA="Get Your Launch Roadmap"
              benefits={[
               { text: "Monthly engagement model", checked: true },
               { text: "Think like your technical co-founder", checked: true },
               { text: "Continuous product evolution", checked: true },
               { text: "AI workflow optimization", checked: true },
               { text: "Priority access for experiments", checked: true },
              ]}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
});

PricingSection.displayName = 'PricingSection';