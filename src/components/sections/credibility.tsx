/*
 * Credibility Section Component - Krishna's story and credentials
 * Features circular photo frame, narrative content, and credibility markers
 */
import React, { forwardRef } from 'react';
import { motion } from "motion/react";
import { Check, Award, Users, TrendingUp, Zap } from "lucide-react";

const credentialsData = [
  {
    icon: <Users className="w-5 h-5" />,
    text: "9+ years leading product teams",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    text: "Built 15+ live MVPs using AI-first approaches",
  },
  {
    icon: <Award className="w-5 h-5" />,
    text: "Expert in Bolt.new, Supabase, AI workflows",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    text: "Has clients generating revenues upwards of $60k in 8+ months",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    text: "Generated $15k revenue while learning agency operations",
  },
];

export const CredibilitySection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className="relative z-10 min-h-screen flex items-center py-4 lg:py-8" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile Heading */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                From Educator to{" "}
                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  AI Builder
                </span>{" "}
                – Your Technical Co-Founder
              </h2>
            </motion.div>

            {/* Mobile Photo */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                    <Users className="w-16 h-16 text-gray-600" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Mobile Story */}
            <motion.div
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">Krishna's Story</h3>
                <p className="text-base text-white/80 leading-relaxed mb-4">
                  Led 300+ person teams at BYJU'S. Scaled products that improved academic outcomes by 30%+.
                </p>
                <p className="text-base text-white/80 leading-relaxed">
                  Now building AI-first MVPs for founders who refuse to move slow.
                </p>
              </div>
            </motion.div>

            {/* Mobile Credentials */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-lg font-bold text-white mb-6 text-center">Credentials</h4>
              {credentialsData.map((credential, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 shadow-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 border border-green-400/30 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <p className="text-sm text-white/90 font-medium leading-relaxed">
                    {credential.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Desktop/Tablet Layout */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-12 xl:gap-16 h-full items-center">
            
            {/* Left Side - Photo & Story */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Photo */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="w-48 h-48 xl:w-56 xl:h-56 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-2">
                    <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                      <Users className="w-24 h-24 xl:w-28 xl:h-28 text-gray-600" />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                </div>
              </motion.div>

              {/* Krishna's Story Card */}
              <motion.div
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 xl:p-8 shadow-2xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="text-xl xl:text-2xl font-bold text-white mb-4">Krishna's Story</h3>
                  <p className="text-base xl:text-lg text-white/80 leading-relaxed mb-4">
                    Led 300+ person teams at BYJU'S. Scaled products that improved academic outcomes by 30%+.
                  </p>
                  <p className="text-base xl:text-lg text-white/80 leading-relaxed">
                    Now building AI-first MVPs for founders who refuse to move slow.
                  </p>
                </div>
              </motion.div>
              
            </div>
            
            {/* Right Side - Heading & Credentials */}
            <div className="lg:col-span-3">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Main Headline */}
                <div>
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight leading-tight">
                    From Educator to{" "}
                    <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                      AI Builder
                    </span>{" "}
                    – Your Technical Co-Founder
                  </h2>
                </div>

                {/* Credentials Section */}
                <motion.div
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 xl:p-8 shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl xl:text-2xl font-bold text-white mb-6">Credentials</h3>
                    
                    <div className="space-y-4">
                      {credentialsData.map((credential, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-4 group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 border border-green-400/30 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                            <Check className="w-4 h-4 text-green-400" />
                          </div>
                          <p className="text-base xl:text-lg text-white/90 font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                            {credential.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
});

CredibilitySection.displayName = 'CredibilitySection';