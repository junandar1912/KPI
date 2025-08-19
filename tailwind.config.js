import cornerSlicer from 'tailwindcss-corner-slicer'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // sesuaikan dengan struktur project kamu
  ],
  theme: {
    extend: {},
  },
  plugins: [
    cornerSlicer(),   // aktifkan plugin corner slicer
  ],
   backgroundImage: {
        'conic-slice':
          'conic-gradient(from 0deg at 50% 50%, #93D8F5 0 120deg, #22c55e 120deg 240deg, #ef4444 240deg 360deg)',
        },
}