import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C5A059",
          light: "#D4B870",
          dark: "#A8893D",
          muted: "rgba(197,160,89,0.15)",
        },
        bg: {
          DEFAULT: "#050508",
          surface: "rgba(255,255,255,0.04)",
          elevated: "rgba(255,255,255,0.07)",
        },
        text: {
          DEFAULT: "#F0EDE8",
          muted: "rgba(240,237,232,0.55)",
          subtle: "rgba(240,237,232,0.35)",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C5A059 0%, #D4B870 50%, #A8893D 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #050508 0%, #0a0a12 100%)",
      },
      backdropBlur: {
        xs: "4px",
        glass: "20px",
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(197,160,89,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(197,160,89,0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        gold: "0 0 30px rgba(197,160,89,0.25)",
        "gold-lg": "0 0 60px rgba(197,160,89,0.35)",
        "card": "0 4px 24px rgba(0,0,0,0.5)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
