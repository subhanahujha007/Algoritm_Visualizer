export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        system: {
          purple10: "#240643",
          purple15: "#300b60",
          purple20: "#401075",
          purple30: "#5a1ba9",
          purple40: "#7526e3",
          purple50: "#9050e9",
          purple60: "#ad7bee",
          purple65: "#b78def",
          purple70: "#c29ef1",
          purple80: "#d7bff2",
          purple90: "#ece1f9",
          purple95: "#f6f2fb",

          green10: "#071b12",
          green15: "#0c2912",
          green20: "#1c3326",
          green30: "#194e31",
          green40: "#396547",
          green50: "#2e844a",
          green60: "#3ba755",
          green65: "#41b658",
          green70: "#45c65a",
          green80: "#91db8b",
          green90: "#cdefc4",
          green95: "#ebf7e6",
          green100: "#202b23",
        },
      },
      rotate: {
        '37': '37deg',
      },
      keyframes: {
        traversed: {
          "0%": {
            transform: "scale(0.3)",
            backgroundColor: "#9333eabf",
            borderRadius: "100%",
          },
          "50%": {
            backgroundColor: "#4f46e5bf",
          },
          "75%": {
            transform: "scale(1.2)",
            backgroundColor: "#3b82f6bf",
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#22d3ee",
          },
        },
        path: {
          "0%": {
            transform: "scale(0.3)",
            backgroundColor: "#e11d48bf",
            borderRadius: "100%",
          },
          "50%": {
            backgroundColor: "#ea580cbf",
          },
          "75%": {
            transform: "scale(1.2)",
            backgroundColor: "#fb923cbf",
          },
          "90%": {
            transform: "scale(0.8)",
            backgroundColor: "#fde68a",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        wall: {
          "0%": {
            transform: "scale(0.7)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        traversed: "traversed 0.5s cubic-bezier(0, 0, 0.2, 1)",
        path: "path 1.5s cubic-bezier(0, 0, 0.2, 1)",
        wall: "wall 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};