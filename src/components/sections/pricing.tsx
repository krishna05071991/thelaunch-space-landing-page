/*
 * Pricing Section Component - Three-tier pricing with glass morphism cards
 * Features responsive design and matches thelaunch.space theme
 */
import React, { forwardRef } from 'react';
import { motion } from "motion/react";
import { PricingCard } from "@/components/ui/dark-gradient-pricing";

export const PricingSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className="relative z-10 py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Simple{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Use it for free for yourself, upgrade when your team needs advanced control.
            </p>
          </motion.div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <PricingCard
              tier="Free"
              price="$0/mo"
              bestFor="Best for 1-5 users"
              CTA="Get started free"
              benefits={[
                { text: "One workspace", checked: true },
                { text: "Email support", checked: true },
                { text: "1 day data retention", checked: false },
                { text: "Custom roles", checked: false },
                { text: "Priority support", checked: false },
                { text: "SSO", checked: false },
              ]}
            />
            <PricingCard
              tier="Pro"
              price="$79/mo"
              bestFor="Best for 5-50 users"
              CTA="14-day free trial"
              isPopular={true}
              benefits={[
                { text: "Five workspaces", checked: true },
                { text: "Email support", checked: true },
                { text: "7 day data retention", checked: true },
                { text: "Custom roles", checked: true },
                { text: "Priority support", checked: false },
                { text: "SSO", checked: false },
              ]}
            />
            <PricingCard
              tier="Enterprise"
              price="Contact us"
              bestFor="Best for 50+ users"
              CTA="Contact us"
              benefits={[
                { text: "Unlimited workspaces", checked: true },
                { text: "Email support", checked: true },
                { text: "30 day data retention", checked: true },
                { text: "Custom roles", checked: true },
                { text: "Priority support", checked: true },
                { text: "SSO", checked: true },
              ]}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
});

PricingSection.displayName = 'PricingSection';