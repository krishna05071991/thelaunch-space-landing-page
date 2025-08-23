/*
 * Header Component - Navigation and branding
 * Features responsive navigation, mobile menu, and call-to-action buttons
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Rocket } from "lucide-react";
import { SparklesButton } from "@/components/ui/sparkles-button";

interface NavigationItem {
  name: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { name: "Solution", href: "#solution" },
  { name: "Recent Wins", href: "#wins" },
  { name: "Pricing", href: "#pricing" },
  { name: "AI Mastery", href: "#mastery" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'pt-2 pb-2' : 'pt-4 pb-4'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Glass Container */}
            <div className={`relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl transition-all duration-300 ${
              isScrolled ? 'bg-white/15 border-white/30' : ''
            }`}>
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 pointer-events-none"></div>
              
              <div className="relative z-10 flex items-center justify-between px-4 lg:px-6 py-3">
                
                {/* Logo Section */}
                <div className="flex items-center">
                  {/* Desktop/Laptop Logo */}
                  <div className="hidden lg:flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white">thelaunch.space</span>
                  </div>
                  
                  {/* Tablet/Mobile Logo (Icon only) */}
                  <div className="lg:hidden">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white/80 hover:text-white font-medium transition-colors duration-300 hover:scale-105 transform"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                {/* Desktop/Tablet CTA */}
                <div className="hidden md:flex">
                  <SparklesButton
                    variant="secondary"
                    size="sm"
                    onClick={() => console.log("Header CTA clicked")}
                    className="text-sm px-6"
                  >
                    Start Moving
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </SparklesButton>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-300 bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={closeMobileMenu}
            />
            
            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col bg-gray-900/95 backdrop-blur-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">thelaunch.space</span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-white/80 hover:text-white transition-colors duration-300"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-6">
                  {navigationItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="text-2xl font-medium text-white/80 hover:text-white transition-colors duration-300 block py-2"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-white/10">
                <SparklesButton
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    console.log("Mobile menu CTA clicked");
                    closeMobileMenu();
                  }}
                  className="w-full text-lg"
                >
                  Start Moving
                  <ArrowRight className="w-5 h-5 ml-2" />
                </SparklesButton>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}