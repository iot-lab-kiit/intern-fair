// ** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Gilroy-Medium", "Gilroy-Bold", "Gilroy-Light"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xsSmall: "400",
        mbSmall: "600px",
        mbMedium: "800px",
        tbPortrait: "1200px",
        tbLandscape: "1600px",
        Desktop: "2000px",
        lgDesktop: "2400px",
      },
    },
  },
  plugins: [],
};
