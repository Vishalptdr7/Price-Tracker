import daisyui from "daisyui";
import "flowbite";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        pinky: "#fbe3e8",
        bluegreeny: "#5cbdb9",
        teenygreeny: "#ebf6f5",
      },
    },
  },

  plugins: [
    require("flowbite/plugin"), // ✅ Correct way to add Flowbite plugin
  ],
  daisyui: {
    themes: ["light"], // ✅ Fix typo: "dart" ➝ "dark"
  },
};
