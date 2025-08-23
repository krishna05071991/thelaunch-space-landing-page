/*
 * Vapor Days Component - Sophisticated particle coalescence effect for "21 days"
 * Features scattered particles that coalesce into text with right-to-left formation wave
 */
import { useRef, useEffect, useState, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  startX: number;
  startY: number;
  color: string;
  opacity: number;
  targetOpacity: number;
  velocityX: number;
  velocityY: number;
  hasReachedTarget: boolean;
  formationProgress: number;
}

interface VaporDaysProps {
  className?: string;
}

export function VaporDays({ className = "" }: VaporDaysProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);
  const hasAnimatedRef = useRef(false);
  
  // Animation parameters
  const FORMATION_DURATION = 2000; // 2 seconds
  const SCATTER_RADIUS = 120;
  const PARTICLE_DENSITY = 2; // Sample every 2 pixels
  const WAVE_SPEED = 0.8;
  
  // Create intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          setTimeout(() => {
            startAnimation();
            hasAnimatedRef.current = true;
          }, 500); // Small delay for dramatic effect
        }
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Create particles from text sampling
  const createParticles = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const particles: Particle[] = [];
    const text = "21 days";
    const fontSize = Math.min(48, canvas.width / 8); // Responsive font size
    const font = `700 ${fontSize}px Inter, sans-serif`;
    
    // Clear and setup context
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = font;
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Calculate text position
    const textX = canvas.width / 2;
    const textY = canvas.height / 2;
    
    // Render text for sampling
    ctx.fillText(text, textX, textY);
    
    // Get image data for pixel sampling
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // Sample pixels and create particles
    for (let y = 0; y < canvas.height; y += PARTICLE_DENSITY) {
      for (let x = 0; x < canvas.width; x += PARTICLE_DENSITY) {
        const index = (y * canvas.width + x) * 4;
        const alpha = data[index + 3];
        
        if (alpha > 128) { // Only sample visible pixels
          // Calculate scattered starting position
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * SCATTER_RADIUS;
          const startX = x + Math.cos(angle) * distance;
          const startY = y + Math.sin(angle) * distance;
          
          const particle: Particle = {
            x: startX,
            y: startY,
            targetX: x,
            targetY: y,
            startX,
            startY,
            color: `rgb(${data[index]}, ${data[index + 1]}, ${data[index + 2]})`,
            opacity: 0,
            targetOpacity: alpha / 255,
            velocityX: 0,
            velocityY: 0,
            hasReachedTarget: false,
            formationProgress: 0,
          };
          
          particles.push(particle);
        }
      }
    }
    
    // Clear canvas after sampling
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    return particles;
  }, []);

  // Update particles during animation
  const updateParticles = useCallback((particles: Particle[], progress: number, deltaTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return false;
    
    // Calculate right-to-left wave position
    const waveProgress = Math.min(1, progress * WAVE_SPEED);
    const waveX = canvas.width - (waveProgress * canvas.width);
    
    let allFormed = true;
    
    particles.forEach(particle => {
      // Check if this particle is in the formation zone (right-to-left wave)
      const shouldForm = particle.targetX >= waveX;
      
      if (shouldForm && !particle.hasReachedTarget) {
        // Calculate distance to target
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 2) {
          // Particle has reached target
          particle.x = particle.targetX;
          particle.y = particle.targetY;
          particle.hasReachedTarget = true;
          particle.opacity = particle.targetOpacity;
        } else {
          // Move toward target with easing
          const easing = 0.15;
          
          particle.velocityX += dx * easing * deltaTime * 60;
          particle.velocityY += dy * easing * deltaTime * 60;
          
          // Apply damping
          particle.velocityX *= 0.95;
          particle.velocityY *= 0.95;
          
          // Update position
          particle.x += particle.velocityX * deltaTime * 60;
          particle.y += particle.velocityY * deltaTime * 60;
          
          // Fade in opacity as particle moves toward target
          const targetDistance = Math.sqrt(
            (particle.targetX - particle.startX) ** 2 + 
            (particle.targetY - particle.startY) ** 2
          );
          const currentDistance = Math.sqrt(
            (particle.targetX - particle.x) ** 2 + 
            (particle.targetY - particle.y) ** 2
          );
          const moveProgress = 1 - (currentDistance / targetDistance);
          particle.opacity = particle.targetOpacity * Math.max(0, moveProgress);
        }
      } else if (!shouldForm) {
        // Particle is ahead of the wave, keep it scattered and invisible
        particle.opacity = 0;
        allFormed = false;
      }
      
      if (!particle.hasReachedTarget) {
        allFormed = false;
      }
    });
    
    return allFormed;
  }, []);

  // Render particles
  const renderParticles = useCallback((ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    particles.forEach(particle => {
      if (particle.opacity > 0.01) {
        ctx.fillStyle = particle.color.replace('rgb', 'rgba').replace(')', `, ${particle.opacity})`);
        ctx.fillRect(Math.round(particle.x), Math.round(particle.y), 2, 2);
      }
    });
  }, []);

  // Animation loop
  const animate = useCallback((startTime: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    
    let lastTime = startTime;
    
    const animationLoop = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / FORMATION_DURATION);
      
      // Update particles
      const allFormed = updateParticles(particlesRef.current, progress, deltaTime);
      
      // Render particles
      renderParticles(ctx, particlesRef.current);
      
      // Check if animation is complete
      if (allFormed && progress >= 0.8) {
        setIsAnimating(false);
        setTimeout(() => {
          setShowFinalText(true);
        }, 200);
        return;
      }
      
      // Continue animation
      animationFrameRef.current = requestAnimationFrame(animationLoop);
    };
    
    animationFrameRef.current = requestAnimationFrame(animationLoop);
  }, [updateParticles, renderParticles]);

  // Start animation
  const startAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    
    setIsAnimating(true);
    setShowFinalText(false);
    
    // Create particles
    particlesRef.current = createParticles(ctx, canvas);
    
    // Start animation loop
    animate(performance.now());
  }, [createParticles, animate]);

  // Handle hover replay
  const handleHover = useCallback(() => {
    if (!isAnimating && hasAnimatedRef.current) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      startAnimation();
    }
  }, [isAnimating, startAnimation]);

  // Setup canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{ minWidth: '120px', minHeight: '60px' }}
      onMouseEnter={handleHover}
    >
      {/* Canvas for particle animation */}
      <canvas 
        ref={canvasRef}
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          showFinalText ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Final text that appears after animation */}
      <span 
        className={`transition-opacity duration-500 ${
          showFinalText ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          fontSize: 'clamp(32px, 8vw, 128px)',
          fontWeight: 700,
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          lineHeight: 1,
          display: 'block',
          whiteSpace: 'nowrap',
        }}
      >
        21 days
      </span>
      
      {/* Hidden text for accessibility */}
      <span className="sr-only">21 days</span>
    </div>
  );
}