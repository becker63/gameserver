import { defineConfig, defineTextStyles } from "@pandacss/dev";

const textStyles = defineTextStyles({
  body: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
});

export default defineConfig({
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },
  theme: {
    semanticTokens: {
      colors: {
        text: {
          value: "#ffffff",
        },
        textAccent: {
          value: "#8f8f8f"
        },
        background: {
          value: "#1c1b1b",
        },
        primary: {
          value: "#b8f680",
        },
        secondary: {
          value: "#3e0b9e",
        },
        accent: {
          value: "#f018c3",
        },
      },
    },
    extend: {
      textStyles,
    },
  },
  preflight: true,
  presets: ["animated-pandacss","@pandacss/preset-base", "@park-ui/panda-preset"],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react", // or 'solid' or 'vue'
  outdir: "styled-system",
});
