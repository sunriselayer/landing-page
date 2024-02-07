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
	plugins: [require('daisyui')]
};
