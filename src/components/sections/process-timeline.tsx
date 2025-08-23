/*
 * Process Timeline Section Component - Shows MVP development process in 3-4 weeks
 * Features vertical timeline with glass morphism cards and responsive design
 */
import React, { forwardRef } from 'react';
import { motion } from "motion/react";

interface TimelineItem {
  days: string;
  phase: string;
  description: string;
  dotColor: string;
}

const timelineData: TimelineItem[] = [
  {
    days: "Days 1-3",
    phase: "Rapid Discovery",
    description: "Understand your vision, map workflows, identify AI opportunities",
    dotColor: "from-green-400 to-green-500"
  },
  {
    days: "Days 4-18",
    phase: "AI-Native Build", 
    description: "Your functional MVP built on modern stack – React, PostgreSQL, AI integrations",
    dotColor: "from-blue-400 to-blue-500"
  },
  {
    days: "Days 19-28",
    phase: "Launch & Iterate",
    description: "Deploy, gather feedback, rapid improvements",
    dotColor: "from-purple-400 to-purple-500"
  }
];

export const ProcessTimelineSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className="relative z-10 min-h-screen flex items-center py-4 lg:py-8" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto h-full">
          
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                From Idea to Launch in{" "}
                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  3-4 Weeks
                </span>
              </h2>
             <p className="text-sm text-white/60 italic">
               Our proven MVP development process
             </p>
            </motion.div>

            {/* Mobile Timeline */}
            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-4 h-4 mt-6">
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${item.dotColor} shadow-lg`}></div>
                  </div>
                  
                  {/* Timeline Content */}
                  <div className="flex-grow backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 shadow-2xl">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className={`text-base font-bold bg-gradient-to-r ${item.dotColor} bg-clip-text text-transparent mb-2`}>
                        {item.days}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.phase}
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
           
           {/* Mobile Process Note */}
           <motion.div
             className="mt-8 text-center"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.8 }}
           >
             <p className="text-xs text-white/50 italic leading-relaxed">
               For landing pages and partnership models, we customize our process and timeline to perfectly match your specific needs and goals.
             </p>
           </motion.div>
          </div>

          {/* Desktop/Tablet Layout */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-8 xl:gap-12 h-full items-center">
            
            {/* Left Side - Timeline */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-2 top-6 bottom-6 w-0.5 bg-white/20"></div>
                
                <div className="space-y-8">
                  {timelineData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative flex items-start space-x-6"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                      {/* Timeline Dot */}
                      <div className="flex-shrink-0 w-4 h-4 z-10">
                        <div className={`w-full h-full rounded-full bg-gradient-to-r ${item.dotColor} shadow-lg border-2 border-white/20`}></div>
                      </div>
                      
                      {/* Timeline Content Card */}
                      <div className="flex-grow backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 lg:p-6 shadow-2xl">
                        {/* Subtle inner glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                        
                        <div className="relative z-10">
                          <div className={`text-base lg:text-lg font-bold bg-gradient-to-r ${item.dotColor} bg-clip-text text-transparent mb-2`}>
                            {item.days}
                          </div>
                          <h3 className="text-lg lg:text-xl font-bold text-white mb-3">
                            {item.phase}
                          </h3>
                          <p className="text-sm lg:text-base text-white/80 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Side - Section Heading & Details */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Main Headline */}
                <div>
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight leading-tight">
                    From Idea to Launch in{" "}
                    <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                      3-4 Weeks
                    </span>
                  </h2>
                </div>

                {/* Additional Context */}
                <motion.div
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 lg:p-6 shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-3">
                      MVP Launch Process
                    </h3>
                    <p className="text-base lg:text-lg text-white/80 leading-relaxed mb-3">
                      This timeline shows our proven process for MVP development. Every step is designed to get you to market fast with a product that actually works.
                    </p>
                    <p className="text-xs lg:text-sm text-white/60 leading-relaxed italic">
                      For landing pages and partnership models, we customize our process and timeline to perfectly match your specific needs and goals.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
});

ProcessTimelineSection.displayName = 'ProcessTimelineSection';