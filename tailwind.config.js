/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Quicksand, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'serif': 'Playfair Display, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      'mono': 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    },
    extend: {
      animation: {
        moveFromCenterToNavBar: 'moveFromCenterToNavBar 1s',
      },
      keyframes: {
        moveFromCenterToNavBar: {
          '0%, 50%': {
              translate: '25dvw 25dvw',
              scale: '200%',
          },
      
          '100%': {
              translate: '0px 0px',
              scale: '100%'
          }
        }
      }
    },
  },
  plugins: [],
}