/*
 * Booking Section Component - Calendly integration with compelling copy
 * Features responsive 2-column layout with Calendly embed and conversion-focused copy
 */
import { forwardRef, useEffect } from 'react';
import { motion } from "motion/react";
import { CheckCircle, Clock, MessageSquare, Target } from "lucide-react";

export const BookingSection = forwardRef<HTMLElement>((_, ref) => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative z-10 min-h-screen flex items-center py-8 lg:py-16" ref={ref} data-section="booking">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content Container */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 xl:p-12 shadow-2xl">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-center">
                
                {/* Left Column - Calendly Widget (30% on desktop) */}
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Calendly Container */}
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 lg:p-6">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                      
                      <div className="relative z-10">
                        {/* Calendly Widget */}
                        <div 
                          className="calendly-inline-widget" 
                          data-url="https://calendly.com/krishna-thelaunch/discovery-call?hide_event_type_details=1" 
                          style={{ minWidth: '100%', height: '600px' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Content (70% on desktop) */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <motion.div
                    className="space-y-6 lg:space-y-8"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    
                    {/* Main Heading */}
                    <div className="space-y-4">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                        🚀 Ready to Launch Your{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                          MVP in 3 Weeks?
                        </span>
                      </h2>
                      
                      <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed">
                        Let's turn your vision into a working product that users love.
                      </p>
                    </div>

                    {/* What We'll Cover Section */}
                    <div className="space-y-4">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
                        What we'll cover in 20 minutes:
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <p className="text-white/90 text-base lg:text-lg">
                            What problem are you solving for your users?
                          </p>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <p className="text-white/90 text-base lg:text-lg">
                            Where are you in your journey? (Early idea / Mockups ready / PRD complete / Just getting started)
                          </p>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <p className="text-white/90 text-base lg:text-lg">
                            Your budget range for getting to market fast
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Promise Section */}
                    <div className="space-y-4">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
                        My promise:
                      </h3>
                      
                      <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                        
                        <div className="relative z-10">
                          <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                            No-judgment, no-pitch conversation. Whether you're at the "napkin sketch" stage or ready to build, 
                            I'll give you honest insights about what's realistic.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="space-y-4">
                      <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium">
                        Looking forward to turning your idea into something real!
                      </p>
                      
                      {/* Mobile CTA for smaller screens */}
                      <div className="lg:hidden">
                        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 rounded-xl p-4 text-center">
                          <p className="text-white/90 text-sm mb-2">
                            📅 Book your call above
                          </p>
                          <p className="text-white/70 text-xs">
                            Pick a time that works for you
                          </p>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
});

BookingSection.displayName = 'BookingSection';
