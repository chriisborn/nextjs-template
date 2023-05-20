import Locale from 'components/locale'
import Logo from 'components/logo'

export default async function HeaderComponent({ locale }) {
	return (
		<header className="border-b border-solid dark:border-zinc-800 py-5">
			<div className="container max-w-7xl mx-auto px-6 flex items-center justify-between">
				<Logo
					locale={locale}
					link="https://github.com/chriisborn/nextjs-template"
					user="chriisborn"
				/>
				<Locale locale={locale} />
			</div>
		</header>
	)
}
