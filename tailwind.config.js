/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'dark-violet': 'var(--dark-violet)',
        'very-dark-blue': 'var(--very-dark-blue)',
        'danger': 'var(--danger)',
        'gray': 'var(--gray)',
        'light-gray': 'var(--light-gray)',
        'grayish-violet': 'var(--grayish-violet)',
        'very-dark-violet': 'var(--very-dark-violet)',
      },
      backgroundImage: {
        'bg-shorten-mobile': "url('/images/bg-shorten-mobile.svg')",
        'bg-shorten-desktop': "url('/images/bg-shorten-desktop.svg')",
      },
    },
  },
  plugins: [],
}
