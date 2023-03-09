/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'chatimg': "url('/src/assets/imagem.webp')"
      }
    },
  },
  plugins: [],
}
