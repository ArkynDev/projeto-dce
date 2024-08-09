/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '768px',
      // => @media (min-width: 640px) { ... }
      'md': '769px',
      // => @media (min-width: 769px) { ... }
      'lg': '993px',
      // => @media (min-width: 993px) { ... }
    },
  },
  plugins: [],
}