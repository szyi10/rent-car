import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const NavbarList = ({ screenSize }) => {
	let hiddenScreenSize

	screenSize === 'md' ? (hiddenScreenSize = 'sm') : (hiddenScreenSize = 'md')

	return (
		<ul className={`${screenSize === 'md' ? 'd-md-flex d-none' : 'd-md-none d-flex flex-column'} align-items-center justify-content-center`}>
			<li className={screenSize === 'sm' ? 'mb-3' : ''}>
				<Link to="/#">Home</Link>
			</li>
			<li className={screenSize === 'sm' ? 'mb-3' : ''}>
				<Link to="/offer">Offer</Link>
			</li>
			<li className={screenSize === 'sm' ? 'mb-3' : ''}>
				<Link to="/#about">About</Link>
			</li>
			<li className={screenSize === 'sm' ? 'mb-3' : ''}>
				<Link to="/#services">Services</Link>
			</li>
			<li className={screenSize === 'sm' ? 'mb-3' : ''}>
				<Link to="/#contact">Contact</Link>
			</li>
		</ul>
	)
}

export default NavbarList
