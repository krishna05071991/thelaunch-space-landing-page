/*
 * AI Building Mastery Section Component - Krishna's coaching and educational offerings
 * Features educator background, testimonials, learning outcomes, and pricing options
 */
import React, { forwardRef } from 'react';
import { motion } from "motion/react";
import { Check, BookOpen, Users, User } from "lucide-react";
import { SparklesButton } from "@/components/ui/sparkles-button";

const learningOutcomes = [
  "How to use prompt engineering as the new way to build with AI",
  "Step-by-step transformation—turn your ideas into a real, working product (no coding background needed)",
  "Master modern tools (React, PostgreSQL, AI APIs) with hands-on, supportive coaching",
  "Adopt a \"build, test, and launch\" mindset that gets you moving forward"
];

export const AIMasterySection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className="relative z-10 min-h-screen flex items-center py-8 lg:py-16" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight mb-6 lg:mb-8">
              Want to{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Build It Yourself?
              </span>{" "}
              We'll Teach You
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="space-y-8 lg:space-y-12">
            
            {/* Educator's Approach & Track Record */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Educator's Approach */}
              <motion.div
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl lg:text-2xl font-bold text-white">Educator's Approach</h3>
                  </div>
                  <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                    Krishna spent a decade teaching before he started building products. He's an expert at breaking complex technical ideas into simple, actionable steps you'll actually use. With Krishna, you'll{" "}
                    <span className="text-green-300 font-semibold italic">learn by doing</span>
                    —building your own product, not just reading theory.
                  </p>
                </div>
              </motion.div>

              {/* Proven Track Record */}
              <motion.div
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl lg:text-2xl font-bold text-white">Proven Track Record</h3>
                  </div>
                  <p className="text-base lg:text-lg text-white/80 leading-relaxed mb-4">
                    Krishna has helped founders, students, and professionals launch their very first AI-driven apps—fast and with real results.
                  </p>
                  <p className="text-sm lg:text-base text-white/70 leading-relaxed">
                    He's currently mentoring a group of Grade 11 students working on ambitious capstone projects for Ivy League admissions, including a stock market simulator, an NGO-volunteer matching platform, a pet shelter donation portal, and a student entrepreneur pitching platform.
                  </p>
                </div>
              </motion.div>
              
            </div>

            {/* Success Story */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl max-w-4xl mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/5 via-transparent to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <blockquote className="text-lg lg:text-xl text-white/90 leading-relaxed italic mb-4">
                    "Built my first working MVP in 15 days under Krishna's guidance. The prompting techniques alone were worth it."
                  </blockquote>
                  <cite className="text-sm lg:text-base text-green-300 font-medium">
                    — Product Manager turned Builder
                  </cite>
                </div>
              </div>
            </motion.div>

            {/* What You'll Learn */}
            <motion.div
              className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
                  What You'll Learn
                </h3>
                <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                  {learningOutcomes.map((outcome, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 border border-green-400/30 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <p className="text-sm lg:text-base text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {outcome}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-xl lg:text-2xl font-bold text-white">
                Walk away confident, with something{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  REAL
                </span>{" "}
                you built yourself for the new AI era.
              </p>
            </motion.div>

            {/* Pricing Options */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Ready to Launch Your Own Product?
                </h3>
                <p className="text-base lg:text-lg text-white/70">
                  Choose the coaching experience that fits your journey:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                
                {/* 1:1 Coaching */}
                <motion.div
                  className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl group hover:border-blue-400/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none group-hover:from-blue-500/10 transition-all duration-300"></div>
                  <div className="relative z-10 text-center h-full flex flex-col">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <User className="w-8 h-8 text-blue-400" />
                      <h4 className="text-xl lg:text-2xl font-bold text-white">1:1 Live Coaching</h4>
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-blue-300 mb-4">$999</div>
                    <div className="flex-grow">
                      <p className="text-sm lg:text-base text-white/80 leading-relaxed mb-6">
                        Ten sessions, just you and Krishna, focused 100% on your product. Enjoy tailored mentorship, all your questions answered, and expert feedback every step of the way.
                      </p>
                    </div>
                    <SparklesButton
                      variant="outline"
                      size="lg"
                      onClick={() => console.log("1:1 Coaching clicked")}
                      className="w-full text-base lg:text-lg"
                    >
                      Book Your Personal Spot
                    </SparklesButton>
                  </div>
                </motion.div>

                {/* Small Group Coaching */}
                <motion.div
                  className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl group hover:border-green-400/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/5 via-transparent to-transparent pointer-events-none group-hover:from-green-500/10 transition-all duration-300"></div>
                  <div className="relative z-10 text-center h-full flex flex-col">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Users className="w-8 h-8 text-green-400" />
                      <h4 className="text-xl lg:text-2xl font-bold text-white">Small Group Coaching (1:3)</h4>
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-green-300 mb-4">$499</div>
                    <div className="flex-grow">
                      <p className="text-sm lg:text-base text-white/80 leading-relaxed mb-4">
                        Join a micro-cohort of three founders. Get the same deep support plus the advantage of learning alongside peers—all working towards launching your own app in ten sessions.
                      </p>
                      <p className="text-xs text-orange-300 font-medium mb-6">
                        Only 3 spots per cohort!
                      </p>
                    </div>
                    <SparklesButton
                      variant="outline"
                      size="lg"
                      onClick={() => console.log("Group Coaching clicked")}
                      className="w-full text-base lg:text-lg"
                    >
                      Reserve Your Group Seat
                    </SparklesButton>
                  </div>
                </motion.div>
                
              </div>
            </motion.div>

            {/* Final Promise */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                Every founder who joins will finish with their own{" "}
                <span className="text-green-300 font-semibold">functioning product</span>
                —ready to demo, scale, and take into the world.
              </p>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
});

AIMasterySection.displayName = 'AIMasterySection';