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
      keyframes: {
        // 2026: Shimmer — スケルトンローディング・プレミアム感演出
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        // 2026: Floating — アイコン・バッジの浮遊感（テック系、摎やかに）
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        // 2026: SlideIn — 左からのキレのあるスライドイン（テック系必須）
        'slide-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // 2026: GlowPulse — CTAボタン・リンクのアクセントから
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0, 64, 255, 0.3)' },
          '50%':      { boxShadow: '0 0 24px rgba(0, 64, 255, 0.7)' },
        },
      },
      animation: {
        // Shimmer: スケルトンUI・ローディング表示
        shimmer:         'shimmer 1.8s linear infinite',
        // Floating: アイコン・バッジの浮遊（テック系は少し速め）
        floating:        'floating 3.0s ease-in-out infinite',
        // SlideIn: キレのあるエントランス
        'slide-in-left': 'slide-in-left 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        // GlowPulse: CTAボタンの誘導グロー
        'glow-pulse':    'glow-pulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
