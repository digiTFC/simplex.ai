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
        khr: "#404047",

        
        kOnSecondary : '#222228',
        klightGrey: "#18181C",
        klightGreyHover: "#2F2F34",
        kpink: "#FF9898",
        kpurple: "#8054FF",
        klight: "#9E9E9E",
        kblack: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
