/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Rutas de tus archivos HTML y TypeScript
    "./node_modules/flowbite/**/*.js", // Rutas para Flowbite
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // Incluye Flowbite como plugin
  ],
};
