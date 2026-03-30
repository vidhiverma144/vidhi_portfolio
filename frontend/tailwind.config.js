/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        cherry: {
          DEFAULT: '#C31E39',
          50: '#FAE8EB',
          100: '#F5D1D7',
          200: '#EBA3AF',
          300: '#E17587',
          400: '#D7475F',
          500: '#C31E39',
          600: '#9C182E',
          700: '#751222',
          800: '#4E0C17',
          900: '#27060B',
        },
        brown: {
          DEFAULT: '#8B4513',
          50: '#F5EBE3',
          100: '#EBD7C7',
          200: '#D7AF8F',
          300: '#C38757',
          400: '#AF5F1F',
          500: '#8B4513',
          600: '#6F370F',
          700: '#53290B',
          800: '#371C08',
          900: '#1B0E04',
        },
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        }
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in': 'slide-in 0.5s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};