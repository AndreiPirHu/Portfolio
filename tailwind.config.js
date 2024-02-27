/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/src/assets/background.svg')",
        "hero-background-medium": "url('/src/assets/bg-test.svg')",
        "hero-none": "url('')",
        "hero-background-new": "url('/src/assets/background-large.svg')",
        "hero-background-new-medium":
          "url('/src/assets/background-medium.svg')",
        "hero-background-new-small": "url('/src/assets/background-small.svg')",
      },
    },
  },
  plugins: [],
};
