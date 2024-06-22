import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'blue': "#3178EA",
          'gray': "#757575"
        }
      },
      fontFamily: {
        'roboto': [ "Roboto", "sans-serif"]
      },
      boxShadow: {
        '2xl': "0px 60px 17px 0px rgba(0, 0, 0, 0.00), 0px 38px 15px 0px rgba(0, 0, 0, 0.01), 0px 22px 13px 0px rgba(0, 0, 0, 0.03), 0px 10px 10px 0px rgba(0, 0, 0, 0.04), 0px 2px 5px 0px rgba(0, 0, 0, 0.05)"
      }
    },
  },
  plugins: [],
};
export default config;
