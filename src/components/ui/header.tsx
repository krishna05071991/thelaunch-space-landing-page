/*
 * Responsive Header Component - Standard navigation patterns for all screen sizes
 * Features: Mobile hamburger menu, glass morphism styling, smooth transitions
 */
import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    
    const handleClickOutside = () => {
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Track scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Recent Wins', href: '#recent-wins' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#credibility' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled 
            ? 'backdrop-blur-xl bg-black/20 border-b border-white/10' 
            : 'backdrop-blur-md bg-transparent'
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo - Responsive */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2 lg:space-x-3">
                {/* Icon - Always visible */}
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Rocket className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                
                {/* Brand Text - Hidden on mobile */}
                <span className="hidden sm:block text-lg lg:text-xl font-bold text-white">
                  thelaunch.
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    space
                  </span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="
                    px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium text-white/80
                    hover:text-white hover:bg-white/10 
                    transition-all duration-200 ease-in-out
                    active:scale-95
                  "
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Right Side - CTA + Mobile Menu */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              {/* CTA Button */}
              <button 
                className="
                  px-4 lg:px-6 py-2 lg:py-2.5 
                  bg-gradient-to-r from-blue-500 to-purple-600 
                  text-white text-sm lg:text-base font-semibold rounded-lg
                  hover:from-blue-600 hover:to-purple-700 
                  transition-all duration-200 ease-in-out
                  active:scale-95 shadow-lg hover:shadow-xl
                "
                onClick={() => handleNavClick('#hero')}
              >
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="
                fixed top-16 left-4 right-4 z-50 md:hidden
                backdrop-blur-xl bg-black/40 border border-white/20 rounded-2xl
                shadow-2xl overflow-hidden
              "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Mobile Navigation */}
                <nav className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.href)}
                      className="
                        w-full text-left px-4 py-3 rounded-xl
                        text-base font-medium text-white/90
                        hover:text-white hover:bg-white/10
                        transition-all duration-200 ease-in-out
                        active:scale-95
                      "
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 pt-6 border-t border-white/10"
                >
                  <button
                    onClick={() => handleNavClick('#hero')}
                    className="
                      w-full px-6 py-3 
                      bg-gradient-to-r from-blue-500 to-purple-600 
                      text-white font-semibold rounded-xl
                      hover:from-blue-600 hover:to-purple-700 
                      transition-all duration-200 ease-in-out
                      active:scale-95 shadow-lg
                    "
                  >
                    Get Started
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}