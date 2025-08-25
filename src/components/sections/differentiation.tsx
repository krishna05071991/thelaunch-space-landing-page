/*
 * Differentiation Section Component - Comparison table showing competitive advantages
 * Features responsive design converting table to cards on mobile
 */
import { motion } from "motion/react";
import { Check, X } from "lucide-react";

export function DifferentiationSection() {
  const comparisonData = [
    {
      category: "Timeline to MVP",
      oldWay: "3-6 months",
      newWay: "3-4 weeks",
    },
    {
      category: "Budget Burn", 
      oldWay: "$10k-50k",
      newWay: "$1.5k-4k",
    },
    {
      category: "Process",
      oldWay: "Code-first, status reports",
      newWay: "Strategy-first. Market research & user journeys before coding",
    },
    {
      category: "Communication",
      oldWay: "PM → Lead → Dev chain", 
      newWay: "Direct founder access—daily async updates",
    },
    {
      category: "Post-Launch Support",
      oldWay: "Scope ends at hand-off",
      newWay: "Ongoing growth sprints. Clients upgrade to retainers",
    },
  ];

  return (
    <section className="relative z-10 py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Headline */}
          <motion.div
            className="text-center mb-10 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Why Founders{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Stay With Us
              </span>
              —Not Just Hire Us
            </h2>
          </motion.div>

          {/* Comparison Table Container */}
          <motion.div
            className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 lg:p-8 shadow-2xl mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-base lg:text-lg font-semibold text-white/90"></th>
                      <th className="text-center py-3 px-4 text-base lg:text-lg font-semibold text-red-300/80">
                        the old way
                      </th>
                      <th className="text-center py-3 px-4 text-base lg:text-lg font-bold text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                        thelaunch.space
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <motion.tr
                        key={index}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                      >
                        <td className="py-4 px-4 text-sm lg:text-base font-medium text-white/90">
                          {row.category}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                            <span className="text-sm text-red-300/80">
                              {row.oldWay}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-white font-medium">
                              {row.newWay}
                            </span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-4">
                {comparisonData.map((row, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  >
                    <h4 className="text-base font-semibold text-white mb-3">
                      {row.category}
                    </h4>
                    
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <X className="w-3 h-3 text-red-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-red-300/60 mb-1">the old way</p>
                          <p className="text-xs text-red-300/80">{row.oldWay}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Check className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-blue-300 mb-1">thelaunch.space</p>
                          <p className="text-xs text-white font-medium">{row.newWay}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Unique Position Statement */}
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg lg:text-xl text-white/80 italic leading-relaxed">
              A remote, AI-native product squad that thinks like your co-founder—research → build → grow, all at startup speed.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}