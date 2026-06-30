import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Clinical teal — the spine of the identity
        primary: {
          50: "#EAF6F2", 100: "#CFEAE2", 200: "#A3D7C9", 300: "#6FBFAC",
          400: "#3FA189", 500: "#198069", 600: "#0B6E5B", 700: "#0A5849",
          800: "#0B463B", 900: "#0B3A31", 950: "#072923",
        },
        gold: { 400: "#E0B05A", 500: "#C8922A", 600: "#A9791F" },
        ink: {
          50: "#F8FAFC", 100: "#F1F5F9", 200: "#E2E8F0", 300: "#CBD5E1",
          400: "#94A3B8", 500: "#64748B", 600: "#475569", 700: "#334155",
          800: "#1E293B", 900: "#0F172A",
        },
        ok: "#16A34A", warn: "#D97706", crit: "#E11D48", info: "#0284C7", grape: "#7C3AED",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)",
        pop: "0 8px 30px rgba(15,23,42,0.12)",
        side: "inset -1px 0 0 rgba(255,255,255,0.04)",
      },
      borderRadius: { xl: "0.875rem", "2xl": "1.125rem" },
      keyframes: {
        pulse2: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.35" } },
        slidein: { from: { transform: "translateX(-100%)" }, to: { transform: "translateX(0)" } },
        fadeup: { from: { opacity: "0", transform: "translateY(6px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        pulse2: "pulse2 1.6s ease-in-out infinite",
        slidein: "slidein .22s ease-out",
        fadeup: "fadeup .3s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
