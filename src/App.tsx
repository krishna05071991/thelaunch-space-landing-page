/*
 * Main App Component - thelaunch.space continuous scroll landing page
 * Features seamless BeamsBackground with modular section components
 */
import { BeamsBackground } from "@/components/ui/beams-background";
import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSolutionSection } from "@/components/sections/problem-solution";
import { DifferentiationSection } from "@/components/sections/differentiation";

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
        
        {/* Future sections will go here */}
      </main>
    </div>
  );
}

export default App;