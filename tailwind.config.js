export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate", "night"],
  },
};
