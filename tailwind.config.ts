import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          950: "#210d29",
          900: "#2f1236",
          800: "#3d1a45",
          700: "#4c2154",
          600: "#5c2a65",
          500: "#6f3479",
        },
        magenta: {
          700: "#9c2a5e",
          600: "#b8336f",
          500: "#c9457d",
          400: "#d76a94",
          300: "#e59db6",
          100: "#f8dfe9",
          50: "#fdf1f6",
        },
        cream: {
          50: "#fbf7f4",
          100: "#f6f0ea",
        },
        sage: {
          700: "#3f6b52",
          100: "#e3efe6",
          50: "#f2f8f3",
        },
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(33,13,41,0.06), 0 4px 16px rgba(33,13,41,0.06)",
      },
      backgroundImage: {
        "plum-gradient":
          "radial-gradient(circle at 85% -10%, rgba(201,69,125,0.35), transparent 45%), linear-gradient(135deg, #2f1236 0%, #3d1a45 55%, #5c2a65 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
