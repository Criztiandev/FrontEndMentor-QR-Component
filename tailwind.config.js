module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
          main : "#d6e2f0",
          title: "#1f3251",
          paragraph: "#7b879d"
      },

      maxWidth: {
        '1/4': '25%',
        '1/2': '300px',
        '3/4': '75%',
      }
    },
  },

  variant:{
    extend:{
      backgroundColor : ['active']
    }
  },
  plugins: [],
}
