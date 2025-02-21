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
        grey3: "var(--color-grey-3)",
        grey4: "var(--color-grey-4)",
        green1: "var(--color-green-1)",
        green2: "var(--color-green-2)",
        white1: "var(--color-white-1)",
        white2: "var(--color-white-2)",
        white3: "var(--color-white-3)",
        black1: "var(--color-black-1)",
        black2: "var(--color-black-2)",
      },
      fontFamily: {
        michroma: ["Michroma", "sans-serif"],
      },
    },
  },
  plugins: [],
};
