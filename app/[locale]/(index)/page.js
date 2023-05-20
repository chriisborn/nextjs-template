import { useDictionary } from 'utilities/dictionary'

export default async function HomePage({ params: { locale } }) {
	const dictionary = await useDictionary(locale)

	return (
		<section className="max-w-lg h-full mx-auto flex flex-col space-y-4 items-center justify-center text-center p-6 leading-tight">
			<h1 className="font-semibold text-2xl">{dictionary.title}</h1>
			<p className="opacity-60 pb-2">{dictionary.description}</p>
		</section>
	)
}
