import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('../../packages/ui/src/tailwind-preset.js')],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
