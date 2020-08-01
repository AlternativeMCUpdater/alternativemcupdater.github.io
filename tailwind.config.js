module.exports = {
  purge: false,
  theme: {
    darkSelector: ".dark-mode",
    extend: {},
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
      "hover",
    ],
    textColor: [
      "dark",
      "dark-hover",
      "dark-active",
      "dark-placeholder",
      "hover",
    ],
    borderColor: [
      "dark",
      "dark-hover",
      "dark-active",
      "dark-placeholder",
      "hover",
    ],
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
