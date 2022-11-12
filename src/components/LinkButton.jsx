import '@/styles/LinkButton.scss'

export default function LinkButton({ icon, url }) {
	return (
		<div className='button'>
			<a href={url}>{icon}</a>
		</div>
	)
}
