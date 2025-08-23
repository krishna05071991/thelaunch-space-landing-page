/*
 * AI Building Mastery Section Component - Educational offering with coaching options
 * Features teaching credentials, learning outcomes, and two-tier pricing structure
 */
import React, { forwardRef } from 'react';
import { motion } from "motion/react";
import { Check, Users, User, BookOpen, Zap } from "lucide-react";
import { SparklesButton } from "@/components/ui/sparkles-button";

const teachingCredentials = [
  "Student landed $500 client after just 5 days of AI-building coaching",
  "Currently mentoring 5 Grade 11 students building projects for Ivy League profiles",
  "10+ years teaching experience – from classrooms to boardrooms",
  "Designed Bolt Education Curriculum for project-based AI learning"
];

const learningOutcomes = [
  "Prompt engineering as your new programming language",
  "Turn ideas into working products—no coding experience needed",
  "Master modern stacks: React, PostgreSQL, AI integrations",
  "Embrace the \"ship-first\" mentality: build, test, launch"
];

export const AIMasterySection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className="relative z-10 py-12 lg:py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Headline */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Want to Build It{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Yourself?
              </span>{" "}
              We'll Teach You
            </h2>
            <p className="text-lg lg:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Some founders want to learn the craft, not just get the result. Krishna's educator background makes complex AI-building approaches simple and actionable.
            </p>
          </motion.div>

          {/* What You'll Learn */}
          <motion.div
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 text-center">
                AI-First Building Mastery
              </h3>
              <p className="text-base lg:text-lg text-blue-300 mb-6 text-center font-medium">
                —by building YOUR app with expert guiding you at every step:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {learningOutcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Zap className="w-3 h-3 text-blue-400" />
                    </div>
                    <p className="text-sm lg:text-base text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {outcome}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            className="text-center mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
              Ready to Launch Your Own{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI-Powered Product?
              </span>
            </h3>
            <p className="text-lg lg:text-xl text-white/80 mb-8">Choose Your Track:</p>
          </motion.div>

          {/* Coaching Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            
            {/* 1:1 Coaching */}
            <motion.div
              className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-purple-500/20 border border-purple-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-purple-400" />
                </div>
                
                <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  Personalized 1:1 Live Coaching
                </h4>
                <p className="text-sm text-purple-300 mb-4">(10 sessions)</p>
                
                <div className="text-3xl lg:text-4xl font-bold text-white mb-4">$999</div>
                
                <p className="text-sm lg:text-base text-white/80 leading-relaxed mb-6">
                  Work directly with Krishna for ten deep-dive sessions—each tailored to your idea and vision. Walk away with your own AI-powered app, ready for real users.
                </p>
                
                <SparklesButton
                  variant="secondary"
                  size="lg"
                  onClick={() => console.log("Book 1:1 Spot clicked")}
                  className="w-full"
                >
                  Book Your 1:1 Spot
                </SparklesButton>
              </div>
            </motion.div>

            {/* 1:3 Group Coaching */}
            <motion.div
              className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-green-500/20 border border-green-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                
                <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  Small Group 1:3 Live Coaching
                </h4>
                <p className="text-sm text-green-300 mb-4">(10 sessions)</p>
                
                <div className="text-3xl lg:text-4xl font-bold text-white mb-4">$499</div>
                
                <p className="text-sm lg:text-base text-white/80 leading-relaxed mb-6">
                  Join a micro-cohort—get individualized guidance plus the energy of learning alongside two other founders. Over ten engaging sessions, you'll each launch your own scalable AI product.
                </p>
                
                <SparklesButton
                  variant="primary"
                  size="lg"
                  onClick={() => console.log("Reserve Group Seat clicked")}
                  className="w-full"
                >
                  Reserve Your Group Seat
                </SparklesButton>
              </div>
            </motion.div>
          </div>

          {/* Guarantee Statement */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg px-6 py-3">
              <BookOpen className="w-5 h-5 text-green-400" />
              <span className="text-lg lg:text-xl text-white font-bold">
                Every Founder Who Signs Up Will Launch with Their Own Product—Guaranteed.
              </span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
});

AIMasterySection.displayName = 'AIMasterySection';