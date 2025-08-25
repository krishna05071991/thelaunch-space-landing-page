"use client";
import React, { useEffect, useRef } from "react";

interface SparklesCoreProps {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
  speed?: number;
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.2,
  particleDensity = 50,
  className = "",
  particleColor = "#ffffff",
  speed = 2,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      life: number;
      maxLife: number;
    }> = [];

    const createParticle = () => {
      const size = Math.random() * (maxSize - minSize) + minSize;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        opacity: Math.random() * 0.5 + 0.5,
        life: 0,
        maxLife: Math.random() * 100 + 50,
      };
    };

    // Initialize particles
    for (let i = 0; i < particleDensity; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life++;

        // Reset particle if it goes off screen or dies
        if (
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height ||
          particle.life > particle.maxLife
        ) {
          particles[index] = createParticle();
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * (1 - particle.life / particle.maxLife);
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [background, minSize, maxSize, particleDensity, particleColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        background,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};
