/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        'zoomIn': {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-slow-mt': {  // Novo efeito 'bounce-slow-mt'
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }, // Altura de salto menor aqui
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite',
        'zoomIn': 'zoomIn 1s',
        'bounce-slow-mt': 'bounce-slow-mt 3s infinite',
      },
      colors: {
        'slate-custom': '#151929',
        'slate-custom-fr': '#1B204A',
        'slate-custom-fu': '#14151a',
        'slate-blue-fu': '#00E7F9'
      },
    },
  },
}