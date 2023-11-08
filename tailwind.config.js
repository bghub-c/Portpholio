/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      letterSpacing: {
        widestest: '.28em',
        zaydawide: '.35em',
      },
      screens:{
        'xsmphone':"425px",
        'smartphone':{'max': '720px'},
        // => @media (max-width: 480px)
        'tablet':{'max': '768px'},
        // => @media (min-width: 640px) 
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) 
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) 
      },
      colors:{
      bkg : "#27257b",
      bbkg :"#3432a8",
      bkgd: "#191878",
      muted:"#C9CBCF",
      accent:"#b793e6",
      accentlt:"#E0B0FF",
      insta:"#DD2A7B",
      fb:"#3B5998",
      watspp:"#25D366",
      lnkin:"#0077B5",
      html:"#F48051",
      css:"#32A9DC",
      bootstrap:"#563D7C",
      react:"#16D8FF",
      tailwind:"#44a9b3",
      js:"#FFCA29",
    },
    dropShadow:{
        "text-sm":"1px 1px 0px rgba(0,0,0.90)",
        "text-md":"1px 2px 0px rgba(0,0,0.90)",
        "text-lg":"1px 4px 0px rgba(10,10,10,0.90)",
    },
    container:{
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily:{
      sans: ["Outfit","sans-serif"],
      fontSize:{
          sm:["clamp(1.00nem,calc(0.92rem + 0.39vw), 1.20nem)", "1.4"],
          
          base:["clamp (1.13nem, calc (0.98rem + 0.73vw), 1.50лem)", "1.5"],
          
          lg:["clamp (1.27nem,calc(1.03nem + 1.19vw), 1.88nem)", "1.4"],
          
          xl: ["clamp(1.42nem, calc(1.06лem +1.80vw), 2.34лem)", "1.4"],
          
          "2xl": ["clamp (1.60nem,calc(1.08rem + 2.59vw), 2.93лem)", "1.2"],
          
          "3xl": ["clamp (1.80nem,calc(1.08rem +3.63vw),3.66лem)", "1.1"],
          
          "4xl":["clamp (2.03nem,calc(1.03rem + 4.98vw), 4.58лem)", "1"],
          
          "5xl":["clamp (2.28nem,calc(0.94rem + 6.71vw),5.72nem)", "1"],
          
          "6xl":["clamp (2.57nem,calc (0.78rem + 8.95vw), 7.15лem) ", "1"],

          "7xl":["clamp (3.10nem,calc (0.78rem + 8.95vw), 7.50лem) ", "1"]
      },
    },
  },
  },
  plugins: [
    plugin(( { addUtilities, theme }) => {
      addUtilities({
        ".fade-up": {
          transition:
          "transform 1s cubic-bezier(0.64, 0.04, 0.26, 0.87), opacity 0.8s cubic-bezier(0.64, 0.04, 0.26, 0.87)",
          opacity: theme("opacity.0"),
          transform: "translate3d(0, 2rem, 0)",
        },
        ".faded": {
          opacity: theme("opacity.100"),
          transform: "translate3d(0, 0, 0)",
        },
      });
    }) 
  ],
}