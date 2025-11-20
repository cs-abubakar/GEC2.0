/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          blue: '#004fe3',
          green: '#006046',
        },
        // Accent Colors
        accent: {
          yellow: '#fccf00',
          orange: 'orange',
          purple: '#deaaff',
          peach: '#ffcbb0',
          pink: '#ffc4d7',
          turquoise: '#aed9e0',
          'light-blue': '#00e4ff',
          aqua: '#aed9e0',
        },
        // Neutrals
        dark: {
          grey: '#e6efed',
        },
        light: {
          grey: '#f2f7f6',
        }
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Mobile-first approach with larger desktop sizes
        'h1-mobile': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-desktop': ['72px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2-mobile': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'h2-desktop': ['48px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3-mobile': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-desktop': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 24px rgba(0, 0, 0, 0.12)',
        'button': '0 8px 16px rgba(0, 79, 227, 0.3)',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },
      transitionDuration: {
        'smooth': '300ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
