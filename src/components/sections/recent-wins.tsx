/*
 * Recent Wins Section Component - Showcases live projects with sticky card scroll effect
 * Features glass containers, category tags, and testimonial quotes for social proof
 */
import React, { forwardRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { motion } from "motion/react";

interface ProjectCard {
  category: string;
  title: string;
  description: string;
  testimonial: string;
  rotation: string;
  categoryColor: string;
}

const projectsData: ProjectCard[] = [
  {
    category: '#saas-products',
    title: 'ChatModels Hub',
    description: 'A unified interface to access and query multiple LLMs—now serving results 30-40% cheaper than standard offerings.',
    testimonial: '"Cut our AI spend by a third on day one."',
    rotation: 'rotate-2',
    categoryColor: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
  },
  {
    category: '#saas-products',
    title: 'Smart Invoice Generator',
    description: 'Self-serve invoice creation platform with built-in revenue and expense tracking—perfect for getting paid fast.',
    testimonial: '"First invoice sent within 20 minutes of go-live."',
    rotation: 'rotate-0',
    categoryColor: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
  },
  {
    category: '#internal-tools',
    title: 'AI-Powered Student Guidance Platform',
    description: 'Complete admissions guidance tool, featuring transcript analysis, tailored action plans, and progress tracking.',
    testimonial: '"From concept to live platform in three weeks."',
    rotation: '-rotate-1',
    categoryColor: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
  },
  {
    category: '#internal-tools',
    title: 'Field-Force CRM',
    description: 'Offline-first reporting and automation for 40+ field representatives, designed for frictionless daily activity tracking.',
    testimonial: '"Replaced spreadsheets with smart automation."',
    rotation: 'rotate-1',
    categoryColor: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
  },
  {
    category: '#internal-tools',
    title: 'University Match Engine',
    description: 'Fine-tuned platform that matches students to top-fit universities in seconds, using their profile data.',
    testimonial: '"Gave counsellors data-backed matches in seconds."',
    rotation: 'rotate-0',
    categoryColor: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
  },
  {
    category: '#landingpages',
    title: 'Premium Education Lead Page',
    description: 'Robust lead generation and qualification system: receives 200+ leads ongoing, intelligently books 10+ high-intent calls from fresh leads each cycle.',
    testimonial: '"Receives 200+ leads recurring, and the powerful lead qualification system built in, books 10 high intent calls from the incoming leads."',
    rotation: '-rotate-2',
    categoryColor: 'bg-green-500/20 text-green-300 border-green-400/30',
  },
  {
    category: '#landingpages',
    title: 'DirectShelf Launch Page',
    description: 'Conversion-focused landing page for a D2C marketplace, live in 24 hours—covered critical demo needs under pressure.',
    testimonial: '"Founder demoed to investors the next day."',
    rotation: 'rotate-1',
    categoryColor: 'bg-green-500/20 text-green-300 border-green-400/30',
  },
];

export const RecentWinsSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root>
      <section className="relative z-10 py-20 lg:py-32" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Section with sticky cards */}
            <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-20 lg:min-h-[calc(100vh-5rem)]">
              
              {/* Left: Sticky Cards */}
              <div className="lg:w-1/2">
                <div className="grid gap-8">
                  {projectsData.map((project, i) => (
                    <div key={i} className="lg:sticky lg:top-20">
                      <motion.article
                        className={`
                          relative backdrop-blur-xl bg-white/5 border border-white/10 
                          rounded-2xl p-6 lg:p-8 shadow-2xl w-full max-w-lg mx-auto min-h-[20rem]
                          ${project.rotation}
                        `}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      >
                        {/* Subtle inner glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                        
                        <div className="relative z-10 space-y-4">
                          {/* Category Tag */}
                          <span className={`
                            inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border
                            ${project.categoryColor}
                          `}>
                            {project.category}
                          </span>
                          
                          {/* Title */}
                          <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                            {project.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-sm lg:text-base text-white/80 leading-relaxed">
                            {project.description}
                          </p>
                          
                          {/* Testimonial */}
                          <blockquote className="text-sm lg:text-base text-white/90 italic leading-relaxed font-medium border-l-2 border-white/20 pl-4">
                            {project.testimonial}
                          </blockquote>
                        </div>
                      </motion.article>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right: Fixed Content */}
              <div className="lg:w-1/2 lg:sticky lg:top-20 h-fit">
                <div className="space-y-8 lg:pl-12">
                  {/* Main Headline */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight">
                      Recent Builds That Are{" "}
                      <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Actually Live
                      </span>
                    </h2>
                  </motion.div>

                  {/* Results Focus */}
                  <motion.div
                    className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                        Results Focus
                      </h3>
                      <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                        Every build is{" "}
                        <span className="text-green-300 font-semibold">live and generating value</span>
                        —nothing gathering dust in private repos.
                      </p>
                    </div>
                  </motion.div>

                  {/* Stats Summary */}
                  <motion.div
                    className="grid grid-cols-3 gap-4 pt-8"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-1">7</div>
                      <div className="text-white/70 text-xs lg:text-sm">Live Projects</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-1">3</div>
                      <div className="text-white/70 text-xs lg:text-sm">Categories</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-1">100%</div>
                      <div className="text-white/70 text-xs lg:text-sm">Success Rate</div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
});

RecentWinsSection.displayName = 'RecentWinsSection';