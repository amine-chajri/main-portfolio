/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "rgba(255, 255, 255, 0.06)",
        accent: "#00ff88",
        cyan: "#00d4ff",
        purple: "#a855f7",
      },
    },
  },
  plugins: [],
}