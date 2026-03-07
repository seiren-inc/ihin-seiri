/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        // CSS変数トークンと同じ値を Tailwind クラスとしても使えるようにマッピング
        background: '#ffffff',
        'bg-section': '#f8f9fa',
        primary: {
          DEFAULT: '#2c3e50',
          dark: '#1a252f',
        },
        accent: {
          DEFAULT: '#c08497',
          hover: '#a56f82',
        },
        text: {
          DEFAULT: '#2c3e50',
          sub: '#6c7a89',
        },
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2.5rem',
        xl: '4rem',
        '2xl': '6rem',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '16px',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
