import React from 'react'
import './Hero.css'
import carBg from '../../assets/videos/carBg.mp4'

const Hero = () => {
	return (
		<div className="hero px-3">
			<video src={carBg} muted loop autoPlay></video>
			<div className="overlay" />

			<div className="hero-text">
				<h2>Welcome to CarRent</h2>
				<p>The best Car Rental in Europe with fastest and most prestigious cars.</p>
				<a href="#" className="hero-btn">
					Look for your dream car
				</a>
			</div>
		</div>
	)
}

export default Hero
