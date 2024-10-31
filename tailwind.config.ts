import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors : {
          'klightGrey' : '#18181C',
          'klightGreyHover' : '#18181C',
          'kpink' : '#FF9898',
          'kpurple' : '#8054FF',
          'klight' : '#9E9E9E',
          'kblack' : '#000000'
        }
    },
  },
  plugins: [],
};
export default config;
