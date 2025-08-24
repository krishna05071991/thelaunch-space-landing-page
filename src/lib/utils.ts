import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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
