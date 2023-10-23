import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        primary: '#7F3DFF',
        cgreen: '#7F3DFF',
        cred: '#7F3DFF',
        cyellow: '#7F3DFF',
        cgray: '#7F3DFF',
      },
      colors : {
        primary: '#7F3DFF',
        cgreen: '#7F3DFF',
        cred: '#7F3DFF',
        cyellow: '#7F3DFF',
        cgray: '#7F3DFF',
      }
    },
  },
  plugins: [],
};
export default config;
