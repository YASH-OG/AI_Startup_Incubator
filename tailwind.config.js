module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#10b981',
          dark: '#059669',
        },
        background: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          dark: '#020617',
        },
        accent: {
          DEFAULT: '#f43f5e',
          dark: '#e11d48',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
