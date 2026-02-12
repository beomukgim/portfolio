import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B3A5C",
          50: "#E8EEF4",
          100: "#D1DDE9",
          200: "#A3BBD3",
          300: "#7599BD",
          400: "#4877A7",
          500: "#1B3A5C",
          600: "#162E4A",
          700: "#112337",
          800: "#0B1725",
          900: "#060C12",
        },
        accent: {
          DEFAULT: "#2C5F8A",
          light: "#3A7AB5",
          dark: "#1E4060",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F8F9FA",
          subtle: "#F1F3F5",
        },
      },
      width: {
        a4: "794px",
      },
      height: {
        a4: "1123px",
      },
      minHeight: {
        a4: "1123px",
      },
      maxWidth: {
        a4: "794px",
      },
      padding: {
        "a4-x": "76px",
        "a4-y": "60px",
      },
      fontFamily: {
        pretendard: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        "a4-xs": ["10px", { lineHeight: "16px" }],
        "a4-sm": ["12px", { lineHeight: "18px" }],
        "a4-base": ["14px", { lineHeight: "22px" }],
        "a4-lg": ["16px", { lineHeight: "24px" }],
        "a4-xl": ["20px", { lineHeight: "28px" }],
        "a4-2xl": ["24px", { lineHeight: "32px" }],
        "a4-3xl": ["32px", { lineHeight: "40px" }],
        "a4-4xl": ["40px", { lineHeight: "48px" }],
      },
    },
  },
  plugins: [],
};
export default config;
