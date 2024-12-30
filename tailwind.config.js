/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: " 0px 2px 6px 0px #156FEF1A",
        outer: "0px 2px 24px 0px #6BA4F533",
        top: " 0px 0px 10px 0px #00000040",
      },
      fontWeight: {
        500: "500",
        600: "600",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbars": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".hide-scrollbars::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
};
