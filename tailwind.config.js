/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#F29765",
      secondary: "#4F6F93",
      white: "#FFFFFF",
      neutralsLight: "#E9EAED",
      kashmirBlue: "#4F6193",
      red: {
        100: "#EC1C24",
        200: "#0059A3"
      },
      gray: {
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#DDDCDF",
        400: "#54575D",
        500: "#7D818C",
        600: "#263C54"
      },
      orange: {
        100: "#F6B26B",
        200: "#FFA500"
      },
      blue: "#4D7DDF",
      neutral: {
        50: "#FCFCFC",
        100: "#FAFAFA"
      }
    },
    maxWidth: {
      "2/6": "30%",
      "4/6": "60%",
      "8/10": "80%",
      "1/5": "20%",
      "2/5": "40%",
      "7/20": "35%",
      full: "100%"
    },
    minWidth: {
      "2/6": "30%",
      "1/5": "20%",
      "2/5": "40%",
      "7/20": "35%",
      80: "80px",
      full: "100%"
    },
    extend: {}
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
