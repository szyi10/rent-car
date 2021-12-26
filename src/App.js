import React, { useEffect, useState } from 'react'
import { Navbar, Footer } from './components'
import Main from './components/Main'

const App = () => {
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		window.addEventListener('scroll', listenToScroll)
		return () => {
			window.removeEventListener('scroll', listenToScroll)
		}
	})

	const listenToScroll = () => {
		let hieghtToHideFrom = 150
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop
		if (winScroll > hieghtToHideFrom) {
			isVisible && setIsVisible(false)
		} else {
			setIsVisible(true)
		}
	}

	return (
		<div className="App">
			<Navbar isVisible={isVisible} />
			<Main />
			<Footer />
		</div>
	)
}

export default App
