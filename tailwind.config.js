/** @type {import('tailwindcss').Config} */
export default {
  prefix :'tw-',
  content: [
   "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./public/index.html",
  ],
  
  theme: {
    extend: {
      width: {
        '1/7': '90vh',
        
      },
      fontFamily: {
        
        chakra: ["Chakra Petch", "sans-serif"],
      },
      colors: {
        'custom-red': '#ea001e',
        'modal-bg' :'#1f2e4e'
      },
    },
  },
  plugins: [],
}