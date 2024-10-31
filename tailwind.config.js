// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This scans all files in the src folder for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#388FCB', // Add your custom color here
        subscribe: "#7CC140",
        stocklist: "#388FCB",


      },
    },
  },
  plugins: [],
}
