import Link from 'next/link'
import getDictionary from 'utilities/dictionary'

export default async function LocaleComponent({ locale }) {
	const locales = process.env.locales.split(',')
	const dictionary = await getDictionary(locale)

	return (
		<div className="font-semibold flex flex-row space-x-2">
			{locales.map((item, index) => (
				<Link
					key={index}
					href={item}
					className="text-xs py-1 px-2 opacity-70 hover:opacity-100"
				>
					{dictionary[item]}
				</Link>
			))}
		</div>
	)
}
