/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { // ⬅️ add
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [],
};
