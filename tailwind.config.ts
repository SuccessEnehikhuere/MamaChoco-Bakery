import type { Config } from "tailwindcss";

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(243, 242, 240)',
        dark: '#3E2B2A',
        text: '#4c2a2c',
      },
    },
  },
  plugins: [],
} satisfies Config
