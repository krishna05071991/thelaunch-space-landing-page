/*
 * Dark Gradient Pricing Component - Pricing cards with glass morphism theme
 * Adapted to match thelaunch.space landing page design system
 */
import { motion } from "motion/react"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BenefitProps {
  text: string
  checked: boolean
}

const Benefit = ({ text, checked }: BenefitProps) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-4 place-content-center rounded-full bg-green-500/20 border border-green-400/30 text-sm">
          <Check className="size-3 text-green-400" />
        </span>
      ) : (
        <span className="grid size-4 place-content-center rounded-full bg-red-500/20 border border-red-400/30 text-sm">
          <X className="size-3 text-red-400" />
        </span>
      )}
      <span className="text-sm text-white/70">{text}</span>
    </div>
  )
}

interface PricingCardProps {
  tier: string
  price: string
  bestFor: string
  CTA: string
  benefits: Array<{ text: string; checked: boolean }>
  className?: string
  isPopular?: boolean
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
  isPopular = false,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
      className="relative h-full flex"
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <Card
        className={cn(
          "relative h-full w-full overflow-hidden",
          // Glass morphism effect matching landing page theme
          "relative h-full w-full overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl flex flex-col",
          "p-4 sm:p-6",
          // Popular card highlight
          isPopular && "border-blue-500/30 bg-white/10",
          className,
        )}
      >
        {/* Subtle inner glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="text-center mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              {tier}
            </span>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {price}
            </span>
            <p className="text-sm text-white/70 font-medium">
              {bestFor}
            </span>
          </div>
                <span className="text-sm text-white/80 leading-relaxed">
          <div className="space-y-2 mb-4 flex-grow">
            {benefits.map((benefit, index) => (
              <Benefit key={index} {...benefit} />
            ))}
          </div>
          
          <Button
          <div className="mt-auto">
            <button className="w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base">
              "w-full font-medium transition-all duration-300",
              isPopular 
                ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0" 
                : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30"
            )}
            variant={isPopular ? "default" : "ghost"}
          >
            {CTA}
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}