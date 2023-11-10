/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "poppins": "var(--poppins-font)",
      "body": "var(--body-font)",
      "changa": "var(--changa-font)",
      "primary": "var(--primary-font)",
      "iceland": "var(--iceland-font)",
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
