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

		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '845px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},

		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
}
