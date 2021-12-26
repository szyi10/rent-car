import React from 'react'
import './About.css'
import cityDriver from '../../assets/images/city-driver.svg'

const About = () => {
	const AboutText = () => {
		return (
			<>
				<b>CarRent was established in 2010</b> when group of 3 friends intrested in motorization came up with the idea of starting their own business.
				At the end of 2009, they bought a small parking in Germany and 3 cars -{' '}
				<b>today we have at least one headquarters in every major European country and we offer over 400 diferent cars!</b>
			</>
		)
	}
	return (
		<div className="about">
			<div className="container py-5" id="about">
				<div className="row row-cols-1 row-cols-lg-2 text-lg-start text-center">
					<div className="col">
						<h1 className="text-start">About us</h1>
						<p className="fs-5">
							CarRent is the best Car Rental in Europe with fastest and most prestigious cars.{' '}
							<b>If you're looking for a great deal on a rental car</b>, look no further than CarRent. We have a full range of vehicles to choose
							from, <b>whether you need a compact car for a weekend getaway or a luxury sedan for an important business meeting</b>. Whether you're
							going on vacation or have business obligations, we've got you covered.
						</p>
						<p className="d-none d-lg-block fs-5">
							<AboutText />
						</p>
					</div>
					<div className="col">
						<img src={cityDriver} alt="city-driver" className="about-image pt-lg-0 pt-4" />
					</div>
					<p className="pt-4 d-block d-lg-none fs-5">
						<AboutText />
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
