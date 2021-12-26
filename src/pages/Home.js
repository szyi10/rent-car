import React, { useState } from 'react'
import { Hero, About, CTA, Services, Contact, ToastNotification } from '../components'

const Home = () => {
	const [isShown, setIsShown] = useState(false)
	const [emailValue, setEmailValue] = useState('')

	const newsletterClicked = () => {
		setIsShown(true)
		setTimeout(() => setIsShown(false), 2000)
	}

	return (
		<div>
			<Hero />
			<About />
			<CTA newsletterClicked={newsletterClicked} setEmailValue={setEmailValue} />
			<Services />
			<Contact />
			{isShown && (
				<ToastNotification
					type={emailValue !== '' && emailValue.includes('@') ? 'success' : 'error'}
					message={emailValue !== '' && emailValue.includes('@') ? 'Your email has been saved' : 'Wrong email'}
				/>
			)}
		</div>
	)
}

export default Home
