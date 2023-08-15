import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      main: "#e65e1c",
      primary: "#dc6e39",
      secondary: "#e48d63",
      tertiary: "#22864a",

      footer: "#B5B5B5",

      bgone: "#eeeeee",
      bgtwo: "#e5e5e5",
      bgmodal: "#00000075",

      white: "#FFFFFF",
      black: "#000000",
    },

    extend: {
      minHeight: {
        screenHeightWithoutHeader: "calc(100vh - 128px)",
      },

      height: {
        screenHeightWithoutHeader: "calc(100vh - 101px)",
      },

      fontFamily: {
        sans: "var(--font-conduit)",
      },
    },
  },
  plugins: [],
};

export default config;
