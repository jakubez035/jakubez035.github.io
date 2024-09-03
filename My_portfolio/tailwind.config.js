/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',     // Includes all HTML files in the src folder and subfolders
    './src/**/*.{js,jsx}', // If you have any JS/JSX files in the src directory that use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
