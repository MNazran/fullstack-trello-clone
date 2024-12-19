import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [require('../../libs/ui/tailwind.config')],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../libs/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
}
export default config

// import type { Config } from 'tailwindcss'

// export default {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: 'var(--background)',
//         foreground: 'var(--foreground)',
//       },
//     },
//   },
//   plugins: [require('@tailwindcss/forms')],
// } satisfies Config
