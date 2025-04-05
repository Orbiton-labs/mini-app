/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
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
        grey5: "var(--color-grey-5)",
        grey6: "var(--color-grey-6)",
        grey7: "var(--color-grey-7)",
        grey8: "var(--color-grey-8)",
        green1: "var(--color-green-1)",
        green2: "var(--color-green-2)",
        green3: "var(--color-green-3)",
        green4: "var(--color-green-4)",
        green5: "var(--color-green-5)",
        green6: "var(--color-green-6)",
        green7: "var(--color-green-7)",
        white1: "var(--color-white-1)",
        white2: "var(--color-white-2)",
        white3: "var(--color-white-3)",
        black1: "var(--color-black-1)",
        black2: "var(--color-black-2)",
        black3: "var(--color-black-3)",
        yellow1: "var(--color-yellow-1)",
        yellow2: "var(--color-yellow-2)",
        yellow3: "var(--color-yellow-3)",
        navy1: "var(--color-navy-1)",
        purple1: "var(--color-purple-1)",
        purple2: "var(--color-purple-2)",
        purple3: "var(--color-purple-3)",
        purple4: "var(--color-purple-4)",
        purple5: "var(--color-purple-5)",
        pink1: "var(--color-pink-1)",
        pink2: "var(--color-pink-2)",
        grBorder1: "var(--gr-border-1)",
        grBorder2: "var(--gr-border-2)",
        grBorder3: "var(--gr-border-3)",
        grBorder4: "var(--gr-border-4)",
        grBorder5: "var(--gr-border-5)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        michroma: ["Michroma", "sans-serif"],
      },
      fontSize: {
        ss: "0.625rem",
      },
      keyframes: {
        "border-gradient-rotate": {
          "0%": {
            "--gradient-angle": "0deg",
          },
          "100%": {
            "--gradient-angle": "360deg",
          },
        },
      },
      // borderRadius: {
      // 	lg: 'var(--radius)',
      // 	md: 'calc(var(--radius) - 2px)',
      // 	sm: 'calc(var(--radius) - 4px)'
      // }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
