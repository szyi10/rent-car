import React from 'react'
import './Navbar.css'
import NavbarList from './NavbarList'

const Navbar = ({ isVisible }) => {
	return (
		<nav className={isVisible ? 'nav navbar-dark' : 'nav active navbar-dark'}>
			<div className="container d-flex align-items-center justify-content-between">
				<h1 className="logo">
					<a href="#">CarRent</a>
				</h1>
				<button
					className="navbar-toggler d-md-none order-2"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<NavbarList screenSize="md" />
			</div>
			<div className="collapse navbar-collapse" id="navbarNav">
				<div className="navbar-nav">
					<NavbarList screenSize="sm" />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
