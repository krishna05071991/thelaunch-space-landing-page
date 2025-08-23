/*
 * Problem/Solution Section Component - Highlights the startup speed problem and positioning
 * Features contrasting problem/solution layout with responsive design
 */
import { motion } from "motion/react";
import { Component as GlassIcons } from "@/components/ui/glass-icons";
import { FiBarChart2, FiClock, FiFileText, FiCalendar } from 'react-icons/fi';

export function ProblemSolutionSection() {
  const problemPoints = [
    "Your competitors are shipping and learning",
    "Market opportunities are expiring", 
    "Your best ideas are gathering dust",
    "Traditional dev teams want 6+ months"
  ];

  // Red glass icons for problem points
  const problemIcons = [
    { icon: <FiBarChart2 className="w-6 h-6 text-white" />, color: 'red', label: 'Competition' },
    { icon: <FiClock className="w-6 h-6 text-white" />, color: 'red', label: 'Expiring' },
    { icon: <FiFileText className="w-6 h-6 text-white" />, color: 'red', label: 'Gathering Dust' },
    { icon: <FiCalendar className="w-6 h-6 text-white" />, color: 'red', label: 'Slow Teams' },
  ];

  return (
    <section className="relative z-10 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div id="solution"></div>
          
          {/* Main Section Headline */}
          <motion.div
            className="text-center mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              The Startup{" "}
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                Speed Problem
              </span>
            </h2>
          </motion.div>

          {/* Problem/Solution Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Problem Side */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 mb-6">
                  While you're stuck in endless planning cycles:
                </h3>
                
                <div className="space-y-4">
                  {problemPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-6 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    >
                      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                        <div className="scale-75">
                          <GlassIcons 
                            items={[problemIcons[index]]} 
                            className="!p-0 !gap-0 grid-cols-1"
                          />
                        </div>
                      </div>
                      <p className="text-lg lg:text-xl text-red-200/90 font-medium group-hover:text-red-100 transition-colors duration-300">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Solution Side */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Glass Container */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                  We Ship Your MVP in{" "}
                  <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    3-4 Weeks
                  </span>
                  , While You Build Your Business
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                    Every week you wait is revenue, feedback, and market position you'll never get back.
                  </p>
                  
                  <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                    We build{" "}
                    <span className="text-blue-300 font-semibold">AI-first systems</span>{" "}
                    that get you to market at startup speed.
                  </p>
                  
                  {/* Visual emphasis */}
                  <div className="pt-4">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg px-4 py-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-green-300 font-medium">Ready to ship in weeks, not months</span>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}