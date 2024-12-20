/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'mono': {
        100: '#000000',
        200: '#161616',
        300: '#262626',
        400: '#393939',
        500: '#525252',
        700: '#dde1e6',
        800: '#f2f4f8',
        900: '#FFFFFF',
      },
      'pink': {
        100: '#2A0A18',
        200: '#510224',
        300: '#740937',
        400: '#9F1852',
        500: '#D02670',
        600: '#EE5396',
        700: '#FF7EB6',
        800: '#FFAFD2',
        900: '#FED7E8',
      },
      'blue': {
        100: '#001141',
        200: '#001D6C',
        300: '#012D9C',
        400: '#0043CE',
        500: '#0E62FE',
        600: '#4589FF',
        700: '#77A9FF',
        800: '#A6C8FF',
        900: '#D0E2FF',
      }
    },
    extend: {
      typography: ({ theme }) => ({
        mono: {
          css: {
            '--tw-prose-body': theme('colors.mono[900]'),
            '--tw-prose-headings': theme('colors.mono[900]'),
          }
        }
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

