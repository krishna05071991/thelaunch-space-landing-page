/*
 * Main App Component - thelaunch.space continuous scroll landing page
 * Features seamless BeamsBackground with modular section components
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSolutionSection } from "@/components/sections/problem-solution";
import { DifferentiationSection } from "@/components/sections/differentiation";
import { RecentWinsSection } from "@/components/sections/recent-wins";
import { PricingSection } from "@/components/sections/pricing";
import { ProcessTimelineSection } from "@/components/sections/process-timeline";
import { CredibilitySection } from "@/components/sections/credibility";
import { AIMasterySection } from "@/components/sections/ai-mastery";
import { FinalCTASection } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { SparklesButton } from "@/components/ui/sparkles-button";
import { ArrowRight } from "lucide-react";

function App() {
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show mobile CTA after hero section (approximately 100vh)
      setShowMobileCTA(scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Single BeamsBackground for entire page */}
      <BeamsBackground 
        intensity="strong" 
        className="fixed inset-0 w-screen h-screen"
      />
      
      {/* Sticky Header */}
      <Header />
      
      {/* Page Content - All sections share the same background */}
      <main className="relative z-10">
        <HeroSection />
        
        <ProblemSolutionSection />
        
        <DifferentiationSection />
        
        <RecentWinsSection />
        
        <PricingSection />
        
        <ProcessTimelineSection />
        
        <CredibilitySection />
        
        <AIMasterySection />
        
        <FinalCTASection />
      </main>
      
      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA */}
      <AnimatePresence>
        {showMobileCTA && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Safe area padding for devices with home indicators */}
            <div className="pb-safe">
              {/* Glass container with backdrop blur */}
              <div className="relative backdrop-blur-xl bg-white/10 border-t border-white/20 shadow-2xl">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/5 to-transparent pointer-events-none"></div>
                
                <div className="relative z-10 p-4">
                  <SparklesButton
                    variant="primary"
                    size="lg"
                    onClick={() => console.log("Mobile sticky CTA clicked")}
                    className="w-full text-lg py-4"
                  >
                    Get Your Launch Roadmap
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </SparklesButton>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;