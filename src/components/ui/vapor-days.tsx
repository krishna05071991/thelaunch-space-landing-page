/*
 * Vapor Days Component - Simple vapor effect for "21 days" text only
 * Creates particles that materialize into the text when in view
 */
import { useRef, useEffect, useState, useCallback } from 'react';

interface VaporDaysProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  opacity: number;
  size: number;
  speed: number;
}

export function VaporDays({ className = "" }: VaporDaysProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  // Create particles when component mounts
  const createParticles = useCallback(() => {
    const particles: Particle[] = [];
    const particleCount = 50; // Reduced for better performance
    
    // Create particles scattered around the text area
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * 200 - 100, // Start scattered
        y: Math.random() * 100 - 50,
        targetX: (Math.random() - 0.5) * 10, // Target positions form text
        targetY: (Math.random() - 0.5) * 10,
        opacity: Math.random() * 0.8 + 0.2,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.02 + 0.01,
      });
    }
    
    particlesRef.current = particles;
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let allParticlesReached = true;

    particlesRef.current.forEach((particle, index) => {
      // Move particle towards target
      const dx = particle.targetX - particle.x;
      const dy = particle.targetY - particle.y;
      
      particle.x += dx * particle.speed;
      particle.y += dy * particle.speed;

      // Check if particle reached target
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        allParticlesReached = false;
      }

      // Draw particle
      ctx.beginPath();
      ctx.arc(
        canvas.width / 2 + particle.x, 
        canvas.height / 2 + particle.y, 
        particle.size, 
        0, 
        Math.PI * 2
      );
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      ctx.fill();
    });

    // Continue animation until all particles reach target
    if (!allParticlesReached && isVisible) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setAnimationComplete(true);
    }
  }, [isVisible]);

  // Intersection observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationComplete) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [animationComplete]);

  // Start animation when visible
  useEffect(() => {
    if (isVisible && !animationComplete) {
      createParticles();
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, animationComplete, animate, createParticles]);

  // Resize canvas when container size changes
  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  return (
    <span 
      ref={containerRef}
      className={`relative inline-block ${className}`}
    >
      {/* Canvas for particles */}
      {!animationComplete && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-10"
          style={{ 
            width: '100%', 
            height: '100%',
          }}
        />
      )}
      
      {/* Actual text - initially hidden, then fades in */}
      <span 
        className={`transition-opacity duration-1000 ${
          animationComplete ? 'opacity-100' : 'opacity-0'
        }`}
      >
        21 days
      </span>
    </span>
  );
}