import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF8",
        surface: "#FFFFFF",
        border: "#E8E4DF",
        text: "#1A1A2E",
        secondary: "#64748B",
        teal: "#0F766E",
        amber: "#D97706",
        green: "#059669",
        red: "#DC2626"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(26, 26, 46, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
