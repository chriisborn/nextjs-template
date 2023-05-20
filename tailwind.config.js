module.exports = {
	content: ['./components/**/*.{js,jsx}', './app/**/*.{js,jsx}'],
	corePlugins: { aspectRatio: false },
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')]
}
