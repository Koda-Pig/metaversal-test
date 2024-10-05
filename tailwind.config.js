/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "content-border": "#E4E7E8",
        primary: "#141c24",
        "primary-50": "#ECE9FB",
        secondary: "#5c6970",
        "secondary-50": "#FDEDE7",
        "bg-primary": "#F9FAFA",
        pink: "#FF0073",
        purple: "#811AB8",
        blue: "#4426D9",
        "light-blue": "#0077CC",
        "light-blue-50": "#E5F4FF",
        "grey-cold-50": "#F1F3F4",
        "off-white": "#FFFAF5",
      },
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(326px, 1fr))",
        "reserve-space": "120px auto",
      },
      boxShadow: {
        default: "0px 1px 3px #1A1A1A14",
      },
      borderRadius: {
        "2xl-inherit": "calc(1rem - 1px)",
      },
    },
  },
  plugins: [],
};
