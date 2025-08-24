import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: [
      'react',
      'react-dom',
      'motion/react',
      'clsx',
      'tailwind-merge'
    ]
  },
  build: {
    target: 'es2020', // Modern target for better performance
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React
          'react-core': ['react', 'react-dom'],
          // Animation libraries - separate chunk
          'animations': ['motion/react', '@tsparticles/react', '@tsparticles/slim'],
          // UI components - lazy load
          'ui-components': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-accordion',
            '@radix-ui/react-tabs',
            '@radix-ui/react-select',
            '@radix-ui/react-popover',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-label',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-switch',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-toast',
            '@radix-ui/react-slot',
            '@radix-ui/react-icons'
          ],
          // Utilities
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          // Icons and forms
          'icons-forms': ['lucide-react', 'react-icons', 'react-hook-form', '@hookform/resolvers'],
          // Heavy libraries - defer loading
          'heavy': ['embla-carousel-react', 'recharts', 'react-resizable-panels', 'vaul', 'cmdk', 'date-fns', 'input-otp', 'react-day-picker', 'sonner', 'next-themes', 'zod']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    }
  },
  css: {
    devSourcemap: false
  }
});
