/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spin2: "spin2 3s linear infinite",
      },
      colors: {
        primary: {
          100: "#71c0f5",
          200: "#20618c",
          300: "#0b3552",
        },
        accent: {
          100: "#f38846",
          200: "#d25200",
          300: "#913801",
        },
      },
      fontFamily: {
        script: ["Dancing Script", "cursive"],
      },
      keyframes: {
        spin2: {
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
