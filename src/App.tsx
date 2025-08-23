/*
 * Main App Component - thelaunch.space continuous scroll landing page
 * Features seamless BeamsBackground with modular section components
 */
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

function App() {
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
    </div>
  );
}

export default App;