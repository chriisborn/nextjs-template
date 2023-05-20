import getDictionary from 'utilities/dictionary'

export default async function HomePage({ params: { locale } }) {
	const dictionary = await getDictionary(locale)

	return (
		<section className="max-w-xl h-full mx-auto flex items-center justify-center text-center p-6 leading-tight">
			<p className="font-thin text-xl opacity-50">{dictionary.description}</p>
		</section>
	)
}
