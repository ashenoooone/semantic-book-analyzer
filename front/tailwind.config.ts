module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'bg-color': '#343434',
				'bg-color-opacity-70': 'rgba(26, 26, 26, 0.4)',
				'primary-color': 'white',
				'primary-color-70': 'rgba(255, 255, 255, 0.8)',
				'secondary-color': '#8a8b8d',
				'inverted-primary-color': 'black'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
