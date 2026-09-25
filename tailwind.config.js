/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#000000',
          surface: '#050508',
          card: '#0A0A0E',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        violet: {
          glow: '#A855F7',
          primary: '#8B5CF6',
          dark: '#6D28D9',
        },
        cyan: {
          glow: '#38BDF8',
          primary: '#06B6D4',
          dark: '#0284C7',
        },
        magenta: {
          glow: '#F43F5E',
          primary: '#EC4899',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        heading: ['Space Grotesk', 'Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'Orbitron', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
      }
    },
  },
  plugins: [],
}
