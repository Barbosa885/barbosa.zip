import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        retroGray: "#C0C0C0",
        retroGreen: "#008000",
        retroBlue: "#0000FF",
      },
    },
  },
  plugins: [],
};
export default config;
