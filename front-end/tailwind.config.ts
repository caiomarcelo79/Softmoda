import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        backTop: 'var(--backTop)',
        primaryBack: 'var(--primaryBack)',
        secondaryBack: 'var(--secondaryBack)',
        terciaryBack: 'var(--terciaryBack)',
        primaryText: 'var(--primaryText)',
        secondaryText: 'var(--secondaryText)',
      },
      fontFamily: {
        inter: ['InterBoldItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
