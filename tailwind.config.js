/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				overpass: ['Overpass', 'sans-serif'],
				'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif']
			},
			colors: {
				textPrimary: '#181818'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
        themes: ['light']
    },
	extend: {
		keyframes: {
			'image-change': {
				'0%, 50%': { transform: 'translateX(0%)' },
				'70%, 100%': { transform: 'translateX(300%)' }
			},
			slideToLeft: {
				'0%, 10%': { transform: 'translateX(0)' },
				'15%, 45%': { transform: 'translateX(-100%)' },
				'50%, 80%': { transform: 'translateX(-200%)' },
				'85%, 100%': { transform: 'translateX(-300%)' }
			}
		}
	}
};
