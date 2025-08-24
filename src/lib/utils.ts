import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Throttled scroll handler for better performance
export function createThrottledScrollHandler(callback: (scrollY: number) => void) {
  let ticking = false;
  let lastScrollY = 0;

  return () => {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
      requestAnimationFrame(() => {
        callback(lastScrollY);
        ticking = false;
      });
      ticking = true;
    }
  };
}

// Cache DOM queries for better performance
let cachedInnerHeight: number | null = null;
let cachedScrollY: number | null = null;

export function getCachedInnerHeight(): number {
  if (cachedInnerHeight === null) {
    cachedInnerHeight = window.innerHeight;
  }
  return cachedInnerHeight;
}

export function getCachedScrollY(): number {
  if (cachedScrollY === null) {
    cachedScrollY = window.scrollY;
  }
  return cachedScrollY;
}

// Update cache on resize
if (typeof window !== 'undefined') {
  window.addEventListener('resize', () => {
    cachedInnerHeight = null;
  });
}

export function scrollToBooking() {
  const bookingSection = document.querySelector('[data-section="booking"]');
  if (bookingSection) {
    bookingSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}
