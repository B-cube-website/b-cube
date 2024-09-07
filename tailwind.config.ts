import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      fontSize: {
        fontSize1: "48px",
        fontSize2: "40px",
        fontSize3: "30px",
        fontSize4: "24px",
        fontSize5: "22px",
        fontSize6: "20px",
        fontSize7: "18px",
        fontSize8: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
