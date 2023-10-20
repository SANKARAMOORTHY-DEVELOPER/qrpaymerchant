/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: {
        'dark-blue': 'hsl(233, 26%, 24%)',
        'lime-green': 'hsl(136, 65%, 51%)',
        'bright-cyan': 'hsl(192, 70%, 51%)',
      },
      neutral: {
        'grayish-blue': 'hsl(233, 8%, 62%)',
        'light-grayish-blue': 'hsl(220, 16%, 96%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
    }
  },
  plugins: [],
}