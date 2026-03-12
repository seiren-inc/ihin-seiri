/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        // =====================================================
        // globals.css の CSS変数トークンと完全一致で管理
        // =====================================================
        background: '#ffffff',
        'bg-section': '#f8f7f5',
        'bg-light': '#f0ede8',
        primary: {
          DEFAULT: '#1e4f66',   // --color-primary
          dark: '#1a252f',      // --color-primary-dark
          950:  '#0a1e28',
          900:  '#0d2e42',
          700:  '#2b6882',
          600:  '#3a82a0',
          200:  '#c8e6f0',
          50:   '#f0f8fb',
        },
        accent: {
          DEFAULT: '#9c5272',   // --color-accent（コントラスト改善済み）
          600:    '#8a3f5f',    // --color-accent-600
          hover:  '#87405f',   // --color-accent-hover
          400:    '#c48fa3',   // --color-accent-400（背景用）
          100:    '#f9eaef',   // --color-accent-100（背景専用）
        },
        text: {
          DEFAULT: '#1a1a1a',  // --color-text
          sub:    '#484f5e',   // --color-text-sub（コントラスト改善済み）
        },
        border: '#e2e0db',

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
