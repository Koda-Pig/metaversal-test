/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "content-border": "#E4E7E8",
        primary: "#141c24",
        secondary: "#5c6970",
        link: "#4426D9",
        "bg-primary": "#F9FAFA"
      }
    }
  },
  plugins: []
};
