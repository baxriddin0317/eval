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
          'black': {
            '100': "#4A4A4A",
            '200': "#B1B1B1"
          },
          'blue': "#3178EA",
          'gray': {
            DEFAULT: "#757575",
            '100': "#F6F7F8",
            '200': "#F1F5F9",
            '300': "#D0D5DD",
            '400': "#D3D1D2",
            '500': "#667085",
            '600': "#F5F5F5",
            '700': "#344054"
          },
          '600': "#7F56D9"
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
