/*
 * Footer Component - Site footer with links and branding
 * Features navigation links, social media, and company information
 */
import { forwardRef } from 'react';
import { motion } from "motion/react";

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer className="relative z-10 py-8 lg:py-12" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Footer Container */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              
              {/* Footer Heading */}
              <motion.h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                thelaunch.space
              </motion.h3>

              {/* Footer Text */}
              <motion.div
                className="space-y-2 lg:space-y-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Desktop: Single line */}
                <p className="hidden lg:block text-sm xl:text-base text-white/70 leading-relaxed">
                  Serving founders who refuse to go slow. Contact at{" "}
                  <a 
                    href="mailto:krishna@thelaunch.space" 
                    className="text-blue-300 hover:text-blue-200 transition-colors duration-300 underline underline-offset-2"
                  >
                    krishna@thelaunch.space
                  </a>
                  {" "}for more details.
                </p>
                
                {/* Mobile/Tablet: Multi-line */}
                <div className="lg:hidden space-y-2">
                  <p className="text-sm text-white/70 leading-relaxed">
                    Serving founders who refuse to go slow.
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Contact at{" "}
                    <a 
                      href="mailto:krishna@thelaunch.space" 
                      className="text-blue-300 hover:text-blue-200 transition-colors duration-300 underline underline-offset-2"
                    >
                      krishna@thelaunch.space
                    </a>
                    {" "}for more details.
                  </p>
                </div>
              </motion.div>
              
            </div>
          </motion.div>
          
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';