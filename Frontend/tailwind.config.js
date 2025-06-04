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
    extend: {},
  },
  plugins: [
    daisyui,
    require("flowbite/plugin"), // ✅ Correct way to add Flowbite plugin
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "retro"], // ✅ Fix typo: "dart" ➝ "dark"
  },
};
