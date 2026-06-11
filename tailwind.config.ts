import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#07111f",
        panel: "#0d1726",
        panelSoft: "#111f33",
        line: "rgba(132, 176, 255, 0.18)",
        accent: {
          DEFAULT: "#3b82f6",
          soft: "#60a5fa",
          pale: "#bfdbfe",
          deep: "#1d4ed8"
        }
      },
      boxShadow: {
        glow: "0 22px 80px rgba(37, 99, 235, 0.22)",
        card: "0 18px 60px rgba(0, 0, 0, 0.24)"
      },
      backgroundImage: {
        "soft-grid":
          "linear-gradient(rgba(96, 165, 250, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 165, 250, 0.08) 1px, transparent 1px)"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseLine: "pulseLine 3s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
} satisfies Config;
