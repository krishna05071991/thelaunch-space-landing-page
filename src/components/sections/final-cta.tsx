/*
 * Final CTA Section Component - Last call-to-action with placeholder content
 * Ready for custom content to be added
 */
import React, { forwardRef } from 'react';
import { CTASection } from "@/components/ui/cta-with-rectangle";

export const FinalCTASection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className="relative z-10" ref={ref}>
      <CTASection
        badge={{
          text: "Placeholder Badge"
        }}
        title="Placeholder Title"
        description="Placeholder description text will be replaced with your custom content."
        action={{
          text: "Placeholder Action",
          href: "#",
          variant: "default"
        }}
        withGlow={true}
        className="min-h-screen flex items-center"
      />
    </section>
  );
});

FinalCTASection.displayName = 'FinalCTASection';