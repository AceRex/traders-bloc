/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{tsx, ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#1A1A1A",
        text: "#141414",
        text_light: "#7b7b7b",
        bg_light: "#ededed",
        success: "#098708",
        danger: "#e82109",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Hide scrollbar for Webkit browsers */
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Safari and Chrome */,
          },
        },
      });
    },
  ],
};
