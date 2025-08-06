
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { 
            opacity: '0',
            transform: 'translateY(-10px)',
           },
          "100%": {
            opacity: '1',
            transform: 'translateY(0)',
           },
        },
        opacity: {
          "0%": { 
            opacity: '0',
           },
          "100%": {
            opacity: '1',
           },
        },
        opacity2: {
          "0%": { 
            opacity: '0',
           },
          "99%": {
            opacity: '0',
           },
           "100%": {
            opacity: '1',
           },
        },
        fadeIn2: {
          "0%": { 
            opacity: '0',
            transform: 'scale(0.8)',
           },
          "100%": {
            opacity: '1',
            transform: 'scale(1)',
           },
        },
        skeleton: {
          "0%": { 
            background: 'linear-gradient(90deg, #EDEDED 30%, #DCDCDC 50%,	#EDEDED 70%);',
            backgroundSize: '400%',
            backgroundPosition:'100% 100%'

           },
          "100%": {
            background: 'linear-gradient(90deg, #EDEDED 30%, #DCDCDC 50%,	#EDEDED 70%);',
            backgroundSize: '400%',
            backgroundPosition:'0 0'
           },
        },
      },
      animation: {
        opacity: "opacity 0.2s ease-out forwards",
        opacity2: "opacity2 0.15s ease-out forwards",
        fadeIn2: "fadeIn2 0.2s ease-out forwards",
        fadeIn: "fadeIn 0.2s ease-out forwards",
        skeleton : "skeleton 1.5s infinite linear"
      }
    },
  },
  plugins: [],
};