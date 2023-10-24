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
        cgreen: '#00A86B',
        cred: '#FD3C4A',
        cyellow: '#FCAC12',
        cgray: '#C6C6C6',
        cgray1: '#F6F6F6',
      },
      colors : {
        primary: '#7F3DFF',
        cgreen: '#00A86B',
        cred: '#FD3C4A',
        cyellow: '#FCAC12',
        cgray: '#C6C6C6',
        cgray1: '#F6F6F6'
      }
    },
  },
  plugins: [],
};
export default config;
