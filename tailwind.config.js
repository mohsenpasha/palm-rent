
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
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out forwards",
      }
    },
  },
  plugins: [],
};
