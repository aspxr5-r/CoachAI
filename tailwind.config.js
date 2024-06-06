/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-neutrals": "#030014",
        "brand-washed-blue": "#6889ff",
        royalblue: "#4f70e6",
        "absolute-white": "#fff",
        gainsboro: "#d9d9d9",
        "neutrals-neutrals-3": "#f5f5f6",
        "foundation-blue-blue-9": "#39424f",
        "neutrals-neutrals-4": "#f0f0f1",
        "grey-10": "#1a1a1a",
        "grey-15": "#262626",
        "grey-70": "#b3b3b3",
        linearfillbackp: "rgba(237, 145, 209, 0.2)",
        linearfillbacky: "rgba(255, 227, 17, 0.2)",
        linearfillbackr: "rgba(255, 34, 34, 0.2)",
        linearfillbacko: "rgba(249, 156, 63, 0.2)",
        linearfillbackg: "rgba(116, 214, 128, 0.2)",
        linearbluefillback2: "rgba(5, 113, 237, 0.2)",
        "primary-blue-primary-blue-100": "#bad1ff",
        "washed-purple-washed-purple-100": "#e8e7ff",
        black: "#000",
        lightgray: "#cbd5e1",
        "slate-400": "#94a3b8",
        "foundation-blue-blue-1": "#f0f1f3",
      },
      spacing: {},
      fontFamily: {
        "desktop-h4": "'DM Sans'",
        lexend: "Lexend",
        "dr-sugiyama": "'Dr Sugiyama'",
        "p-ui": "Inter",
      },
      borderRadius: {
        "51xl": "70px",
        "31xl": "50px",
        mini: "15px",
      },
    },
    fontSize: {
      "16xl": "35px",
      "36xl": "55px",
      "25xl": "44px",
      "14xl": "33px",
      "46xl": "65px",
      "33xl": "52px",
      "20xl": "39px",
      "26xl": "45px",
      "17xl": "36px",
      "8xl": "27px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "9xl": "28px",
      "2xl": "21px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
