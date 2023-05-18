import { IconBrandGithub } from '@tabler/icons-react'
import Link from 'next/link'

export default function HomePage() {
	return (
		<div className="max-w-md h-full mx-auto flex flex-col space-y-4 items-center justify-center text-center p-6 leading-tight">
			<h1 className="font-semibold text-2xl">{process.env.appTitle}</h1>
			<p className="brightness-50 pb-2">{process.env.appDescription}</p>
			<Link
				href="https://github.com/chriisborn/nextjs-template"
				className="bg-zinc-50/20 p-2 rounded-full brightness-75 hover:brightness-90"
			>
				<IconBrandGithub size={18} />
			</Link>
		</div>
	)
}
