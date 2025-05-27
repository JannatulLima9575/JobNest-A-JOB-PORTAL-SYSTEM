export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: 'class', // 👈 Enable class-based dark mode
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate", "night"], // 👈 light & dark theme
  },
};
