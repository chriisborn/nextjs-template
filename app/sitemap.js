export default function SitemapGenerator() {
	const url = process.env.url

	return [
		{
			url,
			lastModified: new Date()
		}
		/*{
			url: `${url}/page`,
			lastModified: new Date()
		}*/
	]
}
