import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface CleanAnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  variant?: "fade" | "slide" | "scale" | "bounce";
}

export function CleanAnimatedText({ 
  text, 
  className = "", 
  delay = 0.5,
  variant = "fade"
}: CleanAnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationProps = () => {
    switch (variant) {
      case "slide":
        return {
          initial: { opacity: 0, x: -20 },
          animate: isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
          transition: { duration: 0.6, ease: "easeOut" }
        };
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
          transition: { duration: 0.5, ease: "easeOut" }
        };
      case "bounce":
        return {
          initial: { opacity: 0, y: 20 },
          animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { 
            duration: 0.6, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 10
          }
        };
      default: // fade
        return {
          initial: { opacity: 0 },
          animate: isVisible ? { opacity: 1 } : { opacity: 0 },
          transition: { duration: 0.8, ease: "easeInOut" }
        };
    }
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      {...getAnimationProps()}
    >
      {text}
    </motion.span>
  );
}

interface HighlightedTextProps {
  text: string;
  highlight: string;
  className?: string;
  highlightClassName?: string;
  delay?: number;
}

export function HighlightedText({
  text,
  highlight,
  className = "",
  highlightClassName = "bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent",
  delay = 0.3
}: HighlightedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  const parts = text.split(highlight);

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            <motion.span
              className={highlightClassName}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.4, 
                delay: delay + 0.2 + index * 0.1,
                ease: "easeOut"
              }}
            >
              {highlight}
            </motion.span>
          )}
        </span>
      ))}
    </motion.span>
  );
}
