/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			white: '#ffffff',
			black: '#000000',
			grey: '#374151',
			orange: '#ff7900',
			navy: '#1b2c3a',
			darkGrey: '#BEBEBE',
			cream: '#cad2c5',
			links: '#9bb7d0',
			linksHover: '#cddbe7',
			blue2: '#c6c9d2',
			blue3: '#00bbff',
			black2: '#1a1a1a',
		},

		extend: {},
	},
	plugins: [],
}
