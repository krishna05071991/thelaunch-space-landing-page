# thelaunch.space Design & Color Palette

## Color Palette

### Primary Colors
- **Primary Blue Gradient**: `from-blue-400 via-purple-500 to-blue-600`
- **Secondary Blue Gradient**: `from-blue-400 to-blue-500`
- **Green Gradient**: `from-green-400 via-blue-500 to-purple-500`
- **Green Accent**: `from-green-400 to-green-500`
- **Purple Accent**: `from-purple-400 to-purple-500`

### Text Colors
- **Primary Text**: `text-white` (100% opacity)
- **Secondary Text**: `text-white/90` (90% opacity)
- **Tertiary Text**: `text-white/80` (80% opacity)
- **Muted Text**: `text-white/70` (70% opacity)
- **Subtle Text**: `text-white/60` (60% opacity)
- **Minimal Text**: `text-white/50` (50% opacity)

### Accent Colors
- **Success Green**: `text-green-300`, `text-green-400`
- **Problem Red**: `from-red-400 via-red-500 to-red-600`
- **Warning Orange**: `text-orange-300`
- **Info Blue**: `text-blue-300`, `text-blue-400`
- **Secondary Purple**: `text-purple-300`, `text-purple-400`

### Background & Glass Effects
- **Primary Background**: Dark theme with BeamsBackground
- **Glass Cards**: `backdrop-blur-xl bg-white/5`
- **Card Borders**: `border-white/10`
- **Subtle Glow**: `bg-gradient-to-br from-white/5 via-transparent to-transparent`
- **Interactive Hover**: `hover:bg-white/5`

### Component-Specific Colors
- **SparklesButton Primary**: Blue gradient with white text
- **SparklesButton Secondary**: Glass effect with gradient text
- **Success Indicators**: Green with checkmarks
- **Problem Indicators**: Red with X marks

## Design Theme

### Core Aesthetic
- **Glass Morphism**: Heavy use of `backdrop-blur-xl` with subtle transparency
- **Dark Theme**: Dark background with light text for modern, tech-forward feel
- **Gradient Text**: Key phrases use gradient backgrounds clipped to text
- **Continuous Scroll**: Single-page layout with seamless section transitions

### Visual Effects
- **BeamsBackground**: Animated beam effects across the entire page
- **Motion Animations**: Framer Motion for smooth transitions and reveals
- **Particle Effects**: Sparkles on interactive elements
- **Card Rotation**: Subtle rotations on project cards (`rotate-1`, `rotate-2`, `-rotate-1`, `-rotate-2`)

### Layout System
- **Container-Based**: `max-w-7xl mx-auto` for consistent content width
- **Grid Responsive**: Mobile-first design with breakpoint-specific layouts
- **Sticky Elements**: Header and mobile CTA with fixed positioning
- **Section Heights**: `min-h-screen` for full viewport sections

## Typography

### Font Hierarchy
- **Hero Headlines**: `text-4xl` to `text-8xl` (responsive)
- **Section Headlines**: `text-3xl` to `text-6xl`
- **Subsection Titles**: `text-xl` to `text-3xl`
- **Body Text**: `text-base` to `text-xl`
- **Supporting Text**: `text-sm` to `text-base`
- **Fine Print**: `text-xs`

### Font Weights
- **Bold Headers**: `font-bold` for main headlines
- **Semibold**: `font-semibold` for emphasis
- **Medium**: `font-medium` for important text
- **Regular**: Default weight for body text

### Text Effects
- **Gradient Text**: `bg-gradient-to-r ... bg-clip-text text-transparent`
- **Tracking**: `tracking-tight` for headlines, `tracking-tighter` for hero
- **Leading**: `leading-tight` for headlines, `leading-relaxed` for body

## Spacing & Layout

### Spacing System
- **Section Padding**: `py-8 lg:py-16` or `py-20 lg:py-32`
- **Container Padding**: `px-4 sm:px-6 lg:px-8`
- **Card Padding**: `p-6 lg:p-8` or `p-8 lg:p-10`
- **Content Gaps**: `gap-6 lg:gap-8` or `gap-8 lg:gap-12`

### Grid Systems
- **Mobile**: Single column (`grid-cols-1`)
- **Tablet**: Two columns (`md:grid-cols-2`)
- **Desktop**: Three columns (`lg:grid-cols-3`) or five columns (`lg:grid-cols-5`)

## Interactive Elements

### Button Styles
- **SparklesButton Primary**: Solid background with sparkle effects
- **SparklesButton Secondary**: Glass morphism with gradient text
- **Hover States**: Scale and glow effects
- **Size Variants**: `lg` for primary CTAs, standard for secondary actions

### Card Interactions
- **Hover Effects**: `hover:border-blue-400/30` for subtle highlights
- **Group Interactions**: Text color changes on card hover
- **Backdrop Effects**: Enhanced blur on interaction

### Animation Patterns
- **Fade In**: `opacity: 0` to `opacity: 1`
- **Slide Up**: `y: 30` to `y: 0`
- **Slide Horizontal**: `x: -50` to `x: 0`
- **Scale In**: `scale: 0.8` to `scale: 1`
- **Staggered Delays**: Progressive delays for list items

## Brand Guidelines

### Brand Personality
- **Fast-Moving**: Emphasize speed and agility
- **Tech-Forward**: Modern, AI-first approach
- **Professional**: Polished and production-ready
- **Approachable**: Founder-friendly and supportive

### Visual Language
- **Gradients**: Used for emphasis and brand elements
- **Glass Effects**: Modern, premium feel
- **Sharp Corners**: `rounded-2xl` for cards, `rounded-full` for avatars
- **Consistent Spacing**: 8px-based spacing system

### Content Tone
- **Direct**: Clear, action-oriented language
- **Confident**: Strong positioning statements
- **Urgent**: Time-sensitive messaging
- **Supportive**: Educational and helpful approach

## Responsive Design

### Breakpoints
- **Mobile**: Default styles (320px+)
- **Small**: `sm:` (640px+)
- **Medium**: `md:` (768px+)
- **Large**: `lg:` (1024px+)
- **Extra Large**: `xl:` (1280px+)

### Mobile Optimizations
- **Sticky Mobile CTA**: Appears after hero scroll
- **Safe Area Padding**: `pb-safe` for home indicator
- **Touch-Friendly**: Adequate button sizes
- **Simplified Layouts**: Stack cards vertically

## Animation Guidelines

### Motion Principles
- **Purposeful**: Animations support content flow
- **Smooth**: Ease-out transitions for natural feel
- **Progressive**: Staggered reveals for content hierarchy
- **Performant**: GPU-accelerated transforms

### Timing
- **Fast Interactions**: 0.3s for hovers and clicks
- **Content Reveals**: 0.6-0.8s for section animations
- **Complex Sequences**: Up to 1s with staggered delays
- **Subtle Effects**: Continuous animations like pulse and sparkles

## Accessibility Considerations

### Color Contrast
- High contrast ratios maintained with white text on dark backgrounds
- Gradient text ensures readability against dark backgrounds
- Interactive elements have clear visual states

### Motion Sensitivity
- Animations are subtle and purposeful
- Critical information doesn't rely solely on animation
- Reduced motion preferences should be respected (consider adding `prefers-reduced-motion`)

### Focus States
- Interactive elements have clear focus indicators
- Keyboard navigation supported through proper semantic HTML
- Screen reader friendly with proper heading hierarchy