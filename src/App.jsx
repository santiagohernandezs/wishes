import '@/styles/App.scss'
import Countdown from 'react-countdown'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import LinkButton from './components/LinkButton'

function App() {
	const buttons = [
		{
			icon: <BsInstagram />,
			url: 'https://www.instagram.com/vwishes_/'
		},
		{
			icon: <BsWhatsapp />,
			url: 'https://www.instagram.com/vwishes_/'
		}
	]

	const Completionist = () => <span>Gracias por participar 🎉</span>

	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a complete state
			return <Completionist />
		} else {
			// Render a countdown
			return (
				<span>
					Faltan {days}d {hours}:{minutes}:{seconds} todavía tienes tiempo.
				</span>
			)
		}
	}

	return (
		<div className='app'>
			<section className='main'>
				<div className='main__title'>
					<h1 className='main__title--black'>Whishes</h1>
					<h1 className='main__title--white'>Whishes</h1>
				</div>
				<div className='main__counter'>
					<Countdown date={new Date('nov 20 2022')} renderer={renderer} />
				</div>
				<div className='main__buttons'>
					{buttons.map(button => (
						<LinkButton {...button} />
					))}
				</div>
			</section>
		</div>
	)
}

export default App
