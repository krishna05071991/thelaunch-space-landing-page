/*
 * Sticky Header Component - Navigation with logo and CTA
 * Features responsive logo display and subtle 3D effects
 */
import { SparklesButton } from "@/components/ui/sparkles-button";
import { Rocket } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Rocket className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
            </div>
            
            {/* Brand Text - Hidden on mobile, visible on tablet+ */}
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white tracking-tight">
                thelaunch
                <span className="text-blue-400">.space</span>
              </h1>
            </div>
          </div>

          {/* CTA Button */}
          <SparklesButton
            variant="primary"
            size="sm"
            onClick={() => console.log("Header CTA clicked")}
            className="text-sm lg:text-base"
          >
            Get Started
          </SparklesButton>
        </div>
      </div>
    </header>
  );
}