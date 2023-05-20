module.exports = {
	/*assetPrefix:
		process.env.NODE_ENV === 'production' ? 'https://cdn.domain.com' : undefined,*/

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
				pathname: '/**'
			}
		]
	},

	reactStrictMode: true,
	trailingSlash: false,
	poweredByHeader: false,

	devIndicators: {
		buildActivity: false
	}
}
