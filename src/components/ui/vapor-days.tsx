/*
 * Vapor Days Component - Specialized component for "21 days" text with vapor effect
 * Features responsive font sizing and runs animation only once when in view
 */
import VaporizeTextCycle, { Tag } from './vapour-text-effect';

interface VaporDaysProps {
  className?: string;
}

export function VaporDays({ className = "" }: VaporDaysProps) {
  return (
    <div className={`inline-block ${className}`}>
      <VaporizeTextCycle
        texts={["21 days"]}
        font={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(32px, 8vw, 128px)",
          fontWeight: 700,
        }}
        color="rgb(147, 197, 253)"
        spread={3}
        density={6}
        animation={{
          vaporizeDuration: 2.5,
          fadeInDuration: 1.5,
          waitDuration: 0.5,
        }}
        direction="left-to-right"
        alignment="left"
        tag={Tag.SPAN}
        runOnce={true}
      />
    </div>
  );
}