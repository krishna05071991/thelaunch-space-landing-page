/*
 * Recent Wins Section Component - Sticky card scroll showcase of completed projects
 * Features ReactLenis smooth scrolling with CSS sticky positioning for card stacking effect
 */
import { ReactLenis } from 'lenis/react';
import { motion } from "motion/react";
import { forwardRef } from "react";

interface ProjectCard {
  tag: string;
  tagColor: "success" | "amber" | "blue";
  projectName: string;
  descriptor: string;
  timeToLaunch: string;
  rotation: string;
}

export const RecentWinsSection = forwardRef<HTMLElement>((props, ref) => {
  const projects: ProjectCard[] = [
    {
      tag: "#saas-products",
      tagColor: "blue",
      projectName: "ChatModels Hub",
      descriptor: "one interface to query multiple LLMs at 30-40% lower cost",
      timeToLaunch: "4 weeks",
      rotation: "rotate-2"
    },
    {
      tag: "#saas-products", 
      tagColor: "blue",
      projectName: "Smart Invoice Generator",
      descriptor: "self-serve invoicing + revenue & expense tracking",
      timeToLaunch: "3 weeks",
      rotation: "-rotate-1"
    },
    {
      tag: "#internaltools",
      tagColor: "amber",
      projectName: "AI-Powered Student Guidance Platform",
      descriptor: "admissions roadmap with transcript analysis",
      timeToLaunch: "3 weeks",
      rotation: "rotate-3"
    },
    {
      tag: "#internaltools",
      tagColor: "amber",
      projectName: "Field-Force CRM", 
      descriptor: "offline-first tracking for 40+ field reps",
      timeToLaunch: "4 weeks",
      rotation: "rotate-0"
    },
    {
      tag: "#internaltools",
      tagColor: "amber",
      projectName: "University-Match Engine",
      descriptor: "AI predicts best-fit colleges in seconds",
      timeToLaunch: "3 weeks",
      rotation: "-rotate-2"
    },
    {
      tag: "#landingpages",
      tagColor: "success",
      projectName: "Premium Education Lead Page",
      descriptor: "dynamic scoring form & nurture flow",
      timeToLaunch: "2 days",
      rotation: "rotate-1"
    },
    {
      tag: "#landingpages",
      tagColor: "success", 
      projectName: "DirectShelf Launch Page",
      descriptor: "conversion-optimised D2C aggregator showcase",
      timeToLaunch: "1 day",
      rotation: "-rotate-3"
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

  return (
    <ReactLenis root>
      <section className="relative z-10" ref={ref}>
        {/* Section with sticky card scroll */}
        <div className="bg-transparent">
          <div className="flex justify-between items-start px-4 sm:px-8 lg:px-16 py-20">
            {/* Left: Scrolling Cards */}
            <div className="grid gap-2 w-full max-w-2xl">
              {projects.map((project, i) => (
                <figure key={i} className="sticky top-0 h-screen grid place-content-center">
                  <motion.article
                    className={`
                      backdrop-blur-xl bg-white/8 border border-white/15 rounded-xl p-6 lg:p-8 shadow-2xl
                      h-80 w-full max-w-[32rem] ${project.rotation} 
                      grid place-content-center gap-4 relative overflow-hidden
                      hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] hover:-translate-y-2
                      transition-all duration-300
                    `}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)",
                      borderImage: "linear-gradient(135deg, #6366F1, #8B5CF6) 1"
                    }}
                  >
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none"></div>
                    
                    <div className="relative z-10 text-center space-y-4">
                      {/* Tag */}
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getTagColorClasses(project.tagColor)}`}>
                        {project.tag}
                      </div>
                      
                      {/* Project Name */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                        {project.projectName}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-lg text-white/80 leading-relaxed max-w-md">
                        {project.descriptor}
                      </p>
                      
                      {/* Time Badge */}
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2 inline-block">
                        <span className="text-green-400 font-medium">
                          {project.timeToLaunch}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </figure>
              ))}
            </div>

            {/* Right: Sticky Headline */}
            <div className="sticky top-0 h-screen grid place-content-center pl-8 lg:pl-16">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[120%] mb-6">
                  Recent{" "}
                  <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Wins
                  </span>
                </h2>
                <p className="text-lg lg:text-xl text-white/70 max-w-sm leading-relaxed">
                  Quick proof that we ship real, revenue-generating products across landing pages, internal tools and SaaS
                </p>
              </motion.div>
            </div>
          </div>

          {/* Results Footer */}
          <motion.div
            className="text-center py-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg lg:text-xl text-white/60 font-medium italic max-w-3xl mx-auto">
              Every build is live & generating value—nothing gathers dust in private repos.
            </p>
          </motion.div>
        </div>
      </section>
    </ReactLenis>
  );
});

RecentWinsSection.displayName = 'RecentWinsSection';