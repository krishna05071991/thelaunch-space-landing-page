/*
 * Booking Section Component - Calendly integration with compelling copy
 * Features responsive 2-column layout with Calendly embed and conversion-focused copy
 * Mobile-optimized with calendar-first layout and collapsible content
 */
import { forwardRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

export const BookingSection = forwardRef<HTMLElement>((_, ref) => {
  const [isContentExpanded, setIsContentExpanded] = useState(false);

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

  // Hide mobile CTA when in booking section
  useEffect(() => {
    const handleScroll = () => {
      const bookingSection = document.querySelector('[data-section="booking"]');
      const mobileCTA = document.querySelector('[data-mobile-cta]');
      
      if (bookingSection && mobileCTA) {
        const sectionTop = (bookingSection as HTMLElement).offsetTop;
        const sectionBottom = sectionTop + (bookingSection as HTMLElement).offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Hide CTA when booking section is in view
        const isInBookingSection = scrollY + windowHeight > sectionTop && scrollY < sectionBottom;
        
        if (isInBookingSection) {
          mobileCTA.classList.add('opacity-0', 'pointer-events-none');
        } else {
          mobileCTA.classList.remove('opacity-0', 'pointer-events-none');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
              
              {/* Desktop Layout - Two Column */}
              <div className="hidden lg:grid lg:grid-cols-10 gap-8 lg:gap-12 items-center">
                
                {/* Left Column - Calendly Widget (30% on desktop) */}
                <div className="lg:col-span-3">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Calendly Container */}
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl p-4 lg:p-6">
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
                <div className="lg:col-span-7">
                  <motion.div
                    className="space-y-6 lg:space-y-7"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    
                    {/* Main Heading */}
                    <div className="space-y-4">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                        🚀 Ready to Launch Your{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                          MVP in 3 Weeks?
                        </span>
                      </h2>
                      
                      <p className="text-lg sm:text-xl lg:text-xl text-white/80 leading-relaxed">
                        Let's turn your vision into a working product that users love.
                      </p>
                    </div>

                    {/* What We'll Cover Section */}
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                        What we'll cover in 20 minutes:
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <p className="text-white/90 text-base">
                            What problem are you solving for your users?
                          </p>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <p className="text-white/90 text-base">
                            Where are you in your journey? (Early idea / Mockups ready / PRD complete / Just getting started)
                          </p>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <p className="text-white/90 text-base">
                            Your budget range for getting to market fast
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Promise Section */}
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                        My promise:
                      </h3>
                      
                      <div className="relative backdrop-blur-sm bg-white/5 border border-white/5 rounded-xl p-5">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                        
                        <div className="relative z-10">
                          <p className="text-white/90 text-base leading-relaxed">
                            No-judgment, no-pitch conversation. Whether you're at the "napkin sketch" stage or ready to build, 
                            I'll give you honest insights about what's realistic.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="space-y-4">
                      <p className="text-lg sm:text-xl lg:text-xl text-white font-medium">
                        Looking forward to turning your idea into something real!
                      </p>
                    </div>

                  </motion.div>
                </div>
              </div>

              {/* Mobile Layout - Calendar First */}
              <div className="lg:hidden space-y-6">
                
                {/* Mobile - Calendar Widget (Primary Focus) */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Calendly Container */}
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl p-4">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      {/* Calendly Widget */}
                      <div 
                        className="calendly-inline-widget" 
                        data-url="https://calendly.com/krishna-thelaunch/discovery-call?hide_event_type_details=1" 
                        style={{ minWidth: '100%', height: '500px' }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Mobile - Collapsible Content */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  
                  {/* Preview Content (Always Visible) */}
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                      🚀 Ready to Launch Your{" "}
                      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                        MVP in 3 Weeks?
                      </span>
                    </h2>
                    
                    <p className="text-base text-white/80 leading-relaxed">
                      Let's turn your vision into a working product that users love.
                    </p>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isContentExpanded ? (
                      <motion.div
                        className="space-y-4 mt-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {/* What We'll Cover Section */}
                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold text-white">
                            What we'll cover in 20 minutes:
                          </h3>
                          
                          <div className="space-y-2">
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                              <p className="text-white/90 text-sm">
                                What problem are you solving for your users?
                              </p>
                            </div>
                            
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                              <p className="text-white/90 text-sm">
                                Where are you in your journey? (Early idea / Mockups ready / PRD complete / Just getting started)
                              </p>
                            </div>
                            
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                              <p className="text-white/90 text-sm">
                                Your budget range for getting to market fast
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Promise Section */}
                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold text-white">
                            My promise:
                          </h3>
                          
                          <div className="relative backdrop-blur-sm bg-white/5 border border-white/5 rounded-xl p-4">
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                            
                            <div className="relative z-10">
                              <p className="text-white/90 text-sm leading-relaxed">
                                No-judgment, no-pitch conversation. Whether you're at the "napkin sketch" stage or ready to build, 
                                I'll give you honest insights about what's realistic.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Call to Action */}
                        <div className="space-y-3">
                          <p className="text-base text-white font-medium">
                            Looking forward to turning your idea into something real!
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        className="relative mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Gradient Fade Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent pointer-events-none rounded-lg"></div>
                        
                        {/* Preview Text */}
                        <div className="relative z-10 p-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl">
                          <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
                            What we'll cover in 20 minutes: Your problem, journey stage, and budget. My promise: No-judgment, 
                            no-pitch conversation with honest insights about what's realistic.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand/Collapse Button */}
                  <motion.button
                    className="flex items-center justify-center space-x-2 w-full mt-4 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 text-white/80 hover:text-white"
                    onClick={() => setIsContentExpanded(!isContentExpanded)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-sm font-medium">
                      {isContentExpanded ? 'Show Less' : 'Learn More'}
                    </span>
                    <AnimatePresence mode="wait">
                      {isContentExpanded ? (
                        <motion.div
                          key="up"
                          initial={{ rotate: -90 }}
                          animate={{ rotate: 0 }}
                          exit={{ rotate: 90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronUp className="w-4 h-4" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="down"
                          initial={{ rotate: 90 }}
                          animate={{ rotate: 0 }}
                          exit={{ rotate: -90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
});

BookingSection.displayName = 'BookingSection';
