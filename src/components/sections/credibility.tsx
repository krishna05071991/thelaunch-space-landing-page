/*
 * Credibility Section Component - Krishna's story and credentials
 * Features personal branding with circular image frame and credential highlights
 */
import React, { forwardRef } from 'react';
import { motion } from "motion/react";
import { Check } from "lucide-react";

const credentials = [
  "9+ years leading product teams",
  "Built 15+ live MVPs using AI-first approaches", 
  "Expert in Bolt.new, Supabase, AI workflows",
  "Has clients generating revenues upwards of $60k in 8+ months",
  "Generated $15k revenue while learning agency operations"
];

export const CredibilitySection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className="relative z-10 min-h-screen flex items-center py-8 lg:py-16" ref={ref} id="credibility">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              From Educator to{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI Builder
              </span>{" "}
              – Your Technical Co-Founder
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Image and Story */}
            <motion.div
              className="text-center lg:text-left space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Circular Image Frame */}
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 p-1">
                    <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
                      {/* Placeholder for Krishna's image */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-4xl lg:text-5xl font-bold text-white opacity-50">K</span>
                      </div>
                    </div>
                  </div>
                  {/* Glowing ring effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 opacity-20 blur-xl animate-pulse"></div>
                </div>
              </div>

              {/* Krishna's Story */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    Krishna's Story
                  </h3>
                  <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                    Led 300+ person teams at BYJU'S. Scaled products that improved academic outcomes by 30%+. 
                    Now building AI-first MVPs for founders who refuse to move slow.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Credentials */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Credentials Container */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">
                    Credentials
                  </h3>
                  
                  <div className="space-y-4">
                    {credentials.map((credential, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4 group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                      >
                        {/* Check Icon */}
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        
                        {/* Credential Text */}
                        <p className="text-sm lg:text-base text-white/90 leading-relaxed group-hover:text-white transition-colors duration-200">
                          {credential}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Context */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p className="text-base lg:text-lg text-white/70 italic">
                  Ready to be your technical co-founder and turn your vision into reality.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
});

CredibilitySection.displayName = 'CredibilitySection';