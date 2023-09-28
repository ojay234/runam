import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bg_yellow: "#facb37",
      blue: "#25427a",
      black: "#000",
      white: "white",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
