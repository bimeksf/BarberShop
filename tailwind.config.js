 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'scale-up': 'scale-up 1s ease-out forwards',
         fadeIn: 'fadeIn 1.5s ease-out forwards',
      },
    },
   },
   plugins: [],
 }