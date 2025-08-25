/*
 * Main App Component - thelaunch.space continuous scroll landing page
 * Features seamless BeamsBackground with modular section components
 */
import { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/sections/hero";
import { SparklesButton } from "@/components/ui/sparkles-button";
import { ArrowRight } from "lucide-react";
import { scrollToBooking, createThrottledScrollHandler, getCachedInnerHeight } from "@/lib/utils";

// Lazy load non-critical sections
const ProblemSolutionSection = lazy(() => import("@/components/sections/problem-solution").then(m => ({ default: m.ProblemSolutionSection })));
const DifferentiationSection = lazy(() => import("@/components/sections/differentiation").then(m => ({ default: m.DifferentiationSection })));
const RecentWinsSection = lazy(() => import("@/components/sections/recent-wins").then(m => ({ default: m.RecentWinsSection })));
const PricingSection = lazy(() => import("@/components/sections/pricing").then(m => ({ default: m.PricingSection })));
const ProcessTimelineSection = lazy(() => import("@/components/sections/process-timeline").then(m => ({ default: m.ProcessTimelineSection })));
const CredibilitySection = lazy(() => import("@/components/sections/credibility").then(m => ({ default: m.CredibilitySection })));
const AIMasterySection = lazy(() => import("@/components/sections/ai-mastery").then(m => ({ default: m.AIMasterySection })));
const FinalCTASection = lazy(() => import("@/components/sections/final-cta").then(m => ({ default: m.FinalCTASection })));
const BookingSection = lazy(() => import("@/components/sections/booking").then(m => ({ default: m.BookingSection })));
const Footer = lazy(() => import("@/components/sections/footer").then(m => ({ default: m.Footer })));

// Section loading fallback - more subtle and less jarring
const SectionFallback = () => (
  <div className="min-h-[200px] flex items-center justify-center opacity-50">
    <div className="animate-pulse bg-white/5 rounded-lg h-4 w-32"></div>
  </div>
);

function App() {
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = (scrollY: number) => {
      // Show mobile CTA after a smaller threshold (about 40% of viewport height) - consistent with header
      const heroThreshold = getCachedInnerHeight() * 0.4;
      setShowMobileCTA(scrollY > heroThreshold);
    };

    const throttledScrollHandler = createThrottledScrollHandler(handleScroll);
    
    // Use passive event listener for better performance
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Initial call to set correct state
    handleScroll(window.scrollY);
    
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-950">
      {/* Single BeamsBackground for entire page */}
      <BeamsBackground 
        intensity="strong" 
        className="fixed inset-0 w-screen h-screen z-0"
      />
      
      {/* Sticky Header - positioned outside the main content flow */}
      <Header />
      
      {/* Page Content - All sections share the same background */}
      <main className="relative z-10 bg-transparent" style={{ paddingTop: '0' }}>
        <HeroSection />
        
        <Suspense fallback={<SectionFallback />}>
          <ProblemSolutionSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <DifferentiationSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <RecentWinsSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <PricingSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <ProcessTimelineSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <CredibilitySection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <AIMasterySection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <FinalCTASection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <BookingSection />
        </Suspense>
      </main>
      
      {/* Footer */}
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>

      {/* Mobile Sticky CTA */}
      <AnimatePresence>
        {showMobileCTA && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[90] md:hidden transition-opacity duration-300"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            data-mobile-cta
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
                    onClick={scrollToBooking}
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