export async function useDictionary(locale) {
	const dictionary = () =>
		import(`locales/${locale}.json`).then((module) => module.default)
	return dictionary()
}
