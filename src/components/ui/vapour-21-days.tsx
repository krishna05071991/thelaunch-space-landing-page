import { useRef, useEffect, useState, useMemo } from "react";
import VaporizeTextCycle, { Tag } from "./vapour-text-effect";

interface Vapour21DaysProps {
  className?: string;
}

export function Vapour21Days({ className = "" }: Vapour21DaysProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showStaticText, setShowStaticText] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create intersection observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Start the vapour effect when component comes into view
          setTimeout(() => {
            setHasAnimated(true);
          }, 500); // Small delay for dramatic effect
        }
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Show static text after vapour effect completes
  useEffect(() => {
    if (hasAnimated) {
      const timer = setTimeout(() => {
        setShowStaticText(true);
      }, 3000); // Wait for vapour effect to complete

      return () => clearTimeout(timer);
    }
  }, [hasAnimated]);

  // Calculate font size to match parent h1 element
  const fontSize = useMemo(() => {
    if (typeof window === 'undefined') return "36px";
    
    const width = window.innerWidth;
    // Match the hero section's responsive font sizes
    if (width < 640) return "36px"; // text-4xl
    if (width < 768) return "48px"; // text-5xl  
    if (width < 1024) return "60px"; // text-6xl
    if (width < 1280) return "72px"; // text-7xl
    return "96px"; // text-8xl
  }, []);

  // Remove custom line-height to inherit from parent

  return (
    <div 
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{ 
        minWidth: '200px', 
        minHeight: '80px',
        fontSize: fontSize,
        fontWeight: 700,
        color: '#ffffff',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Vapour effect component - only show when animating */}
      {hasAnimated && !showStaticText && (
        <div className="absolute -inset-12 overflow-visible sm:transform-none transform -translate-y-1">
          <VaporizeTextCycle
            texts={["in 21 days"]}
            font={{
              fontFamily: "Inter, sans-serif",
              fontSize: fontSize,
              fontWeight: 700
            }}
            color="rgb(255, 255, 255)"
            spread={5}
            density={6}
            animation={{
              vaporizeDuration: 2.5,
              fadeInDuration: 1,
              waitDuration: 0
            }}
            direction="left-to-right"
            alignment="center"
            tag={Tag.SPAN}
          />
        </div>
      )}
      
      {/* Static text that appears after vapour effect */}
      <span 
        className={`transition-opacity duration-500 ${
          showStaticText ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          fontSize: fontSize,
          fontWeight: 700,
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          display: 'inline',
          whiteSpace: 'nowrap',
        }}
      >
        in 21 days
      </span>
      
      {/* Hidden text for accessibility */}
      <span className="sr-only">in 21 days</span>
    </div>
  );
}
