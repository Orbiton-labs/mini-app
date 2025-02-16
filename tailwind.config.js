/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey1: "var(--color-grey-1)",
        grey2: "var(--color-grey-2)",
        green1: "var(--color-green-1)",
        green2: "var(--color-green-2)",
      },
      fontFamily: {
        michroma: ["Michroma", "sans-serif"],
      },
    },
  },
  plugins: [],
};
