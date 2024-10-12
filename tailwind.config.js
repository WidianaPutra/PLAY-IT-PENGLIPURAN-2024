/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: "red",
        green: "#276E48",
      },
    },
    borderColor: {
      red: "red",
      white: "white",
    },
    borderWidth: {
      2: "2px",
    },
    fontFamily: {
      GeistVF: "GeistVF",
    },
  },
  plugins: [],
};
