/*
 * Sparkles Component - Animated sparkles effect
 * Features customizable particle effects and responsive design
 */
"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";

// Lazy load tsparticles only when needed
const loadTSParticles = async () => {
  const [{ default: Particles, initParticlesEngine }, { loadSlim }] = await Promise.all([
    import("@tsparticles/react"),
    import("@tsparticles/slim")
  ]);
  return { Particles, initParticlesEngine, loadSlim };
};

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [particlesModule, setParticlesModule] = useState<any>(null);
  
  useEffect(() => {
    // Check for mobile and reduced motion
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const checkReducedMotion = () => setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    
    checkMobile();
    checkReducedMotion();
    
    window.addEventListener('resize', checkMobile);
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', checkReducedMotion);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', checkReducedMotion);
    };
  }, []);

  useEffect(() => {
    // Only load particles if not reduced motion
    if (isReducedMotion) {
      setInit(true);
      return;
    }

    const loadParticles = async () => {
      try {
        const module = await loadTSParticles();
        setParticlesModule(module);
        
        await module.initParticlesEngine(async (engine: any) => {
          await module.loadSlim(engine);
        });
        
        setInit(true);
      } catch (error) {
        console.warn('Failed to load particles:', error);
        setInit(true); // Continue without particles
      }
    };

    loadParticles();
  }, [isReducedMotion]);

  const controls = useAnimation();

  const particlesLoaded = async (container?: any) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const generatedId = useRef(id || "sparkles-core");
  
  // Don't render particles if reduced motion or mobile with low performance
  if (isReducedMotion || (isMobile && !particlesModule)) {
    return (
      <motion.div 
        className={cn("opacity-100", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    );
  }

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && particlesModule && (
        <particlesModule.Particles
          id={generatedId.current}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "transparent",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: isMobile ? 30 : 60, // Reduced FPS on mobile
            interactivity: {
              events: {
                onClick: {
                  enable: !isMobile, // Disable on mobile for performance
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true as any,
              },
              modes: {
                push: {
                  quantity: isMobile ? 2 : 4, // Fewer particles on mobile
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              collisions: {
                absorb: {
                  speed: 2,
                },
                bounce: {
                  horizontal: {
                    value: 1,
                  },
                  vertical: {
                    value: 1,
                  },
                },
                enable: false,
                maxSpeed: 50,
                mode: "bounce",
                overlap: {
                  enable: true,
                  retries: 0,
                },
              },
              color: {
                value: particleColor || "#ffffff",
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: false,
                speed: {
                  min: 0.1,
                  max: isMobile ? 0.5 : 1, // Slower on mobile
                },
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
                value: isMobile ? (particleDensity || 120) * 0.6 : particleDensity || 120, // Fewer particles on mobile
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: speed || (isMobile ? 2 : 4), // Slower on mobile
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || (isMobile ? 2 : 3), // Smaller on mobile
                },
              },
            },
            detectRetina: !isMobile, // Disable on mobile for performance
          }}
        />
      )}
    </motion.div>
  );
};