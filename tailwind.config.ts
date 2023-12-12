import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      boxShadow: {
        panel: '5px 5px 35px -14px rgba(0, 0, 0, 0.17)',
      },
      colors: {
        primary: {
          DEFAULT: colors.amber[500],
        },
        danger: colors.red[500],
        textc: {
          dark: colors.gray[950],
          light: colors.gray[50],
        },
        bgc: {
          dark: colors.gray[900],
          light: colors.gray[50],
        },
      },
    },
  },
  plugins: [],
}

export default config
