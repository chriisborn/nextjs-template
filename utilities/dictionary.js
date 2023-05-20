export default async function getDictionary(locale) {
	const dictionary = () =>
		import(`locales/${locale}.json`).then((module) => module.default)
	return dictionary()
}
