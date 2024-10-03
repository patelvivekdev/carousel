import type { Config } from "tailwindcss";

const config: Config = {
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
        cozey: {
          "Fog-Balanced": "#ECEBE7",
          "Midnight-Bold": "#0B2341",
          "Midnight-Balanced": "#4F6076",
          "Sky-Bold": "#69A2FF",
          "Sky-Balanced": "#A3C6FF",
          "Fog-Soft": "#F7F8F6",
        },
      },
      fontSize: {
        xss: ["10px", "14px"],
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["18px", "26px"],
        md: ["24px", "32px"],
        lg: ["28px", "36px"],
      },
    },
  },
  plugins: [],
};
export default config;
