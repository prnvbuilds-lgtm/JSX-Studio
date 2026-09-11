import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'jxp-bg-primary': 'var(--color-bg-primary, #0D0D0D)',
        'jxp-bg-surface': 'var(--color-bg-surface, #1A1A1A)',
        'jxp-bg-surface-alt': 'var(--color-bg-surface-alt, #1F1F1F)',
        'jxp-bg-light': 'var(--color-bg-light, #F5F1EA)',
        'jxp-accent-primary': 'var(--color-accent-primary, #B3231C)',
        'jxp-accent-hover': 'var(--color-accent-primary-hover, #8F1C16)',
        'jxp-accent-gold': 'var(--color-accent-gold, #C9A66B)',
        'jxp-text-primary': 'var(--color-text-primary, #FFFFFF)',
        'jxp-text-secondary': 'var(--color-text-secondary, #B3B3B3)',
        'jxp-text-light': 'var(--color-text-on-light, #1A1A1A)',
        'jxp-success': 'var(--color-success, #4CAF50)',
        'jxp-border': 'var(--color-border, #2A2A2A)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'Montserrat', 'sans-serif'],
        script: ['var(--font-script)', 'Caveat', 'Dancing Script', 'cursive'],
        flourish: ['var(--font-flourish)', 'Alex Brush', 'cursive'],
      },
      borderRadius: {
        jxp: '12px',
        'jxp-lg': '16px',
        pill: '9999px',
      },
      letterSpacing: {
        eyebrow: '0.18em',
        wide: '0.24em',
        ultra: '0.35em',
      },
      boxShadow: {
        glow: '0 0 24px -4px rgba(179, 35, 28, 0.35)',
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
