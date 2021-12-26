import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaTiktok, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
	return (
		<>
			<footer className="upper-footer pt-2">
				<div className="container">
					<div className="d-flex justify-content-between align-items-center text-md-start text-center flex-md-row flex-column">
						<p className="pt-3">Fastest and most prestigious cars in Europe.</p>
						<div className="socials">
							<a href="https://www.facebook.com" target="_blank">
								{' '}
								<FaFacebookF />
							</a>
							<a href="https://www.twitter.com" target="_blank">
								<FaTwitter />
							</a>
							<a href="https://www.tiktok.com" target="_blank">
								<FaTiktok />
							</a>
							<a href="https://www.linkedin.com" target="_blank">
								<FaLinkedinIn />
							</a>
							<a href="https://www.instagram.com" target="_blank">
								<FaInstagram />
							</a>
						</div>
					</div>
				</div>
			</footer>
			<footer className="bottom-footer text-center py-1">
				<div className="container">
					&copy; 2021 Copyright <a href="#">CarRent.com</a>
				</div>
			</footer>
		</>
	)
}

export default Footer
