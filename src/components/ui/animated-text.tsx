import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function AnimatedText({ 
  text, 
  className = "", 
  delay = 0.5, 
  duration = 0.8 
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ 
        opacity: 0, 
        y: 20,
        scale: 0.95
      }}
      animate={isVisible ? {
        opacity: 1,
        y: 0,
        scale: 1
      } : {
        opacity: 0,
        y: 20,
        scale: 0.95
      }}
      transition={{
        duration: duration,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      {text}
    </motion.span>
  );
}

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function TypewriterText({ 
  text, 
  className = "", 
  speed = 50, 
  delay = 0.5 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay * 1000);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, isStarted]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-full bg-current ml-1"
      />
    </span>
  );
}

interface GradientTextProps {
  text: string;
  className?: string;
  gradient?: string;
  delay?: number;
}

export function GradientText({ 
  text, 
  className = "", 
  gradient = "from-blue-400 via-purple-500 to-blue-600",
  delay = 0.3
}: GradientTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.span
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}
      initial={{ 
        opacity: 0, 
        backgroundPosition: "200% 50%"
      }}
      animate={isVisible ? {
        opacity: 1,
        backgroundPosition: "0% 50%"
      } : {
        opacity: 0,
        backgroundPosition: "200% 50%"
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
        backgroundPosition: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }
      }}
      style={{
        backgroundSize: "200% 200%"
      }}
    >
      {text}
    </motion.span>
  );
}
