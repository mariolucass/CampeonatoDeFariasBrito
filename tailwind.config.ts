import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
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
      bginput: "#d9d9d9",
      bgmodal: "#00000075",

      white: "#FFFFFF",
      black: "#000000",
    },

    extend: {
      minHeight: {
        screenHeightWithoutHeader: "calc(100vh - 80px)",
      },

      height: {
        screenHeightWithoutHeader: "calc(100vh - 80px)",
      },

      fontFamily: {
        sans: "var(--font-conduit)",
      },
    },
  },
};

export default config;
