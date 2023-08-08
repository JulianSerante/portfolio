const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
      fontFamily: {
         sans: ['ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
         'custom-light': ' 0 0 10px #313131',
         'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c',
      },
      extend: {
         colors: {
            green: {
               DEFAULT: '#00f260',
            },
            dark: {
               DEFAULT: "#010101",
               100: "#0a0b0e",
               200: "#16181d",
               300: "#16181d",
               500: "#0f1115",
               700: "#202125",
             },
         },
      },
   },
   variants: {
      extend: {
         boxShadow: ['dark'],
      },
   },
   darkMode: "class",
   plugins: [nextui()],
}
