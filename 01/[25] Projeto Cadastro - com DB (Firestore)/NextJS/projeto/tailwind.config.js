module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      // garante que ele snao vai excluir as classes que comecam com isso
      /^bg-/,
      /^to-/,
      /^from-/,
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}