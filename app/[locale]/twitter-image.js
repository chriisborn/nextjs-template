import { ImageResponse } from 'next/server'
import useDictionary from 'utilities/dictionary'

export const runtime = 'edge'
export const contentType = 'image/png'
export const size = {
	width: 1200,
	height: 630
}

export default async function TwitterImageGenerator({ params: { locale } }) {
	const dictionary = await useDictionary(locale)

	return new ImageResponse(
		(
			<div
				style={{
					background: '#222',
					color: '#eee',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: 20
				}}
			>
				<div
					style={{
						border: '2px dashed #444',
						borderRadius: 20,
						width: '100%',
						height: '100%',
						textAlign: 'center',
						fontSize: 26,
						lineHeight: 1.1,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<div style={{ fontSize: 42, marginBottom: 10 }}>{dictionary.title}</div>
					<div style={{ maxWidth: '65%', opacity: 0.6 }}>{dictionary.description}</div>
				</div>
			</div>
		),
		{ ...size }
	)
}
