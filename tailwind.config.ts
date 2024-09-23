import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Orbitron',
        secondary: 'Rajdhani',
        tertiary: 'Aldrich',
      },
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      extend: {
        colors: {
          primary: '#0a0a0a',
          accent: '#B809C3',
        },
        backgroundImage: {
          site: "url('./site-bg.jpg')",
          about: "url('./about.png')",
          services: "url('./services.png')",
        },
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
export default config;
