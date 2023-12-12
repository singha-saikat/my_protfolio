/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
      theme: {
        colors: {
          'primary': "#576cbc",
          'secondary': "#19376d",
          'dark': "#0b2447",
          'bg': "#04152d",
        },
        fontFamily: {
          'roboto': ["Roboto"],
        },
      },
      extend : {
        
      }
    
  },
  plugins: [],
};
