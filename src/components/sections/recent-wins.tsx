/*
 * Recent Wins Section Component - Deck-scroll showcase of completed projects
 * Features GSAP ScrollTrigger for desktop interactions and responsive mobile layout
 */
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectCard {
  tag: string;
  tagColor: "success" | "amber" | "blue";
  projectName: string;
  descriptor: string;
  timeToLaunch: string;
  impactQuote: string;
}

export function RecentWinsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects: ProjectCard[] = [
    {
      tag: "#saas-products",
      tagColor: "blue",
      projectName: "ChatModels Hub",
      descriptor: "one interface to query multiple LLMs at 30-40% lower cost",
      timeToLaunch: "4 weeks",
      impactQuote: "Cut our AI spend by a third on day one."
    },
    {
      tag: "#saas-products", 
      tagColor: "blue",
      projectName: "Smart Invoice Generator",
      descriptor: "self-serve invoicing + revenue & expense tracking",
      timeToLaunch: "3 weeks",
      impactQuote: "First invoice sent within 20 minutes of go-live."
    },
    {
      tag: "#internaltools",
      tagColor: "amber",
      projectName: "AI-Powered Student Guidance Platform",
      descriptor: "admissions roadmap with transcript analysis",
      timeToLaunch: "3 weeks",
      impactQuote: "From concept to live platform in three weeks."
    },
    {
      tag: "#internaltools",
      tagColor: "amber",
      projectName: "Field-Force CRM", 
      descriptor: "offline-first tracking for 40+ field reps",
      timeToLaunch: "4 weeks",
      impactQuote: "Replaced spreadsheets with smart automation."
    },
    {
      tag: "#internaltools",
      tagColor: "amber",
      projectName: "University-Match Engine",
      descriptor: "AI predicts best-fit colleges in seconds",
      timeToLaunch: "3 weeks",
      impactQuote: "Gave counsellors data-backed matches instantly."
    },
    {
      tag: "#landingpages",
      tagColor: "success",
      projectName: "Premium Education Lead Page",
      descriptor: "dynamic scoring form & nurture flow",
      timeToLaunch: "2 days",
      impactQuote: "Receives 200+ leads recurring and books 10 high-intent calls automatically."
    },
    {
      tag: "#landingpages",
      tagColor: "success", 
      projectName: "DirectShelf Launch Page",
      descriptor: "conversion-optimised D2C aggregator showcase",
      timeToLaunch: "1 day",
      impactQuote: "Founder demoed to investors the next day."
    }
  ];

  const getTagColorClasses = (color: "success" | "amber" | "blue") => {
    switch (color) {
      case "success":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "amber":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "blue":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  useEffect(() => {
    // Only run GSAP animations on desktop
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop || !containerRef.current) return;

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    // Setup ScrollTrigger for each card
    cards.forEach((card, index) => {
      if (!card) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center", 
        scrub: 1,
        pin: index < cards.length - 1, // Don't pin the last card
        pinSpacing: false,
        onUpdate: (self) => {
          const progress = self.progress;
          const scale = 1 - progress * 0.08; // Scale from 1 to 0.92
          const opacity = 1 - progress * 0.6; // Fade to 40%
          
          gsap.set(card, {
            scale: scale,
            opacity: opacity,
            zIndex: cards.length - index - Math.floor(progress * 10)
          });
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="relative z-10 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Headline */}
          <motion.div
            className="text-center mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Recent{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Wins
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto">
              Quick proof that we ship real, revenue-generating products across landing pages, internal tools and SaaS
            </p>
          </motion.div>

          {/* Deck-Scroll Container */}
          <div 
            ref={containerRef}
            className="max-w-[1200px] mx-auto space-y-8 md:space-y-16"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="min-h-[80vh] md:h-[80vh] relative"
              >
                {/* Glass Card */}
                <motion.div
                  className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 shadow-2xl hover:shadow-[0_0_16px_rgba(99,102,241,0.3)] transition-all duration-300 hover:-translate-y-2 h-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                    borderImage: "linear-gradient(135deg, #6366F1, #8B5CF6) 1"
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div className="relative z-10 h-full">
                    {/* Mobile: Stacked Layout */}
                    <div className="md:hidden space-y-6">
                      {/* Mobile Mockup */}
                      <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-white/10 flex items-center justify-center">
                        <div className="text-white/40 text-sm font-mono">
                          {project.projectName} Interface
                        </div>
                      </div>
                      
                      {/* Mobile Content */}
                      <div className="space-y-4">
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getTagColorClasses(project.tagColor)}`}>
                          {project.tag}
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {project.projectName}
                          </h3>
                          <p className="text-lg text-white/80 mb-4">
                            {project.descriptor}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1">
                            <span className="text-green-400 text-sm font-medium">
                              {project.timeToLaunch}
                            </span>
                          </div>
                        </div>
                        
                        <blockquote className="text-lg text-white/90 italic border-l-4 border-blue-500/30 pl-4">
                          "{project.impactQuote}"
                        </blockquote>
                      </div>
                    </div>

                    {/* Desktop: Side-by-Side Layout */}
                    <div className="hidden md:flex h-full items-center space-x-8">
                      {/* Left: Mockup (45%) */}
                      <div className="w-[45%] h-full flex items-center">
                        <div className="w-full max-h-[420px] aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-white/10 shadow-inner flex items-center justify-center">
                          <div className="text-white/40 text-lg font-mono">
                            {project.projectName} Interface
                          </div>
                        </div>
                      </div>
                      
                      {/* Right: Content (55%) */}
                      <div className="w-[55%] space-y-6">
                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${getTagColorClasses(project.tagColor)}`}>
                          {project.tag}
                        </div>
                        
                        <div>
                          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            {project.projectName}
                          </h3>
                          <p className="text-xl text-white/80 mb-6">
                            {project.descriptor}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2">
                            <span className="text-green-400 font-medium">
                              {project.timeToLaunch}
                            </span>
                          </div>
                        </div>
                        
                        <blockquote className="text-xl text-white/90 italic border-l-4 border-blue-500/30 pl-6">
                          "{project.impactQuote}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Results Footer */}
          <motion.div
            className="text-center mt-16 lg:mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg lg:text-xl text-white/60 font-medium italic max-w-3xl mx-auto">
              Every build is live & generating value—nothing gathers dust in private repos.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}