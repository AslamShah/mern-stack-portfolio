/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        border: '#F4F4F5',
        'primary-light': '#FAFAFA',
        'primary-black': '#18181B',
        secondary: '#71717A',
        'grey-light': '#A1A1AA',
        pro: '#BEF264',
      },
      backgroundImage: {
        gradient: 'url("/gradient.png")',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
